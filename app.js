import { animate, stagger, createTimeline } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

/* helper — safe getElementById */
const el = id => document.getElementById(id);

fetch('content.json')
  .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(c => { populate(c); initProducts(c.products); initAnimations(); })
  .catch(err => console.error('content.json error:', err));

/* ═══════════════════════════════════════
   POPULATE — every text/image from JSON
═══════════════════════════════════════ */
function populate(c) {

  /* site */
  document.title                    = c.site.title;
  el('siteLogo').textContent        = c.site.logo;

  /* nav */
  el('navLinks').innerHTML = c.nav
    .map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('');

  /* hero */
  el('heroBadge').textContent       = c.hero.badge;
  el('heroLine1').textContent       = c.hero.title_line1;
  el('heroLine2').textContent       = c.hero.title_line2;
  el('heroSub').textContent         = c.hero.subtitle;
  el('heroCta').innerHTML           = `${c.hero.cta_text} <span class="arrow">→</span>`;
  el('heroStats').innerHTML         = c.hero.stats
    .map(s => `<div class="stat"><span class="stat-num">${s.number}</span><div class="stat-label">${s.label}</div></div>`)
    .join('');

  /* products header */
  el('productsLabel').textContent   = c.products.section_label;
  el('productsTitle').innerHTML     = `${c.products.section_title} <span>${c.products.section_title_highlight}</span>`;
  el('productsSub').textContent     = c.products.section_sub;
  el('searchInput').placeholder     = c.products.search_placeholder;
  el('noResults').textContent       = c.products.no_results;

  /* filter tabs */
  el('filterTabs').innerHTML = c.products.categories
    .map((cat, i) => `<button class="tab${i === 0 ? ' active' : ''}" data-cat="${cat.key}">${cat.label}</button>`)
    .join('');

  /* about */
  el('aboutLabel').textContent      = c.about.section_label;
  el('aboutTitle').innerHTML        = `${c.about.section_title} <span>${c.about.section_title_highlight}</span>`;
  el('aboutSub').textContent        = c.about.section_sub;
  el('aboutEmoji').textContent      = c.about.card_emoji;
  el('aboutCardTitle').textContent  = c.about.card_title;
  el('aboutCardText').textContent   = c.about.card_text;
  el('aboutChips').innerHTML        = c.about.chips
    .map(chip => `<div class="feature-chip">${chip}</div>`).join('');
  el('aboutList').innerHTML         = c.about.list
    .map(item => `<li><span class="icon">${item.icon}</span><div><strong>${item.title}</strong><span>${item.text}</span></div></li>`)
    .join('');

  /* contact */
  el('contactLabel').textContent    = c.contact.section_label;
  el('contactTitle').innerHTML      = `${c.contact.section_title} <span>${c.contact.section_title_highlight}</span>`;
  el('contactCards').innerHTML      = c.contact.cards.map(card => `
    <div class="contact-card">
      <div class="contact-icon">${card.icon}</div>
      <div>
        <h3>${card.label}</h3>
        ${card.link ? `<a href="${card.link}">${card.value}</a>` : `<p>${card.value}</p>`}
        ${card.link_text ? `<a href="${card.link}" target="_blank" style="font-size:.78rem;color:#a855f7;font-weight:500">${card.link_text}</a>` : ''}
      </div>
    </div>`).join('');
  el('mapEmbed').src                = c.contact.map_embed;

  /* footer */
  el('footerCopy').innerHTML        = c.footer.copy.replace('VC Gift World', '<span>VC Gift World</span>');
  el('footerTagline').textContent   = c.footer.tagline;
}

/* ═══════════════════════════════════════
   PRODUCTS — render / filter / search
═══════════════════════════════════════ */
function initProducts(p) {
  const grid     = el('productsGrid');
  const noRes    = el('noResults');
  const searchEl = el('searchInput');
  const clearBtn = el('searchClear');
  const CAT_MAP  = Object.fromEntries(p.categories.map(c => [c.key, c.label]));
  const FALLBACK = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop';
  let activeCat  = 'all';
  let term       = '';

  function render() {
    const q    = term.toLowerCase();
    const list = p.items.filter(item =>
      (activeCat === 'all' || item.cat === activeCat) &&
      (!q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q))
    );
    grid.innerHTML = '';
    noRes.classList.toggle('visible', list.length === 0);
    list.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'product-item';
      card.innerHTML = `
        <div class="product-image">
          <img src="${item.img}" alt="${item.name}" loading="lazy"
               onerror="this.onerror=null;this.src='${FALLBACK}'">
        </div>
        <div class="product-info">
          <span class="product-cat-badge">${CAT_MAP[item.cat] || item.cat}</span>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="product-footer">
            <span class="price">${item.price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>`;
      grid.appendChild(card);
      const styles = [
        { opacity:[0,1], scale:[0.78,1], translateY:[55,0] },
        { opacity:[0,1], scale:[0.84,1], translateX:[-45,0] },
        { opacity:[0,1], scale:[0.84,1], translateX:[45,0] },
      ];
      animate(card, { ...styles[i % 3], duration:520, delay: i * 35, easing:'easeOutExpo' });
      card.querySelector('.add-btn').addEventListener('click', function() {
        animate(this, { scale:[1,1.65,0.82,1], duration:500, easing:'easeOutElastic(1,.4)' });
      });
    });
  }

  el('filterTabs').addEventListener('click', e => {
    const t = e.target.closest('.tab');
    if (!t) return;
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    activeCat = t.dataset.cat;
    render();
  });

  searchEl.addEventListener('input', () => {
    term = searchEl.value;
    clearBtn.classList.toggle('visible', term.length > 0);
    render();
  });
  clearBtn.addEventListener('click', () => {
    searchEl.value = ''; term = '';
    clearBtn.classList.remove('visible');
    searchEl.focus(); render();
  });

  render();
}

