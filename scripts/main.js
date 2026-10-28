/**
 * MUKAROMAH PERSONAL PORTFOLIO — 3D LUNAR-BLACKHOLE & HUD ENGINE
 * Reference Architecture: https://poggufanz.xyz (SpaceEngine + HUD + Relativistic Shader)
 * Preserved Palette: Midnight Blue (#101D3A), Twilight (#344F80), Cloud (#C9DDF9), Mist (#F4F7FC)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. PROJECT DATA DICTIONARY (8 Verified CV Projects & Research Grants)
  // ==========================================================================
  const projectsData = {
    spektrum: {
      title: 'Spektrum Teknologi',
      subtitle: 'Corporate Profile & Service Architecture',
      category: 'Web Development · Academic Project',
      status: 'Production Ready',
      role: 'Web Developer & Information Architect',
      tags: ['HTML5 & Semantic CSS3', 'Responsive Layout', 'Corporate Branding', 'Information Architecture'],
      bannerGradient: 'linear-gradient(135deg, #0D1B35 0%, #19325C 60%, #2B518F 100%)',
      description: 'Developed a company profile website for Spektrum Teknologi as part of an academic project. The platform was structured with semantic clarity, high-contrast readability, and responsive modular sections to present corporate solutions, institutional competencies, and service hierarchies across desktop and mobile devices.',
      highlights: [
        'Crafted a structured, multi-tier service hierarchy tailored for corporate inquiries.',
        'Engineered responsive layouts with optimized asset delivery and zero layout shifts.',
        'Implemented semantic HTML5 markup compliant with modern web accessibility guidelines.',
        'Configured clear contact endpoints and direct client communication channels.'
      ]
    },
    eksas: {
      title: 'Eksas Bakes',
      subtitle: 'Artisanal Bakery Brand & Product Catalog',
      category: 'Web Development · Class Project',
      status: 'Client & Class Showcase',
      role: 'Frontend Designer & Developer',
      tags: ['Visual Storytelling', 'Product Catalog', 'Responsive UI', 'Customer Inquiry Flow'],
      bannerGradient: 'linear-gradient(135deg, #162642 0%, #27416B 55%, #3E6098 100%)',
      description: 'Developed a bakery website for Eksas Bakes as part of a class project, focusing on presenting the artisanal business identity and its seasonal baked goods. The interface balances appetizing visual storytelling with intuitive product navigation so visitors can inspect menu items and initiate orders effortlessly.',
      highlights: [
        'Designed an inviting product showcase highlighting daily and seasonal bakery creations.',
        'Structured clear product descriptions, ingredient highlights, and serving notes.',
        'Integrated a frictionless customer inquiry flow connecting buyers with the bakery.',
        'Optimized visual layout and imagery for rapid loading on mobile browsers.'
      ]
    },
    ismee: {
      title: 'Multi-Sensor Methane & Air Quality System',
      subtitle: 'ISMEE 2025 International Symposium Paper (Hosted by UPI)',
      category: 'International Symposium · Presenter & Co-Author',
      status: 'Published & Presented (2025)',
      role: 'Presenter & Co-Author',
      tags: ['Multi-Sensor Telemetry', 'Methane Detection', 'Supit Urang Landfill', 'ISMEE 2025'],
      bannerGradient: 'linear-gradient(135deg, #0F223D 0%, #1E416E 55%, #3469A6 100%)',
      description: 'Co-authored and presented the research paper titled “Effectiveness of a Multi-Sensor System for Methane and Air Quality Monitoring in Supit Urang Landfill” at the International Symposium on Material and Electrical Engineering (ISMEE 2025), hosted by Universitas Pendidikan Indonesia (UPI).',
      highlights: [
        'Evaluated the empirical effectiveness of multi-sensor arrays for methane (CH4) and ambient air quality tracking in landfill zones.',
        'Conducted field data acquisition and sensor calibration at the Supit Urang Landfill in Malang.',
        'Synthesized statistical telemetry results into peer-reviewed scientific documentation.',
        'Delivered an oral technical presentation in English at the ISMEE 2025 international symposium.'
      ]
    },
    airquality: {
      title: 'Landfill Air Quality Monitor',
      subtitle: 'Mobile Environmental Monitoring Application',
      category: 'Mobile & IoT Systems',
      status: 'Hardware & Mobile Prototype',
      role: 'Mobile UI & IoT Telemetry Developer',
      tags: ['Flutter / Dart', 'Environmental IoT', 'Sensor Data Stream', 'Landfill Telemetry'],
      bannerGradient: 'linear-gradient(135deg, #0E243A 0%, #1B4566 60%, #2E6E9E 100%)',
      description: 'Worked on a mobile application designed for monitoring real-time air quality and hazardous gas levels in landfill areas. The system bridges physical microcontroller sensor nodes with a clean mobile dashboard to provide actionable environmental safety metrics.',
      highlights: [
        'Integrated real-time sensor telemetry streams with a responsive mobile user interface.',
        'Built clear environmental health indicators for landfill gas and particulate matter levels.',
        'Designed an ergonomic mobile layout enabling field researchers to monitor air trends at a glance.',
        'Verified data transmission reliability between embedded hardware and mobile client views.'
      ]
    },
    bigdata: {
      title: 'Big Data Web Project',
      subtitle: 'Web-Based Big Data Research Contribution',
      category: 'Data Research Team · Ongoing',
      status: 'Active Research Contribution',
      role: 'Data Researcher & Web Contributor',
      tags: ['Data Preprocessing', 'Python', 'Web-Based Big Data', 'Analytical Visualization'],
      bannerGradient: 'linear-gradient(135deg, #121C36 0%, #21345E 55%, #375492 100%)',
      description: 'Currently contributing as a data researcher in a collaborative team project involving web-based big data. Focuses on large-scale dataset ingestion, systematic preprocessing pipelines, and translating multidimensional data into accessible web visualizations.',
      highlights: [
        'Executed data collection, cleaning, and normalization across web-based datasets.',
        'Collaborated within the Data Research Team to validate analytical models and metrics.',
        'Structured interactive web visualizations to communicate complex statistical patterns clearly.',
        'Maintained reproducible technical documentation for ongoing institutional research.'
      ]
    },
    smartweighing: {
      title: 'Smart Weighing for Waste Management',
      subtitle: 'IoT Integration to Support Circular Economy',
      category: 'Research Grant Awardee · Universitas Negeri Malang',
      status: 'UM Research Grant',
      role: 'Research Grant Awardee & IoT Engineer',
      tags: ['Arduino / ESP32', 'IoT Integration', 'Smart Weighing', 'Circular Economy'],
      bannerGradient: 'linear-gradient(135deg, #10203B 0%, #1F3E6E 60%, #345F9E 100%)',
      description: 'Awarded a Universitas Negeri Malang research grant for “Smart Weighing for Waste Management System Using IoT Integration to Support Circular Economy.” Engineered an automated weighing and telemetry platform to digitize waste sorting and circular resource tracking.',
      highlights: [
        'Interfaced precision load-cell sensors with ESP32/Arduino microcontrollers for automated waste measurement.',
        'Implemented IoT cloud synchronization to log categorized waste metrics in real time.',
        'Supported circular economy workflows by providing verifiable quantitative waste recovery data.',
        'Coordinated grant documentation, hardware prototyping, and empirical validation.'
      ]
    },
    autonomousrobot: {
      title: 'Autonomous Environmental Monitoring Robot',
      subtitle: 'Hazardous Gas Detection & Environmental Mitigation',
      category: 'Research Grant Awardee · Universitas Negeri Malang',
      status: 'UM Research Grant',
      role: 'Research Grant Awardee & Robotics Developer',
      tags: ['Robotics Programming', 'Autonomous Navigation', 'Hazardous Gas Sensors', 'Embedded C/C++'],
      bannerGradient: 'linear-gradient(135deg, #0D1E38 0%, #1C3A69 60%, #2D5A9B 100%)',
      description: 'Awarded a Universitas Negeri Malang research grant for “Autonomous Environmental Monitoring Robot for Hazardous Gas Detection and Environmental Mitigation.” Designed a mobile robotic platform capable of traversing high-risk zones to detect toxic gases and support mitigation response.',
      highlights: [
        'Programmed autonomous navigation and obstacle-avoidance routines on embedded microcontrollers.',
        'Integrated multi-gas sensor arrays for continuous detection of hazardous environmental emissions.',
        'Engineered wireless telemetry reporting to keep operators safe outside hazardous perimeters.',
        'Validated robotic mobility and sensor accuracy across simulated and field environments.'
      ]
    },
    aiotrobot: {
      title: 'AIoT-Based Smart Mobile Robot',
      subtitle: 'Pollution Detection & Landfill Mapping',
      category: 'Research Grant Awardee · Universitas Negeri Malang',
      status: 'UM Research Grant',
      role: 'Research Grant Awardee & AIoT Researcher',
      tags: ['AIoT Systems', 'Mobile Robotics', 'Pollution Detection', 'Landfill Spatial Mapping'],
      bannerGradient: 'linear-gradient(135deg, #132342 0%, #244073 60%, #3A64A8 100%)',
      description: 'Awarded a Universitas Negeri Malang research grant for “AIoT-Based Smart Mobile Robot for Pollution Detection and Landfill Mapping.” Combines Artificial Intelligence of Things (AIoT) with mobile robotics to localize pollution hotspots and generate spatial environmental maps of landfill sites.',
      highlights: [
        'Combined embedded sensor fusion with AIoT data processing for automated pollution classification.',
        'Mapped spatial distribution of pollutants across landfill terrains using mobile robotic telemetry.',
        'Streamlined data pipelines from onboard microcontroller nodes to analytical mapping views.',
        'Contributed to technical grant reporting, experimental design, and cross-division coordination.'
      ]
    }
  };

  // ==========================================================================
  // 2. LIVE HUD CLOCK (UTC+7 · Malang, ID) & FOOTER YEAR
  // ==========================================================================
  const timeElement = document.getElementById('live-time');
  function updateMalangTime() {
    if (!timeElement) return;
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      timeElement.textContent = formatter.format(now);
    } catch {
      timeElement.textContent = '12:00:00';
    }
  }
  updateMalangTime();
  setInterval(updateMalangTime, 1000);

  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 3. HUD SCROLL DEPTH GAUGE, SCROLL CUE & RETURN-TO-ORIGIN PORTAL
  // ==========================================================================
  const header = document.getElementById('header');
  const depthFill = document.getElementById('hud-depth-fill');
  const depthVal = document.getElementById('hud-depth-val');
  const scrollCue = document.getElementById('hud-scroll-cue');
  const returnOriginBtn = document.getElementById('btn-return-origin');

  let globalScrollProgress = 0;
  let heroDiveProgress = 0;

  function updateScrollTelemetry() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    globalScrollProgress = Math.max(0, Math.min(1, scrollY / maxScroll));

    // Hero dive progress: 0 at top of hero, 1 after scrolling ~1.25 viewports
    heroDiveProgress = Math.max(0, Math.min(1, scrollY / (window.innerHeight * 1.25)));

    if (header) {
      header.classList.toggle('scrolled', scrollY > 36);
    }

    if (depthFill) {
      depthFill.style.transform = `scaleY(${globalScrollProgress.toFixed(3)})`;
    }

    if (depthVal) {
      const num = Math.round(globalScrollProgress * 100);
      depthVal.textContent = String(num).padStart(3, '0');
    }

    if (scrollCue) {
      scrollCue.classList.toggle('is-hidden', scrollY > 110);
    }
  }

  window.addEventListener('scroll', updateScrollTelemetry, { passive: true });
  window.addEventListener('resize', updateScrollTelemetry, { passive: true });
  updateScrollTelemetry();

  // Lenis Smooth Scroll Integration (Ref: Kaiki Standard)
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function rafLenis(time) {
          lenis.raf(time);
          requestAnimationFrame(rafLenis);
        }
        requestAnimationFrame(rafLenis);
      }

      lenis.on('scroll', updateScrollTelemetry);
    } catch {
      lenis = null;
    }
  }

  if (returnOriginBtn) {
    returnOriginBtn.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ==========================================================================
  // 4. MOBILE NAVIGATION TOGGLE
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileMenu) {
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

    mobileToggle.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // ==========================================================================
  // 5. INTERSECTION OBSERVER FOR SCROLL REVEALS & ACTIVE NAVIGATION
  // ==========================================================================
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
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  reveals.forEach(el => revealObserver.observe(el));

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-28% 0px -52% 0px',
    threshold: 0
  });

  sections.forEach(sec => navObserver.observe(sec));

  // ==========================================================================
  // 6. PROJECT FILTERING LOGIC
  // ==========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            if (button.classList.contains('active') && filterValue !== 'all' && category !== filterValue) {
              card.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });

  // ==========================================================================
  // 7. PROJECT DETAILS MODAL (<dialog>)
  // ==========================================================================
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

  document.querySelectorAll('.view-case-btn').forEach(btn => {
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

      modalHighlights.innerHTML = '';
      data.highlights.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalHighlights.appendChild(li);
      });

      modalTags.textContent = data.tags.join(' · ');

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

  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) closeModal();
    });
    modal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  // ==========================================================================
  // 8. COPY EMAIL & PHONE TO CLIPBOARD WITH TOAST
  // ==========================================================================
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const emailText = document.getElementById('email-address');
  const copyPhoneBtn = document.getElementById('btn-copy-phone');
  const phoneText = document.getElementById('phone-number');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  async function copyToClipboard(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copied: ${text}`);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(`${label} copied: ${text}`);
    }
  }

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', () => copyToClipboard(emailText.textContent.trim(), 'Email'));
  }
  if (copyPhoneBtn && phoneText) {
    copyPhoneBtn.addEventListener('click', () => copyToClipboard(phoneText.textContent.trim(), 'Phone'));
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // ==========================================================================
  // 9. KAIKI SIGNATURE 3D SHOWCASES & INTERACTION BLUEPRINTS
  // ==========================================================================
  init3DCardTilt();
  init3DCylinderShowcase();
  init3DSnakeWaveShowcase();
  initJourneyScrubbedTimeline();

  // BLUEPRINT A: MOUSE-MOVE 3D CARD TILT
  function init3DCardTilt() {
    const cards = document.querySelectorAll('.tilt-card-3d');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        if (typeof gsap !== 'undefined') {
          gsap.to(card, {
            rotateY: px * 12,
            rotateX: -py * 12,
            y: -5,
            duration: 0.35,
            ease: 'power2.out',
            transformPerspective: 1000,
          });
        } else {
          card.style.transform = `perspective(1000px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) translateY(-5px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (typeof gsap !== 'undefined') {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
          });
        } else {
          card.style.transform = '';
        }
      });
    });
  }

  // BLUEPRINT B: CONTINUOUS 3D AUTO-SPIN CYLINDER GALLERY (EXACT 3:4 CARDS)
  function init3DCylinderShowcase() {
    const ring = document.querySelector('.cylinder-ring');
    const cards = document.querySelectorAll('.cylinder-card');
    const stage = document.querySelector('.cylinder-stage');
    if (!ring || !cards.length || !stage) return;

    const count = cards.length;
    const angleStep = 360 / count;
    const radius = window.innerWidth < 640 ? 320 : 520;

    cards.forEach((card, i) => {
      const angle = angleStep * i;
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });

    let currentY = 0;
    let targetY = 0;
    let isDragging = false;
    let startX = 0;
    let pauseUntil = 0;

    function tick(now) {
      requestAnimationFrame(tick);
      if (!isDragging && now > pauseUntil) {
        targetY -= 0.12;
      }
      currentY += (targetY - currentY) * 0.08;
      ring.style.transform = `rotateY(${currentY}deg)`;
    }
    requestAnimationFrame(tick);

    stage.addEventListener('pointerdown', (e) => {
      isDragging = true;
      startX = e.clientX;
      pauseUntil = performance.now() + 3000;
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      startX = e.clientX;
      targetY += dx * 0.28;
    });

    window.addEventListener('pointerup', () => {
      if (isDragging) {
        isDragging = false;
        pauseUntil = performance.now() + 3000;
      }
    });
  }

  // BLUEPRINT C: 3D PARAMETRIC SNAKE WAVE TRAJECTORY
  function init3DSnakeWaveShowcase() {
    const cards = document.querySelectorAll('.snake-card');
    if (!cards.length) return;

    let cycle = 0;
    let speedBoost = 0;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const dy = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      speedBoost = Math.min(0.015, dy * 0.00035);
    }, { passive: true });

    const CARD_SPACING = 0.08;
    const TOTAL_CYCLE = 1 + cards.length * CARD_SPACING + 0.15;

    function render() {
      requestAnimationFrame(render);
      cycle = (cycle + 0.0028 + speedBoost) % TOTAL_CYCLE;
      speedBoost *= 0.92;

      cards.forEach((card, idx) => {
        const u = cycle - idx * CARD_SPACING;
        if (u < 0 || u > 1) {
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
          card.style.transform = 'translate3d(-120vw, 180px, -200px) scale(0.5)';
          return;
        }

        card.style.pointerEvents = 'auto';
        const xVw = -75 + u * 150;
        const waveY = Math.sin(u * Math.PI * 2.4) * 45;
        const yPx = (0.45 - u) * 220 + waveY;
        const zPx = Math.sin(u * Math.PI) * 70;
        const scale = 1.04 - u * 0.16;
        const opacity = u < 0.05 ? u / 0.05 : u > 0.88 ? (1 - u) / 0.12 : 1;

        card.style.transform = `translate3d(${xVw}vw, ${yPx}px, ${zPx}px) scale(${scale})`;
        card.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
        card.style.zIndex = 100 - idx;
      });
    }
    requestAnimationFrame(render);
  }

  // BLUEPRINT E: REVERSIBLE SCROLL-SCRUBBED COBALT TIMELINE
  function initJourneyScrubbedTimeline() {
    const line = document.querySelector('.timeline-progress-line');
    const container = document.querySelector('.timeline-container');
    const items = document.querySelectorAll('.timeline-item');

    if (!line || !container) return;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.fromTo(line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 0.4,
          }
        }
      );

      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0.3, y: 35, rotateX: -10, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              end: 'top 55%',
              scrub: 0.4,
            }
          }
        );
      });
    } else {
      function updateFallbackLine() {
        const rect = container.getBoundingClientRect();
        const h = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (h * 0.7 - rect.top) / (rect.height * 0.8)));
        line.style.transform = `scaleY(${progress.toFixed(3)})`;
      }
      window.addEventListener('scroll', updateFallbackLine, { passive: true });
      updateFallbackLine();
    }
  }

  // ==========================================================================
  // 10. 3D WEBGL LUNAR CELESTIAL ENGINE (100% PRESERVED ORIGINAL SHADER)
  // ==========================================================================
  initLunarBlackholeEngine();

  function initLunarBlackholeEngine() {
    const glCanvas = document.getElementById('space-webgl-canvas');
    const hudCanvas = document.getElementById('space-hud-canvas');
    const moonImgEl = document.getElementById('moon-texture-source');
    const lockBtn = document.getElementById('btn-toggle-lunar-lock');
    const lockText = document.getElementById('hud-lens-text');
    const observatoryStage = document.getElementById('lunar-observatory-stage');

    if (!glCanvas || !hudCanvas) return;

    // Interactive state
    let lockHorizon = false;
    if (lockBtn) {
      lockBtn.addEventListener('click', () => {
        lockHorizon = !lockHorizon;
        lockBtn.classList.toggle('is-locked', lockHorizon);
        if (lockText) {
          lockText.textContent = lockHorizon
            ? 'CELESTIAL HORIZON · LOCKED'
            : 'CELESTIAL HORIZON · AUTO DIVE';
        }
      });
    }

    // Pointer & Interactive 3D Moon Drag State
    const pointer = {
      tx: 0,
      ty: 0,
      x: 0,
      y: 0,
      screenX: -9999,
      screenY: -9999,
      smoothScreenX: -9999,
      smoothScreenY: -9999,
      active: 0
    };

    const moonDrag = {
      isDragging: false,
      lastX: 0,
      lastY: 0,
      rotY: 0,
      rotX: 0,
      velY: 0,
      velX: 0
    };

    window.addEventListener('pointermove', (e) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2.0;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2.0;
      pointer.screenX = e.clientX;
      pointer.screenY = e.clientY;
      pointer.active = 1;

      if (moonDrag.isDragging) {
        const dx = e.clientX - moonDrag.lastX;
        const dy = e.clientY - moonDrag.lastY;
        moonDrag.lastX = e.clientX;
        moonDrag.lastY = e.clientY;
        moonDrag.velY = dx * 0.008;
        moonDrag.velX = dy * 0.006;
        moonDrag.rotY += moonDrag.velY;
        moonDrag.rotX = Math.max(-0.85, Math.min(0.85, moonDrag.rotX + moonDrag.velX));
      }
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      pointer.active = 0;
      moonDrag.isDragging = false;
    }, { passive: true });

    if (observatoryStage) {
      observatoryStage.addEventListener('pointerdown', (e) => {
        moonDrag.isDragging = true;
        moonDrag.lastX = e.clientX;
        moonDrag.lastY = e.clientY;
      });
    }
    window.addEventListener('pointerup', () => {
      moonDrag.isDragging = false;
    }, { passive: true });

    // Viewport sizing
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    const gl = glCanvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance'
    });

    const ctx2d = hudCanvas.getContext('2d');

    function resizeCanvases() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      glCanvas.width = Math.floor(width * dpr);
      glCanvas.height = Math.floor(height * dpr);
      hudCanvas.width = Math.floor(width * dpr);
      hudCanvas.height = Math.floor(height * dpr);

      if (gl) {
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
      }
    }

    window.addEventListener('resize', resizeCanvases, { passive: true });
    resizeCanvases();

    // ========================================================================
    // WEBGL SHADER COMPILATION (poggufanz.xyz holeLight + 3D Textured Moon Sphere)
    // ========================================================================
    let program = null;
    let uniforms = {};
    let moonTexture = null;
    let hasMoonTex = 0.0;

    if (gl) {
      const vsSource = `
        attribute vec2 aPos;
        varying vec2 vUv;
        void main() {
          vUv = aPos * 0.5 + 0.5;
          gl_Position = vec4(aPos, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision highp float;
        varying vec2 vUv;

        uniform vec2 uRes;
        uniform float uTime;
        uniform vec2 uCenter;
        uniform float uSize;
        uniform float uTilt;
        uniform float uIncl;
        uniform vec2 uGap;
        uniform float uDive;
        uniform float uScroll;
        uniform vec2 uPointer;
        uniform vec2 uMoonRot;
        uniform sampler2D uMoonTex;
        uniform float uHasMoonTex;

        #define PI 3.14159265359

        float sq(float x) { return x * x; }

        mat2 rot(float a) {
          float c = cos(a), s = sin(a);
          return mat2(c, -s, s, c);
        }

        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float vnoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
            mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
          for (int i = 0; i < 4; i++) {
            v += a * vnoise(p);
            p = m * p * 2.03 + vec2(17.1, 31.7);
            a *= 0.5;
          }
          return v;
        }

        // Rotate a 3D normal vector around Y and X axes for 3D Moon rotation
        vec3 rotate3D(vec3 n, float ay, float ax) {
          // Rotate X (pitch)
          float cx = cos(ax), sx = sin(ax);
          vec3 r1 = vec3(n.x, n.y * cx - n.z * sx, n.y * sx + n.z * cx);
          // Rotate Y (yaw/spin)
          float cy = cos(ay), sy = sin(ay);
          return vec3(r1.x * cy + r1.z * sy, r1.y, -r1.x * sy + r1.z * cy);
        }

        // Seamless tri-planar sampling inside the circular Moon disc of the user's photo
        vec3 sampleLunarSurface(vec3 nRot) {
          // The user's Moon photo has the bright Moon disc centered at (0.502, 0.515) with radius ~0.305
          vec2 discCenter = vec2(0.502, 0.515);
          float discRadius = 0.285;

          vec3 w = pow(abs(nRot), vec3(4.5));
          w /= max(w.x + w.y + w.z, 1e-4);

          vec2 uvZ = discCenter + vec2(nRot.x, -nRot.y) * discRadius;
          vec2 uvX = discCenter + vec2(nRot.z, -nRot.y) * discRadius;
          vec2 uvY = discCenter + vec2(nRot.x, nRot.z) * discRadius;

          vec3 colZ = texture2D(uMoonTex, uvZ).rgb;
          vec3 colX = texture2D(uMoonTex, uvX).rgb;
          vec3 colY = texture2D(uMoonTex, uvY).rgb;

          vec3 texCol = colZ * w.z + colX * w.x + colY * w.y;

          // Procedural micro-crater detail to enrich 3D relief
          float micro = fbm(nRot.xy * 12.0 + nRot.z * 6.0);
          float lum = dot(texCol, vec3(0.299, 0.587, 0.114));
          lum = mix(0.45 + 0.45 * micro, lum, uHasMoonTex);
          lum = smoothstep(0.12, 0.96, lum);

          return vec3(lum);
        }

        // Deep Midnight Blue Cosmic Nebula & Gravitationally Lensed Starfield
        vec3 renderBackground(vec2 uv, vec2 p, float r, float rs) {
          // Gravitational lensing deflection around the 3D Moon / Singularity
          float defl = (rs * rs * 1.18) / max(r - rs * 0.52, 0.018);
          vec2 dir = p / max(r, 1e-4);
          vec2 lensedUv = uv - dir * defl * 0.085;

          // Midnight Blue gradient base (--color-midnight: #101D3A, --color-twilight: #344F80)
          vec3 deepMidnight = vec3(0.043, 0.082, 0.175);
          vec3 midnightBase = vec3(0.063, 0.114, 0.227);
          vec3 twilightBlue = vec3(0.204, 0.310, 0.502);
          vec3 cloudIce     = vec3(0.788, 0.867, 0.976);

          float neb1 = fbm(lensedUv * 2.6 + vec2(uTime * 0.012, -uScroll * 0.35));
          float neb2 = fbm(lensedUv * 5.2 - vec2(uTime * 0.018, uScroll * 0.2));

          vec3 bg = mix(deepMidnight, midnightBase, smoothstep(0.0, 0.85, uv.y));
          bg += twilightBlue * pow(neb1, 2.2) * 0.42;
          bg += cloudIce * pow(neb1 * neb2, 3.2) * 0.22;

          // Gravitationally lensed background stars (two density tiers)
          vec2 starGrid = lensedUv * vec2(uRes.x / uRes.y * 42.0, 42.0);
          vec2 id = floor(starGrid);
          vec2 gv = fract(starGrid) - 0.5;
          float rnd = hash21(id);
          if (rnd > 0.78) {
            vec2 offset = vec2(fract(rnd * 34.1) - 0.5, fract(rnd * 71.7) - 0.5) * 0.6;
            float d = length(gv - offset);
            float twinkle = 0.65 + 0.35 * sin(uTime * (1.5 + rnd * 3.0) + rnd * 40.0);
            float star = smoothstep(0.09, 0.0, d) * twinkle;
            // Einstein ring amplification near rs * 1.45
            float einstein = 1.0 + 2.4 * exp(-sq((r - rs * 1.45) / (rs * 0.24)));
            bg += mix(cloudIce, vec3(0.96, 0.98, 1.0), rnd) * star * einstein * 0.85;
          }

          return bg;
        }

        void main() {
          vec2 frag = vUv * uRes;
          vec2 p = (frag - uCenter) / uSize;
          float r = length(p);
          float rs = 0.148;

          // Tilted relativistic accretion disk coordinate frame (poggufanz.xyz holeLight architecture)
          mat2 R = rot(uTilt);
          vec2 pr = R * p;
          float k = max(uIncl, 0.045);
          float spin = uTime * 0.42;

          // 1. Background with Gravitational Lensing
          vec3 col = renderBackground(vUv, p, r, rs);

          // Ambient Lunar-Singularity Corona Glow
          vec3 cTwilight = vec3(0.204, 0.310, 0.502); // #344F80
          vec3 cCloud    = vec3(0.788, 0.867, 0.976); // #C9DDF9
          vec3 cMist     = vec3(0.957, 0.969, 0.988); // #F4F7FC
          vec3 cIvory    = vec3(0.969, 0.961, 0.941); // #F7F5F0

          float outerGlow = exp(-r * 2.1) * 0.48 + exp(-r * 5.0) * 0.35;
          col += mix(cTwilight, cCloud, 0.45) * outerGlow;

          // Cursor repulsion / flare interaction (uGap in poggufanz.xyz)
          float gapMask = 1.0;
          float cursorFlare = 0.0;
          if (uGap.x > -50.0) {
            float gd = length(p - uGap);
            gapMask = smoothstep(0.03, 0.24, gd);
            cursorFlare = exp(-sq(gd / 0.14)) * 0.45;
          }

          // 2. GRAVITATIONAL LENSED FAR-SIDE HALO (Arches over top & bottom of the 3D Moon)
          float hin = rs * 1.005;
          float hout = rs * 1.98;
          if (r > hin && r < hout * 1.25) {
            float ht = clamp((r - hin) / (hout - hin), 0.0, 1.0);
            float hrad = pow(1.0 - ht, 1.65) * smoothstep(hin, hin + rs * 0.04, r);
            float hmask = pow(abs(pr.y) / (r + 1e-4), 0.72);
            float hang = atan(pr.y, pr.x);
            float hsw = hang + spin * (1.25 / (r + 0.09));
            float hn = fbm(vec2(r * 26.0 - uTime * 0.35, sin(hsw) * 2.2 + cos(hsw) * 2.2));
            float hfil = 0.55 + 0.45 * sin(r * 95.0 + hn * 5.5);
            float hdop = clamp(1.0 - 0.62 * (pr.x / max(r, 1e-3)), 0.32, 2.05);

            float hI = hrad * hmask * (0.45 + 0.65 * hn) * hfil * hdop * gapMask;
            vec3 hCol = mix(cTwilight, cCloud, clamp(hI * 1.15, 0.0, 1.0));
            hCol = mix(hCol, cMist, clamp((hI - 0.55) * 1.5, 0.0, 1.0));
            col += hCol * hI * 1.35;
          }

          // 3. BACK HALF OF RELATIVISTIC ACCRETION DISK (pr.y > 0.0, occluded behind 3D Moon)
          vec2 d = vec2(pr.x, pr.y / k);
          float rd = length(d);
          float rin = rs * 1.16;
          float rout = rs * 4.45;

          float diskVal = 0.0;
          vec3 diskColor = vec3(0.0);

          if (rd > rin * 0.85 && rd < rout * 1.1) {
            float t = clamp((rd - rin) / (rout - rin), 0.0, 1.0);
            float radial = pow(1.0 - t, 1.45) * smoothstep(rin * 0.92, rin * 1.12, rd);
            float ang = atan(d.y, d.x);
            float sw = ang + spin * (0.95 / (rd + 0.14));

            float n = fbm(vec2(rd * 19.0 - uTime * 0.62, sin(sw) * 2.5 + cos(sw) * 2.5));
            float fil = smoothstep(0.22, 0.86, sin(rd * 92.0 + n * 6.2) * 0.5 + 0.5);
            float arms = 0.62 + 0.38 * sin(ang * 3.0 - rd * 16.0 + uTime * 1.15 + n * 3.0);

            // Relativistic Doppler beaming
            float doppler = clamp(1.0 - 0.72 * (d.x / max(rd, 1e-3)), 0.28, 2.15);

            // Soft equatorial plane falloff
            float plane = exp(-abs(pr.y) / (k * rs * 3.2));

            diskVal = radial * (0.42 + 0.58 * n) * (0.52 + 0.48 * fil) * arms * doppler * plane * gapMask;

            diskColor = mix(cTwilight, cCloud, clamp(diskVal * 1.2, 0.0, 1.0));
            diskColor = mix(diskColor, cMist, clamp((diskVal - 0.52) * 1.45, 0.0, 1.0));
            diskColor = mix(diskColor, cIvory, clamp((diskVal - 0.95) * 1.2, 0.0, 1.0));
          }

          // Render back half of disk BEFORE the 3D Moon sphere so the Moon naturally occludes it
          float frontFactor = smoothstep(0.008, -0.012, pr.y);
          float backFactor = 1.0 - frontFactor;
          float moonOcclusion = smoothstep(rs * 0.985, rs * 1.02, r);
          col += diskColor * diskVal * backFactor * moonOcclusion * 1.45;

          // 4. 3D ROTATING TEXTURED MOON SPHERE INSIDE THE HORIZON (r <= rs)
          if (r < rs * 1.015) {
            float sphereEdge = 1.0 - smoothstep(rs * 0.975, rs * 1.012, r);
            vec2 pn = p / rs;
            float zSq = max(0.0, 1.0 - dot(pn, pn));
            float z = sqrt(zSq);
            vec3 N = normalize(vec3(pn.x, pn.y, z));

            // Rotate 3D Moon on its axis + interactive pointer/drag rotation
            float spinY = uTime * 0.14 + uMoonRot.x + uPointer.x * 0.38;
            float spinX = -0.12 + uMoonRot.y + uPointer.y * 0.25;
            vec3 Nrot = rotate3D(N, spinY, spinX);

            // Sample real Moon photograph texture + crater relief
            vec3 moonAlbedo = sampleLunarSurface(Nrot);

            // Compute subtle bump normal from crater luminance gradient
            float bumpA = sampleLunarSurface(Nrot + vec3(0.015, 0.0, 0.0)).r - moonAlbedo.r;
            float bumpB = sampleLunarSurface(Nrot + vec3(0.0, 0.015, 0.0)).r - moonAlbedo.r;
            vec3 Nbump = normalize(N + vec3(-bumpA * 2.6, -bumpB * 2.6, 0.0));

            // Dual Celestial Lighting:
            // Primary solar-lunar key light from upper-left (matching bright side of Doppler disk)
            vec3 lightDir1 = normalize(vec3(-0.62, -0.35, 0.70));
            float diff1 = max(0.0, dot(Nbump, lightDir1));

            // Secondary relativistic accretion ring bounce light around the equator & limb
            float fresnel = pow(1.0 - z, 2.6);
            float equatorBounce = exp(-sq(pr.y / (rs * 0.35))) * 0.55;

            // Color-grade the 3D Moon in Midnight Blue shadows + Cloud Silver-Blue & Lunar Mist highlights
            vec3 moonShadow = vec3(0.055, 0.105, 0.220); // Deep Midnight Lunar Umbra
            vec3 moonMid    = vec3(0.580, 0.715, 0.915); // Twilight-Cloud Silver
            vec3 moonHigh   = vec3(0.955, 0.972, 1.000); // Pure Lunar Mist

            float shade = clamp(diff1 * 0.88 + 0.22, 0.0, 1.0);
            vec3 surfaceCol = mix(moonShadow, moonMid, smoothstep(0.0, 0.55, moonAlbedo.r * shade));
            surfaceCol = mix(surfaceCol, moonHigh, smoothstep(0.45, 0.95, moonAlbedo.r * shade));

            // Equatorial shadow cast by the front accretion ring onto the Moon sphere
            float ringShadow = 1.0 - 0.38 * exp(-sq((pr.y + rs * 0.11) / (rs * 0.065))) * frontFactor;
            surfaceCol *= ringShadow;

            // Add relativistic Fresnel rim & equatorial accretion glow
            surfaceCol += cCloud * fresnel * 0.85;
            surfaceCol += cMist * pow(fresnel, 5.0) * 0.95;
            surfaceCol += cCloud * equatorBounce * 0.22 * moonAlbedo.r;

            col = mix(col, surfaceCol, sphereEdge);
          }

          // 5. RAZOR-SHARP RELATIVISTIC PHOTON RING (poggufanz.xyz signature ring at r ≈ rs * 1.015)
          float pr1 = exp(-sq((r - rs * 1.012) / (rs * 0.015)));
          float pr2 = exp(-sq((r - rs * 1.045) / (rs * 0.032))) * 0.52;
          float prDop = 0.78 + 0.52 * (-pr.x / max(r, 1e-3));
          float photonRing = (pr1 + pr2) * prDop * gapMask;
          col += mix(cCloud, cMist, 0.72) * photonRing * 1.38;

          // 6. FRONT HALF OF RELATIVISTIC ACCRETION DISK (Passes IN FRONT of the 3D Moon!)
          col += diskColor * diskVal * frontFactor * 1.55;

          // Cursor interaction flare
          col += cCloud * cursorFlare * exp(-abs(r - rs * 1.8) * 3.5);

          // 7. RELATIVISTIC SCROLL-DIVE FLASH (When diving into the Lunar Singularity)
          if (uDive > 0.01) {
            float flash = smoothstep(0.55, 0.98, uDive) * (1.0 - smoothstep(0.98, 1.0, uDive));
            col += mix(cTwilight, cCloud, 0.5) * flash * 0.35;
          }

          // Filmic ACES-inspired tone mapping & subtle vignette
          col = col / (1.0 + col * 0.42);
          col = pow(max(col, vec3(0.0)), vec3(0.95));

          gl_FragColor = vec4(col, 1.0);
        }
      `;

      function compileShader(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }

      const vs = compileShader(gl.VERTEX_SHADER, vsSource);
      const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);

      if (vs && fs) {
        program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
          gl.useProgram(program);

          const quadBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW
          );

          const aPos = gl.getAttribLocation(program, 'aPos');
          gl.enableVertexAttribArray(aPos);
          gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

          uniforms = {
            uRes: gl.getUniformLocation(program, 'uRes'),
            uTime: gl.getUniformLocation(program, 'uTime'),
            uCenter: gl.getUniformLocation(program, 'uCenter'),
            uSize: gl.getUniformLocation(program, 'uSize'),
            uTilt: gl.getUniformLocation(program, 'uTilt'),
            uIncl: gl.getUniformLocation(program, 'uIncl'),
            uGap: gl.getUniformLocation(program, 'uGap'),
            uDive: gl.getUniformLocation(program, 'uDive'),
            uScroll: gl.getUniformLocation(program, 'uScroll'),
            uPointer: gl.getUniformLocation(program, 'uPointer'),
            uMoonRot: gl.getUniformLocation(program, 'uMoonRot'),
            uMoonTex: gl.getUniformLocation(program, 'uMoonTex'),
            uHasMoonTex: gl.getUniformLocation(program, 'uHasMoonTex')
          };

          // Bind texture unit 0 with a 1x1 fallback until the Moon image finishes loading
          moonTexture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, moonTexture);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            1,
            1,
            0,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            new Uint8Array([201, 221, 249, 255])
          );

          function uploadMoonImage(img) {
            try {
              gl.bindTexture(gl.TEXTURE_2D, moonTexture);
              gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
              gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              hasMoonTex = 1.0;
            } catch {
              hasMoonTex = 0.0;
            }
          }

          if (moonImgEl) {
            if (moonImgEl.complete && moonImgEl.naturalWidth > 0) {
              uploadMoonImage(moonImgEl);
            } else {
              moonImgEl.addEventListener('load', () => uploadMoonImage(moonImgEl));
            }
          }
        } else {
          program = null;
        }
      }
    }

    // ========================================================================
    // ORBITING CODE GLYPHS & ACCRETION PARTICLES (poggufanz.xyz HUD Layer)
    // ========================================================================
    const GLYPHS = [
      '0', '1', ';', '{', '}', '/', '<', '>', '=', '+', '*',
      'λ', 'Δ', 'π', '∑', '∞', '∂', '∇', '∈', '⊕', '⊗', '≡'
    ];

    const ringGlyphs = Array.from({ length: 42 }, (_, idx) => ({
      char: GLYPHS[idx % GLYPHS.length],
      orbitMul: 1.32 + Math.pow(Math.random(), 1.35) * 2.55,
      angle: (idx / 42) * Math.PI * 2 + Math.random() * 0.25,
      speed: 0.22 + Math.random() * 0.28,
      size: 10 + Math.floor(Math.random() * 4),
      baseAlpha: 0.32 + Math.random() * 0.45,
      ox: 0,
      oy: 0,
      vx: 0,
      vy: 0
    }));

    const orbitalDust = Array.from({ length: 75 }, () => ({
      orbitMul: 1.18 + Math.random() * 3.1,
      angle: Math.random() * Math.PI * 2,
      speed: 0.35 + Math.random() * 0.45,
      radius: 0.8 + Math.random() * 1.6,
      alpha: 0.25 + Math.random() * 0.55
    }));

    // Long-exposure star trail arcs for deeper scroll rooms (Ref: poggufanz.xyz trails)
    const starTrails = Array.from({ length: 48 }, () => ({
      radiusNorm: 0.08 + Math.pow(Math.random(), 0.85) * 0.68,
      angle: Math.random() * Math.PI * 2,
      arcLen: 0.14 + Math.random() * 0.42,
      speed: (0.04 + Math.random() * 0.08) * (Math.random() < 0.15 ? -1 : 1),
      width: 0.6 + Math.random() * 1.2,
      alpha: 0.14 + Math.random() * 0.28
    }));

    // ========================================================================
    // MAIN RENDER LOOP (Synchronized WebGL 3D Shader + 2D Orbital Glyph Overlay)
    // ========================================================================
    const startTime = performance.now();
    let lastTime = startTime;
    let isPageVisible = true;

    document.addEventListener('visibilitychange', () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        lastTime = performance.now();
        requestAnimationFrame(renderFrame);
      }
    });

    function renderFrame(now) {
      if (!isPageVisible) return;

      const dt = Math.min(0.05, (now - lastTime) * 0.001);
      lastTime = now;
      const elapsed = (now - startTime) * 0.001;

      // Smooth pointer interpolation
      pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 5.0);
      pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 5.0);

      if (pointer.active) {
        if (pointer.smoothScreenX < -1000) {
          pointer.smoothScreenX = pointer.screenX;
          pointer.smoothScreenY = pointer.screenY;
        } else {
          pointer.smoothScreenX += (pointer.screenX - pointer.smoothScreenX) * Math.min(1, dt * 12.0);
          pointer.smoothScreenY += (pointer.screenY - pointer.smoothScreenY) * Math.min(1, dt * 12.0);
        }
      } else {
        pointer.smoothScreenX = -9999;
        pointer.smoothScreenY = -9999;
      }

      // Smoothly decay interactive drag inertia
      if (!moonDrag.isDragging) {
        moonDrag.rotY += moonDrag.velY;
        moonDrag.rotX = Math.max(-0.85, Math.min(0.85, moonDrag.rotX + moonDrag.velX));
        moonDrag.velY *= 0.94;
        moonDrag.velX *= 0.94;
      }

      // Effective dive factor (0 when locked or at top of Hero; smoothly increases on scroll)
      // Notice we keep the 3D Lunar Blackhole visible even as you scroll, gently shifting & scaling it!
      const rawDive = lockHorizon ? 0.0 : heroDiveProgress;
      const diveEase = rawDive * rawDive * (3.0 - 2.0 * rawDive);

      // Compute 3D Lunar-Blackhole screen center & scale
      const isMobile = width < 960;
      const baseAnchorX = isMobile ? 0.50 : 0.72;
      const baseAnchorY = isMobile ? 0.27 : 0.45;

      // As user scrolls down (when not locked), the 3D Lunar Blackhole drifts gracefully toward center-right
      const anchorX = baseAnchorX + pointer.x * 0.016 - diveEase * (isMobile ? 0.0 : 0.14);
      const anchorY = baseAnchorY + pointer.y * 0.014 - diveEase * 0.06;

      const centerPxX = anchorX * width;
      const centerPxY = anchorY * height;

      const baseScale = Math.min(width, height) * (isMobile ? 0.88 : 1.05);
      // Scale expands as you dive into the horizon, then settles at an atmospheric background scale
      const diveScaleMul = lockHorizon
        ? 1.0
        : 1.0 + Math.sin(diveEase * Math.PI) * 0.45 - diveEase * 0.18;
      const sizePx = baseScale * diveScaleMul;

      const tilt = -0.11 + pointer.x * 0.045 + moonDrag.rotX * 0.15;
      const incl = 0.088 + pointer.y * 0.022 + Math.abs(moonDrag.rotX) * 0.04;

      // 1. RENDER WEBGL 3D LUNAR-BLACKHOLE SHADER
      if (gl && program) {
        gl.useProgram(program);

        const wDev = glCanvas.width;
        const hDev = glCanvas.height;
        const cXDev = centerPxX * dpr;
        // WebGL frag Y is bottom-up
        const cYDev = (height - centerPxY) * dpr;
        const sizeDev = sizePx * dpr;

        let gapX = -99.0;
        let gapY = -99.0;
        if (pointer.active && pointer.smoothScreenX > -1000) {
          gapX = (pointer.smoothScreenX * dpr - cXDev) / sizeDev;
          gapY = ((height - pointer.smoothScreenY) * dpr - cYDev) / sizeDev;
        }

        gl.uniform2f(uniforms.uRes, wDev, hDev);
        gl.uniform1f(uniforms.uTime, elapsed);
        gl.uniform2f(uniforms.uCenter, cXDev, cYDev);
        gl.uniform1f(uniforms.uSize, sizeDev);
        gl.uniform1f(uniforms.uTilt, tilt);
        gl.uniform1f(uniforms.uIncl, incl);
        gl.uniform2f(uniforms.uGap, gapX, gapY);
        gl.uniform1f(uniforms.uDive, diveEase);
        gl.uniform1f(uniforms.uScroll, globalScrollProgress);
        gl.uniform2f(uniforms.uPointer, pointer.x, pointer.y);
        gl.uniform2f(uniforms.uMoonRot, moonDrag.rotY, moonDrag.rotX);
        gl.uniform1f(uniforms.uHasMoonTex, hasMoonTex);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, moonTexture);
        gl.uniform1i(uniforms.uMoonTex, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      // 2. RENDER SYNCHRONIZED 2D ORBITAL CODE GLYPHS, ACCRETION PARTICLES & STAR TRAILS
      if (ctx2d) {
        ctx2d.save();
        ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx2d.clearRect(0, 0, width, height);

        const rsPx = sizePx * 0.148;
        const cosT = Math.cos(-tilt);
        const sinT = Math.sin(-tilt);

        // A. Subtle Long-Exposure Star Trails when scrolling into Experience / Awards / Skills
        const trailVis = lockHorizon ? 0.15 : Math.min(0.65, globalScrollProgress * 1.1);
        if (trailVis > 0.02) {
          const maxDim = Math.hypot(width, height);
          ctx2d.lineCap = 'round';
          for (let i = 0; i < starTrails.length; i++) {
            const tr = starTrails[i];
            const ang = tr.angle + elapsed * tr.speed;
            const r = tr.radiusNorm * maxDim;
            ctx2d.strokeStyle = `rgba(201, 221, 249, ${(tr.alpha * trailVis).toFixed(3)})`;
            ctx2d.lineWidth = tr.width;
            ctx2d.beginPath();
            ctx2d.arc(centerPxX, centerPxY, r, ang, ang + tr.arcLen);
            ctx2d.stroke();
          }
        }

        // B. Orbiting Accretion Dust Particles (Keplerian Ellipse with 3D Moon Occlusion)
        for (let i = 0; i < orbitalDust.length; i++) {
          const p = orbitalDust[i];
          const a = p.angle + elapsed * (p.speed / Math.pow(p.orbitMul, 0.8));
          const rx = rsPx * p.orbitMul;
          const ry = rx * incl;

          const lx = Math.cos(a) * rx;
          const ly = Math.sin(a) * ry;

          // Back half of orbit (sin(a) < 0) is behind the 3D Moon if within rsPx
          const distFromCenter = Math.hypot(lx, ly);
          if (Math.sin(a) < 0 && distFromCenter < rsPx * 0.98) {
            continue;
          }

          const sx = centerPxX + lx * cosT - ly * sinT;
          const sy = centerPxY + lx * sinT + ly * cosT;

          // Relativistic Doppler brightening on left/approaching side
          const doppler = 0.65 + 0.45 * (-Math.cos(a));
          const alpha = Math.max(0.08, Math.min(0.95, p.alpha * doppler));

          ctx2d.fillStyle = `rgba(244, 247, 252, ${alpha.toFixed(3)})`;
          ctx2d.beginPath();
          ctx2d.arc(sx, sy, p.radius, 0, Math.PI * 2);
          ctx2d.fill();
        }

        // C. Orbiting Code-Glyph Ring with Cursor Repulsion (poggufanz.xyz signature)
        ctx2d.textAlign = 'center';
        ctx2d.textBaseline = 'middle';

        for (let i = 0; i < ringGlyphs.length; i++) {
          const g = ringGlyphs[i];
          const a = g.angle + elapsed * (g.speed / Math.pow(g.orbitMul, 0.85));
          const rx = rsPx * g.orbitMul;
          const ry = rx * (incl * 1.18);

          const lx = Math.cos(a) * rx;
          const ly = Math.sin(a) * ry;

          // Occlude glyphs passing behind the 3D Moon sphere
          const distFromCenter = Math.hypot(lx, ly);
          if (Math.sin(a) < 0 && distFromCenter < rsPx * 0.98) {
            continue;
          }

          const baseX = centerPxX + lx * cosT - ly * sinT;
          const baseY = centerPxY + lx * sinT + ly * cosT;

          // Cursor repulsion spring physics
          let boost = 0;
          if (pointer.active && pointer.smoothScreenX > -1000) {
            const dx = baseX + g.ox - pointer.smoothScreenX;
            const dy = baseY + g.oy - pointer.smoothScreenY;
            const d = Math.hypot(dx, dy);
            const repelRadius = 115;
            if (d < repelRadius && d > 0.001) {
              const force = Math.pow(1 - d / repelRadius, 2);
              g.vx += (dx / d) * force * 160 * dt;
              g.vy += (dy / d) * force * 160 * dt;
              boost = force * 0.45;
            }
          }

          g.vx += -g.ox * 14 * dt;
          g.vy += -g.oy * 14 * dt;
          g.vx *= Math.exp(-6 * dt);
          g.vy *= Math.exp(-6 * dt);
          g.ox += g.vx * dt * 12;
          g.oy += g.vy * dt * 12;

          const gx = baseX + g.ox;
          const gy = baseY + g.oy;

          const doppler = 0.65 + 0.4 * (-Math.cos(a));
          const alpha = Math.min(0.95, g.baseAlpha * doppler + boost);

          ctx2d.font = `500 ${g.size}px "JetBrains Mono", monospace`;
          ctx2d.fillStyle = boost > 0.08
            ? `rgba(244, 247, 252, ${alpha.toFixed(3)})`
            : `rgba(201, 221, 249, ${alpha.toFixed(3)})`;
          ctx2d.fillText(g.char, gx, gy);
        }

        ctx2d.restore();
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }
});
