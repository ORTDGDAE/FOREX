/* ============================================
   FOREXKH - UX/UI PRO MAX Script
   ============================================ */

// Language translations
const translations = {
    en: {
        // Navigation
        navFeatures: "Features",
        navPricing: "Pricing",
        navAbout: "About",
        navContact: "Contact",
        btnLogin: "Log In",
        btnGetStarted: "Get Started",

        // Hero Section
        heroBadge: "Live Trading Platform",
        heroTitle1: "Master the",
        heroTitleHighlight: "Forex Market",
        heroTitle2: "with Confidence",
        heroDesc: "Our Bots-powered trading platform continuously monitors the market, detects high-probability opportunities, evaluates risk, and delivers institutional-grade insights—helping you make informed decisions with greater confidence. Join thousands of traders who trust FOREXKH for real-time signals, advanced analytics, and professional trading tools. Start your journey to financial freedom today.",
        btnFreeTrial: "Start Free Trial",
        btnWatchDemo: "Watch Demo",
        stat1Label: "Active Traders",
        stat2Label: "Success Rate",
        stat3Label: "Daily Volume",
        chartLabel: "Gold / US Dollar",
        profitLabel: "Today's Profit",
        winRateLabel: "Win Rate",

        // Features Section
        featuresTag: "Why Choose FOREXKH",
        featuresTitle: "Powerful Trading Tools",
        featuresSubtitle: "Everything you need to succeed in the forex market, backed by cutting-edge technology and expert analysis.",
        feature1Title: "Real-Time Signals",
        feature1Desc: "Receive instant trading signals with precise entry, stop-loss, and take-profit levels. Never miss an opportunity.",
        feature2Title: "Advanced Analytics",
        feature2Desc: "Deep market analysis with AI-powered predictions. Stay ahead of market trends with our proprietary algorithms.",
        feature3Title: "Risk Management",
        feature3Desc: "Professional risk management tools to protect your capital. Smart position sizing and automated stop-losses.",
        feature4Title: "Expert Community",
        feature4Desc: "Join a thriving community of traders. Share strategies, learn from experts, and grow together.",
        feature5Title: "Mobile Trading",
        feature5Desc: "Trade anywhere, anytime with our mobile-optimized platform. Full functionality at your fingertips.",
        feature6Title: "Education Hub",
        feature6Desc: "Comprehensive learning resources from beginner to advanced. Video courses, webinars, and trading guides.",

        // Testimonials
        testimonialsTag: "Trusted by Traders",
        testimonialsTitle: "What Our Traders Say",
        testimonialsSubtitle: "Join thousands of satisfied traders who have transformed their trading with FOREXKH.",
        testimonial1Text: "FOREXKH completely changed my trading game. The signals are incredibly accurate, and the community support is amazing!",
        testimonial1Name: "Sokha Chann",
        testimonial1Role: "Professional Trader",
        testimonial2Text: "The AI-powered analytics helped me increase my win rate from 45% to 78% in just two months. Best investment ever!",
        testimonial2Name: "Dara Meas",
        testimonial2Role: "Forex Enthusiast",
        testimonial3Text: "As a beginner, the education hub and risk management tools gave me the confidence to start trading. Highly recommended!",
        testimonial3Name: "Bopha Kem",
        testimonial3Role: "New Trader",

        // Pricing Section
        pricingTag: "Simple Pricing",
        pricingTitle: "Start Your Trading Journey",
        pricingSubtitle: "No hidden fees. Cancel anytime. Start with a free 7-day trial.",
        pricingPlan: "Pro Trader Plan",
        trialBadge: "7-Day Free Trial",
        priceFeature1: "Unlimited Trading Signals",
        priceFeature2: "Real-Time Market Analysis",
        priceFeature3: "AI-Powered Predictions",
        priceFeature4: "Risk Management Tools",
        priceFeature5: "Mobile App Access",
        priceFeature6: "24/7 Customer Support",
        priceFeature7: "Educational Resources",
        priceFeature8: "Private Community Access",
        guaranteeText: "Cancel anytime • No commitment required",

        // Trust Section
        trust1: "Bank-Level Security",
        trust2: "24/7 Support",
        trust3: "99.9% Uptime",
        trust4: "Encrypted Data",

        // CTA Section
        ctaTitle: "Ready to Transform Your Trading?",
        ctaDesc: "Join 50,000+ traders who are already profiting with FOREXKH. Start your free trial today.",
        btnGetStartedFree: "Get Started Free",
        btnContactSales: "Contact Sales",

        // Footer
        footerDesc: "Empowering traders worldwide with cutting-edge technology and expert analysis.",
        footerProduct: "Product",
        footerCompany: "Company",
        footerLegal: "Legal",
        footerFeature: "Features",
        footerPricing: "Pricing",
        footerSignals: "Signals",
        footerAnalytics: "Analytics",
        footerAbout: "About Us",
        footerCareers: "Careers",
        footerPress: "Press",
        footerBlog: "Blog",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerCookies: "Cookies",
        footerSupport: "Support",
        footerCopyright: "© 2026 FOREXKH. All rights reserved.",

        // Login Modal
        loginTitle: "Welcome Back",
        loginSubtitle: "Log in to your FOREXKH account",
        btnGoogle: "Continue with Google",
        btnFacebook: "Continue with Facebook",
        dividerOr: "or",
        labelEmail: "Email",
        labelPassword: "Password",
        placeholderEmail: "Enter your email",
        placeholderPassword: "Enter your password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        btnLoginSubmit: "Log In",
        noAccount: "Don't have an account?",
        linkSignUp: "Sign Up",

        // Signup Modal
        signupTitle: "Create Account",
        signupSubtitle: "Start your 7-day free trial",
        btnGoogleSignup: "Sign up with Google",
        btnFacebookSignup: "Sign up with Facebook",
        labelFullName: "Full Name",
        placeholderFullName: "Enter your full name",
        placeholderCreatePassword: "Create a password",
        agreeTerms: "I agree to Terms",
        btnSignupSubmit: "Start Free Trial",
        haveAccount: "Already have an account?",
        linkLogin: "Log In"
    },
    kh: {
        // Navigation
        navFeatures: "មុខងារ",
        navPricing: "តម្លៃ",
        navAbout: "អំពីយើង",
        navContact: "ទំនាក់ទំនង",
        btnLogin: "ចូលគណនី",
        btnGetStarted: "ចាប់ផ្តើម",

        // Hero Section
        heroBadge: "វេទិកាជួញដូរផ្ទាល់",
        heroTitle1: "ជំនាញ",
        heroTitleHighlight: "ទីផ្សារ Forex",
        heroTitle2: "ជាមួយទំនុកចិត្ត",
        heroDesc: "ប្រព័ន្ធជួញដូរដែលដើរដោយបច្ចេកវិទ្យា Bot របស់យើង ធ្វើការតាមដានទីផ្សារជាប្រចាំ ដោយស្វែងរកឱកាសដែលផ្តល់ផលចំណេញខ្ពស់ វាយតម្លៃហានិភ័យ និងផ្តល់នូវការវិភាគស៊ីជម្រៅកម្រិតស្ថាប័ន ដើម្បីជួយអ្នកក្នុងការសម្រេចចិត្តប្រកបដោយទំនុកចិត្តខ្ពស់។ ចូលរួមជាមួយអាជីវកររាប់ពាន់នាក់ដែលជឿទុកចិត្តលើ FOREXKH សម្រាប់ទទួលបានសញ្ញាជួញដូរភ្លាមៗ (Real-time signals) ការវិភាគកម្រិតខ្ពស់ និងឧបករណ៍ជួញដូរអាជីព។ ចាប់ផ្តើមដំណើរឆ្ពោះទៅរកសេរីភាពហិរញ្ញវត្ថុរបស់អ្នកនៅថ្ងៃនេះ។",
        btnFreeTrial: "ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ",
        btnWatchDemo: "មើលការបង្ហាញ",
        stat1Label: "អ្នកជួញដូរសកម្ម",
        stat2Label: "អត្រាជោគជ័យ",
        stat3Label: "ទំហំប្រចាំថ្ងៃ",
        chartLabel: "មាស / ដុល្លារអាមេរិក",
        profitLabel: "ប្រាក់ចំណេញថ្ងៃនេះ",
        winRateLabel: "អត្រាឈ្នះ",

        // Features Section
        featuresTag: "ហេតុអ្វីជ្រើសរើស FOREXKH",
        featuresTitle: "ឧបករណ៍ជួញដូរដ៏មានអានុភាព",
        featuresSubtitle: "អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីជោគជ័យក្នុងទីផ្សារ forex ដោយមានការគាំទ្រពីបច្ចេកវិទ្ទាទំនើប និងការវិភាគអ្នកជំនាញ។",
        feature1Title: "សញ្ញាជួញដូរជាក់ស្តែង",
        feature1Desc: "ទទួលសញ្ញាជួញដូរភ្លាមៗជាមួយកម្រិតចូល បញ្ឈប់ការខាតបង់ និងយកប្រាក់ចំណេញ។ កុំខកខានឱកាសណាមួយ។",
        feature2Title: "ការវិភាគកម្រិតខ្ពស់",
        feature2Desc: "ការវិភាគទីផ្សារស៊ីជម្រៅជាមួយការព្យាករណ៍ដោយ AI។ នាំមុខគេក្នុងនិន្នាការទីផ្សារជាមួយក្បួនដោះស្រាយផ្ទាល់ខ្លួន។",
        feature3Title: "ការគ្រប់គ្រងហានិភ័យ",
        feature3Desc: "ឧបករណ៍គ្រប់គ្រងហានិភ័យវិជ្ជាជីវៈដើម្បីការពារមូលធនរបស់អ្នក។ ការកំណត់ទំហំទីតាំងឆ្លាតវៃ និងការបញ្ឈប់ការខាតបង់ដោយស្វ័យប្រវត្តិ។",
        feature4Title: "សហគមន៍អ្នកជំនាញ",
        feature4Desc: "ចូលរួមសហគមន៍អ្នកជួញដូរដែលរីកចម្រើន។ ចែករំលែកយុទ្ធសាស្ត្រ រៀនពីអ្នកជំនាញ និងរីកលូតលាស់ជាមួយគ្នា។",
        feature5Title: "ការជួញដូរលើទូរស័ព្ទ",
        feature5Desc: "ជួញដូរគ្រប់ទីកន្លែង គ្រប់ពេលវេលាជាមួយវេទិកាដែលបានបង្កើនប្រសិទ្ធភាពសម្រាប់ទូរស័ព្ទ។ មុខងារពេញលេញនៅចុងម្រាមដៃរបស់អ្នក។",
        feature6Title: "មជ្ឈមណ្ឌលអប់រំ",
        feature6Desc: "ធនធានរៀនសូត្រគ្រប់ជ្រុងជ្រោយពីអ្នកចាប់ផ្តើមដល់កម្រិតខ្ពស់។ វគ្គសិក្សាវីដេអូ សិក្ខាសាលា និងមគ្គុទ្ទេសក៍ជួញដូរ។",

        // Testimonials
        testimonialsTag: "ទុកចិត្តដោយអ្នកជួញដូរ",
        testimonialsTitle: "អ្វីដែលអ្នកជួញដូររបស់យើងនិយាយ",
        testimonialsSubtitle: "ចូលរួមជាមួយអ្នកជួញដូររាប់ពាន់នាក់ដែលពេញចិត្តដែលបានផ្លាស់ប្តូរការជួញដូររបស់ពួកគេជាមួយ FOREXKH។",
        testimonial1Text: "FOREXKH បានផ្លាស់ប្តូរល្បែងជួញដូររបស់ខ្ញុំទាំងស្រុង។ សញ្ញាមានភាពត្រឹមត្រូវយ៉ាងគួរឱ្យភ្ញាក់ផ្អើល ហើយការគាំទ្រសហគមន៍គឺអស្ចារ្យ!",
        testimonial1Name: "សុខា ចាន់",
        testimonial1Role: "អ្នកជួញដូរវិជ្ជាជីវៈ",
        testimonial2Text: "ការវិភាគដោយ AI បានជួយខ្ញុំបង្កើនអត្រាឈ្នះពី ៤៥% ទៅ ៧៨% ក្នុងរយៈពេលពីរខែប៉ុណ្ណោះ។ ការវិនិយោគល្អបំផុត!",
        testimonial2Name: "ដារ៉ា មាស",
        testimonial2Role: "អ្នកចូលចិត្ត Forex",
        testimonial3Text: "ក្នុងនាមជាអ្នកចាប់ផ្តើម មជ្ឈមណ្ឌលអប់រំ និងឧបករណ៍គ្រប់គ្រងហានិភ័យបានផ្តល់ទំនុកចិត្តដល់ខ្ញុំក្នុងការចាប់ផ្តើមជួញដូរ។ ណែនាំខ្លាំង!",
        testimonial3Name: "បុប្ផា កែម",
        testimonial3Role: "អ្នកជួញដូរថ្មី",

        // Pricing Section
        pricingTag: "តម្លៃសាមញ្ញ",
        pricingTitle: "ចាប់ផ្តើមដំណើរជួញដូររបស់អ្នក",
        pricingSubtitle: "គ្មានថ្លៃលាក់កំបាំង។ លុបចោលបានគ្រប់ពេល។ ចាប់ផ្តើមជាមួយការសាកល្បងឥតគិតថ្លៃ ៧ថ្ងៃ។",
        pricingPlan: "គម្រោង Pro Trader",
        trialBadge: "សាកល្បងឥតគិតថ្លៃ ៧ថ្ងៃ",
        priceFeature1: "សញ្ញាជួញដូរគ្មានដែនកំណត់",
        priceFeature2: "ការវិភាគទីផ្សារជាក់ស្តែង",
        priceFeature3: "ការព្យាករណ៍ដោយ AI",
        priceFeature4: "ឧបករណ៍គ្រប់គ្រងហានិភ័យ",
        priceFeature5: "ការចូលប្រើកម្មវិធីទូរស័ព្ទ",
        priceFeature6: "ការគាំទ្រអតិថិជន ២៤/៧",
        priceFeature7: "ធនធានអប់រំ",
        priceFeature8: "ការចូលរួមសហគមន៍ឯកជន",
        guaranteeText: "លុបចោលបានគ្រប់ពេល • គ្មានការប្តេជ្ញា",

        // Trust Section
        trust1: "សុវត្ថិភាពធនាគារ",
        trust2: "គាំទ្រ ២៤/៧",
        trust3: "ដំណើរការ ៩៩.៩%",
        trust4: "ទិន្នន័យអ៊ិនគ្រីប",

        // CTA Section
        ctaTitle: "តើអ្នករួចរាល់ក្នុងការផ្លាស់ប្តូរការជួញដូររបស់អ្នកទេ?",
        ctaDesc: "ចូលរួមជាមួយអ្នកជួញដូរ ៥០,០០០+ ដែលកំពុងរកប្រាក់ចំណេញជាមួយ FOREXKH។ ចាប់ផ្តើមការសាកល្បងឥតគិតថ្លៃថ្ងៃនេះ។",
        btnGetStartedFree: "ចាប់ផ្តើមឥតគិតថ្លៃ",
        btnContactSales: "ទំនាក់ទំនងផ្នែកលក់",

        // Footer
        footerDesc: "ផ្តល់អំណាចដល់អ្នកជួញដូរទូទាំងពិភពលោកជាមួយបច្ចេកវិទ្ទាទំនើប និងការវិភាគអ្នកជំនាញ។",
        footerProduct: "ផលិតផល",
        footerCompany: "ក្រុមហ៊ុន",
        footerLegal: "ច្បាប់",
        footerFeature: "មុខងារ",
        footerPricing: "តម្លៃ",
        footerSignals: "សញ្ញា",
        footerAnalytics: "ការវិភាគ",
        footerAbout: "អំពីយើង",
        footerCareers: "អាជីព",
        footerPress: "សារព័ត៌មាន",
        footerBlog: "ប្លុក",
        footerPrivacy: "គោលនយោបាយភាពឯកជន",
        footerTerms: "លក្ខខណ្ឌសេវាកម្ម",
        footerCookies: "ខូឃី",
        footerSupport: "ការគាំទ្រ",
        footerCopyright: "© ២០២៦ FOREXKH។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",

        // Login Modal
        loginTitle: "សូមស្វាគមន៍ត្រឡប់មកវិញ",
        loginSubtitle: "ចូលគណនី FOREXKH របស់អ្នក",
        btnGoogle: "បន្តជាមួយ Google",
        btnFacebook: "បន្តជាមួយ Facebook",
        dividerOr: "ឬ",
        labelEmail: "អ៊ីមែល",
        labelPassword: "ពាក្យសម្ងាត់",
        placeholderEmail: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
        placeholderPassword: "បញ្ចូលពាក្យសម្ងាត់របស់អ្នក",
        rememberMe: "ចងចាំខ្ញុំ",
        forgotPassword: "ភ្លេចពាក្យសម្ងាត់?",
        btnLoginSubmit: "ចូលគណនី",
        noAccount: "មិនមានគណនី?",
        linkSignUp: "ចុះឈ្មោះ",

        // Signup Modal
        signupTitle: "បង្កើតគណនី",
        signupSubtitle: "ចាប់ផ្តើមការសាកល្បងឥតគិតថ្លៃ ៧ថ្ងៃរបស់អ្នក",
        btnGoogleSignup: "ចុះឈ្មោះជាមួយ Google",
        btnFacebookSignup: "ចុះឈ្មោះជាមួយ Facebook",
        labelFullName: "ឈ្មោះពេញ",
        placeholderFullName: "បញ្ចូលឈ្មោះពេញរបស់អ្នក",
        placeholderCreatePassword: "បង្កើតពាក្យសម្ងាត់",
        agreeTerms: "ខ្ញុំយល់ព្រមលើលក្ខខណ្ឌ",
        btnSignupSubmit: "ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ",
        haveAccount: "មានគណនីរួចហើយ?",
        linkLogin: "ចូលគណនី"
    }
};

