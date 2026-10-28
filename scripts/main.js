/**
 * MUKAROMAH PERSONAL PORTFOLIO — ORYZO.AI ARCHITECTURAL CORE
 * Preserved: 3D Relativistic Lunar Celestial Engine & Custom Moon Shader
 * Architecture: Asymmetric 12-Column Swiss Grid, Stark Contrast, Anti-AI Slop
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. PROJECT SPECIFICATION DATA (8 Verified Projects & Research Grants)
  // ==========================================================================
  const projectsData = {
    spektrum: {
      index: '01',
      title: 'Spektrum Teknologi',
      subtitle: 'Corporate Profile & Service Hierarchy',
      category: 'WEB ARCHITECTURE · ACADEMIC',
      status: 'Production Ready',
      role: 'Web Developer & Information Architect',
      tags: ['HTML5 & Semantic CSS3', 'Responsive Layout', 'Corporate Branding', 'Information Architecture'],
      description: 'Company profile architecture built to present corporate engineering services and client communication channels without clutter. Designed with strict accessibility, zero layout shifts, and semantic clarity.',
      highlights: [
        'Structured multi-tier service hierarchy tailored for corporate technical inquiries.',
        'Engineered responsive layouts with optimized asset delivery and zero layout shifts.',
        'Implemented semantic HTML5 markup compliant with modern web accessibility guidelines.',
        'Configured clear contact endpoints and direct client communication channels.'
      ]
    },
    eksas: {
      index: '02',
      title: 'Eksas Bakes',
      subtitle: 'Artisanal Bakery & Product Catalog',
      category: 'COMMERCIAL FRONTEND · SHOWCASE',
      status: 'Client & Class Showcase',
      role: 'Frontend Designer & Developer',
      tags: ['Frontend UI', 'Product Catalog', 'Responsive Layout', 'Customer Inquiry Flow'],
      description: 'Digital storefront and product catalog designed for an artisanal bakery. Built to make browsing pastries, viewing ingredient highlights, and placing inquiries effortless.',
      highlights: [
        'Designed an inviting product showcase highlighting daily and seasonal bakery creations.',
        'Structured clear product descriptions, ingredient highlights, and serving notes.',
        'Integrated a frictionless customer inquiry flow connecting buyers directly with the bakery.',
        'Optimized visual layout and imagery for rapid loading across mobile browsers.'
      ]
    },
    ismee: {
      index: '03',
      title: 'Supit Urang Methane & Air Quality System',
      subtitle: 'ISMEE 2025 International Symposium Paper (Hosted by UPI)',
      category: 'INTERNATIONAL SYMPOSIUM · PRESENTED',
      status: 'Published & Presented (2025)',
      role: 'Presenter & Co-Author',
      tags: ['Multi-Sensor Telemetry', 'Methane Detection', 'Supit Urang Landfill', 'ISMEE 2025'],
      description: 'Empirical multi-sensor system measuring methane concentration and ambient air quality across the Supit Urang landfill. Co-authored, documented, and presented in English at ISMEE 2025.',
      highlights: [
        'Evaluated empirical effectiveness of multi-sensor arrays for methane (CH4) and ambient air quality tracking in landfill zones.',
        'Conducted field data acquisition and sensor calibration at the Supit Urang Landfill in Malang.',
        'Synthesized statistical telemetry results into peer-reviewed scientific documentation.',
        'Delivered an oral technical presentation in English at the ISMEE 2025 international symposium.'
      ]
    },
    airquality: {
      index: '04',
      title: 'Landfill Air Quality Mobile Monitor',
      subtitle: 'Mobile Telemetry & Gas Exposure Interface',
      category: 'MOBILE & IOT SYSTEMS',
      status: 'Hardware & Mobile Prototype',
      role: 'Mobile UI & IoT Telemetry Developer',
      tags: ['Flutter / Dart', 'Environmental IoT', 'Sensor Data Stream', 'Landfill Telemetry'],
      description: 'Mobile telemetry interface translating raw landfill gas sensor streams into real-time environmental safety indicators for field operators and researchers.',
      highlights: [
        'Integrated real-time sensor telemetry streams with a responsive mobile user interface.',
        'Built clear environmental health indicators for landfill gas and particulate matter levels.',
        'Designed an ergonomic mobile layout enabling field researchers to monitor air trends at a glance.',
        'Verified data transmission reliability between embedded hardware and mobile client views.'
      ]
    },
    bigdata: {
      index: '05',
      title: 'Big Data Web Pipeline',
      subtitle: 'Analytical Preprocessing & Web Visualization',
      category: 'DATA RESEARCH TEAM',
      status: 'Active Team Research',
      role: 'Data Researcher & Web Contributor',
      tags: ['Data Preprocessing', 'Python', 'Web-Based Big Data', 'Analytical Visualization'],
      description: 'Collaborative web-based big data research project handling large-scale dataset preprocessing, structuring, and analytical visualization for institutional research.',
      highlights: [
        'Executed data collection, cleaning, and normalization across web-based datasets.',
        'Collaborated within the Data Research Team to validate analytical models and metrics.',
        'Structured interactive web visualizations to communicate complex statistical patterns clearly.',
        'Maintained reproducible technical documentation for ongoing institutional research.'
      ]
    },
    smartweighing: {
      index: '06',
      title: 'Smart Weighing Waste System',
      subtitle: 'Circular Economy Telemetry & Hardware Node',
      category: 'RESEARCH GRANT AWARDEE · UM',
      status: 'UM Research Grant Awardee',
      role: 'Research Grant Awardee & IoT Engineer',
      tags: ['Arduino / ESP32', 'IoT Integration', 'Smart Weighing', 'Circular Economy'],
      description: 'IoT-integrated weighing station engineered to track waste mass and material flow in support of circular economy infrastructure at Universitas Negeri Malang.',
      highlights: [
        'Interfaced precision load-cell sensors with ESP32/Arduino microcontrollers for automated waste measurement.',
        'Implemented IoT cloud synchronization to log categorized waste metrics in real time.',
        'Supported circular economy workflows by providing verifiable quantitative waste recovery data.',
        'Coordinated grant documentation, hardware prototyping, and empirical validation.'
      ]
    },
    autonomousrobot: {
      index: '07',
      title: 'Autonomous Environmental Monitoring Robot',
      subtitle: 'Hazardous Gas Detection & Unmanned Mitigation',
      category: 'RESEARCH GRANT AWARDEE · UM',
      status: 'UM Research Grant Awardee',
      role: 'Research Grant Awardee & Robotics Developer',
      tags: ['Robotics Programming', 'Autonomous Navigation', 'Hazardous Gas Sensors', 'Embedded C/C++'],
      description: 'Unmanned ground robot equipped with multi-gas sensor arrays to detect hazardous emissions and support rapid environmental mitigation in hazardous zones.',
      highlights: [
        'Programmed autonomous navigation and obstacle-avoidance routines on embedded microcontrollers.',
        'Integrated multi-gas sensor arrays for continuous detection of hazardous environmental emissions.',
        'Engineered wireless telemetry reporting to keep operators safe outside hazardous perimeters.',
        'Validated robotic mobility and sensor accuracy across simulated and field environments.'
      ]
    },
    aiotrobot: {
      index: '08',
      title: 'AIoT Smart Mobile Robot for Landfill Mapping',
      subtitle: 'Artificial Intelligence of Things & Spatial Hotspot Mapping',
      category: 'RESEARCH GRANT AWARDEE · UM',
      status: 'UM Research Grant Awardee',
      role: 'Research Grant Awardee & AIoT Researcher',
      tags: ['AIoT Systems', 'Mobile Robotics', 'Pollution Detection', 'Landfill Spatial Mapping'],
      description: 'Mobile robot combining Artificial Intelligence of Things (AIoT) with spatial mapping to chart pollution hotspots across landfill terrain.',
      highlights: [
        'Combined embedded sensor fusion with AIoT data processing for automated pollution classification.',
        'Mapped spatial distribution of pollutants across landfill terrains using mobile robotic telemetry.',
        'Streamlined data pipelines from onboard microcontroller nodes to analytical mapping views.',
        'Contributed to technical grant reporting, experimental design, and cross-division coordination.'
      ]
    }
  };

  // ==========================================================================
  // 2. PROJECT FILTERING LOGIC (Sharp Architectural Tabs)
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const specCards = document.querySelectorAll('.spec-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      specCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            if (tab.classList.contains('active') && filter !== 'all' && cat !== filter) {
              card.style.display = 'none';
            }
          }, 180);
        }
      });
    });
  });

  // ==========================================================================
  // 3. PROJECT DETAIL SPECIFICATION MODAL (<dialog>)
  // ==========================================================================
  const modal = document.getElementById('project-modal');
  const modalId = document.getElementById('modal-project-id');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalRole = document.getElementById('modal-role');
  const modalStatus = document.getElementById('modal-status');
  const modalDesc = document.getElementById('modal-description');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalTags = document.getElementById('modal-tags');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('.open-dossier').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-project-id');
      const data = projectsData[pId];
      if (!data || !modal) return;

      if (modalId) modalId.textContent = data.index || '00';
      if (modalCategory) modalCategory.textContent = data.category || 'SPECIFICATION';
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
      if (modalRole) modalRole.textContent = data.role;
      if (modalStatus) modalStatus.textContent = data.status;
      if (modalDesc) modalDesc.textContent = data.description;

      if (modalHighlights) {
        modalHighlights.innerHTML = '';
        data.highlights.forEach((h) => {
          const li = document.createElement('li');
          li.textContent = h;
          modalHighlights.appendChild(li);
        });
      }

      if (modalTags) {
        modalTags.innerHTML = '';
        data.tags.forEach((tag) => {
          const span = document.createElement('span');
          span.className = 'modal-tag';
          span.textContent = tag;
          modalTags.appendChild(span);
        });
      }

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

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

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
  // 4. CLIPBOARD COPY HANDLER WITH SHARP TOAST
  // ==========================================================================
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const copyPhoneBtn = document.getElementById('btn-copy-phone');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  async function copyToClipboard(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      triggerToast(`${label} COPIED: ${text}`);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      triggerToast(`${label} COPIED: ${text}`);
    }
  }

  function triggerToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('mukaaa.romah@gmail.com', 'EMAIL');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+62 857-3022-0374', 'PHONE');
    });
  }

  // ==========================================================================
  // 5. BACK TO TOP HANDLER
  // ==========================================================================
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 6. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item, .mobile-cv-btn');

  function openDrawer() {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.add('open');
    mobileToggle.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.remove('open');
    mobileToggle.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  mobileNavItems.forEach((item) => {
    item.addEventListener('click', closeDrawer);
  });

  // ==========================================================================
  // 7. ACTIVE NAVIGATION & SCROLL TRACKING
  // ==========================================================================
  const topNav = document.getElementById('top-nav');
  const navItems = document.querySelectorAll('.nav-links .nav-item');
  const trackedSections = document.querySelectorAll('main section[id]');

  let globalScrollProgress = 0;
  let heroDiveProgress = 0;

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    globalScrollProgress = Math.max(0, Math.min(1, scrollY / maxScroll));
    heroDiveProgress = Math.max(0, Math.min(1, scrollY / (window.innerHeight * 1.1)));

    if (topNav) {
      topNav.classList.toggle('scrolled', scrollY > 20);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  });

  trackedSections.forEach((sec) => sectionObserver.observe(sec));

  // ==========================================================================
  // 8. 3D WEBGL LUNAR CELESTIAL ENGINE (100% PRESERVED ORIGINAL SHADER)
  // ==========================================================================
  initLunarBlackholeEngine();

  function initLunarBlackholeEngine() {
    const glCanvas = document.getElementById('space-webgl-canvas');
    const hudCanvas = document.getElementById('space-hud-canvas');
    const moonImgEl = document.getElementById('moon-texture-source');
    const wrapEl = document.querySelector('.space-canvas-wrap');

    if (!glCanvas) return;

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

    if (wrapEl) {
      wrapEl.addEventListener('pointerdown', (e) => {
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

    const ctx2d = hudCanvas ? hudCanvas.getContext('2d') : null;

    function resizeCanvases() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      glCanvas.width = Math.floor(width * dpr);
      glCanvas.height = Math.floor(height * dpr);
      if (hudCanvas) {
        hudCanvas.width = Math.floor(width * dpr);
        hudCanvas.height = Math.floor(height * dpr);
      }

      if (gl) {
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
      }
    }

    window.addEventListener('resize', resizeCanvases, { passive: true });
    resizeCanvases();

    // ========================================================================
    // WEBGL SHADER COMPILATION (Relativistic HoleLight + 3D Textured Moon Sphere)
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

        vec3 rotate3D(vec3 n, float ay, float ax) {
          float cx = cos(ax), sx = sin(ax);
          vec3 r1 = vec3(n.x, n.y * cx - n.z * sx, n.y * sx + n.z * cx);
          float cy = cos(ay), sy = sin(ay);
          return vec3(r1.x * cy + r1.z * sy, r1.y, -r1.x * sy + r1.z * cy);
        }

        vec3 sampleLunarSurface(vec3 nRot) {
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

          float micro = fbm(nRot.xy * 12.0 + nRot.z * 6.0);
          float lum = dot(texCol, vec3(0.299, 0.587, 0.114));
          lum = mix(0.45 + 0.45 * micro, lum, uHasMoonTex);
          lum = smoothstep(0.12, 0.96, lum);

          return vec3(lum);
        }

        vec3 renderBackground(vec2 uv, vec2 p, float r, float rs) {
          float defl = (rs * rs * 1.18) / max(r - rs * 0.52, 0.018);
          vec2 dir = p / max(r, 1e-4);
          vec2 lensedUv = uv - dir * defl * 0.085;

          // Seamless transition into Oryzo Walnut Shadow #100904 & Bark Brown #382416
          vec3 deepWalnut = vec3(0.063, 0.035, 0.016); // #100904
          vec3 barkBrown  = vec3(0.180, 0.110, 0.060); // #382416
          vec3 warmHaze   = vec3(0.350, 0.220, 0.130);
          vec3 warmBone   = vec3(0.965, 0.878, 0.776); // #F6E0C6

          float neb1 = fbm(lensedUv * 2.6 + vec2(uTime * 0.012, -uScroll * 0.35));
          float neb2 = fbm(lensedUv * 5.2 - vec2(uTime * 0.018, uScroll * 0.2));

          vec3 bg = mix(deepWalnut, barkBrown, smoothstep(0.0, 0.85, uv.y));
          bg += warmHaze * pow(neb1, 2.2) * 0.35;
          bg += warmBone * pow(neb1 * neb2, 3.2) * 0.16;

          // Gravitationally lensed background stars
          vec2 starGrid = lensedUv * vec2(uRes.x / uRes.y * 42.0, 42.0);
          vec2 id = floor(starGrid);
          vec2 gv = fract(starGrid) - 0.5;
          float rnd = hash21(id);
          if (rnd > 0.80) {
            vec2 offset = vec2(fract(rnd * 34.1) - 0.5, fract(rnd * 71.7) - 0.5) * 0.6;
            float d = length(gv - offset);
            float twinkle = 0.65 + 0.35 * sin(uTime * (1.5 + rnd * 3.0) + rnd * 40.0);
            float star = smoothstep(0.09, 0.0, d) * twinkle;
            float einstein = 1.0 + 2.2 * exp(-sq((r - rs * 1.45) / (rs * 0.24)));
            bg += mix(warmBone, vec3(1.0, 0.93, 0.84), rnd) * star * einstein * 0.85;
          }

          return bg;
        }

        void main() {
          vec2 frag = vUv * uRes;
          vec2 p = (frag - uCenter) / uSize;
          float r = length(p);
          float rs = 0.148;

          mat2 R = rot(uTilt);
          vec2 pr = R * p;
          float k = max(uIncl, 0.045);
          float spin = uTime * 0.42;

          vec3 col = renderBackground(vUv, p, r, rs);

          // Oryzo Design Palette: Warm Cream (#FFEDD7), Bone Sand (#F6E0C6), and Ember (#DC5000)
          vec3 cTint  = vec3(0.240, 0.150, 0.090);
          vec3 cBone  = vec3(0.965, 0.878, 0.776); // #F6E0C6
          vec3 cCream = vec3(1.000, 0.929, 0.843); // #FFEDD7
          vec3 cEmber = vec3(0.863, 0.314, 0.000); // #DC5000

          float outerGlow = exp(-r * 2.1) * 0.42 + exp(-r * 5.0) * 0.30;
          col += mix(cTint, cBone, 0.35) * outerGlow;

          float gapMask = 1.0;
          float cursorFlare = 0.0;
          if (uGap.x > -50.0) {
            float gd = length(p - uGap);
            gapMask = smoothstep(0.03, 0.24, gd);
            cursorFlare = exp(-sq(gd / 0.14)) * 0.45;
          }

          // Gravitational Lensed Far-Side Halo
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
            vec3 hCol = mix(cTint, cBone, clamp(hI * 1.15, 0.0, 1.0));
            hCol = mix(hCol, cCream, clamp((hI - 0.55) * 1.5, 0.0, 1.0));
            col += hCol * hI * 1.35;
          }

          // Back Half of Relativistic Accretion Disk
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

            float doppler = clamp(1.0 - 0.72 * (d.x / max(rd, 1e-3)), 0.28, 2.15);
            float plane = exp(-abs(pr.y) / (k * rs * 3.2));

            diskVal = radial * (0.42 + 0.58 * n) * (0.52 + 0.48 * fil) * arms * doppler * plane * gapMask;

            diskColor = mix(cTint, cBone, clamp(diskVal * 1.2, 0.0, 1.0));
            diskColor = mix(diskColor, cCream, clamp((diskVal - 0.52) * 1.45, 0.0, 1.0));
            diskColor = mix(diskColor, cEmber, clamp((diskVal - 0.92) * 1.35, 0.0, 1.0));
          }

          float frontFactor = smoothstep(0.008, -0.012, pr.y);
          float backFactor = 1.0 - frontFactor;
          float moonOcclusion = smoothstep(rs * 0.985, rs * 1.02, r);
          col += diskColor * diskVal * backFactor * moonOcclusion * 1.45;

          // 3D Rotating Textured Moon Sphere (r <= rs)
          if (r < rs * 1.015) {
            float sphereEdge = 1.0 - smoothstep(rs * 0.975, rs * 1.012, r);
            vec2 pn = p / rs;
            float zSq = max(0.0, 1.0 - dot(pn, pn));
            float z = sqrt(zSq);
            vec3 N = normalize(vec3(pn.x, pn.y, z));

            float spinY = uTime * 0.14 + uMoonRot.x + uPointer.x * 0.38;
            float spinX = -0.12 + uMoonRot.y + uPointer.y * 0.25;
            vec3 Nrot = rotate3D(N, spinY, spinX);

            vec3 moonAlbedo = sampleLunarSurface(Nrot);

            float bumpA = sampleLunarSurface(Nrot + vec3(0.015, 0.0, 0.0)).r - moonAlbedo.r;
            float bumpB = sampleLunarSurface(Nrot + vec3(0.0, 0.015, 0.0)).r - moonAlbedo.r;
            vec3 Nbump = normalize(N + vec3(-bumpA * 2.6, -bumpB * 2.6, 0.0));

            vec3 lightDir1 = normalize(vec3(-0.62, -0.35, 0.70));
            float diff1 = max(0.0, dot(Nbump, lightDir1));

            float fresnel = pow(1.0 - z, 2.6);
            float equatorBounce = exp(-sq(pr.y / (rs * 0.35))) * 0.55;

            vec3 moonShadow = vec3(0.063, 0.035, 0.016); // Deep Walnut Umbra #100904
            vec3 moonMid    = vec3(0.780, 0.680, 0.580); // Warm Cork Midtone
            vec3 moonHigh   = vec3(1.000, 0.929, 0.843); // Pure Warm Cream Highlight #FFEDD7

            float shade = clamp(diff1 * 0.88 + 0.22, 0.0, 1.0);
            vec3 surfaceCol = mix(moonShadow, moonMid, smoothstep(0.0, 0.55, moonAlbedo.r * shade));
            surfaceCol = mix(surfaceCol, moonHigh, smoothstep(0.45, 0.95, moonAlbedo.r * shade));

            float ringShadow = 1.0 - 0.38 * exp(-sq((pr.y + rs * 0.11) / (rs * 0.065))) * frontFactor;
            surfaceCol *= ringShadow;

            surfaceCol += cBone * fresnel * 0.85;
            surfaceCol += cCream * pow(fresnel, 5.0) * 0.95;
            surfaceCol += cEmber * equatorBounce * 0.18 * moonAlbedo.r;

            col = mix(col, surfaceCol, sphereEdge);
          }

          // Relativistic Photon Ring
          float pr1 = exp(-sq((r - rs * 1.012) / (rs * 0.015)));
          float pr2 = exp(-sq((r - rs * 1.045) / (rs * 0.032))) * 0.52;
          float prDop = 0.78 + 0.52 * (-pr.x / max(r, 1e-3));
          float photonRing = (pr1 + pr2) * prDop * gapMask;
          col += mix(cBone, cCream, 0.72) * photonRing * 1.38;

          // Front Half of Relativistic Accretion Disk
          col += diskColor * diskVal * frontFactor * 1.55;

          // Cursor Flare
          col += cBone * cursorFlare * exp(-abs(r - rs * 1.8) * 3.5);

          // Scroll Dive Flash
          if (uDive > 0.01) {
            float flash = smoothstep(0.55, 0.98, uDive) * (1.0 - smoothstep(0.98, 1.0, uDive));
            col += mix(cTint, cBone, 0.5) * flash * 0.35;
          }

          // Filmic Tone Mapping
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
            new Uint8Array([223, 217, 206, 255])
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
    // ORBITAL DUST & STAR TRAILS (Refined Subtle Particles)
    // ========================================================================
    const orbitalDust = Array.from({ length: 65 }, () => ({
      orbitMul: 1.18 + Math.random() * 3.1,
      angle: Math.random() * Math.PI * 2,
      speed: 0.32 + Math.random() * 0.42,
      radius: 0.8 + Math.random() * 1.5,
      alpha: 0.22 + Math.random() * 0.50
    }));

    const starTrails = Array.from({ length: 40 }, () => ({
      radiusNorm: 0.08 + Math.pow(Math.random(), 0.85) * 0.68,
      angle: Math.random() * Math.PI * 2,
      arcLen: 0.14 + Math.random() * 0.38,
      speed: (0.04 + Math.random() * 0.08) * (Math.random() < 0.15 ? -1 : 1),
      width: 0.6 + Math.random() * 1.1,
      alpha: 0.12 + Math.random() * 0.25
    }));

    // ========================================================================
    // MAIN RENDER LOOP (Synchronized 3D Moon Shader & Orbital Depth)
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

      if (!moonDrag.isDragging) {
        moonDrag.rotY += moonDrag.velY;
        moonDrag.rotX = Math.max(-0.85, Math.min(0.85, moonDrag.rotX + moonDrag.velX));
        moonDrag.velY *= 0.94;
        moonDrag.velX *= 0.94;
      }

      const diveEase = heroDiveProgress * heroDiveProgress * (3.0 - 2.0 * heroDiveProgress);

      const isMobile = width < 960;
      const baseAnchorX = isMobile ? 0.50 : 0.74;
      const baseAnchorY = isMobile ? 0.28 : 0.46;

      const anchorX = baseAnchorX + pointer.x * 0.016 - diveEase * (isMobile ? 0.0 : 0.12);
      const anchorY = baseAnchorY + pointer.y * 0.014 - diveEase * 0.05;

      const centerPxX = anchorX * width;
      const centerPxY = anchorY * height;

      const baseScale = Math.min(width, height) * (isMobile ? 0.88 : 1.05);
      const diveScaleMul = 1.0 + Math.sin(diveEase * Math.PI) * 0.38 - diveEase * 0.16;
      const sizePx = baseScale * diveScaleMul;

      const tilt = -0.11 + pointer.x * 0.045 + moonDrag.rotX * 0.15;
      const incl = 0.088 + pointer.y * 0.022 + Math.abs(moonDrag.rotX) * 0.04;

      // 1. Render WebGL 3D Lunar Shader
      if (gl && program) {
        gl.useProgram(program);

        const wDev = glCanvas.width;
        const hDev = glCanvas.height;
        const cXDev = centerPxX * dpr;
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

      // 2. Render Synchronized Orbital Dust & Star Trails
      if (ctx2d) {
        ctx2d.save();
        ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx2d.clearRect(0, 0, width, height);

        const rsPx = sizePx * 0.148;
        const cosT = Math.cos(-tilt);
        const sinT = Math.sin(-tilt);

        // Star Trails when scrolling down
        const trailVis = Math.min(0.55, globalScrollProgress * 1.05);
        if (trailVis > 0.02) {
          const maxDim = Math.hypot(width, height);
          ctx2d.lineCap = 'round';
          for (let i = 0; i < starTrails.length; i++) {
            const tr = starTrails[i];
            const ang = tr.angle + elapsed * tr.speed;
            const r = tr.radiusNorm * maxDim;
            ctx2d.strokeStyle = `rgba(246, 224, 198, ${(tr.alpha * trailVis).toFixed(3)})`;
            ctx2d.lineWidth = tr.width;
            ctx2d.beginPath();
            ctx2d.arc(centerPxX, centerPxY, r, ang, ang + tr.arcLen);
            ctx2d.stroke();
          }
        }

        // Keplerian Accretion Dust
        for (let i = 0; i < orbitalDust.length; i++) {
          const p = orbitalDust[i];
          const a = p.angle + elapsed * (p.speed / Math.pow(p.orbitMul, 0.8));
          const rx = rsPx * p.orbitMul;
          const ry = rx * incl;

          const lx = Math.cos(a) * rx;
          const ly = Math.sin(a) * ry;

          const distFromCenter = Math.hypot(lx, ly);
          if (Math.sin(a) < 0 && distFromCenter < rsPx * 0.98) {
            continue;
          }

          const sx = centerPxX + lx * cosT - ly * sinT;
          const sy = centerPxY + lx * sinT + ly * cosT;

          const doppler = 0.65 + 0.45 * (-Math.cos(a));
          const alpha = Math.max(0.08, Math.min(0.95, p.alpha * doppler));

          ctx2d.fillStyle = `rgba(255, 237, 215, ${alpha.toFixed(3)})`;
          ctx2d.beginPath();
          ctx2d.arc(sx, sy, p.radius, 0, Math.PI * 2);
          ctx2d.fill();
        }

        ctx2d.restore();
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }
});
