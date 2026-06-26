const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
const ws = require('ws');
const { createClient } = require('@supabase/supabase-js');

// ── 폴백: uploads/*.md 전체 주입 ───────────────────────────────
function loadFullKnowledge() {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  let knowledge = '';
  try {
    const files = fs.readdirSync(uploadsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(uploadsDir, file), 'utf-8');
      knowledge += `\n\n--- ${file} ---\n${content}`;
    }
  } catch (e) {
    console.error('Knowledge base load error:', e.message);
  }
  return knowledge;
}

// ── RAG: 질문 임베딩 → 유사도 검색 top 5 ────────────────────────
async function retrieveChunks(question, openai, supabase) {
  const embRes = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: question,
  });
  const embedding = embRes.data[0].embedding;

  const { data, error } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_count: 5,
  });

  if (error) throw new Error(error.message);
  return data || [];
}

// ── 대화 로그 (best-effort) ───────────────────────────────────
async function logChat(supabase, question, answer) {
  try {
    await supabase.from('chat_logs').insert({ question, answer });
  } catch (e) {
    console.error('chat_logs insert error:', e.message);
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages 배열이 필요합니다.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'OpenAI API 키가 설정되지 않았습니다.' });

  const recentMessages = messages.slice(-10);
  const userQuestion = [...recentMessages].reverse().find(m => m.role === 'user')?.content || '';

  const openai = new OpenAI({ apiKey });

  // Supabase 설정 여부 확인
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey, { realtime: { transport: ws } })
    : null;

  // 지식 베이스 구성 (RAG 우선, 폴백: 전체 파일)
  let knowledgeContext = '';
  let usedRag = false;

  if (supabase && userQuestion) {
    try {
      const chunks = await retrieveChunks(userQuestion, openai, supabase);
      if (chunks.length > 0) {
        knowledgeContext = chunks
          .map(c => `[${c.source}]\n${c.content}`)
          .join('\n\n---\n\n');
        usedRag = true;
      }
    } catch (e) {
      console.error('RAG error, falling back to full knowledge:', e.message);
    }
  }

  if (!usedRag) {
    knowledgeContext = loadFullKnowledge();
  }

  const systemPrompt = `당신은 BH마케팅의 공식 AI 어시스턴트입니다. 아래 회사 자료를 바탕으로 고객 질문에 성실하고 친절하게 답변해 주세요.

답변 규칙:
- 자료에 없는 내용은 추측하거나 지어내지 마세요. "해당 내용은 추가 문의가 필요합니다"라고 안내하세요.
- 간결하고 명확하게 답변하되, 필요하면 자세히 설명해 주세요.
- 항상 한국어로 답변하세요.
- 마지막에 추가 문의가 있으면 말씀해달라고 안내하세요.

==== 관련 자료 ====
${knowledgeContext}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...recentMessages,
      ],
      max_completion_tokens: 1000,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || '응답을 생성하지 못했습니다.';

    // 대화 로그 기록 (best-effort)
    if (supabase) logChat(supabase, userQuestion, reply);

    res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI error:', err.message);
    res.status(500).json({ error: '챗봇 응답 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' });
  }
};
