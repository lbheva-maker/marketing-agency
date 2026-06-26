require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');
const chatHandler = require('./api/chat');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/plain; charset=utf-8',
};

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // API 라우트
  if (req.url === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        req.body = JSON.parse(body);
      } catch {
        req.body = {};
      }
      const mockRes = {
        statusCode: 200,
        headers: {},
        status(code) { this.statusCode = code; return this; },
        setHeader(k, v) { this.headers[k] = v; },
        json(data) {
          res.writeHead(this.statusCode, { 'Content-Type': 'application/json', ...this.headers });
          res.end(JSON.stringify(data));
        },
      };
      await chatHandler(req, mockRes);
    });
    return;
  }

  // 정적 파일 서빙
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅ BH마케팅 서버 실행 중: http://localhost:${PORT}`);
  console.log(`📁 정적 파일 서빙: ${__dirname}`);
  console.log(`🔑 OpenAI API 키: ${process.env.OPENAI_API_KEY ? '설정됨 ✓' : '❌ 미설정 (.env 확인 필요)'}`);
});