// Current language state
let currentLang = 'en';

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNavbar();
    initParticles();
    initScrollAnimations();
    initFeatureCards();
    initModals();
    initSmoothScroll();
    initLanguage();
    initTickerAnimation();
});

// ============================================
// Loading Screen
// ============================================
function initLoader() {
    const loader = document.querySelector('.loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    }
}

// ============================================
// Navbar
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// Particle Effect
// ============================================
function initParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        
        const colors = ['var(--neoblue-light)', 'var(--red-light)', 'var(--gold)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
    }
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Feature Cards - Mouse Follow Effect
// ============================================
function initFeatureCards() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });
}

// ============================================
// Modals
// ============================================
function initModals() {
    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(type) {
    toggleMobileMenu(true);
    const modal = document.getElementById(type === 'login' ? 'loginModal' : 'signupModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

function switchModal(type) {
    closeModal();
    setTimeout(() => openModal(type), 200);
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                return;
            }
            try {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } catch (err) {
                // Ignore invalid or non-matching selectors
            }
        });
    });
}

// ============================================
// Language Switcher
// ============================================
function initLanguage() {
    const savedLang = localStorage.getItem('forexkh-lang') || 'en';
    switchLanguage(savedLang);
}

function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update body class for font
    document.body.classList.toggle('lang-kh', lang === 'kh');

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Save preference
    localStorage.setItem('forexkh-lang', lang);
}

