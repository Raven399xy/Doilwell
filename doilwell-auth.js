/* Doilwell account menu: shows the signed-in account name and a Sign out option in the nav of every page.
   Loaded after the Supabase UMD script (both with defer). Signed-out visitors see a Sign in link instead. */
(function () {
  if (!window.supabase) return;
  const SUPABASE_URL = 'https://clbxzcxgxxaaowvdkyus.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_cbWxLMFmFB44fh5YREfXdA_KsO7x_oq'; // publishable key: safe in the browser
  const LOGIN_URL = 'index.html';
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const css = document.createElement('style');
  css.textContent = `
    .dw-acct{position:relative}
    .dw-btn{display:flex;align-items:center;gap:8px;background:none;border:1px solid rgba(245,158,11,.35);padding:3px 10px 3px 3px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:#4a4030;transition:all .3s}
    .dark .dw-btn{color:#e8e4d8}
    .dw-btn:hover{border-color:#f59e0b;color:#f59e0b}
    .dw-ini{width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:#f59e0b;color:#0a0a08;font-weight:900}
    .dw-name{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .dw-menu{position:absolute;right:0;top:calc(100% + 10px);min-width:240px;background:#faf7f2;border:1px solid rgba(245,158,11,.3);padding:16px;box-shadow:0 20px 50px rgba(0,0,0,.2);z-index:60}
    .dark .dw-menu{background:#111109}
    .dw-menu[hidden]{display:none}
    .dw-sub{font-family:'Barlow Condensed',sans-serif;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:#7a6e56}
    .dark .dw-sub{color:#888070}
    .dw-who{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:1.2rem;text-transform:uppercase;color:#1a1710;word-break:break-word}
    .dark .dw-who{color:#f0ece0}
    .dw-mail{font-family:'Crimson Pro',serif;font-size:.95rem;color:#5a5040;word-break:break-all;margin-bottom:12px}
    .dark .dw-mail{color:#a8a090}
    .dw-out{width:100%;font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:.2em;font-size:.8rem;text-transform:uppercase;background:#f59e0b;color:#0a0a08;padding:10px;border:none;cursor:pointer;transition:background .3s}
    .dw-out:hover{background:#d97706}
    .dw-mrow{padding-bottom:16px;border-bottom:1px solid rgba(245,158,11,.2)}`;
  document.head.appendChild(css);

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const nameOf = u => (u.user_metadata && (u.user_metadata.full_name || u.user_metadata.name)) || (u.email || 'Account').split('@')[0];

  async function signOut() {
    try { await sb.auth.signOut(); } catch (e) {}
    // Tell the browser (Chrome and others) not to sign this user back in automatically
    try { await navigator.credentials.preventSilentAccess(); } catch (e) {}
    location.href = LOGIN_URL + '?signed_out=1';
  }

  let dLi, mLi;
  function render(user) {
    if (dLi) dLi.remove();
    if (mLi) mLi.remove();
    dLi = document.createElement('li');
    mLi = document.createElement('li');
    if (!user) {
      dLi.innerHTML = `<a href="${LOGIN_URL}" class="nav-link">Sign in</a>`;
      mLi.innerHTML = `<a href="${LOGIN_URL}" class="nav-link text-base">Sign in</a>`;
    } else {
      const name = nameOf(user), n = esc(name), e = esc(user.email || '');
      const card = `<p class="dw-sub">Signed in as</p><p class="dw-who">${n}</p><p class="dw-mail">${e}</p><button type="button" class="dw-out">Sign out</button>`;
      dLi.className = 'dw-acct';
      dLi.innerHTML = `<button type="button" class="dw-btn" aria-haspopup="true" aria-expanded="false"><span class="dw-ini">${esc(name.trim().charAt(0).toUpperCase() || '?')}</span><span class="dw-name">${n}</span><span aria-hidden="true">▾</span></button><div class="dw-menu" hidden>${card}</div>`;
      mLi.innerHTML = `<div class="dw-mrow">${card}</div>`;
      const btn = dLi.querySelector('.dw-btn'), menu = dLi.querySelector('.dw-menu');
      const toggle = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); };
      btn.addEventListener('click', ev => { ev.stopPropagation(); toggle(menu.hidden); });
      document.addEventListener('click', ev => { if (!dLi.contains(ev.target)) toggle(false); });
      document.addEventListener('keydown', ev => { if (ev.key === 'Escape') toggle(false); });
      dLi.querySelector('.dw-out').addEventListener('click', signOut);
      mLi.querySelector('.dw-out').addEventListener('click', signOut);
    }
    const desk = document.querySelector('nav ul.hidden');
    const mob = document.querySelector('nav .mobile-menu ul');
    if (desk) desk.appendChild(dLi);
    if (mob) mob.insertBefore(mLi, mob.firstChild);
  }

  sb.auth.onAuthStateChange((event, session) => render(session && session.user));
})();
