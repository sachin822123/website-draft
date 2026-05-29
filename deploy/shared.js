/* Kindling — shared header + mega-menu + scroll behavior.
   Injects the site nav into <div id="k-header-mount" data-mode="..." data-active="..."></div>.
   Modes: "light" (default), "on-ember", "on-ink".
*/
(function () {

  const headerHTML = ({ mode, active }) => `
  <header class="k-header ${mode === 'on-ember' ? 'on-ember' : ''} ${mode === 'on-ink' ? 'on-ink' : ''}" data-mode="${mode}">
    <div class="k-header-inner">
      <a class="k-brand" href="index.html" aria-label="Kindling home">
        Kindling
      </a>
      <nav class="k-nav" aria-label="Primary">
        <button class="k-nav-item ${active === 'product' ? 'is-current' : ''}" data-megamenu-trigger="mm-product" aria-haspopup="true" aria-expanded="false">
          Product
          <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <a class="k-nav-item ${active === 'how' ? 'is-current' : ''}" href="how-it-works.html">How it works</a>
        <a class="k-nav-item ${active === 'customers' ? 'is-current' : ''}" href="customers.html">Customers</a>
        <a class="k-nav-item ${active === 'pricing' ? 'is-current' : ''}" href="offerings.html">Pricing</a>
      </nav>
      <div class="k-header-actions">
        <a class="k-link" href="#login">Log in</a>
        <a class="k-btn k-btn--primary k-btn--sm" href="#book">Start building trust</a>
      </div>
    </div>

    <div class="k-megamenu-wrap">
      <div class="k-megamenu" id="mm-product" role="menu" aria-label="Product">
        <div class="k-megamenu-col">
          <div class="k-megamenu-group">
            <h4>Intelligence · the brain</h4>
            <a class="k-megamenu-link" href="product.html#market-map">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20 3 17V4l6 3"/><path d="m9 20 6-3"/><path d="M15 17V4l6 3v13l-6-3Z"/><path d="M9 7v13"/><path d="m15 4-6 3"/></svg></span>
              <span class="t"><b>Market Map</b><span>20–500 people, accounts, competitors, lighthouses.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#strategy">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span>
              <span class="t"><b>Strategy &amp; belief gaps</b><span>What the right people need to believe to choose you.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#weekly-loop">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/></svg></span>
              <span class="t"><b>Weekly Loop</b><span>What we're doing, who moved, what we learned.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#signal">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h3l2-7 4 14 3-10 2 5h6"/></svg></span>
              <span class="t"><b>Signal &amp; Learning</b><span>Named-person movement. Not vanity metrics.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#next-best-actions">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/><circle cx="6" cy="6" r="1.5"/><circle cx="6" cy="18" r="1.5"/></svg></span>
              <span class="t"><b>Next Best Actions</b><span>What to do this week, ranked by movement.</span></span>
            </a>
          </div>
        </div>

        <div class="k-megamenu-col">
          <div class="k-megamenu-group">
            <h4>Execution · the work</h4>
            <a class="k-megamenu-link" href="product.html#founder-content">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h7v7"/><path d="M21 3 10 14"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg></span>
              <span class="t"><b>Founder content</b><span>Essays, posts, scripts — in your voice.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#video">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="m17 10 5-3v10l-5-3Z"/></svg></span>
              <span class="t"><b>Video production</b><span>Videographers, editors, motion — the best ones.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#stories">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9 8.5 8.5 0 0 1 8.5 8.5Z"/></svg></span>
              <span class="t"><b>Customer stories</b><span>The stories your buyers actually believe.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#launches">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 9.5 19 5l-1 6-4.5-1.5Z"/><path d="M9.5 14.5 5 19l6-1-1.5-4Z"/><path d="m13 11-2 2"/><path d="M19 5c-3 6-6 9-12 12"/></svg></span>
              <span class="t"><b>Launches &amp; events</b><span>Moments your market can't ignore.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#lighthouse">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3"/><path d="M5 22h14"/><path d="M8 22 9 8h6l1 14"/><circle cx="12" cy="7" r="2"/></svg></span>
              <span class="t"><b>Lighthouse plays</b><span>Get the brands that move others to back you.</span></span>
            </a>
            <a class="k-megamenu-link" href="product.html#relationship">
              <span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <span class="t"><b>Relationship &amp; sales</b><span>Warm follow-ups tied to named-person movement.</span></span>
            </a>
          </div>
        </div>

        <div class="k-megamenu-col">
          <a class="k-megamenu-feature is-ember" href="#story">
            <div class="body-wrap">
              <div class="eyebrow">Customer story</div>
              <div>
                <h5>How a Series A founder went from cold to <em style="font-family:var(--font-display);font-weight:400">named</em> with the eight buyers who mattered — in 11 weeks.</h5>
                <div class="arrow-btn">Read the story →</div>
              </div>
            </div>
          </a>
          <a class="k-megamenu-feature" href="#demo" style="aspect-ratio: 4 / 2.4;">
            <div style="position:absolute;inset:0;background:linear-gradient(135deg,var(--plum-500),var(--ink-900));"></div>
            <div class="bg"></div>
            <div class="body">
              <div class="eyebrow">Working session</div>
              <h5>60-min walkthrough of your live Market Map.</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
  <div class="k-megamenu-scrim"></div>
  `;

  function markSVG(mode) { return ''; }

  // Mount header
  const mount = document.querySelector('#k-header-mount');
  if (mount) {
    const mode = mount.dataset.mode || 'light';
    const active = mount.dataset.active || '';
    mount.outerHTML = headerHTML({ mode, active });
  }

  // Mount footer
  const footerMount = document.querySelector('#k-footer-mount');
  if (footerMount) {
    footerMount.outerHTML = `
    <footer class="k-footer">
      <div class="k-footer-inner">
        <div class="k-footer-brand">
          <div class="mark">
            Kindling
          </div>
          <p>Organic GTM for B2B companies that can't afford to let their category form without them. We map who matters, decide what they need to believe, and run the weekly loop to move them.</p>
        </div>
        <div class="k-footer-col">
          <h6>Product</h6>
          <ul>
            <li><a href="product.html#intelligence">Intelligence</a></li>
            <li><a href="product.html#execution">Execution</a></li>
            <li><a href="product.html#market-map">Market Map</a></li>
            <li><a href="product.html#weekly-loop">Weekly Loop</a></li>
            <li><a href="product.html#signal">Signal &amp; Learning</a></li>
          </ul>
        </div>
        <div class="k-footer-col">
          <h6>Company</h6>
          <ul>
            <li><a href="how-it-works.html">How it works</a></li>
            <li><a href="customers.html">Customers</a></li>
            <li><a href="offerings.html">Pricing</a></li>
            <li><a href="manifesto.html">Manifesto</a></li>
            <li><a href="#book">Working session</a></li>
          </ul>
        </div>
        <div class="k-footer-col">
          <h6>Kindling</h6>
          <ul>
            <li><a href="manifesto.html">Manifesto</a></li>
            <li><a href="customers.html">Customer stories</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="k-footer-bottom">
        <span>© 2026 Kindling · Organic GTM, run like a system.</span>
        <span>Built warm, in Sydney, San Francisco and New York.</span>
      </div>
    </footer>`;
  }

  // ===== Behaviors =====
  const header = document.querySelector('.k-header');
  const scrim = document.querySelector('.k-megamenu-scrim');
  const menus = document.querySelectorAll('.k-megamenu');
  const triggers = document.querySelectorAll('[data-megamenu-trigger]');

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  let openMenu = null;
  let closeTimer = null;

  function openOne(targetId) {
    clearTimeout(closeTimer);
    menus.forEach(m => {
      if (m.id === targetId) m.classList.add('is-open');
      else m.classList.remove('is-open');
    });
    triggers.forEach(t => {
      t.setAttribute('aria-expanded', t.dataset.megamenuTrigger === targetId ? 'true' : 'false');
    });
    if (scrim) scrim.classList.add('is-open');
    openMenu = targetId;
  }
  function closeAll(immediate) {
    const doClose = () => {
      menus.forEach(m => m.classList.remove('is-open'));
      triggers.forEach(t => t.setAttribute('aria-expanded', 'false'));
      if (scrim) scrim.classList.remove('is-open');
      openMenu = null;
    };
    if (immediate) doClose();
    else closeTimer = setTimeout(doClose, 120);
  }

  triggers.forEach(t => {
    const id = t.dataset.megamenuTrigger;
    t.addEventListener('mouseenter', () => openOne(id));
    t.addEventListener('focus', () => openOne(id));
    t.addEventListener('click', (e) => {
      e.preventDefault();
      if (openMenu === id) closeAll(true);
      else openOne(id);
    });
    t.addEventListener('mouseleave', () => closeAll(false));
  });

  menus.forEach(m => {
    m.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    m.addEventListener('mouseleave', () => closeAll(false));
  });

  if (scrim) scrim.addEventListener('click', () => closeAll(true));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll(true);
  });
})();