// ============================================
// Ticker Animation
// ============================================
function initTickerAnimation() {
    const ticker = document.querySelector('.ticker-track');
    if (!ticker) return;

    // Clone ticker items for seamless loop
    const items = ticker.innerHTML;
    ticker.innerHTML = items + items;
}

// ============================================
// Ripple Effect
// ============================================
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    
    const rect = btn.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    
    btn.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

// ============================================
// Mobile & Tablet Navigation Drawer - PRO MAX
// ============================================
function toggleMobileMenu(forceClose = false) {
    const drawer = document.getElementById('mobileMenuDrawer');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuBtnIcon = document.querySelector('.mobile-menu-btn i');
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('active');
    if (isOpen || forceClose === true) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        if (menuBtnIcon) {
            menuBtnIcon.classList.remove('fa-times');
            menuBtnIcon.classList.add('fa-bars');
        }
    } else {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (menuBtnIcon) {
            menuBtnIcon.classList.remove('fa-bars');
            menuBtnIcon.classList.add('fa-times');
        }
    }
}

// Auto close drawer on viewport resize > 1023px
window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        toggleMobileMenu(true);
    }
});

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleMobileMenu(true);
    }
});

// ============================================
// Utility Functions
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced scroll handler
window.addEventListener('scroll', debounce(() => {
    // Any additional scroll-based animations
}, 10));