/* ═══════════════════════════════════════
   ANIMATIONS
═══════════════════════════════════════ */
function initAnimations() {
  /* header */
  const header = el('header');
  window.addEventListener('scroll', () =>
    header.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

  /* hero timeline */
  const tl = createTimeline({ defaults: { easing: 'easeOutExpo' } });
  tl.add('#heroBadge',          { opacity:[0,1], scale:[0.4,1], duration:500 }, 150)
    .add('.hero-title .line-1', { opacity:[0,1], translateY:[70,0], duration:580 }, 350)
    .add('.hero-title .line-2', { opacity:[0,1], translateY:[70,0], duration:580 }, 470)
    .add('#heroTitle',          { opacity:1, duration:1 }, 340)
    .add('#heroSub',            { opacity:[0,1], filter:['blur(10px)','blur(0px)'], duration:600 }, 700)
    .add('#heroCta',            { opacity:[0,1], scale:[0.65,1], duration:500, easing:'easeOutBack(2)' }, 900)
    .add('.stat',               { opacity:[0,1], translateY:[28,0], delay:stagger(100), duration:450 }, 1050)
    .add('#heroStats',          { opacity:1, duration:1 }, 1040)
    .add('#scrollIndicator',    { opacity:[0,1], duration:400 }, 1550);

  /* orbs */
  animate('.orb-1', { translateY:[-28,28], duration:7000, loop:true, alternate:true, easing:'easeInOutSine' });
  animate('.orb-2', { translateX:[-18,18], translateY:[14,-14], duration:9000, loop:true, alternate:true, easing:'easeInOutSine' });
  animate('.orb-3', { scale:[0.88,1.12], duration:5500, loop:true, alternate:true, easing:'easeInOutSine' });

  /* intersection observer */
  function onEnter(sel, fn, thresh = 0.1) {
    const els = typeof sel === 'string' ? [...document.querySelectorAll(sel)] : [sel];
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { fn(e.target); io.unobserve(e.target); } });
    }, { threshold: thresh });
    els.forEach(x => io.observe(x));
  }

  onEnter('#productsLabel', el => animate(el, { opacity:[0,1], scale:[0.5,1], duration:500, easing:'easeOutBack(2)' }));
  onEnter('#productsTitle', el => animate(el, { opacity:[0,1], scale:[0.85,1], translateY:[20,0], duration:580, delay:80, easing:'easeOutExpo' }));
  onEnter('#productsSub',   el => animate(el, { opacity:[0,1], translateY:[15,0], duration:480, delay:160, easing:'easeOutCubic' }));

  onEnter('#aboutVisual', el => {
    animate(el, { opacity:[0,1], scale:[0.82,1], translateX:[-60,0], duration:720, easing:'easeOutExpo' });
    setTimeout(() => animate('.feature-chip', { opacity:[0,1], scale:[0.4,1], delay:stagger(65), duration:380, easing:'easeOutBack(2.5)' }), 280);
  });
  onEnter('#aboutText', el => {
    animate(el, { opacity:[0,1], scale:[0.88,1], translateX:[60,0], duration:720, easing:'easeOutExpo' });
    setTimeout(() => animate('.about-list li', { opacity:[0,1], scale:[0.9,1], translateY:[22,0], delay:stagger(90), duration:420, easing:'easeOutExpo' }), 180);
  });

  onEnter('#contactLabel',  el => animate(el, { opacity:[0,1], scale:[0.5,1], filter:['blur(8px)','blur(0px)'], duration:480, easing:'easeOutExpo' }));
  onEnter('#contactTitle',  el => animate(el, { opacity:[0,1], scale:[0.8,1], filter:['blur(6px)','blur(0px)'], duration:560, delay:90, easing:'easeOutExpo' }));
  onEnter('.contact-cards', () => animate('.contact-card', { opacity:[0,1], scale:[0.85,1], translateX:[-40,0], delay:stagger(130), duration:520, easing:'easeOutExpo' }));
  onEnter('.map-wrap',      el => animate(el, { opacity:[0,1], scale:[0.7,1], duration:680, easing:'easeOutExpo' }));

  /* nav active */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });
}
