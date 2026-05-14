//-------------------------------------------------------------The COMEDY FACTORY---------------------------------------------------//


/* ============================================================
                          NAVBAR
   Handles: scroll shrink, hamburger menu, active link highlight
   ============================================================ */

(function () {
  'use strict';

  const navbar      = document.getElementById('navbar');
  const hamburger   = document.querySelector('.hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const navLinks    = document.querySelectorAll('.nav-links a');
  const sections    = document.querySelectorAll('section[id]');

  /* ---- Scroll: shrink navbar ---- */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 70);
  }
  

  
  /* ---- Hamburger toggle ---- */
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /* ---- Close mobile menu on link click ---- */
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---- Init ---- */
  window.addEventListener('scroll', onScroll, { passive: true });
  hamburger.addEventListener('click', toggleMobileMenu);

  // Close on any nav link inside mobile menu
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Initial call
  onScroll();
})();

/* ============================================================
                           SHOWS-DATA
   Central data store for all upcoming shows
   ============================================================ */

window.TCF = window.TCF || {};

window.TCF.showsData = [
  {
    id: 'show-01',
    day: 10,
    month: 'May',
    year: 2026,
    monthNum: 4,          // JS month index (0 = Jan)
    time: '7:30 PM',
    name: 'Open Mic Madness',
    artist: 'Multiple Artists',
    venue: 'The Comedy Den, Ahmedabad',
    city: 'Ahmedabad',
    tags: ['Open Mic', 'All Artists'],
    price: '₹299',
    emoji: '🎤',
    badge: 'This Weekend',
    badgeClass: 'green',
    description: 'The best open mic night in Gujarat returns! Watch fresh talent and seasoned pros battle it out for the biggest laughs.',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-02',
    day: 17,
    month: 'May',
    year: 2026,
    monthNum: 4,
    time: '8:00 PM',
    name: 'Standup Saturday',
    artist: 'Manan Desai & Chirayu Mistry',
    venue: 'Laughter House, Surat',
    city: 'Surat',
    tags: ['Standup', 'Live'],
    price: '₹499',
    emoji: '😂',
    badge: 'Selling Fast',
    badgeClass: 'red',
    description: 'A night of pure standup comedy featuring our founding duo. Expect cultural observations, relationship humor, and more.',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-03',
    day: 24,
    month: 'May',
    year: 2026,
    monthNum: 4,
    time: '7:00 PM',
    name: 'TCF Musical Night',
    artist: 'Full TCF Ensemble',
    venue: 'Nazaakat Hall, Vadodara',
    city: 'Vadodara',
    tags: ['Musical', 'Comedy'],
    price: '₹599',
    emoji: '🎵',
    badge: 'New Show',
    badgeClass: '',
    description: 'A unique fusion of music and comedy. Songs you love, jokes you didn\'t know you needed. A first-of-its-kind experience.',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-04',
    day: 31,
    month: 'May',
    year: 2026,
    monthNum: 4,
    time: '8:30 PM',
    name: 'Improv Unplugged',
    artist: 'Deep Vaidya & Om Bhatt',
    venue: 'Rangmanch Studio, Rajkot',
    city: 'Rajkot',
    tags: ['Improv', 'Interactive'],
    price: '₹349',
    emoji: '🎭',
    badge: 'Limited Seats',
    badgeClass: 'red',
    description: 'No scripts. No safety net. Pure improv comedy driven by YOU — the audience. Bring your craziest suggestions!',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-05',
    day: 7,
    month: 'Jun',
    year: 2026,
    monthNum: 5,
    time: '7:30 PM',
    name: 'Comedy Showcase',
    artist: 'Full TCF Ensemble',
    venue: 'Town Hall, Ahmedabad',
    city: 'Ahmedabad',
    tags: ['Showcase', 'Multiple Acts'],
    price: '₹399',
    emoji: '🌟',
    badge: 'Upcoming',
    badgeClass: '',
    description: 'The full Comedy Factory showcase — standup, improv, sketches, and musical moments all in one unmissable evening.',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-06',
    day: 14,
    month: 'Jun',
    year: 2026,
    monthNum: 5,
    time: '8:00 PM',
    name: 'Sketch Night Out',
    artist: 'Manan Desai & Ensemble',
    venue: 'NCPA, Mumbai',
    city: 'Mumbai',
    tags: ['Sketch', 'Touring Show'],
    price: '₹699',
    emoji: '🎨',
    badge: 'Tour Show',
    badgeClass: '',
    description: 'TCF takes Mumbai! Our celebrated sketch comedy show makes its Mumbai debut with brand-new material and surprises.',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-07',
    day: 19,
    month: 'Jun',
    year: 2026,
    monthNum: 5,
    time: '7:00 PM',
    name: 'Corporate Comedy Night',
    artist: 'Manan Desai',
    venue: 'Private Venue, Ahmedabad',
    city: 'Ahmedabad',
    tags: ['Corporate', 'Private'],
    price: '₹899',
    emoji: '🏢',
    badge: 'VIP Event',
    badgeClass: '',
    description: 'An exclusive corporate comedy evening. Clean, sharp, and perfectly tailored for professional audiences.',
    bookingUrl: '#',
    soldOut: false,
  },
  {
    id: 'show-08',
    day: 28,
    month: 'Jun',
    year: 2026,
    monthNum: 5,
    time: '8:30 PM',
    name: 'Midnight Laughs',
    artist: 'Chirayu Mistry & Guests',
    venue: 'Secret Venue, Ahmedabad',
    city: 'Ahmedabad',
    tags: ['Late Night', 'Special'],
    price: '₹449',
    emoji: '🌙',
    badge: 'Exclusive',
    badgeClass: 'red',
    description: 'A late-night comedy special with special mystery guests. The venue will only be revealed 24 hours before the show!',
    bookingUrl: '#',
    soldOut: false,
  },
];

