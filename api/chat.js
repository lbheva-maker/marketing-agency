const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

function loadKnowledgeBase() {
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

const SYSTEM_PROMPT = `당신은 BH마케팅의 공식 AI 어시스턴트입니다. 아래 회사 자료를 바탕으로 고객 질문에 성실하고 친절하게 답변해 주세요.

답변 규칙:
- 자료에 없는 내용은 추측하거나 지어내지 마세요. "해당 내용은 추가 문의가 필요합니다"라고 안내하세요.
- 간결하고 명확하게 답변하되, 필요하면 자세히 설명해 주세요.
- 항상 한국어로 답변하세요.
- 마지막에 추가 문의가 있으면 말씀해달라고 안내하세요.

==== 회사 지식 베이스 ====
${loadKnowledgeBase()}
`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages 배열이 필요합니다.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API 키가 설정되지 않았습니다.' });
  }

  // 최근 10개 메시지만 유지 (sliding window)
  const recentMessages = messages.slice(-10);

  try {
    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      max_completion_tokens: 1000,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || '응답을 생성하지 못했습니다.';
    res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI error:', err.message, err.status, JSON.stringify(err.error));
    res.status(500).json({ error: err.message });
  }
};
