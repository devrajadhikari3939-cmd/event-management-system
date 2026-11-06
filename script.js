/**
 * ============================================================================
 * EVENTNEST PLATFORM — JAVASCRIPT
 * Brand: EventNest | Tagline: Discover. Explore. Experience.
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. SAMPLE DATA: 10 REALISTIC EVENTS
   * -------------------------------------------------------------------------- */
  const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect fill='%2318153b' width='800' height='450'/%3E%3Ctext fill='%238b5cf6' font-family='sans-serif' font-size='28' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EEventNest Event%3C/text%3E%3C/svg%3E";

  const EVENTS_DATA = [
    {
      id: "ke-01",
      title: "TechNova 2026: AI & Quantum Computing Summit",
      category: "Technology",
      date: "2026-11-20",
      displayDate: "Friday, Nov 20, 2026",
      time: "09:30 AM – 05:00 PM IST",
      venue: "Campus 6 Auditorium & Virtual Metaverse",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      shortDescription: "India's premier academic summit exploring Generative AI, Quantum Computing, and Ethical Autonomous Systems.",
      fullDescription: "Join pioneering researchers, leading AI enterprise architects, and visionary student innovators for a deep dive into the next computing frontier. Topics span Large Multimodal Models, Quantum Machine Learning algorithms, edge acceleration, and ethical AI governance. Features live demos, paper presentations, and a high-level corporate networking mixer.",
      organizer: "School of Computer Engineering & IEEE Student Branch",
      featured: true,
      highlights: [
        "Keynote by Distinguished Quantum Computing Scientist",
        "Hands-on AI Playground with Cloud GPU Sandbox",
        "Official IEEE Certificate of Participation",
        "Exclusive Networking Lunch & Industry Kit"
      ]
    },
    {
      id: "ke-02",
      title: "Resonance: Annual Inter-University Music Festival",
      category: "Music",
      date: "2026-11-28",
      displayDate: "Saturday, Nov 28, 2026",
      time: "05:30 PM – 10:30 PM IST",
      venue: "Central Open Air Amphitheatre",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      shortDescription: "An electrifying night of live indie bands, fusion rock, electronic soundscapes, and unplugged acoustic sets.",
      fullDescription: "Resonance is the flagship annual cultural music festival that brings together 15+ university battle-of-the-bands finalists and national indie sensation headliners under the open sky. Experience state-of-the-art concert audio engineering, immersive holographic laser projections, student food trucks, and unforgettable musical camaraderie.",
      organizer: "Campus Cultural Council & Octaves Society",
      featured: true,
      highlights: [
        "Headliner performance by chart-topping indie rock ensemble",
        "Inter-college Battle of the Bands finals with ₹1,00,000 prize pool",
        "360-degree laser & audio sensory experience",
        "Artisan food trucks and student merchandise popups"
      ]
    },
    {
      id: "ke-03",
      title: "Global Leadership & Entrepreneurship Conclave",
      category: "Business",
      date: "2026-12-05",
      displayDate: "Saturday, Dec 05, 2026",
      time: "10:00 AM – 04:30 PM IST",
      venue: "Technology Business Incubator Convention Hall 1",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Connect with Fortune 500 executives, venture capitalists, and unicorn founders for keynote panels and pitch sessions.",
      fullDescription: "Accelerate your entrepreneurial ambitions at the Global Leadership Conclave. Discover actionable frameworks for scaling bootstrapped ventures, navigating seed-stage angel rounds, leveraging product-led growth, and building resilient founding teams. Features the flagship 'Elevator Pitch Arena' where student startups pitch directly to accredited angels.",
      organizer: "Innovation & Entrepreneurship Cell (E-Cell)",
      featured: true,
      highlights: [
        "Live Angel Pitch Arena with ₹25 Lakhs on-the-spot term sheet grant",
        "Panel: 'From Campus Idea to Series A Valuation'",
        "1-on-1 Mentorship breakout rooms with venture partners",
        "Executive breakfast & networking high tea"
      ]
    },
    {
      id: "ke-04",
      title: "NestHack 2026: 36-Hour National Hackathon",
      category: "Technology",
      date: "2026-12-12",
      displayDate: "Saturday, Dec 12, 2026",
      time: "08:00 AM onwards (36-Hour Continuous Sprint)",
      venue: "Innovation Lab & Design Studio, Campus 15",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Build breakthrough solutions in Web3, ClimateTech, and Healthcare. Win prizes worth ₹5,00,000+.",
      fullDescription: "A high-octane 36-hour continuous software and hardware hackathon. Hundreds of coders, designers, and domain experts collaborate non-stop to solve pressing real-world challenges across CleanTech, Autonomous Mobility, FinTech Inclusion, and AI Diagnostics. Full hardware kits, 24/7 snacks, and midnight gaming breaks included.",
      organizer: "Developer Student Club & Open Source Guild",
      featured: false,
      highlights: [
        "Cash prizes & seed grants worth over ₹5,00,000",
        "Direct fast-track interview rounds for top 5 teams",
        "Hardware IoT kits & VR development headsets provided",
        "Free meals, 24/7 caffeination station & rest zones"
      ]
    },
    {
      id: "ke-05",
      title: "Virasat: National Folk & Classical Dance Gala",
      category: "Cultural",
      date: "2026-12-18",
      displayDate: "Friday, Dec 18, 2026",
      time: "06:00 PM – 09:30 PM IST",
      venue: "Biju Patnaik Multi-Purpose Indoor Stadium",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      shortDescription: "A grand celebration of India's classical heritage featuring Kathak, Odissi, Bharatnatyam, and regional folk ensembles.",
      fullDescription: "Immerse yourself in rhythmic footwork, expressive mudras, and timeless Indian storytelling. Virasat brings celebrated maestros and dynamic university troupes together to showcase classical dance traditions alongside vibrant folk art forms like Sambalpuri, Bhangra, and Garba.",
      organizer: "Department of Fine Arts & Spic Macay",
      featured: false,
      highlights: [
        "Inaugural Odissi & Kathak Jugalbandi performance",
        "Folk troupe showcase representing 12 diverse Indian states",
        "Costume & instrumental history exhibition at the foyer",
        "VIP seating for registered student passes"
      ]
    },
    {
      id: "ke-06",
      title: "Inter-State Championship: Clash of Titans",
      category: "Sports",
      date: "2026-12-22",
      displayDate: "Tuesday, Dec 22, 2026",
      time: "07:00 AM – 06:00 PM IST",
      venue: "Kalinga Athletics & Sports Complex",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Cheer on top varsity teams competing in football, basketball, badminton, and track & field finals.",
      fullDescription: "Witness peak athletic intensity as top university athletes go head-to-head in the grand finale of the annual Inter-State Sports Championship. Featuring national-level referees, digital scoreboard analytics, cheer brigades, and electric crowd energy all day.",
      organizer: "Inter-Collegiate Sports Department",
      featured: false,
      highlights: [
        "Men's & Women's Gold Medal Football and Basketball Finals",
        "4x100m Relay Sprint Showcase",
        "Celebrity sports guest trophy presentation ceremony",
        "Complimentary fan zone gear & hydration bottles"
      ]
    },
    {
      id: "ke-07",
      title: "NextGen Cyber Defense & Cloud Architecture Workshop",
      category: "Education",
      date: "2027-01-08",
      displayDate: "Friday, Jan 08, 2027",
      time: "10:00 AM – 03:00 PM IST",
      venue: "CS Lab 4, Campus 3",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Hands-on masterclass on zero-trust architectures, cloud penetration testing, and incident response simulations.",
      fullDescription: "Equip yourself with practical cybersecurity skills vital for modern infrastructure defense. Guided by certified ethical hackers and cloud security architects, participants will configure IAM policies, detect memory injection vulnerabilities in sandboxed containers, and respond to simulated ransomware attacks.",
      organizer: "Cyber Security Research Group",
      featured: false,
      highlights: [
        "Hands-on CTF (Capture The Flag) lab challenge",
        "Zero-Trust AWS & Kubernetes security playbook",
        "Certificate of Completion for your technical resume",
        "Access to private cybersecurity Discord community"
      ]
    },
    {
      id: "ke-08",
      title: "Euphony: Symphony of Strings & Jazz Fusion",
      category: "Music",
      date: "2027-01-16",
      displayDate: "Saturday, Jan 16, 2027",
      time: "06:30 PM – 09:30 PM IST",
      venue: "Symphony Hall, Campus 7",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      shortDescription: "An acoustic journey blending Western classical orchestra with contemporary smooth jazz and soulful improvisations.",
      fullDescription: "Euphony presents an evening of acoustic serenity and virtuosity. Featuring a 30-piece string orchestra performing arrangements of baroque masterpieces, cinema themes, and lush jazz standards with live saxophone, cello, and grand piano solos.",
      organizer: "Society of Performing Arts",
      featured: false,
      highlights: [
        "Live 30-piece string and woodwind ensemble",
        "Acoustically engineered auditorium audio",
        "Special tribute suite to Indian and international cinematic scores",
        "Post-concert meet-and-greet with the orchestra conductors"
      ]
    },
    {
      id: "ke-09",
      title: "FinTech Disrupt: Blockchain & Algorithmic Trading",
      category: "Business",
      date: "2027-01-24",
      displayDate: "Sunday, Jan 24, 2027",
      time: "11:00 AM – 04:00 PM IST",
      venue: "School of Management Seminar Hall",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Explore the bleeding edge of automated financial markets, central bank digital currencies, and tokenized economies.",
      fullDescription: "Gain crucial insights into high-frequency quantitative finance, decentralized protocol governance, algorithmic risk management, and the evolution of central bank digital currencies. Designed for students and aspiring finance professionals looking to bridge finance with code.",
      organizer: "Finance & Economics Forum",
      featured: false,
      highlights: [
        "Live quantitative trading bot demonstration in Python",
        "Demystifying DeFi liquidity pools and smart contract auditing",
        "Roundtable with hedge fund quantitative analysts",
        "Exclusive FinTech careers & internship networking handbook"
      ]
    },
    {
      id: "ke-10",
      title: "AeroFest: Drone Racing & Aerospace Symposium",
      category: "Technology",
      date: "2027-02-05",
      displayDate: "Friday, Feb 05, 2027",
      time: "09:00 AM – 05:00 PM IST",
      venue: "Sports Ground 2 & Aeronautical Hangar",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      shortDescription: "High-speed FPV drone obstacle races, UAV design displays, and guest lectures by leading aerospace scientists.",
      fullDescription: "Look to the skies at AeroFest 2027! Witness agile FPV quadcopters maneuvering through neon-lit obstacles at 100 km/h, inspect student-built fixed-wing survey drones, and attend master lectures on propulsion systems and satellite telemetry.",
      organizer: "Aero & Robotics Club",
      featured: false,
      highlights: [
        "National FPV Drone Championship with live FPV cockpit feeds",
        "Autonomous UAV aerial mapping showcase",
        "Flight simulator VR stations open for all attendees",
        "Aero design trophy and prize distribution"
      ]
    }
  ];

  /* --------------------------------------------------------------------------
   * 2. STATE MANAGEMENT & STORAGE KEYS
   * -------------------------------------------------------------------------- */
  const STORAGE_KEYS = {
    THEME: "eventnest_theme",
    REGISTRATIONS: "eventnest_registrations",
    LEGACY_THEME: "k_explore_theme",
    LEGACY_REGISTRATIONS: "k_explore_registrations"
  };

  const state = {
    selectedCategory: "all",
    searchQuery: "",
    sortBy: "date-asc",
    registrations: []
  };

  /* --------------------------------------------------------------------------
   * 3. DOM ELEMENT REFERENCES
   * -------------------------------------------------------------------------- */
  const elements = {
    header: document.getElementById("header"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    mobileToggleBtn: document.getElementById("mobileToggleBtn"),
    mobileDrawer: document.getElementById("mobileDrawer"),
    drawerOverlay: document.getElementById("drawerOverlay"),
    drawerCloseBtn: document.getElementById("drawerCloseBtn"),
    myRegistrationsBtn: document.getElementById("myRegistrationsBtn"),
    mobileMyPassesBtn: document.getElementById("mobileMyPassesBtn"),
    regCountBadge: document.getElementById("regCountBadge"),
    mobileRegCount: document.getElementById("mobileRegCount"),

    // Hero Countdown
    heroCountdownRegisterBtn: document.getElementById("heroCountdownRegisterBtn"),
    countdownEventTitle: document.getElementById("countdownEventTitle"),
    countdownCategory: document.getElementById("countdownCategory"),
    daysElem: document.getElementById("days"),
    hoursElem: document.getElementById("hours"),
    minutesElem: document.getElementById("minutes"),
    secondsElem: document.getElementById("seconds"),

    // Grids & Sections
    featuredGrid: document.getElementById("featuredGrid"),
    eventsGrid: document.getElementById("eventsGrid"),
    emptyState: document.getElementById("emptyState"),
    emptyResetBtn: document.getElementById("emptyResetBtn"),

    // Search & Filters
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    sortSelect: document.getElementById("sortSelect"),
    categoryFilters: document.getElementById("categoryFilters"),
    clearAllFiltersBtn: document.getElementById("clearAllFiltersBtn"),
    resultsCount: document.getElementById("resultsCount"),
    activeFilterTags: document.getElementById("activeFilterTags"),

    // Event Details Modal
    eventModalBackdrop: document.getElementById("eventModalBackdrop"),
    modalCloseBtn: document.getElementById("modalCloseBtn"),
    modalEventImg: document.getElementById("modalEventImg"),
    modalEventCategory: document.getElementById("modalEventCategory"),
    modalEventOrganizer: document.getElementById("modalEventOrganizer"),
    modalEventTitle: document.getElementById("modalEventTitle"),
    modalEventDate: document.getElementById("modalEventDate"),
    modalEventTime: document.getElementById("modalEventTime"),
    modalEventVenue: document.getElementById("modalEventVenue"),
    modalEventFullDesc: document.getElementById("modalEventFullDesc"),
    modalHighlightsList: document.getElementById("modalHighlightsList"),
    modalRegisterBtn: document.getElementById("modalRegisterBtn"),
    modalShareBtn: document.getElementById("modalShareBtn"),

    // Registration Modal
    regModalBackdrop: document.getElementById("regModalBackdrop"),
    regModalCloseBtn: document.getElementById("regModalCloseBtn"),
    registrationForm: document.getElementById("registrationForm"),
    regEventSelect: document.getElementById("regEventSelect"),
    regFullName: document.getElementById("regFullName"),
    regEmail: document.getElementById("regEmail"),
    regPhone: document.getElementById("regPhone"),
    regEventError: document.getElementById("regEventError"),
    regFullNameError: document.getElementById("regFullNameError"),
    regEmailError: document.getElementById("regEmailError"),
    regPhoneError: document.getElementById("regPhoneError"),

    // Ticket Pass Modal
    ticketModalBackdrop: document.getElementById("ticketModalBackdrop"),
    ticketCloseBtn: document.getElementById("ticketCloseBtn"),
    printTicketBtn: document.getElementById("printTicketBtn"),
    registerAnotherBtn: document.getElementById("registerAnotherBtn"),
    ticketPassId: document.getElementById("ticketPassId"),
    ticketEventTitle: document.getElementById("ticketEventTitle"),
    ticketDate: document.getElementById("ticketDate"),
    ticketTime: document.getElementById("ticketTime"),
    ticketVenue: document.getElementById("ticketVenue"),
    ticketCategory: document.getElementById("ticketCategory"),
    ticketAttendeeName: document.getElementById("ticketAttendeeName"),
    ticketAttendeeEmail: document.getElementById("ticketAttendeeEmail"),
    ticketAttendeePhone: document.getElementById("ticketAttendeePhone"),

    // My Registrations Modal
    myRegsModalBackdrop: document.getElementById("myRegsModalBackdrop"),
    myRegsCloseBtn: document.getElementById("myRegsCloseBtn"),
    closeMyRegsModalBtn: document.getElementById("closeMyRegsModalBtn"),
    myRegsList: document.getElementById("myRegsList"),
    emptyRegsState: document.getElementById("emptyRegsState"),
    browseEventsFromRegsBtn: document.getElementById("browseEventsFromRegsBtn"),

    // Contact & Newsletter Forms
    contactForm: document.getElementById("contactForm"),
    contactName: document.getElementById("contactName"),
    contactEmail: document.getElementById("contactEmail"),
    contactSubject: document.getElementById("contactSubject"),
    contactMessage: document.getElementById("contactMessage"),
    contactNameError: document.getElementById("contactNameError"),
    contactEmailError: document.getElementById("contactEmailError"),
    contactSubjectError: document.getElementById("contactSubjectError"),
    contactMessageError: document.getElementById("contactMessageError"),
    newsletterForm: document.getElementById("newsletterForm"),
    newsletterEmail: document.getElementById("newsletterEmail"),
    newsletterError: document.getElementById("newsletterError"),

    // Misc
    backToTopBtn: document.getElementById("backToTopBtn"),
    toastContainer: document.getElementById("toastContainer")
  };

  /* --------------------------------------------------------------------------
   * 4. INITIALIZATION
   * -------------------------------------------------------------------------- */
  function init() {
    initTheme();
    loadRegistrationsFromStorage();
    populateEventSelectOptions();
    renderFeaturedEvents();
    updateCategoryCounts();
    filterAndRenderEvents();
    initHeroCountdown();
    setupEventListeners();
    setupScrollSpy();
    initSectionReveal();
  }

  /* --------------------------------------------------------------------------
   * 5. THEME SWITCHING (WARM EDITORIAL LIGHT / MIDNIGHT NAVY DARK)
   * -------------------------------------------------------------------------- */
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) ||
      localStorage.getItem(STORAGE_KEYS.LEGACY_THEME) ||
      "light";
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    showToast(
      "Theme Updated",
      `Switched to ${newTheme === "light" ? "Warm Off-White Editorial" : "Midnight Navy Dark"} mode.`,
      "info"
    );
  }

  /* --------------------------------------------------------------------------
   * 6. LOCALSTORAGE REGISTRATIONS HANDLERS
   * -------------------------------------------------------------------------- */
  function loadRegistrationsFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS) ||
        localStorage.getItem(STORAGE_KEYS.LEGACY_REGISTRATIONS);
      state.registrations = data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading registrations from LocalStorage:", e);
      state.registrations = [];
    }
    updateRegistrationBadge();
  }

  function saveRegistrationsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(state.registrations));
      updateRegistrationBadge();
    } catch (e) {
      console.error("Error writing registrations to LocalStorage:", e);
    }
  }

  function updateRegistrationBadge() {
    const count = state.registrations.length;
    if (elements.regCountBadge) elements.regCountBadge.textContent = count;
    if (elements.mobileRegCount) elements.mobileRegCount.textContent = count;
  }

  /* --------------------------------------------------------------------------
   * 7. CATEGORY STYLING & HELPERS
   * -------------------------------------------------------------------------- */
  function getCategoryBadgeClass(category) {
    const cat = (category || "").toLowerCase();
    switch (cat) {
      case "technology": return "badge-tech";
      case "music": return "badge-music";
      case "education": return "badge-education";
      case "business": return "badge-business";
      case "cultural": return "badge-cultural";
      case "sports": return "badge-sports";
      default: return "badge-tech";
    }
  }

  function getCategoryIcon(category) {
    const cat = (category || "").toLowerCase();
    switch (cat) {
      case "technology": return "fa-microchip";
      case "music": return "fa-music";
      case "education": return "fa-graduation-cap";
      case "business": return "fa-briefcase";
      case "cultural": return "fa-masks-theater";
      case "sports": return "fa-trophy";
      default: return "fa-calendar-star";
    }
  }

  /* --------------------------------------------------------------------------
   * 8. RENDERING EVENTS (EDITORIAL COMPOSITION)
   * -------------------------------------------------------------------------- */
  function createEditorialFeaturedLargeCard(event) {
    const badgeClass = getCategoryBadgeClass(event.category);
    const categoryIcon = getCategoryIcon(event.category);

    return `
      <article class="featured-card-large" data-id="${event.id}">
        <div class="large-card-img-wrap">
          <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="large-card-img" 
            loading="lazy"
            onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
          >
          <div class="large-card-gradient"></div>
          <div class="featured-tag-badge">
            <i class="fa-solid fa-fire"></i> Flagship Music Spectacle
          </div>
        </div>

        <div class="large-card-content">
          <div class="large-card-header-meta">
            <span class="event-badge ${badgeClass}">
              <i class="fa-solid ${categoryIcon}"></i> ${event.category}
            </span>
            <span class="meta-date-pill"><i class="fa-regular fa-calendar"></i> ${event.displayDate}</span>
          </div>

          <h3 class="large-card-title">${event.title}</h3>
          <p class="large-card-desc">${event.shortDescription}</p>

          <div class="large-card-meta-row">
            <span><i class="fa-solid fa-location-dot"></i> ${event.venue}</span>
            <span><i class="fa-solid fa-building-columns"></i> ${event.organizer}</span>
          </div>

          <div class="large-card-actions">
            <button type="button" class="btn btn-outline-white btn-sm view-details-btn" data-id="${event.id}">
              <i class="fa-solid fa-circle-info"></i> View Details
            </button>
            <button type="button" class="btn btn-coral btn-sm register-card-btn" data-id="${event.id}">
              <i class="fa-solid fa-ticket"></i> Register Now
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function createEditorialFeaturedSmallCard(event) {
    const badgeClass = getCategoryBadgeClass(event.category);
    const categoryIcon = getCategoryIcon(event.category);

    return `
      <article class="featured-card-small" data-id="${event.id}">
        <div class="small-card-img-wrap">
          <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="small-card-img" 
            loading="lazy"
            onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
          >
          <span class="event-badge ${badgeClass} small-badge">
            <i class="fa-solid ${categoryIcon}"></i> ${event.category}
          </span>
        </div>

        <div class="small-card-body">
          <div class="small-card-meta">
            <span><i class="fa-regular fa-calendar"></i> ${event.displayDate.split(',')[1] || event.date}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${event.venue.split('&')[0].trim()}</span>
          </div>
          <h4 class="small-card-title" title="${event.title}">${event.title}</h4>
          <p class="small-card-desc">${event.shortDescription}</p>

          <div class="small-card-actions">
            <button type="button" class="btn btn-outline-navy btn-sm view-details-btn" data-id="${event.id}">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <button type="button" class="btn btn-cobalt btn-sm register-card-btn" data-id="${event.id}">
              <i class="fa-solid fa-ticket"></i> Register
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function createEventCardHTML(event) {
    const badgeClass = getCategoryBadgeClass(event.category);
    const categoryIcon = getCategoryIcon(event.category);

    return `
      <article class="event-card" data-id="${event.id}">
        <div class="card-img-wrapper">
          <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="card-img" 
            loading="lazy"
            onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
          >
          <div class="card-img-overlay">
            <span class="event-badge ${badgeClass}">
              <i class="fa-solid ${categoryIcon}"></i> ${event.category}
            </span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta-row">
            <span><i class="fa-regular fa-calendar"></i> ${event.displayDate.split(',')[1] || event.date}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${event.venue.split('&')[0].trim()}</span>
          </div>

          <h3 class="card-title" title="${event.title}">${event.title}</h3>
          <p class="card-desc">${event.shortDescription}</p>

          <div class="card-organizer">
            <i class="fa-solid fa-building-columns"></i>
            <span>${event.organizer}</span>
          </div>

          <div class="card-actions">
            <button type="button" class="btn btn-outline-navy btn-sm view-details-btn" data-id="${event.id}">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <button type="button" class="btn btn-cobalt btn-sm register-card-btn" data-id="${event.id}">
              <i class="fa-solid fa-ticket"></i> Register
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderFeaturedEvents() {
    if (!elements.featuredGrid) return;
    const musicEvent = EVENTS_DATA.find(e => e.id === "ke-02") || EVENTS_DATA[1];
    const techEvent = EVENTS_DATA.find(e => e.id === "ke-01") || EVENTS_DATA[0];
    const sportsEvent = EVENTS_DATA.find(e => e.id === "ke-06") || EVENTS_DATA[5];

    elements.featuredGrid.innerHTML = `
      <div class="featured-editorial-primary">
        ${createEditorialFeaturedLargeCard(musicEvent)}
      </div>
      <div class="featured-editorial-secondary">
        ${createEditorialFeaturedSmallCard(techEvent)}
        ${createEditorialFeaturedSmallCard(sportsEvent)}
      </div>
    `;
  }

  function updateCategoryCounts() {
    const counts = {
      all: EVENTS_DATA.length,
      Technology: 0,
      Music: 0,
      Education: 0,
      Business: 0,
      Cultural: 0,
      Sports: 0
    };

    EVENTS_DATA.forEach(evt => {
      if (counts[evt.category] !== undefined) {
        counts[evt.category]++;
      }
    });

    const countAllElem = document.getElementById("count-all");
    const countTechElem = document.getElementById("count-tech");
    const countMusicElem = document.getElementById("count-music");
    const countEduElem = document.getElementById("count-edu");
    const countBizElem = document.getElementById("count-biz");
    const countCultElem = document.getElementById("count-cult");
    const countSportsElem = document.getElementById("count-sports");

    if (countAllElem) countAllElem.textContent = counts.all;
    if (countTechElem) countTechElem.textContent = counts.Technology;
    if (countMusicElem) countMusicElem.textContent = counts.Music;
    if (countEduElem) countEduElem.textContent = counts.Education;
    if (countBizElem) countBizElem.textContent = counts.Business;
    if (countCultElem) countCultElem.textContent = counts.Cultural;
    if (countSportsElem) countSportsElem.textContent = counts.Sports;
  }

  function filterAndRenderEvents() {
    const query = state.searchQuery.trim().toLowerCase();
    const category = state.selectedCategory;

    // Filter by Search Query & Category synchronously
    let filtered = EVENTS_DATA.filter(evt => {
      const matchesCategory = category === "all" || evt.category.toLowerCase() === category.toLowerCase();
      const matchesSearch = !query ||
        evt.title.toLowerCase().includes(query) ||
        evt.shortDescription.toLowerCase().includes(query) ||
        evt.organizer.toLowerCase().includes(query) ||
        evt.venue.toLowerCase().includes(query) ||
        evt.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Sort
    filtered.sort((a, b) => {
      if (state.sortBy === "date-asc") {
        return new Date(a.date) - new Date(b.date);
      } else if (state.sortBy === "date-desc") {
        return new Date(b.date) - new Date(a.date);
      } else if (state.sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (state.sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    // Update Status Bar
    if (elements.resultsCount) {
      elements.resultsCount.textContent = `Showing ${filtered.length} of ${EVENTS_DATA.length} events`;
    }

    if (elements.activeFilterTags) {
      let tagsHTML = "";
      if (category !== "all") {
        tagsHTML += `<span class="filter-badge-tag"><i class="fa-solid fa-tag"></i> ${category}</span>`;
      }
      if (query) {
        tagsHTML += `<span class="filter-badge-tag"><i class="fa-solid fa-magnifying-glass"></i> "${query}"</span>`;
      }
      elements.activeFilterTags.innerHTML = tagsHTML;
    }

    // Render cards or empty state
    if (filtered.length === 0) {
      elements.eventsGrid.innerHTML = "";
      elements.emptyState.classList.remove("hidden");
    } else {
      elements.emptyState.classList.add("hidden");
      elements.eventsGrid.innerHTML = filtered.map(evt => createEventCardHTML(evt, false)).join('');
    }
  }

  function populateEventSelectOptions() {
    if (!elements.regEventSelect) return;
    elements.regEventSelect.innerHTML = `
      <option value="" disabled selected>-- Choose an Event --</option>
      ${EVENTS_DATA.map(evt => `
        <option value="${evt.id}">${evt.title} (${evt.category} - ${evt.date})</option>
      `).join('')}
    `;
  }

  /* --------------------------------------------------------------------------
   * 9. HERO COUNTDOWN TIMER
   * -------------------------------------------------------------------------- */
  function initHeroCountdown() {
    // Target event: TechNova 2026 Summit (Nov 20, 2026, 09:30 AM IST)
    const targetEvent = EVENTS_DATA[0];
    const targetDate = new Date("2026-11-20T09:30:00+05:30").getTime();

    if (elements.countdownEventTitle) elements.countdownEventTitle.textContent = targetEvent.title;
    if (elements.countdownCategory) elements.countdownCategory.textContent = targetEvent.category;

    if (elements.heroCountdownRegisterBtn) {
      elements.heroCountdownRegisterBtn.onclick = () => openRegistrationModal(targetEvent.id);
    }

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        if (elements.daysElem) elements.daysElem.textContent = "00";
        if (elements.hoursElem) elements.hoursElem.textContent = "00";
        if (elements.minutesElem) elements.minutesElem.textContent = "00";
        if (elements.secondsElem) elements.secondsElem.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (elements.daysElem) elements.daysElem.textContent = String(days).padStart(2, "0");
      if (elements.hoursElem) elements.hoursElem.textContent = String(hours).padStart(2, "0");
      if (elements.minutesElem) elements.minutesElem.textContent = String(minutes).padStart(2, "0");
      if (elements.secondsElem) elements.secondsElem.textContent = String(seconds).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* --------------------------------------------------------------------------
   * 10. MODAL MANAGEMENT (ACCESSIBLE OPEN / CLOSE)
   * -------------------------------------------------------------------------- */
  let activeModal = null;

  function openModal(modalBackdrop) {
    if (!modalBackdrop) return;
    if (activeModal && activeModal !== modalBackdrop) {
      closeModal(activeModal);
    }
    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    activeModal = modalBackdrop;
  }

  function closeModal(modalBackdrop) {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (activeModal === modalBackdrop) {
      activeModal = null;
    }
  }

  function closeAllModals() {
    if (activeModal) {
      closeModal(activeModal);
    }
  }

  // Event Details Modal
  let currentModalEvent = null;

  function openEventDetailsModal(eventId) {
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (!event) return;

    currentModalEvent = event;

    elements.modalEventImg.src = event.image;
    elements.modalEventImg.onerror = () => { elements.modalEventImg.src = FALLBACK_IMAGE; };
    elements.modalEventCategory.textContent = event.category;
    elements.modalEventCategory.className = `event-badge ${getCategoryBadgeClass(event.category)}`;
    elements.modalEventOrganizer.innerHTML = `<i class="fa-solid fa-building-columns"></i> Organized by ${event.organizer}`;
    elements.modalEventTitle.textContent = event.title;
    elements.modalEventDate.textContent = event.displayDate;
    elements.modalEventTime.textContent = event.time;
    elements.modalEventVenue.textContent = event.venue;
    elements.modalEventFullDesc.textContent = event.fullDescription;

    if (elements.modalHighlightsList) {
      elements.modalHighlightsList.innerHTML = event.highlights.map(hl => `
        <li><i class="fa-solid fa-circle-check"></i> ${hl}</li>
      `).join('');
    }

    elements.modalRegisterBtn.onclick = () => {
      closeModal(elements.eventModalBackdrop);
      openRegistrationModal(event.id);
    };

    elements.modalShareBtn.onclick = () => {
      shareEvent(event);
    };

    openModal(elements.eventModalBackdrop);
  }

  function shareEvent(event) {
    if (navigator.share) {
      navigator.share({
        title: `EventNest: ${event.title}`,
        text: event.shortDescription,
        url: window.location.href
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link Copied", "Event page URL has been copied to your clipboard.", "info");
    }
  }

  // Registration Modal
  function openRegistrationModal(preSelectedEventId = "") {
    resetRegistrationFormErrors();
    elements.registrationForm.reset();

    if (preSelectedEventId) {
      elements.regEventSelect.value = preSelectedEventId;
    }

    openModal(elements.regModalBackdrop);
  }

  function resetRegistrationFormErrors() {
    elements.regEventError.textContent = "";
    elements.regFullNameError.textContent = "";
    elements.regEmailError.textContent = "";
    elements.regPhoneError.textContent = "";

    elements.regEventSelect.classList.remove("error");
    elements.regFullName.classList.remove("error");
    elements.regEmail.classList.remove("error");
    elements.regPhone.classList.remove("error");
  }

  // Ticket / Confirmation Modal
  function openTicketModal(registration) {
    elements.ticketPassId.textContent = registration.passId;
    elements.ticketEventTitle.textContent = registration.eventTitle;
    elements.ticketDate.textContent = registration.eventDate;
    elements.ticketTime.textContent = registration.eventTime;
    elements.ticketVenue.textContent = registration.eventVenue;
    elements.ticketCategory.textContent = registration.eventCategory;
    elements.ticketAttendeeName.textContent = registration.fullName;
    elements.ticketAttendeeEmail.textContent = registration.email;
    elements.ticketAttendeePhone.textContent = "+91 " + registration.phone;

    openModal(elements.ticketModalBackdrop);
  }

  // My Registrations Modal
  function openMyRegistrationsModal() {
    renderMyRegistrationsList();
    openModal(elements.myRegsModalBackdrop);
  }

  function renderMyRegistrationsList() {
    if (state.registrations.length === 0) {
      elements.myRegsList.innerHTML = "";
      elements.emptyRegsState.classList.remove("hidden");
    } else {
      elements.emptyRegsState.classList.add("hidden");
      elements.myRegsList.innerHTML = state.registrations.map(reg => `
        <div class="my-reg-item" data-pass-id="${reg.passId}">
          <div>
            <h4 class="reg-info-title">${reg.eventTitle}</h4>
            <div class="reg-info-meta">
              <span class="reg-pass-id">${reg.passId}</span>
              <span><i class="fa-regular fa-calendar"></i> ${reg.eventDate}</span>
              <span><i class="fa-solid fa-location-dot"></i> ${reg.eventVenue.split('&')[0]}</span>
              <span><i class="fa-regular fa-user"></i> ${reg.fullName}</span>
            </div>
          </div>
          <div class="reg-item-actions">
            <button type="button" class="btn-view-pass" data-pass-id="${reg.passId}">
              <i class="fa-solid fa-id-badge"></i> Pass
            </button>
            <button type="button" class="btn-cancel-pass" data-pass-id="${reg.passId}" title="Cancel Pass">
              <i class="fa-solid fa-trash-can"></i> Cancel
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  /* --------------------------------------------------------------------------
   * 11. FORM VALIDATION & REGISTRATION WORKFLOW
   * -------------------------------------------------------------------------- */
  function handleRegistrationSubmit(e) {
    e.preventDefault();
    resetRegistrationFormErrors();

    const eventId = elements.regEventSelect.value.trim();
    const fullName = elements.regFullName.value.trim();
    const email = elements.regEmail.value.trim().toLowerCase();
    const phone = elements.regPhone.value.trim();

    let isValid = true;

    // Validate Event Selection
    if (!eventId) {
      elements.regEventError.textContent = "Please choose an event to attend.";
      elements.regEventSelect.classList.add("error");
      isValid = false;
    }

    // Validate Full Name
    if (!fullName) {
      elements.regFullNameError.textContent = "Full name is required.";
      elements.regFullName.classList.add("error");
      isValid = false;
    } else if (fullName.length < 2) {
      elements.regFullNameError.textContent = "Please enter at least 2 characters.";
      elements.regFullName.classList.add("error");
      isValid = false;
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      elements.regEmailError.textContent = "Email address is required.";
      elements.regEmail.classList.add("error");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      elements.regEmailError.textContent = "Please enter a valid email address (e.g. name@example.com).";
      elements.regEmail.classList.add("error");
      isValid = false;
    }

    // Validate Indian 10-Digit Mobile Number (starting with 6, 7, 8, or 9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) {
      elements.regPhoneError.textContent = "10-digit mobile number is required.";
      elements.regPhone.classList.add("error");
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      elements.regPhoneError.textContent = "Must be a valid 10-digit Indian number starting with 6, 7, 8, or 9.";
      elements.regPhone.classList.add("error");
      isValid = false;
    }

    if (!isValid) return;

    // Prevent DUPLICATE REGISTRATION for the same email and event combination!
    const isDuplicate = state.registrations.some(reg =>
      reg.eventId === eventId && reg.email.toLowerCase() === email
    );

    if (isDuplicate) {
      elements.regEmailError.textContent = "You are already registered for this event with this email address.";
      elements.regEmail.classList.add("error");
      showToast(
        "Duplicate Registration",
        "You have already reserved a pass for this event using this email.",
        "error"
      );
      return;
    }

    // Lookup event details
    const targetEvent = EVENTS_DATA.find(e => e.id === eventId);
    if (!targetEvent) return;

    // Generate unique Registration ID: e.g. EN-2026-4821
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const passId = `EN-2026-${randomCode}`;

    const newRegistration = {
      passId: passId,
      eventId: targetEvent.id,
      eventTitle: targetEvent.title,
      eventCategory: targetEvent.category,
      eventDate: targetEvent.displayDate,
      eventTime: targetEvent.time,
      eventVenue: targetEvent.venue,
      fullName: fullName,
      email: email,
      phone: phone,
      timestamp: new Date().toISOString()
    };

    // Store to state & LocalStorage
    state.registrations.unshift(newRegistration);
    saveRegistrationsToStorage();

    // Close registration modal & open ticket confirmation modal
    closeModal(elements.regModalBackdrop);
    openTicketModal(newRegistration);

    showToast(
      "Registration Confirmed!",
      `Pass ${passId} has been successfully saved to your device.`,
      "success"
    );
  }

  function handleCancelRegistration(passId) {
    const confirmCancel = confirm(`Are you sure you want to cancel event pass ${passId}?`);
    if (!confirmCancel) return;

    state.registrations = state.registrations.filter(r => r.passId !== passId);
    saveRegistrationsToStorage();
    renderMyRegistrationsList();

    showToast("Pass Cancelled", `Event pass ${passId} has been removed.`, "info");
  }

  /* --------------------------------------------------------------------------
   * 12. CONTACT & NEWSLETTER FORMS
   * -------------------------------------------------------------------------- */
  function handleContactSubmit(e) {
    e.preventDefault();

    elements.contactNameError.textContent = "";
    elements.contactEmailError.textContent = "";
    elements.contactSubjectError.textContent = "";
    elements.contactMessageError.textContent = "";

    const name = elements.contactName.value.trim();
    const email = elements.contactEmail.value.trim();
    const subject = elements.contactSubject.value.trim();
    const message = elements.contactMessage.value.trim();

    let isValid = true;

    if (!name) {
      elements.contactNameError.textContent = "Your full name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      elements.contactEmailError.textContent = "A valid email address is required.";
      isValid = false;
    }

    if (!subject) {
      elements.contactSubjectError.textContent = "Please enter a subject.";
      isValid = false;
    }

    if (!message || message.length < 10) {
      elements.contactMessageError.textContent = "Please write a message with at least 10 characters.";
      isValid = false;
    }

    if (!isValid) return;

    elements.contactForm.reset();
    showToast(
      "Message Sent!",
      `Thank you, ${name}! The EventNest organizing committee will contact you shortly.`,
      "success"
    );
  }

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    if (elements.newsletterError) elements.newsletterError.textContent = "";

    const email = elements.newsletterEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      if (elements.newsletterError) {
        elements.newsletterError.textContent = "Please enter a valid email address.";
      }
      return;
    }

    elements.newsletterForm.reset();
    showToast(
      "Subscribed!",
      "You are now subscribed to EventNest event dispatch announcements.",
      "success"
    );
  }

  /* --------------------------------------------------------------------------
   * 13. TOAST NOTIFICATIONS HELPER
   * -------------------------------------------------------------------------- */
  function showToast(title, message, type = "info") {
    if (!elements.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconClass = "fa-circle-info";
    if (type === "success") iconClass = "fa-circle-check";
    if (type === "error") iconClass = "fa-triangle-exclamation";

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button type="button" class="toast-close-btn" aria-label="Close notification">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    const closeBtn = toast.querySelector(".toast-close-btn");
    closeBtn.onclick = () => removeToast(toast);

    elements.toastContainer.appendChild(toast);

    // Auto remove after 4.5 seconds
    setTimeout(() => {
      removeToast(toast);
    }, 4500);
  }

  function removeToast(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.add("hide");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }

  /* --------------------------------------------------------------------------
   * 14. EVENT LISTENERS
   * -------------------------------------------------------------------------- */
  function setupEventListeners() {
    // Theme Toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener("click", toggleTheme);
    }

    // Mobile Navigation Drawer
    if (elements.mobileToggleBtn) {
      elements.mobileToggleBtn.addEventListener("click", () => {
        elements.mobileDrawer.classList.toggle("open");
        elements.drawerOverlay.classList.toggle("active");
        const isOpen = elements.mobileDrawer.classList.contains("open");
        elements.mobileToggleBtn.setAttribute("aria-expanded", isOpen);
      });
    }

    if (elements.drawerCloseBtn) {
      elements.drawerCloseBtn.addEventListener("click", closeMobileDrawer);
    }
    if (elements.drawerOverlay) {
      elements.drawerOverlay.addEventListener("click", closeMobileDrawer);
    }

    // Close mobile drawer on link click
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", closeMobileDrawer);
    });

    function closeMobileDrawer() {
      elements.mobileDrawer.classList.remove("open");
      elements.drawerOverlay.classList.remove("active");
      if (elements.mobileToggleBtn) {
        elements.mobileToggleBtn.setAttribute("aria-expanded", "false");
      }
    }

    // My Registrations Buttons
    if (elements.myRegistrationsBtn) {
      elements.myRegistrationsBtn.addEventListener("click", openMyRegistrationsModal);
    }
    if (elements.mobileMyPassesBtn) {
      elements.mobileMyPassesBtn.addEventListener("click", () => {
        closeMobileDrawer();
        openMyRegistrationsModal();
      });
    }

    // Search Input
    if (elements.searchInput) {
      elements.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.trim().length > 0) {
          elements.clearSearchBtn.classList.add("show");
        } else {
          elements.clearSearchBtn.classList.remove("show");
        }
        filterAndRenderEvents();
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener("click", () => {
        elements.searchInput.value = "";
        state.searchQuery = "";
        elements.clearSearchBtn.classList.remove("show");
        filterAndRenderEvents();
        elements.searchInput.focus();
      });
    }

    // Sort Select
    if (elements.sortSelect) {
      elements.sortSelect.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        filterAndRenderEvents();
      });
    }

    // Category Filter Pills
    if (elements.categoryFilters) {
      elements.categoryFilters.addEventListener("click", (e) => {
        const pill = e.target.closest(".category-pill, .filter-pill");
        if (!pill) return;

        document.querySelectorAll(".category-pill, .filter-pill").forEach(btn => {
          btn.classList.remove("active");
          btn.setAttribute("aria-selected", "false");
        });

        pill.classList.add("active");
        pill.setAttribute("aria-selected", "true");

        state.selectedCategory = pill.getAttribute("data-category");
        filterAndRenderEvents();
      });
    }

    // Clear All Filters
    if (elements.clearAllFiltersBtn) {
      elements.clearAllFiltersBtn.addEventListener("click", resetAllFilters);
    }
    if (elements.emptyResetBtn) {
      elements.emptyResetBtn.addEventListener("click", resetAllFilters);
    }

    function resetAllFilters() {
      state.searchQuery = "";
      state.selectedCategory = "all";
      if (elements.searchInput) elements.searchInput.value = "";
      if (elements.clearSearchBtn) elements.clearSearchBtn.classList.remove("show");

      document.querySelectorAll(".category-pill, .filter-pill").forEach(btn => {
        const cat = btn.getAttribute("data-category");
        if (cat === "all") {
          btn.classList.add("active");
          btn.setAttribute("aria-selected", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("aria-selected", "false");
        }
      });

      filterAndRenderEvents();
      showToast("Filters Reset", "Showing all 10 scheduled events.", "info");
    }

    // Footer Category Links Click Helper
    document.querySelectorAll("[data-footer-category]").forEach(link => {
      link.addEventListener("click", (e) => {
        const targetCategory = link.getAttribute("data-footer-category");
        const matchingPill = document.querySelector(`.category-pill[data-category="${targetCategory}"], .filter-pill[data-category="${targetCategory}"]`);
        if (matchingPill) {
          matchingPill.click();
        }
      });
    });

    // Delegated Clicks on Event Cards (View Details & Register)
    document.addEventListener("click", (e) => {
      const detailsBtn = e.target.closest(".view-details-btn");
      if (detailsBtn) {
        const id = detailsBtn.getAttribute("data-id");
        openEventDetailsModal(id);
        return;
      }

      const registerBtn = e.target.closest(".register-card-btn");
      if (registerBtn) {
        const id = registerBtn.getAttribute("data-id");
        openRegistrationModal(id);
        return;
      }

      const viewPassBtn = e.target.closest(".btn-view-pass");
      if (viewPassBtn) {
        const passId = viewPassBtn.getAttribute("data-pass-id");
        const reg = state.registrations.find(r => r.passId === passId);
        if (reg) {
          closeModal(elements.myRegsModalBackdrop);
          openTicketModal(reg);
        }
        return;
      }

      const cancelPassBtn = e.target.closest(".btn-cancel-pass");
      if (cancelPassBtn) {
        const passId = cancelPassBtn.getAttribute("data-pass-id");
        handleCancelRegistration(passId);
        return;
      }
    });

    // Modal Close Buttons
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener("click", () => closeModal(elements.eventModalBackdrop));
    }
    if (elements.regModalCloseBtn) {
      elements.regModalCloseBtn.addEventListener("click", () => closeModal(elements.regModalBackdrop));
    }
    if (elements.ticketCloseBtn) {
      elements.ticketCloseBtn.addEventListener("click", () => closeModal(elements.ticketModalBackdrop));
    }
    if (elements.myRegsCloseBtn) {
      elements.myRegsCloseBtn.addEventListener("click", () => closeModal(elements.myRegsModalBackdrop));
    }
    if (elements.closeMyRegsModalBtn) {
      elements.closeMyRegsModalBtn.addEventListener("click", () => closeModal(elements.myRegsModalBackdrop));
    }

    // Close modals on clicking backdrop
    [
      elements.eventModalBackdrop,
      elements.regModalBackdrop,
      elements.ticketModalBackdrop,
      elements.myRegsModalBackdrop
    ].forEach(backdrop => {
      if (!backdrop) return;
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          closeModal(backdrop);
        }
      });
    });

    // Close modals on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllModals();
        closeMobileDrawer();
      }
    });

    // Print Ticket Button
    if (elements.printTicketBtn) {
      elements.printTicketBtn.addEventListener("click", () => {
        window.print();
      });
    }

    // Register Another Event Button
    if (elements.registerAnotherBtn) {
      elements.registerAnotherBtn.addEventListener("click", () => {
        closeModal(elements.ticketModalBackdrop);
        openRegistrationModal();
      });
    }

    // Browse Events from empty registrations button
    if (elements.browseEventsFromRegsBtn) {
      elements.browseEventsFromRegsBtn.addEventListener("click", () => {
        closeModal(elements.myRegsModalBackdrop);
        const eventsSection = document.getElementById("events");
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Registration Form Submit
    if (elements.registrationForm) {
      elements.registrationForm.addEventListener("submit", handleRegistrationSubmit);
    }

    // Contact Form Submit
    if (elements.contactForm) {
      elements.contactForm.addEventListener("submit", handleContactSubmit);
    }

    // Newsletter Form Submit
    if (elements.newsletterForm) {
      elements.newsletterForm.addEventListener("submit", handleNewsletterSubmit);
    }

    // Back to Top Button
    if (elements.backToTopBtn) {
      elements.backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Scroll listener for Header elevation & Back to Top
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (elements.header) {
        if (scrollY > 40) {
          elements.header.classList.add("scrolled");
        } else {
          elements.header.classList.remove("scrolled");
        }
      }

      if (elements.backToTopBtn) {
        if (scrollY > 350) {
          elements.backToTopBtn.classList.add("show");
        } else {
          elements.backToTopBtn.classList.remove("show");
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 15. SCROLL SPY FOR ACTIVE NAVIGATION LINKS
   * -------------------------------------------------------------------------- */
  function setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let currentSectionId = "";
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute("id");
        }
      });

      if (!currentSectionId && window.scrollY < 200) {
        currentSectionId = "home";
      }

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 16. GENTLE SECTION VIEWPORT FADE-IN ANIMATIONS
   * -------------------------------------------------------------------------- */
  function initSectionReveal() {
    // Respect user's motion preference (prefers-reduced-motion)
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Ensure browser supports modern IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const targetSections = document.querySelectorAll(
      ".section-featured, .section-events, .section-about, .section-contact"
    );

    if (!targetSections.length) return;

    // Enable CSS animation styles only after JS confirms support
    // (guarantees content is NEVER hidden if JS fails or is disabled)
    document.documentElement.classList.add("reveal-enabled");

    targetSections.forEach(section => {
      section.classList.add("section-reveal");
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });

    targetSections.forEach(section => observer.observe(section));
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

