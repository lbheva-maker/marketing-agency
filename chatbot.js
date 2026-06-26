(function () {
  'use strict';

  const ACCENT = '#F06225';
  const NAVY = '#1B2F5E';
  const BLUE = '#2C5299';
  const WELCOME_DELAY = 1000;
  const MAX_HISTORY = 10;

  let history = [];
  let isOpen = false;
  let isLoading = false;

  // ── 스타일 주입 ──────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #bh-chat-widget * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Pretendard', 'Noto Sans KR', sans-serif; }

    #bh-chat-btn {
      position: fixed; bottom: 28px; right: 28px; z-index: 9998;
      width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer;
      background: ${ACCENT}; color: #fff; font-size: 28px;
      box-shadow: 0 4px 20px rgba(240,98,37,.45);
      display: flex; align-items: center; justify-content: center;
      transition: transform .2s, box-shadow .2s;
    }
    #bh-chat-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(240,98,37,.55); }

    #bh-chat-box {
      position: fixed; bottom: 100px; right: 28px; z-index: 9999;
      width: 360px; max-width: calc(100vw - 40px);
      background: #fff; border-radius: 18px;
      box-shadow: 0 8px 40px rgba(27,47,94,.18);
      display: flex; flex-direction: column; overflow: hidden;
      transform: translateY(20px) scale(.97); opacity: 0;
      pointer-events: none;
      transition: transform .25s cubic-bezier(.34,1.56,.64,1), opacity .2s;
    }
    #bh-chat-box.open {
      transform: translateY(0) scale(1); opacity: 1; pointer-events: auto;
    }

    #bh-chat-header {
      background: linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%);
      color: #fff; padding: 14px 18px;
      display: flex; align-items: center; gap: 10px;
    }
    #bh-chat-header .avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: ${ACCENT}; display: flex; align-items: center; justify-content: center;
      font-size: 18px; flex-shrink: 0;
    }
    #bh-chat-header .info { flex: 1; }
    #bh-chat-header .name { font-size: 15px; font-weight: 700; }
    #bh-chat-header .status { font-size: 12px; opacity: .75; margin-top: 1px; }
    #bh-chat-close {
      background: none; border: none; color: #fff; font-size: 22px;
      cursor: pointer; line-height: 1; opacity: .8; padding: 2px;
    }
    #bh-chat-close:hover { opacity: 1; }

    #bh-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px;
      display: flex; flex-direction: column; gap: 10px;
      min-height: 260px; max-height: 360px;
      background: #f7f8fc;
    }
    #bh-chat-messages::-webkit-scrollbar { width: 4px; }
    #bh-chat-messages::-webkit-scrollbar-thumb { background: #dde; border-radius: 2px; }

    .bh-msg {
      max-width: 82%; padding: 10px 14px; border-radius: 14px;
      font-size: 14px; line-height: 1.55; word-break: keep-all;
      animation: bh-fadein .2s ease;
    }
    @keyframes bh-fadein { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
    .bh-msg.bot { background: #fff; color: #222; border-bottom-left-radius: 4px; box-shadow: 0 1px 4px rgba(0,0,0,.07); align-self: flex-start; }
    .bh-msg.user { background: ${ACCENT}; color: #fff; border-bottom-right-radius: 4px; align-self: flex-end; }

    .bh-dots { display: flex; align-items: center; gap: 5px; padding: 12px 14px; }
    .bh-dots span {
      width: 7px; height: 7px; background: #aab; border-radius: 50%;
      animation: bh-bounce .9s infinite;
    }
    .bh-dots span:nth-child(2) { animation-delay: .15s; }
    .bh-dots span:nth-child(3) { animation-delay: .3s; }
    @keyframes bh-bounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }

    #bh-chat-input-row {
      display: flex; gap: 8px; padding: 12px 14px;
      border-top: 1px solid #eee; background: #fff;
    }
    #bh-chat-input {
      flex: 1; border: 1.5px solid #dde; border-radius: 10px;
      padding: 9px 12px; font-size: 14px; outline: none;
      color: #222; background: #fafbff; resize: none; height: 42px;
      transition: border-color .2s;
    }
    #bh-chat-input:focus { border-color: ${ACCENT}; }
    #bh-chat-send {
      width: 42px; height: 42px; border-radius: 10px; border: none;
      background: ${ACCENT}; color: #fff; font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .2s, transform .15s;
      flex-shrink: 0;
    }
    #bh-chat-send:hover { background: #d4521a; transform: scale(1.05); }
    #bh-chat-send:disabled { background: #ccc; transform: none; cursor: default; }

    @media (max-width: 480px) {
      #bh-chat-box { right: 12px; bottom: 90px; width: calc(100vw - 24px); }
      #bh-chat-btn { right: 16px; bottom: 16px; width: 54px; height: 54px; font-size: 24px; }
    }
  `;
  document.head.appendChild(style);

  // ── DOM 생성 ─────────────────────────────────────────────────
  const widget = document.createElement('div');
  widget.id = 'bh-chat-widget';
  widget.innerHTML = `
    <button id="bh-chat-btn" aria-label="챗봇 열기">💬</button>
    <div id="bh-chat-box" role="dialog" aria-label="BH마케팅 챗봇">
      <div id="bh-chat-header">
        <div class="avatar">🤖</div>
        <div class="info">
          <div class="name">BH마케팅 AI 어시스턴트</div>
          <div class="status">온라인 · 빠른 응답</div>
        </div>
        <button id="bh-chat-close" aria-label="닫기">×</button>
      </div>
      <div id="bh-chat-messages"></div>
      <div id="bh-chat-input-row">
        <textarea id="bh-chat-input" placeholder="궁금한 점을 입력하세요…" rows="1"></textarea>
        <button id="bh-chat-send" aria-label="전송">➤</button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  const btn = document.getElementById('bh-chat-btn');
  const box = document.getElementById('bh-chat-box');
  const closeBtn = document.getElementById('bh-chat-close');
  const messagesEl = document.getElementById('bh-chat-messages');
  const input = document.getElementById('bh-chat-input');
  const sendBtn = document.getElementById('bh-chat-send');

  // ── 헬퍼 ─────────────────────────────────────────────────────
  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addMessage(text, role) {
    const el = document.createElement('div');
    el.className = `bh-msg ${role}`;
    el.textContent = text;
    messagesEl.appendChild(el);
    scrollToBottom();
    return el;
  }

  function showDots() {
    const el = document.createElement('div');
    el.className = 'bh-msg bot bh-dots';
    el.id = 'bh-loading-dots';
    el.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function removeDots() {
    const el = document.getElementById('bh-loading-dots');
    if (el) el.remove();
  }

  function setLoading(val) {
    isLoading = val;
    sendBtn.disabled = val;
    input.disabled = val;
  }

  // ── 개폐 ─────────────────────────────────────────────────────
  function openChat() {
    isOpen = true;
    box.classList.add('open');
    btn.textContent = '✕';
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    box.classList.remove('open');
    btn.textContent = '💬';
  }

  btn.addEventListener('click', () => (isOpen ? closeChat() : openChat()));
  closeBtn.addEventListener('click', closeChat);

  // ── 환영 메시지 ──────────────────────────────────────────────
  setTimeout(() => {
    addMessage('안녕하세요! 👋 BH마케팅 AI 어시스턴트입니다. 서비스, 요금, 사례 등 무엇이든 물어보세요!', 'bot');
  }, WELCOME_DELAY);

  // ── 메시지 전송 ──────────────────────────────────────────────
  async function sendMessage() {
    const text = input.value.trim();
    if (!text || isLoading) return;

    input.value = '';
    input.style.height = 'auto';
    addMessage(text, 'user');

    history.push({ role: 'user', content: text });
    if (history.length > MAX_HISTORY) history = history.slice(-MAX_HISTORY);

    setLoading(true);
    showDots();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      removeDots();

      if (!res.ok || data.error) {
        addMessage(data.error || '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.', 'bot');
      } else {
        addMessage(data.reply, 'bot');
        history.push({ role: 'assistant', content: data.reply });
        if (history.length > MAX_HISTORY) history = history.slice(-MAX_HISTORY);
      }
    } catch (e) {
      removeDots();
      addMessage('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.', 'bot');
    } finally {
      setLoading(false);
      input.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  // 자동 높이 조절
  input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  });
})();
