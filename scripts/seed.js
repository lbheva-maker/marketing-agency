require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 50;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function chunkText(text, source) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const end = start + CHUNK_SIZE;
    chunks.push({ content: text.slice(start, end).trim(), source });
    start = end - CHUNK_OVERLAP;
  }
  return chunks.filter(c => c.content.length > 50);
}

async function embed(text) {
  const res = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return res.data[0].embedding;
}

async function seed() {
  const uploadsDir = path.join(__dirname, '../uploads');
  const files = fs.readdirSync(uploadsDir).filter(f => f.endsWith('.md'));

  console.log(`📂 ${files.length}개 파일 처리 시작\n`);

  // 기존 데이터 초기화
  await supabase.from('documents').delete().neq('id', 0);
  console.log('🗑️  기존 documents 초기화 완료\n');

  for (const file of files) {
    const text = fs.readFileSync(path.join(uploadsDir, file), 'utf-8');
    const chunks = chunkText(text, file);
    console.log(`📄 ${file} → ${chunks.length}개 청크`);

    for (let i = 0; i < chunks.length; i++) {
      const embedding = await embed(chunks[i].content);
      const { error } = await supabase.from('documents').insert({
        content: chunks[i].content,
        source: chunks[i].source,
        embedding,
      });
      if (error) console.error(`  ❌ 청크 ${i} 오류:`, error.message);
      else process.stdout.write('.');
    }
    console.log(' ✅');
  }

  console.log('\n🎉 시딩 완료!');
}

seed().catch(e => { console.error(e); process.exit(1); });
