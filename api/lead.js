const { createClient } = require('@supabase/supabase-js');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body || {};
  if (!name && !email) {
    return res.status(400).json({ error: '이름 또는 이메일이 필요합니다.' });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return res.status(500).json({ error: 'Supabase 환경변수가 설정되지 않았습니다.' });
  }

  const supabase = createClient(url, key);
  const { error } = await supabase.from('leads').insert({ name, email, phone, message });

  if (error) {
    console.error('Lead insert error:', error.message);
    return res.status(500).json({ error: '저장 중 오류가 발생했습니다.' });
  }

  res.status(200).json({ success: true });
};
