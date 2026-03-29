/* VC Gift World — app.js
   Content is embedded here from content.json.
   To update any text/image, edit content.json and run: node sync-content.js
   OR just edit the CONTENT object below directly.
*/

const CONTENT = {
  site: { title: "VC Gift World \u2014 Toys, Games, Watches & Stationery", logo: "\uD83C\uDF81 VC Gift World" },
  nav: [
    { label: "Home",     href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About",    href: "#about" },
    { label: "Contact",  href: "#contact" }
  ],
  hero: {
    badge: "\u2728\u00A0 Premium Gift Store",
    title_line1: "Where Every Gift",
    title_line2: "Tells a Story",
    subtitle: "Board games, teddy bears, premium watches, stationery and unique gifts for every occasion.",
    cta_text: "Shop Now",
    stats: [
      { number: "200+", label: "Products" },
      { number: "5K+",  label: "Happy Kids" },
      { number: "10+",  label: "Years Open" }
    ]
  },
  products: {
    section_label: "Our Collection",
    section_title: "Handpicked",
    section_title_highlight: "Favourites",
    section_sub: "Games, watches, toys, stationery \u2014 something for everyone.",
    search_placeholder: "Search products\u2026",
    no_results: "No products found. Try a different search!",
    categories: [
      { key: "all",           label: "All" },
      { key: "games",         label: "\uD83C\uDFB2 Games" },
      { key: "toys",          label: "\uD83E\uDDF8 Toys" },
      { key: "stationery",    label: "\u270F\uFE0F Stationery" },
      { key: "watches-men",   label: "\u231A Men's Watches" },
      { key: "watches-women", label: "\uD83D\uDC9C Women's Watches" }
    ],
    items: [
      { id:1,  cat:"games",         name:"Monopoly Classic",       price:"\u20B9999",  desc:"Classic property trading game. Build houses and hotels!", img:"https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=400&fit=crop&auto=format" },
      { id:2,  cat:"games",         name:"Ludo King Board",        price:"\u20B9299",  desc:"Traditional Ludo for 2\u20134 players. Colorful and fun!",    img:"https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=400&fit=crop&auto=format" },
      { id:3,  cat:"games",         name:"Chess Board Set",        price:"\u20B9799",  desc:"Premium wooden chess set. Develop strategic thinking!",  img:"https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=400&fit=crop&auto=format" },
      { id:4,  cat:"games",         name:"Scrabble Junior",        price:"\u20B9899",  desc:"Word-building game for kids. Improve vocabulary!",        img:"https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=400&fit=crop&auto=format" },
      { id:5,  cat:"games",         name:"Snakes & Ladders",       price:"\u20B9199",  desc:"Classic board game. Fun for the entire family!",          img:"https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop&auto=format" },
      { id:6,  cat:"games",         name:"UNO Card Game",          price:"\u20B9299",  desc:"Fast-paced card game for family fun. Easy to learn!",     img:"https://images.unsplash.com/photo-1593814681464-eef5af2b0628?w=400&h=400&fit=crop&auto=format" },
      { id:7,  cat:"toys",          name:"Soft Teddy Bear",        price:"\u20B9599",  desc:"Adorable plush teddy bear. Super soft cuddle companion!", img:"https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&h=400&fit=crop&auto=format" },
      { id:8,  cat:"toys",          name:"Unicorn Plush Toy",      price:"\u20B9699",  desc:"Magical unicorn with rainbow mane. Kids all-time fave!",  img:"https://images.unsplash.com/photo-1602526430780-782d6b1783fa?w=400&h=400&fit=crop&auto=format" },
      { id:9,  cat:"toys",          name:"Baby Doll + Accessories",price:"\u20B9799",  desc:"Cute baby doll with bottle and clothes. Pretend play!",   img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop&auto=format" },
      { id:10, cat:"toys",          name:"Building Blocks 200+",   price:"\u20B91099", desc:"Colorful building blocks. Develop motor skills!",          img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop&auto=format" },
      { id:11, cat:"stationery",    name:"Crayon Set 24 Colors",   price:"\u20B9149",  desc:"Non-toxic wax crayons in vibrant colors. Young artists!", img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop&auto=format" },
      { id:12, cat:"stationery",    name:"Spiral Notebook Pack",   price:"\u20B9249",  desc:"5 colorful spiral notebooks, 200 ruled pages each.",      img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop&auto=format" },
      { id:13, cat:"stationery",    name:"Sketch Markers 36 Pack", price:"\u20B9449",  desc:"Dual-tip markers in assorted colors. Draw and color!",    img:"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=400&fit=crop&auto=format" },
      { id:14, cat:"stationery",    name:"Pencil Set + Eraser",    price:"\u20B999",   desc:"12 HB pencils with erasers. Smooth writing experience.",  img:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=400&fit=crop&auto=format" },
      { id:15, cat:"stationery",    name:"Geometry Box Set",       price:"\u20B9179",  desc:"Compass, protractor, rulers. Complete geometry kit.",      img:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop&auto=format" },
      { id:16, cat:"watches-men",   name:"Titan Edge Slim",        price:"\u20B92499", desc:"Ultra-slim stainless steel case. Minimalist dial for men.",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format" },
      { id:17, cat:"watches-men",   name:"Fastrack Chronograph",   price:"\u20B91899", desc:"Bold chronograph dial. Sports-ready with date window.",   img:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop&auto=format" },
      { id:18, cat:"watches-men",   name:"Casio G-Shock Style",    price:"\u20B93299", desc:"Rugged digital watch. Shock-resistant, water-resistant.", img:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&auto=format" },
      { id:19, cat:"watches-women", name:"Titan Raga Rose Gold",   price:"\u20B92999", desc:"Elegant rose gold bracelet watch. Slim crystal dial.",     img:"https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&auto=format" },
      { id:20, cat:"watches-women", name:"Fastrack Pastel Dial",   price:"\u20B91599", desc:"Trendy pastel dial with leather strap. Casual chic.",      img:"https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop&auto=format" },
      { id:21, cat:"watches-women", name:"Sonata Pearl Bracelet",  price:"\u20B92199", desc:"Pearl-accented bracelet watch. Elegant for every event.",  img:"https://images.unsplash.com/photo-1617625802912-cde586faf749?w=400&h=400&fit=crop&auto=format" }
    ]
  },
  about: {
    section_label: "Our Story",
    section_title: "More Than Just a",
    section_title_highlight: "Gift Shop",
    section_sub: "We believe every gift should spark joy, curiosity, and lasting memories.",
    card_emoji: "\uD83C\uDF81",
    card_title: "VC Gift World",
    card_text: "Your trusted neighbourhood gift store bringing smiles to children and families for over a decade.",
    chips: ["\uD83C\uDFB2 Board Games", "\uD83E\uDDF8 Plush Toys", "\u270F\uFE0F Stationery", "\u231A Watches", "\uD83E\uDDE9 Puzzles", "\uD83C\uDF81 Gift Sets"],
    list: [
      { icon: "\uD83C\uDFC6", title: "Quality Guaranteed",  text: "Every product carefully selected for safety and fun." },
      { icon: "\uD83D\uDC9D", title: "Every Occasion",      text: "Birthdays, festivals, school rewards \u2014 we have it all." },
      { icon: "\uD83C\uDF1F", title: "Trusted by Families", text: "Over 5,000 happy customers in our community." }
    ]
  },
  contact: {
    section_label: "Find Us",
    section_title: "Come",
    section_title_highlight: "Visit Us",
    cards: [
      { icon: "\uD83D\uDCCD", label: "LOCATION",    value: "VC Gift World",          link: "https://maps.app.goo.gl/K1qtXorcWopQk8Ur8", link_text: "View on Google Maps \u2192" },
      { icon: "\uD83D\uDCDE", label: "PHONE",       value: "07207038501",            link: "tel:07207038501", link_text: null },
      { icon: "\u23F0",       label: "STORE HOURS", value: "Mon \u2013 Sun | 9AM \u2013 8PM", link: null, link_text: null }
    ],
    map_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
  },
  footer: {
    copy: "\u00A9 2024 VC Gift World. All rights reserved.",
    tagline: "Making memories, one gift at a time \uD83C\uDF81"
  }
};

/* ── helpers ── */
const g = id => document.getElementById(id);
const { animate, stagger, createTimeline } = anime;

/* ── run on DOM ready ── */
document.addEventListener('DOMContentLoaded', function() {
  populate(CONTENT);
  initProducts(CONTENT.products);
  initAnimations();
});

/* ═══════════════════════════════════════
   POPULATE
═══════════════════════════════════════ */
function populate(c) {
  document.title                      = c.site.title;
  g('siteLogo').textContent           = c.site.logo;
  g('navLinks').innerHTML             = c.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('');
  g('heroBadge').textContent          = c.hero.badge;
  g('heroLine1').textContent          = c.hero.title_line1;
  g('heroLine2').textContent          = c.hero.title_line2;
  g('heroSub').textContent            = c.hero.subtitle;
  g('heroCta').innerHTML              = c.hero.cta_text + ' <span class="arrow">\u2192</span>';
  g('heroStats').innerHTML            = c.hero.stats.map(s =>
    `<div class="stat"><span class="stat-num">${s.number}</span><div class="stat-label">${s.label}</div></div>`).join('');
  g('productsLabel').textContent      = c.products.section_label;
  g('productsTitle').innerHTML        = c.products.section_title + ' <span>' + c.products.section_title_highlight + '</span>';
  g('productsSub').textContent        = c.products.section_sub;
  g('searchInput').placeholder        = c.products.search_placeholder;
  g('noResults').textContent          = c.products.no_results;
  g('filterTabs').innerHTML           = c.products.categories.map((cat, i) =>
    `<button class="tab${i===0?' active':''}" data-cat="${cat.key}">${cat.label}</button>`).join('');
  g('aboutLabel').textContent         = c.about.section_label;
  g('aboutTitle').innerHTML           = c.about.section_title + ' <span>' + c.about.section_title_highlight + '</span>';
  g('aboutSub').textContent           = c.about.section_sub;
  g('aboutEmoji').textContent         = c.about.card_emoji;
  g('aboutCardTitle').textContent     = c.about.card_title;
  g('aboutCardText').textContent      = c.about.card_text;
  g('aboutChips').innerHTML           = c.about.chips.map(ch => `<div class="feature-chip">${ch}</div>`).join('');
  g('aboutList').innerHTML            = c.about.list.map(item =>
    `<li><span class="icon">${item.icon}</span><div><strong>${item.title}</strong><span>${item.text}</span></div></li>`).join('');
  g('contactLabel').textContent       = c.contact.section_label;
  g('contactTitle').innerHTML         = c.contact.section_title + ' <span>' + c.contact.section_title_highlight + '</span>';
  g('contactCards').innerHTML         = c.contact.cards.map(card => `
    <div class="contact-card">
      <div class="contact-icon">${card.icon}</div>
      <div>
        <h3>${card.label}</h3>
        ${card.link ? `<a href="${card.link}">${card.value}</a>` : `<p>${card.value}</p>`}
        ${card.link_text ? `<a href="${card.link}" target="_blank" style="font-size:.78rem;color:#a855f7;font-weight:500">${card.link_text}</a>` : ''}
      </div>
    </div>`).join('');
  g('mapEmbed').src                   = c.contact.map_embed;
  g('footerCopy').innerHTML           = c.footer.copy.replace('VC Gift World', '<span>VC Gift World</span>');
  g('footerTagline').textContent      = c.footer.tagline;
}

/* ═══════════════════════════════════════
   PRODUCTS
═══════════════════════════════════════ */
function initProducts(p) {
  var grid     = g('productsGrid');
  var noRes    = g('noResults');
  var searchEl = g('searchInput');
  var clearBtn = g('searchClear');
  var CAT_MAP  = {};
  p.categories.forEach(function(c) { CAT_MAP[c.key] = c.label; });
  var FALLBACK = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop';
  var activeCat = 'all';
  var term = '';

  function render() {
    var q = term.toLowerCase();
    var list = p.items.filter(function(item) {
      return (activeCat === 'all' || item.cat === activeCat) &&
             (!q || item.name.toLowerCase().indexOf(q) > -1 || item.desc.toLowerCase().indexOf(q) > -1);
    });
    grid.innerHTML = '';
    noRes.classList.toggle('visible', list.length === 0);
    list.forEach(function(item, i) {
      var card = document.createElement('div');
      card.className = 'product-item';
      card.innerHTML =
        '<div class="product-image">' +
          '<img src="' + item.img + '" alt="' + item.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK + '\'">' +
        '</div>' +
        '<div class="product-info">' +
          '<span class="product-cat-badge">' + (CAT_MAP[item.cat] || item.cat) + '</span>' +
          '<h3>' + item.name + '</h3>' +
          '<p>' + item.desc + '</p>' +
          '<div class="product-footer">' +
            '<span class="price">' + item.price + '</span>' +
            '<button class="add-btn">+</button>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
      var styles = [
        { opacity:[0,1], scale:[0.78,1], translateY:[55,0] },
        { opacity:[0,1], scale:[0.84,1], translateX:[-45,0] },
        { opacity:[0,1], scale:[0.84,1], translateX:[45,0] }
      ];
      animate(card, Object.assign({}, styles[i % 3], { duration:520, delay: i * 35, easing:'easeOutExpo' }));
      card.querySelector('.add-btn').addEventListener('click', function() {
        animate(this, { scale:[1,1.65,0.82,1], duration:500, easing:'easeOutElastic(1, .4)' });
      });
    });
  }

  g('filterTabs').addEventListener('click', function(e) {
    var t = e.target.closest('.tab');
    if (!t) return;
    document.querySelectorAll('.tab').forEach(function(x) { x.classList.remove('active'); });
    t.classList.add('active');
    activeCat = t.dataset.cat;
    render();
  });
  searchEl.addEventListener('input', function() {
    term = searchEl.value;
    clearBtn.classList.toggle('visible', term.length > 0);
    render();
  });
  clearBtn.addEventListener('click', function() {
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
  var header = g('header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  var tl = createTimeline({ defaults: { easing: 'easeOutExpo' } });
  tl.add('#heroBadge',          { opacity:[0,1], scale:[0.4,1], duration:500 }, 150)
    .add('.hero-title .line-1', { opacity:[0,1], translateY:[70,0], duration:580 }, 350)
    .add('.hero-title .line-2', { opacity:[0,1], translateY:[70,0], duration:580 }, 470)
    .add('#heroTitle',          { opacity:1, duration:1 }, 340)
    .add('#heroSub',            { opacity:[0,1], duration:600 }, 700)
    .add('#heroCta',            { opacity:[0,1], scale:[0.65,1], duration:500, easing:'easeOutBack(2)' }, 900)
    .add('.stat',               { opacity:[0,1], translateY:[28,0], delay:stagger(100), duration:450 }, 1050)
    .add('#heroStats',          { opacity:1, duration:1 }, 1040)
    .add('#scrollIndicator',    { opacity:[0,1], duration:400 }, 1550);

  animate('.orb-1', { translateY:[-28,28], duration:7000, loop:true, alternate:true, easing:'easeInOutSine' });
  animate('.orb-2', { translateX:[-18,18], translateY:[14,-14], duration:9000, loop:true, alternate:true, easing:'easeInOutSine' });
  animate('.orb-3', { scale:[0.88,1.12], duration:5500, loop:true, alternate:true, easing:'easeInOutSine' });

  function onEnter(sel, fn, thresh) {
    thresh = thresh || 0.1;
    var els = typeof sel === 'string' ? Array.from(document.querySelectorAll(sel)) : [sel];
    if (!els.length) return;
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) { fn(e.target); io.unobserve(e.target); } });
    }, { threshold: thresh });
    els.forEach(function(x) { io.observe(x); });
  }

  onEnter('#productsLabel', function(el) { animate(el, { opacity:[0,1], scale:[0.5,1], duration:500, easing:'easeOutBack(2)' }); });
  onEnter('#productsTitle', function(el) { animate(el, { opacity:[0,1], scale:[0.85,1], translateY:[20,0], duration:580, delay:80, easing:'easeOutExpo' }); });
  onEnter('#productsSub',   function(el) { animate(el, { opacity:[0,1], translateY:[15,0], duration:480, delay:160, easing:'easeOutCubic' }); });
  onEnter('#aboutVisual', function(el) {
    animate(el, { opacity:[0,1], scale:[0.82,1], translateX:[-60,0], duration:720, easing:'easeOutExpo' });
    setTimeout(function() { animate('.feature-chip', { opacity:[0,1], scale:[0.4,1], delay:stagger(65), duration:380, easing:'easeOutBack(2.5)' }); }, 280);
  });
  onEnter('#aboutText', function(el) {
    animate(el, { opacity:[0,1], scale:[0.88,1], translateX:[60,0], duration:720, easing:'easeOutExpo' });
    setTimeout(function() { animate('.about-list li', { opacity:[0,1], scale:[0.9,1], translateY:[22,0], delay:stagger(90), duration:420, easing:'easeOutExpo' }); }, 180);
  });
  onEnter('#contactLabel',  function(el) { animate(el, { opacity:[0,1], scale:[0.5,1], duration:480, easing:'easeOutExpo' }); });
  onEnter('#contactTitle',  function(el) { animate(el, { opacity:[0,1], scale:[0.8,1], duration:560, delay:90, easing:'easeOutExpo' }); });
  onEnter('.contact-cards', function()   { animate('.contact-card', { opacity:[0,1], scale:[0.85,1], translateX:[-40,0], delay:stagger(130), duration:520, easing:'easeOutExpo' }); });
  onEnter('.map-wrap',      function(el) { animate(el, { opacity:[0,1], scale:[0.7,1], duration:680, easing:'easeOutExpo' }); });

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', function() {
    var cur = '';
    sections.forEach(function(s) { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navLinks.forEach(function(a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
  }, { passive: true });
}