/* ============================================================
                           SHOWS
   Renders show cards and the interactive calendar grid
   ============================================================ */

(function () {
  'use strict';

  const MONTH_NAMES = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const SHORT_MONTHS = [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec'
  ];

  // Today's reference date for the site
  const TODAY = new Date(2026, 4, 14); // 14 May 2026

  let currentYear  = TODAY.getFullYear();
  let currentMonth = TODAY.getMonth(); // 4 = May

  /* ---- Build a show card HTML ---- */
  function buildShowCard(show) {
    const badgeClass = show.badgeClass ? `show-badge ${show.badgeClass}` : 'show-badge';
    return `
      <div class="show-card fade-in" id="${show.id}">
        <div class="show-card-image">
          <div class="show-emoji">${show.emoji}</div>
          <div class="${badgeClass}">${show.badge}</div>
        </div>
        <div class="show-card-body">
          <div class="show-date-row">
            <div class="show-date-box">
              <div class="show-date-day">${show.day}</div>
              <div class="show-date-month">${show.month}</div>
            </div>
            <div class="show-time">🕐 ${show.time}</div>
          </div>
          <div class="show-name">${show.name}</div>
          <div class="show-venue">📍 ${show.venue}</div>
          <div class="show-tags">
            ${show.tags.map(t => `<span class="show-tag">${t}</span>`).join('')}
          </div>
          <div class="show-price-row">
            <div class="show-price-wrap">
              <div class="show-price">${show.price}</div>
              <div class="show-price-label">onwards per person</div>
            </div>
            <a href="${show.bookingUrl}" class="btn-book" target="_blank" rel="noopener">
              ${show.soldOut ? 'Sold Out' : 'Book Now'}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  /* ---- Render show cards ---- */
  function renderShowCards() {
    const grid = document.getElementById('showsCardsGrid');
    if (!grid) return;

    const filtered = window.TCF.showsData.filter(
      s => s.monthNum === currentMonth && s.year === currentYear
    );

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="shows-empty">No shows scheduled for this month. Check back soon! 🎤</div>`;
    } else {
      grid.innerHTML = filtered.map(buildShowCard).join('');
    }
  }

  /* ---- Render the monthly calendar grid ---- */
  function renderCalendar() {
    const grid       = document.getElementById('calGrid');
    const monthLabel = document.getElementById('calMonthLabel');
    if (!grid || !monthLabel) return;

    monthLabel.textContent = MONTH_NAMES[currentMonth] + ' ' + currentYear;

    const firstDay    = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Build map of day → show name for quick lookup
    const showMap = {};
    window.TCF.showsData
      .filter(s => s.monthNum === currentMonth && s.year === currentYear)
      .forEach(s => { showMap[s.day] = s; });

    let html = '';

    // Leading empty cells
    for (let i = 0; i < firstDay; i++) {
      html += '<div class="cal-cell empty"></div>';
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = (
        d === TODAY.getDate() &&
        currentMonth === TODAY.getMonth() &&
        currentYear === TODAY.getFullYear()
      );
      const show      = showMap[d];
      const hasShow   = !!show;
      const classes   = [
        'cal-cell',
        isToday  ? 'today'    : '',
        hasShow  ? 'has-show' : '',
      ].filter(Boolean).join(' ');

      html += `
        <div class="${classes}" ${hasShow ? `title="${show.name} — ${show.time}"` : ''}>
          <div class="cal-date">${d}</div>
          ${hasShow ? `<div class="cal-event-pill">${show.name}</div>` : ''}
        </div>
      `;
    }

    grid.innerHTML = html;
  }

  /* ---- Month navigation ---- */
  function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth > 11) { currentMonth = 0;  currentYear++;  }
    if (currentMonth < 0)  { currentMonth = 11; currentYear--;  }
    renderShowCards();
    renderCalendar();

    // Re-trigger fade-ins for new cards
    if (window.TCF && window.TCF.observeFadeIns) {
      window.TCF.observeFadeIns();
    }
  }

  /* ---- Expose to global scope for button onclick ---- */
  window.TCF.changeMonth = changeMonth;

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    renderShowCards();
    renderCalendar();
  });
})();

/* ============================================================
                           GALLERY
   Renders gallery masonry grid, filter tabs, and lightbox
   ============================================================ */

(function () {
  'use strict';

  /* ---- Gallery Data ---- */
  const galleryItems = [
    { h: 230, emoji: '🎤', label: 'Live Show', category: 'shows' },
    { h: 160, emoji: '😂', label: 'Open Mic Night', category: 'openmic' },
    { h: 200, emoji: '🎵', label: 'Musical Night', category: 'musical' },
    { h: 140, emoji: '🎭', label: 'Improv Session', category: 'improv' },
    { h: 190, emoji: '🌍', label: 'International Tour — UK', category: 'international' },
    { h: 160, emoji: '🎬', label: 'Sketch Night', category: 'shows' },
    { h: 200, emoji: '🏢', label: 'Corporate Event', category: 'corporate' },
    { h: 150, emoji: '🎉', label: 'Private Party', category: 'corporate' },
    { h: 180, emoji: '⭐', label: 'Special Guest — Zakir Khan', category: 'shows' },
    { h: 220, emoji: '🎙️', label: 'Recording Session', category: 'openmic' },
    { h: 165, emoji: '👏', label: 'Sold Out Crowd', category: 'shows' },
    { h: 195, emoji: '🎪', label: 'Comedy Festival', category: 'shows' },
    { h: 145, emoji: '🇦🇺', label: 'Australia Tour', category: 'international' },
    { h: 210, emoji: '🎸', label: 'TCF Musical — Vadodara', category: 'musical' },
    { h: 155, emoji: '🇨🇦', label: 'Canada Tour — Toronto', category: 'international' },
    { h: 175, emoji: '🕺', label: 'Sangeet Night', category: 'corporate' },
  ];

  const categories = ['all', 'shows', 'openmic', 'musical', 'improv', 'corporate', 'international'];
  const catLabels  = {
    all: 'All',
    shows: 'Live Shows',
    openmic: 'Open Mic',
    musical: 'Musical',
    improv: 'Improv',
    corporate: 'Corporate',
    international: 'International',
  };

  let activeCategory = 'all';

  /* ---- Render filter buttons ---- */
  function renderFilters() {
    const container = document.getElementById('galleryFilters');
    if (!container) return;
    container.innerHTML = categories.map(cat => `
      <button
        class="gallery-filter-btn ${cat === activeCategory ? 'active' : ''}"
        data-cat="${cat}"
      >${catLabels[cat]}</button>
    `).join('');

    container.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        activeCategory = this.dataset.cat;
        renderFilters();
        renderGallery();
      });
    });
  }

  /* ---- Render gallery grid ---- */
  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const filtered = activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeCategory);

    grid.innerHTML = filtered.map((item, i) => `
      <div class="gallery-item fade-in" data-index="${i}" data-label="${item.label}">
        <div class="gallery-placeholder" style="height:${item.h}px; font-size:${Math.round(item.h/3.5)}px;">
          ${item.emoji}
        </div>
        <div class="gallery-overlay">
          <div class="gallery-overlay-icon">🔍</div>
          <div class="gallery-overlay-label">${item.label}</div>
        </div>
      </div>
    `).join('');

    // Attach lightbox handlers
    grid.querySelectorAll('.gallery-item').forEach((el, i) => {
      el.addEventListener('click', () => openLightbox(filtered[i]));
    });

    if (window.TCF && window.TCF.observeFadeIns) {
      window.TCF.observeFadeIns();
    }
  }

  /* ---- Lightbox ---- */
  function openLightbox(item) {
    const overlay = document.getElementById('lightboxOverlay');
    if (!overlay) return;
    overlay.querySelector('.lightbox-emoji').textContent  = item.emoji;
    overlay.querySelector('.lightbox-title').textContent  = item.label;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    renderFilters();
    renderGallery();

    const overlay   = document.getElementById('lightboxOverlay');
    const closeBtn  = document.getElementById('lightboxClose');
    if (closeBtn)  closeBtn.addEventListener('click', closeLightbox);
    if (overlay)   overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });

    // Keyboard close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  });
})();


/* ============================================================
                           CONTACT
   Handles: form validation, submission, success state
   ============================================================ */

(function () {
  'use strict';

  const REQUIRED_FIELDS = ['contactName', 'contactEmail', 'contactPhone', 'contactMessage'];

  /* ---- Validate email format ---- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ---- Show field error ---- */
  function setError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.style.borderColor = '#e53935';
    // Remove old error label if any
    const existing = field.parentElement.querySelector('.field-error');
    if (existing) existing.remove();
    // Insert new one
    const err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'display:block; font-size:11px; color:#e53935; margin-top:5px; letter-spacing:0.5px;';
    err.textContent = msg;
    field.parentElement.appendChild(err);
  }

  /* ---- Clear field error ---- */
  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.style.borderColor = '';
    const existing = field.parentElement.querySelector('.field-error');
    if (existing) existing.remove();
  }

  /* ---- Validate form ---- */
  function validateForm() {
    let valid = true;

    REQUIRED_FIELDS.forEach(id => clearError(id));

    const name    = document.getElementById('contactName')?.value.trim();
    const email   = document.getElementById('contactEmail')?.value.trim();
    const phone   = document.getElementById('contactPhone')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || name.length < 2) {
      setError('contactName', 'Please enter your full name.');
      valid = false;
    }
    if (!email || !isValidEmail(email)) {
      setError('contactEmail', 'Please enter a valid email address.');
      valid = false;
    }
    if (!phone || phone.length < 6) {
      setError('contactPhone', 'Please enter a valid phone number.');
      valid = false;
    }
    if (!message || message.length < 10) {
      setError('contactMessage', 'Please tell us a bit more (at least 10 characters).');
      valid = false;
    }

    return valid;
  }

  /* ---- Handle submit ---- */
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const btn = document.getElementById('contactSubmitBtn');
    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled    = true;
    }

    // Simulate async send (replace with real fetch to backend/email service)
    setTimeout(function () {
      const form    = document.getElementById('contactFormEl');
      const success = document.getElementById('contactSuccess');
      if (form)    form.style.display    = 'none';
      if (success) success.classList.add('show');

      // Reset after a while (optional)
      setTimeout(function () {
        if (form)    { form.reset(); form.style.display = ''; }
        if (success) success.classList.remove('show');
        if (btn)     { btn.textContent = 'Send Enquiry →'; btn.disabled = false; }
      }, 8000);
    }, 1400);
  }

  /* ---- Real-time clear errors on input ---- */
  function attachLiveClear() {
    REQUIRED_FIELDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', () => clearError(id));
    });
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactFormEl');
    if (form) {
      form.addEventListener('submit', handleSubmit);
      attachLiveClear();
    }
  });
})();

