// VC Gift World — app.js
import { animate, stagger, createTimeline } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

/* ── HEADER ── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

/* ── HERO TIMELINE ── */
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

animate('.orb-1', { translateY:[-28,28], duration:7000, loop:true, alternate:true, easing:'easeInOutSine' });
animate('.orb-2', { translateX:[-18,18], translateY:[14,-14], duration:9000, loop:true, alternate:true, easing:'easeInOutSine' });
animate('.orb-3', { scale:[0.88,1.12], duration:5500, loop:true, alternate:true, easing:'easeInOutSine' });

/* ── INTERSECTION OBSERVER ── */
function onEnter(sel, fn, thresh = 0.1) {
    const els = typeof sel === 'string' ? [...document.querySelectorAll(sel)] : [sel];
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { fn(e.target); io.unobserve(e.target); } });
    }, { threshold: thresh });
    els.forEach(el => io.observe(el));
}

/* ── PRODUCTS DATA ── */
const PRODUCTS = [
  { id:1,  cat:'games',         name:'Monopoly Classic',        price:'₹999',  desc:'Classic property trading game. Build houses and hotels!',
    img:'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=400&fit=crop&auto=format' },
  { id:2,  cat:'games',         name:'Ludo King Board',         price:'₹299',  desc:'Traditional Ludo for 2–4 players. Colorful and fun!',
    img:'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=400&fit=crop&auto=format' },
  { id:3,  cat:'games',         name:'Chess Board Set',         price:'₹799',  desc:'Premium wooden chess set. Develop strategic thinking!',
    img:'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=400&fit=crop&auto=format' },
  { id:4,  cat:'games',         name:'Scrabble Junior',         price:'₹899',  desc:'Word-building game for kids. Improve vocabulary!',
    img:'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=400&fit=crop&auto=format' },
  { id:5,  cat:'games',         name:'Snakes & Ladders',        price:'₹199',  desc:'Classic board game. Fun for the entire family!',
    img:'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop&auto=format' },
  { id:6,  cat:'games',         name:'UNO Card Game',           price:'₹299',  desc:'Fast-paced card game for family fun. Easy to learn!',
    img:'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?w=400&h=400&fit=crop&auto=format' },
  { id:7,  cat:'toys',          name:'Soft Teddy Bear',         price:'₹599',  desc:'Adorable plush teddy bear. Super soft cuddle companion!',
    img:'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&h=400&fit=crop&auto=format' },
  { id:8,  cat:'toys',          name:'Unicorn Plush Toy',       price:'₹699',  desc:'Magical unicorn with rainbow mane. Kids all-time fave!',
    img:'https://images.unsplash.com/photo-1602526430780-782d6b1783fa?w=400&h=400&fit=crop&auto=format' },
  { id:9,  cat:'toys',          name:'Baby Doll + Accessories', price:'₹799',  desc:'Cute baby doll with bottle and clothes. Pretend play!',
    img:'https://images.unsplash.com/photo-1612200648900-b0a5e5e5e5e5?w=400&h=400&fit=crop&auto=format' },
  { id:10, cat:'toys',          name:'Building Blocks 200+',    price:'₹1099', desc:'Colorful building blocks. Develop motor skills!',
    img:'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop&auto=format' },
  { id:11, cat:'stationery',    name:'Crayon Set 24 Colors',    price:'₹149',  desc:'Non-toxic wax crayons in vibrant colors. Young artists!',
    img:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop&auto=format' },
  { id:12, cat:'stationery',    name:'Spiral Notebook Pack',    price:'₹249',  desc:'5 colorful spiral notebooks, 200 ruled pages each.',
    img:'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop&auto=format' },
  { id:13, cat:'stationery',    name:'Sketch Markers 36 Pack',  price:'₹449',  desc:'Dual-tip markers in assorted colors. Draw and color!',
    img:'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=400&fit=crop&auto=format' },
  { id:14, cat:'stationery',    name:'Pencil Set + Eraser',     price:'₹99',   desc:'12 HB pencils with erasers. Smooth writing experience.',
    img:'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=400&fit=crop&auto=format' },
  { id:15, cat:'stationery',    name:'Geometry Box Set',        price:'₹179',  desc:'Compass, protractor, rulers. Complete geometry kit.',
    img:'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop&auto=format' },
  { id:16, cat:'watches-men',   name:'Titan Edge Slim',         price:'₹2499', desc:'Ultra-slim stainless steel case. Minimalist dial for men.',
    img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format' },
  { id:17, cat:'watches-men',   name:'Fastrack Chronograph',    price:'₹1899', desc:'Bold chronograph dial. Sports-ready with date window.',
    img:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop&auto=format' },
  { id:18, cat:'watches-men',   name:'Casio G-Shock Style',     price:'₹3299', desc:'Rugged digital watch. Shock-resistant, water-resistant.',
    img:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&auto=format' },
  { id:19, cat:'watches-women', name:'Titan Raga Rose Gold',    price:'₹2999', desc:'Elegant rose gold bracelet watch. Slim crystal dial.',
    img:'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&auto=format' },
  { id:20, cat:'watches-women', name:'Fastrack Pastel Dial',    price:'₹1599', desc:'Trendy pastel dial with leather strap. Casual chic.',
    img:'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop&auto=format' },
  { id:21, cat:'watches-women', name:'Sonata Pearl Bracelet',   price:'₹2199', desc:'Pearl-accented bracelet watch. Elegant for every event.',
    img:'https://images.unsplash.com/photo-1617625802912-cde586faf749?w=400&h=400&fit=crop&auto=format' },
];

/* ── RENDER ── */
const grid     = document.getElementById('productsGrid');
const noRes    = document.getElementById('noResults');
const searchEl = document.getElementById('searchInput');
const clearBtn = document.getElementById('searchClear');
let activeCat  = 'all';
let searchTerm = '';

const CAT_LABELS = { games:'Games', toys:'Toys', stationery:'Stationery',
                     'watches-men':"Men's Watch", 'watches-women':"Women's Watch" };

function render() {
    const q = searchTerm.toLowerCase();
    const list = PRODUCTS.filter(p =>
        (activeCat === 'all' || p.cat === activeCat) &&
        (!q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    );
    grid.innerHTML = '';
    noRes.classList.toggle('visible', list.length === 0);
    list.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'product-item';
        card.innerHTML = `
            <div class="product-image">
                <img src="${p.img}" alt="${p.name}" loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop'">
            </div>
            <div class="product-info">
                <span class="product-cat-badge">${CAT_LABELS[p.cat] || p.cat}</span>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="product-footer">
                    <span class="price">${p.price}</span>
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

/* ── FILTER TABS ── */
document.getElementById('filterTabs').addEventListener('click', e => {
    const t = e.target.closest('.tab');
    if (!t) return;
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    activeCat = t.dataset.cat;
    render();
});

/* ── SEARCH ── */
searchEl.addEventListener('input', () => {
    searchTerm = searchEl.value;
    clearBtn.classList.toggle('visible', searchTerm.length > 0);
    render();
});
clearBtn.addEventListener('click', () => {
    searchEl.value = ''; searchTerm = '';
    clearBtn.classList.remove('visible');
    searchEl.focus(); render();
});

render();

/* ── SCROLL ANIMATIONS ── */
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

onEnter('#contactLabel',   el => animate(el, { opacity:[0,1], scale:[0.5,1], filter:['blur(8px)','blur(0px)'], duration:480, easing:'easeOutExpo' }));
onEnter('#contactTitle',   el => animate(el, { opacity:[0,1], scale:[0.8,1], filter:['blur(6px)','blur(0px)'], duration:560, delay:90, easing:'easeOutExpo' }));
onEnter('.contact-cards',  () => animate('.contact-card', { opacity:[0,1], scale:[0.85,1], translateX:[-40,0], delay:stagger(130), duration:520, easing:'easeOutExpo' }));
onEnter('.map-wrap',       el => animate(el, { opacity:[0,1], scale:[0.7,1], duration:680, easing:'easeOutExpo' }));

/* ── NAV ACTIVE ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });
