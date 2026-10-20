/**
 * MUKAROMAH PERSONAL PORTFOLIO — INTERACTION ARCHITECTURE
 * Aesthetic: Blue Hour Horizon
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PROJECT DATA DICTIONARY
  const projectsData = {
    spektrum: {
      title: 'Spektrum Teknologi',
      subtitle: 'Company Profile Website',
      category: 'Web Architecture & Corporate UI',
      status: 'Production Ready',
      role: 'Web Developer & Information Architect',
      tags: ['HTML5 / Semantic CSS', 'Responsive Layout', 'Corporate Branding', 'Performance Optimization'],
      bannerGradient: 'linear-gradient(135deg, #0F1E36 0%, #1A3460 60%, #2A4F8C 100%)',
      description: 'Spektrum Teknologi required a dependable and modern digital showcase to present corporate solutions, institutional competencies, and service offerings. The platform was structured with semantic clarity, high-contrast readability, and responsive modular components to ensure seamless accessibility across enterprise desktop and mobile environments.',
      highlights: [
        'Crafted a structured, multi-tier service hierarchy tailored for corporate inquiries.',
        'Engineered responsive layouts with optimized asset delivery and zero layout shifts.',
        'Implemented semantic HTML5 markup compliant with modern web accessibility guidelines.',
        'Configured clean contact endpoints and direct client communication channels.'
      ]
    },
    eksas: {
      title: 'Eksas Bakes',
      subtitle: 'Artisanal Bakery Showcase & Order System',
      category: 'Commerce & Product Showcase',
      status: 'Client Showcase',
      role: 'Frontend Designer & Developer',
      tags: ['Visual Storytelling', 'Product Catalog', 'Interactive UI', 'Order Flow Routing'],
      bannerGradient: 'linear-gradient(135deg, #1D2E4A 0%, #2F4770 50%, #466394 100%)',
      description: 'Eksas Bakes is an artisanal bakery brand requiring an aesthetic digital portfolio and seasonal catalog. The interface balances warm, appetizing visual storytelling with an efficient product selection experience, enabling customers to browse handcrafted baked goods, inspect ingredients, and initiate orders seamlessly.',
      highlights: [
        'Developed an interactive product filtering system for daily and seasonal bakery items.',
        'Structured clear pricing, allergen notes, and serving recommendations for each product.',
        'Integrated a frictionless inquiry flow directly connecting buyers with bakery staff.',
        'Optimized imagery presentation for rapid loading on mobile browsers.'
      ]
    },
    airquality: {
      title: 'Air Quality Telemetry',
      subtitle: 'Mobile Environmental Monitoring Application',
      category: 'Mobile & IoT Systems',
      status: 'Hardware & Mobile Prototype',
      role: 'IoT Interfacing & Mobile UI Developer',
      tags: ['Environmental IoT', 'Sensor Data Stream', 'Mobile UI', 'Telemetry Dashboard'],
      bannerGradient: 'linear-gradient(135deg, #0E243A 0%, #1B4566 60%, #307399 100%)',
      description: 'This project addresses environmental wellness by marrying physical sensor hardware with an intuitive mobile dashboard. Microcontroller-connected sensors capture ambient particulate matter (PM2.5), relative humidity, and temperature data, transmitting the metrics to a mobile interface that provides actionable indoor and outdoor air quality ratings.',
      highlights: [
        'Connected sensor telemetry nodes with mobile UI data streams.',
        'Built clear, color-coded environmental health indicators based on standard air quality indexes.',
        'Designed an ergonomic mobile interface enabling users to monitor air trends at a glance.',
        'Conducted calibration testing to verify measurement reliability and telemetry consistency.'
      ]
    },
    bigdata: {
      title: 'Big Data Web Research',
      subtitle: 'Scientific Web Data Research Contribution',
      category: 'Data Science & Academic Research',
      status: 'Scholarly Research',
      role: 'Research Contributor & Data Analyst',
      tags: ['Data Preprocessing', 'Dataset Ingestion', 'Academic Publishing', 'Visual Analytics'],
      bannerGradient: 'linear-gradient(135deg, #141D35 0%, #23355C 50%, #385187 100%)',
      description: 'An academic research contribution focused on large-scale web data extraction, systematic preprocessing, and empirical analysis. As part of a collaborative research team, I participated in dataset cleaning, algorithmic validation, and crafting analytical web visualizations used to demonstrate findings for peer-reviewed academic publication.',
      highlights: [
        'Executed data ingestion and cleaning pipelines across structured and unstructured web datasets.',
        'Synthesized analytical dashboards to translate complex statistical distributions into intuitive charts.',
        'Collaborated on scientific paper drafting adhering to academic publication standards.',
        'Documented reproducible data collection methodologies for institutional research archives.'
      ]
    }
  };

  // 2. DYNAMIC WIB CLOCK (Malang, Indonesia)
  const timeElement = document.getElementById('live-time');
  function updateMalangTime() {
    if (!timeElement) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      timeElement.textContent = `Malang ${formatter.format(now)} WIB (GMT+7)`;
    } catch {
      timeElement.textContent = 'Malang WIB (GMT+7)';
    }
  }
  updateMalangTime();
  setInterval(updateMalangTime, 1000);

  // Set current year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. STICKY HEADER SCROLL STATE
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 4. MOBILE NAVIGATION TOGGLE
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // 5. INTERSECTION OBSERVER FOR SCROLL REVEALS
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  });

  reveals.forEach(el => revealObserver.observe(el));

  // 6. ACTIVE NAVIGATION SPY
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  });

  sections.forEach(sec => navObserver.observe(sec));

  // 7. PROJECT FILTERING LOGIC
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 8. PROJECT DETAILS MODAL (<dialog>)
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalSubtitle = document.getElementById('modal-project-subtitle');
  const modalCategory = document.getElementById('modal-project-category');
  const modalStatus = document.getElementById('modal-project-status');
  const modalRole = document.getElementById('modal-project-role');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalTags = document.getElementById('modal-project-tags');
  const modalBanner = document.getElementById('modal-project-banner');
  const closeBtn = document.getElementById('modal-close-btn');
  const dismissBtn = document.getElementById('modal-dismiss-btn');

  const viewCaseButtons = document.querySelectorAll('.view-case-btn');

  viewCaseButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const data = projectsData[projectId];
      if (!data || !modal) return;

      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalCategory.textContent = data.category;
      modalStatus.textContent = data.status;
      modalRole.textContent = data.role;
      modalDesc.textContent = data.description;
      modalBanner.style.background = data.bannerGradient;

      // Populate highlights
      modalHighlights.innerHTML = '';
      data.highlights.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalHighlights.appendChild(li);
      });

      // Populate tags
      modalTags.innerHTML = '';
      data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tag;
        modalTags.appendChild(span);
      });

      if (typeof modal.showModal === 'function') {
        modal.showModal();
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modal && typeof modal.close === 'function') {
      modal.close();
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

  // Close when clicking on backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal();
      }
    });

    modal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  // 9. COPY EMAIL TO CLIPBOARD WITH TOAST
  const copyBtn = document.getElementById('btn-copy-email');
  const emailText = document.getElementById('email-address');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', async () => {
      const address = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(address);
        showToast(`Email copied: ${address}`);
      } catch {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = address;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Email copied: ${address}`);
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 10. ATMOSPHERIC HORIZON SKY CANVAS (Procedural Blue Hour Atmosphere)
  const canvas = document.getElementById('sky-canvas');
  if (canvas) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      initSkyCanvas(canvas);
    }
  }

  function initSkyCanvas(canvasEl) {
    const ctx = canvasEl.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 28; // Subtle, elegant density

    function resize() {
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class MistParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * (height * 0.7); // Float in upper horizon zone
        this.radius = Math.random() * 80 + 40; // Soft wide diffuse clouds
        this.alpha = Math.random() * 0.08 + 0.02;
        this.vx = Math.random() * 0.15 - 0.07;
        this.vy = Math.random() * 0.08 - 0.04;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height * 0.7;
        if (this.y > height * 0.7 + this.radius) this.y = -this.radius;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        // Cloud blue to transparent
        gradient.addColorStop(0, `rgba(201, 221, 249, ${this.alpha})`);
        gradient.addColorStop(0.6, `rgba(52, 79, 128, ${this.alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(16, 29, 58, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new MistParticle());
    }

    let animationId;
    let isVisible = true;

    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      if (isVisible) {
        loop();
      } else {
        cancelAnimationFrame(animationId);
      }
    });

    function loop() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationId = requestAnimationFrame(loop);
    }

    loop();
  }

  // 11. INTERACTIVE EDITORIAL PORTRAIT (Restrained Desktop Parallax & Light Movement)
  const portraitWrapper = document.getElementById('portrait-wrapper');
  const portraitCard = document.getElementById('portrait-card');
  const portraitGlow = document.querySelector('.portrait-ambient-glow');
  const heroSection = document.getElementById('hero');

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (portraitCard && portraitWrapper && isFinePointer && !isReducedMotion) {
    let mouseX = 0;
    let mouseY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let currentGlowX = 0;
    let currentGlowY = 0;
    let isHovering = false;
    let rafId = null;

    function onMouseMove(e) {
      const rect = portraitCard.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to 1) relative to card center
      const rawX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const rawY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      // Clamp to prevent extreme angles
      mouseX = Math.max(-1, Math.min(1, rawX));
      mouseY = Math.max(-1, Math.min(1, rawY));
      isHovering = true;
    }

    function onMouseLeave() {
      mouseX = 0;
      mouseY = 0;
      isHovering = false;
    }

    if (heroSection) {
      heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
      heroSection.addEventListener('mouseleave', onMouseLeave, { passive: true });
    }

    function animatePortrait() {
      // Subtle tilt: max 4 degrees, translation max 6px
      const targetRotateX = -mouseY * 3.5;
      const targetRotateY = mouseX * 3.5;
      const targetGlowX = mouseX * 16;
      const targetGlowY = mouseY * 16;

      // Smooth dampening / lerp
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;
      currentGlowX += (targetGlowX - currentGlowX) * 0.08;
      currentGlowY += (targetGlowY - currentGlowY) * 0.08;

      portraitCard.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(8px)`;

      if (portraitGlow) {
        portraitGlow.style.transform = `translate(${currentGlowX.toFixed(1)}px, ${currentGlowY.toFixed(1)}px)`;
      }

      rafId = requestAnimationFrame(animatePortrait);
    }

    animatePortrait();

    // Scroll parallax & fade when moving away from hero
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = heroSection ? heroSection.offsetHeight : 800;
      if (scrollY < heroHeight) {
        const factor = scrollY / heroHeight;
        portraitCard.style.opacity = Math.max(0, 1 - factor * 0.75);
        portraitCard.style.translate = `0 ${scrollY * 0.12}px`;
      }
    }, { passive: true });
  }
});