/* ===============================================================================================================
                                                          ANIMATIONS
   Handles: scroll-triggered fade-ins, hero counter animation,parallax effects, smooth reveal orchestration
   =============================================================================================================== */

(function () {
  'use strict';

  window.TCF = window.TCF || {};

  /* ---- IntersectionObserver: fade-in elements ---- */
  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const siblings = entry.target.parentElement
          ? Array.from(entry.target.parentElement.querySelectorAll('.fade-in:not(.visible)'))
          : [];
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, Math.max(0, delay));
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeFadeIns() {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  // Expose so other modules can call after dynamic renders
  window.TCF.observeFadeIns = observeFadeIns;

  /* ---- Counter animation for hero stats ---- */
  function animateCounter(el, target, duration) {
    const start     = performance.now();
    const isInt     = Number.isInteger(target);
    const suffix    = el.dataset.suffix || '';
    const prefix    = el.dataset.prefix || '';

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = target * eased;
      el.textContent = prefix + (isInt ? Math.round(current) : current.toFixed(0)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseFloat(el.dataset.counter);
          animateCounter(el, target, 1800);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  /* ---- Subtle parallax on hero spotlight ---- */
  function initParallax() {
    const spotlight = document.querySelector('.hero-spotlight');
    if (!spotlight) return;

    document.addEventListener('mousemove', function (e) {
      const cx  = window.innerWidth  / 2;
      const cy  = window.innerHeight / 2;
      const dx  = (e.clientX - cx) / cx;   // -1 to 1
      const dy  = (e.clientY - cy) / cy;
      const x   = dx * 24;
      const y   = dy * 14;
      spotlight.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
    }, { passive: true });
  }

  /* ---- Page load: stagger reveal for hero elements ---- */
  function initHeroReveal() {
    const heroEls = document.querySelectorAll(
      '.hero-eyebrow, .hero-title, .hero-subtitle, .hero-btns'
    );
    heroEls.forEach(function (el, i) {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.75s ease ${i * 130 + 300}ms, transform 0.75s ease ${i * 130 + 300}ms`;
      // Trigger
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    observeFadeIns();
    initCounters();
    initParallax();
    initHeroReveal();
  });
})();

/* ==========================================================================
                               NEWSLETTER
   Handles footer newsletter signup with validation
   ========================================================================== */

(function () {
  'use strict';

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form  = e.currentTarget;
    const input = form.querySelector('.newsletter-input');
    const btn   = form.querySelector('.newsletter-submit');
    if (!input || !btn) return;

    const email = input.value.trim();

    if (!isValidEmail(email)) {
      input.style.borderColor = '#e53935';
      input.placeholder = 'Enter a valid email!';
      setTimeout(() => {
        input.style.borderColor = '';
        input.placeholder = 'your@email.com';
      }, 2200);
      return;
    }

    // Simulate API call
    btn.textContent = '✓';
    btn.style.background = '#43a047';
    input.value = '';
    input.placeholder = 'You\'re subscribed! 🎉';
    input.disabled = true;

    setTimeout(() => {
      btn.textContent = '→';
      btn.style.background = '';
      input.placeholder = 'your@email.com';
      input.disabled = false;
    }, 5000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.newsletter-form').forEach(function (form) {
      form.addEventListener('submit', handleNewsletterSubmit);
    });
  });
})();
