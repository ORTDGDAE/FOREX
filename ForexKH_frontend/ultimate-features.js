/* ============================================
   FOREXKH - ULTIMATE FEATURES ENGINE
   Premium Experience Enhancements
   ============================================ */

// ============================================
// 1. CUSTOM CURSOR EFFECT
// ============================================
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        this.cursorRing = document.createElement('div');
        this.cursorRing.className = 'cursor-ring';
        
        document.body.appendChild(this.cursor);
        this.cursor.appendChild(this.cursorDot);
        this.cursor.appendChild(this.cursorRing);
        
        this.pos = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.speed = 0.15;
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        document.addEventListener('mousedown', () => {
            this.cursor.classList.add('clicking');
        });
        
        document.addEventListener('mouseup', () => {
            this.cursor.classList.remove('clicking');
        });
        
        // Hover effects for interactive elements
        const hoverElements = document.querySelectorAll('a, button, .btn, .feature-card, .pricing-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hovering'));
        });
        
        this.render();
    }
    
    render() {
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
        
        this.cursorDot.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px)`;
        this.cursorRing.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px)`;
        
        requestAnimationFrame(() => this.render());
    }
}

// ============================================
// 2. SCROLL PROGRESS INDICATOR
// ============================================
class ScrollProgress {
    constructor() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress';
        document.body.appendChild(this.progressBar);
        
        window.addEventListener('scroll', () => this.update());
    }
    
    update() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        this.progressBar.style.width = scrollPercent + '%';
    }
}

// ============================================
// 3. BACK TO TOP BUTTON
// ============================================
class BackToTop {
    constructor() {
        this.button = document.createElement('button');
        this.button.className = 'back-to-top';
        this.button.innerHTML = '<i class="fas fa-chevron-up"></i>';
        this.button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(this.button);
        
        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        window.addEventListener('scroll', () => this.toggle());
    }
    
    toggle() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }
}

// ============================================
// 4. ANIMATED COUNTERS
// ============================================
class AnimatedCounter {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number[data-count]');
        this.observed = new Set();
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.observed.has(entry.target)) {
                    this.observed.add(entry.target);
                    this.animate(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        this.counters.forEach(counter => observer.observe(counter));
    }
    
    animate(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.dataset.suffix || '';
        const prefix = element.dataset.prefix || '';
        const duration = 2000;
        const start = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            element.textContent = prefix + this.formatNumber(current) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        
        requestAnimationFrame(update);
    }
    
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    }
}

// ============================================
// 5. MAGNETIC BUTTONS
// ============================================
class MagneticButtons {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-primary, .btn-large');
        this.buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => this.handleMove(e, btn));
            btn.addEventListener('mouseleave', (e) => this.handleLeave(e, btn));
        });
    }
    
    handleMove(e, btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    }
    
    handleLeave(e, btn) {
        btn.style.transform = 'translate(0, 0)';
    }
}

// ============================================
// 6. TILT EFFECT ON CARDS
// ============================================
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMove(e, card));
            card.addEventListener('mouseleave', (e) => this.handleLeave(e, card));
        });
    }
    
    handleMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
    
    handleLeave(e, card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}

// ============================================
// 7. SMOOTH SCROLL REVEAL
// ============================================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('[data-reveal]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.revealDelay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);
                }
            });
        }, { threshold: 0.1 });
        
        this.elements.forEach(el => observer.observe(el));
    }
}

// ============================================
// 8. TYPING EFFECT
// ============================================
class TypingEffect {
    constructor(element, words, waitTime = 3000) {
        this.element = element;
        this.words = words;
        this.waitTime = waitTime;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }
    
    type() {
        const currentWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.isDeleting ? 50 : 100;
        
        if (!this.isDeleting && this.charIndex === currentWord.length) {
            typeSpeed = this.waitTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// 9. PARALLAX EFFECT
// ============================================
class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        window.addEventListener('scroll', () => this.update());
    }
    
    update() {
        const scrollY = window.scrollY;
        
        this.elements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            const rect = el.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const offset = (centerY - viewportCenter) * speed;
            
            el.style.transform = `translateY(${offset}px)`;
        });
    }
}

// ============================================
// 10. LIVE CHAT WIDGET
// ============================================
class LiveChatWidget {
    constructor() {
        this.createWidget();
        this.isOpen = false;
    }
    
    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'chat-widget';
        widget.innerHTML = `
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-header-info">
                        <div class="chat-avatar">FX</div>
                        <div>
                            <h4>FOREXKH Support</h4>
                            <span class="chat-status">Online</span>
                        </div>
                    </div>
                    <button class="chat-close" onclick="liveChat.toggle()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chat-messages" id="chatMessages">
                    <div class="chat-message bot">
                        <div class="message-content">
                            <p>👋 Welcome to FOREXKH! How can I help you today?</p>
                        </div>
                        <span class="message-time">Just now</span>
                    </div>
                </div>
                <div class="chat-input-area">
                    <input type="text" class="chat-input" placeholder="Type your message..." id="chatInput">
                    <button class="chat-send" onclick="liveChat.sendMessage()">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <button class="chat-toggle" onclick="liveChat.toggle()">
                <i class="fas fa-comments"></i>
                <span class="chat-badge">1</span>
            </button>
        `;
        document.body.appendChild(widget);
        
        // Handle Enter key
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    toggle() {
        const chatWindow = document.getElementById('chatWindow');
        this.isOpen = !this.isOpen;
        chatWindow.classList.toggle('open', this.isOpen);
        
        if (this.isOpen) {
            document.querySelector('.chat-badge').style.display = 'none';
        }
    }
    
    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "Thanks for reaching out! Our team will get back to you shortly.",
                "Great question! Let me connect you with a trading specialist.",
                "I'd be happy to help! Could you provide more details?",
                "Our Pro Trader plan includes all the features you need. Would you like to start a free trial?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            this.addMessage(randomResponse, 'bot');
        }, 1000);
    }
    
    addMessage(text, type) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
            </div>
            <span class="message-time">${time}</span>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// ============================================
// 11. SOUND EFFECTS
// ============================================
class SoundEffects {
    constructor() {
        this.sounds = {
            click: this.createSound(800, 0.1, 'sine'),
            hover: this.createSound(600, 0.05, 'sine'),
            success: this.createSound([523, 659, 784], 0.15, 'sine')
        };
        
        // Add click sounds to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => this.play('click'));
        });
    }
    
    createSound(frequency, duration, type) {
        return { frequency, duration, type };
    }
    
    play(soundName) {
        const sound = this.sounds[soundName];
        if (!sound) return;
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (Array.isArray(sound.frequency)) {
            sound.frequency.forEach((freq, i) => {
                setTimeout(() => this.playTone(audioContext, freq, sound.duration, sound.type), i * 100);
            });
        } else {
            this.playTone(audioContext, sound.frequency, sound.duration, sound.type);
        }
    }
    
    playTone(audioContext, frequency, duration, type) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
}

// ============================================
// 12. PAGE TRANSITION EFFECTS
// ============================================
class PageTransitions {
    constructor() {
        this.createOverlay();
    }
    
    createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition';
        overlay.innerHTML = '<div class="transition-loader"></div>';
        document.body.appendChild(overlay);
    }
    
    async show(duration = 500) {
        const overlay = document.querySelector('.page-transition');
        overlay.classList.add('active');
        
        return new Promise(resolve => {
            setTimeout(() => {
                overlay.classList.remove('active');
                resolve();
            }, duration);
        });
    }
}

// ============================================
// 13. TOOLTIPS
// ============================================
class Tooltips {
    constructor() {
        this.elements = document.querySelectorAll('[data-tooltip]');
        
        this.elements.forEach(el => {
            el.addEventListener('mouseenter', (e) => this.show(e, el));
            el.addEventListener('mouseleave', () => this.hide());
        });
    }
    
    show(e, element) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-popup';
        tooltip.textContent = element.dataset.tooltip;
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        setTimeout(() => tooltip.classList.add('visible'), 10);
    }
    
    hide() {
        const tooltips = document.querySelectorAll('.tooltip-popup');
        tooltips.forEach(t => t.remove());
    }
}

// ============================================
// 14. CONFETTI EFFECT
// ============================================
class ConfettiEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'confetti-canvas';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    launch(particleCount = 100) {
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                vx: (Math.random() - 0.5) * 10,
                vy: Math.random() * 3 + 2,
                size: Math.random() * 8 + 4,
                color: ['#FF1744', '#00B0FF', '#FFD700', '#00E676'][Math.floor(Math.random() * 4)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }
        
        this.animate();
        
        setTimeout(() => {
            this.particles = [];
            cancelAnimationFrame(this.animationId);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }, 3000);
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1;
            p.rotation += p.rotationSpeed;
            
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation * Math.PI / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2);
            this.ctx.restore();
        });
        
        if (this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }
}

// ============================================
// 15. LIVE PRICE SIMULATOR
// ============================================
class PriceSimulator {
    constructor() {
        this.prices = {
            'XAU/USD': { base: 2384.50, current: 2384.50 },
            'EUR/USD': { base: 1.0842, current: 1.0842 },
            'GBP/USD': { base: 1.2715, current: 1.2715 },
            'USD/JPY': { base: 149.85, current: 149.85 },
            'BTC/USD': { base: 67450, current: 67450 },
            'ETH/USD': { base: 3542, current: 3542 }
        };
        
        this.updateInterval = setInterval(() => this.update(), 2000);
    }
    
    update() {
        Object.keys(this.prices).forEach(symbol => {
            const price = this.prices[symbol];
            const change = (Math.random() - 0.5) * price.base * 0.002;
            price.current = price.base + change;
            
            // Update ticker if exists
            const tickerItem = document.querySelector(`.ticker-item:has(.ticker-symbol:contains('${symbol}'))`);
            if (tickerItem) {
                const priceEl = tickerItem.querySelector('.ticker-price');
                const changeEl = tickerItem.querySelector('.ticker-change');
                
                if (priceEl) {
                    priceEl.textContent = this.formatPrice(symbol, price.current);
                }
                
                if (changeEl) {
                    const percentChange = ((price.current - price.base) / price.base * 100).toFixed(2);
                    const isUp = percentChange >= 0;
                    changeEl.textContent = `${isUp ? '+' : ''}${percentChange}%`;
                    changeEl.className = `ticker-change ${isUp ? 'up' : 'down'}`;
                }
            }
        });
    }
    
    formatPrice(symbol, price) {
        if (symbol.includes('BTC') || symbol.includes('ETH')) {
            return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        if (symbol.includes('XAU')) {
            return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        if (symbol.includes('JPY')) {
            return price.toFixed(2);
        }
        return price.toFixed(4);
    }
    
    stop() {
        clearInterval(this.updateInterval);
    }
}

// ============================================
// 16. KEYBOARD SHORTCUTS
// ============================================
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = {
            'Escape': () => this.closeModals(),
            'l': () => this.openLogin(),
            's': () => this.openSignup(),
            't': () => this.scrollToTop(),
            '?': () => this.showShortcuts()
        };
        
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }
    
    handleKeyPress(e) {
        // Don't trigger if user is typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        const handler = this.shortcuts[e.key];
        if (handler) {
            e.preventDefault();
            handler();
        }
    }
    
    closeModals() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
    
    openLogin() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    openSignup() {
        const modal = document.getElementById('signupModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    showShortcuts() {
        const existing = document.querySelector('.shortcuts-modal');
        if (existing) {
            existing.remove();
            return;
        }
        
        const modal = document.createElement('div');
        modal.className = 'shortcuts-modal';
        modal.innerHTML = `
            <div class="shortcuts-content">
                <h3>⌨️ Keyboard Shortcuts</h3>
                <div class="shortcut-item"><kbd>L</kbd> Open Login</div>
                <div class="shortcut-item"><kbd>S</kbd> Open Signup</div>
                <div class="shortcut-item"><kbd>T</kbd> Scroll to Top</div>
                <div class="shortcut-item"><kbd>Esc</kbd> Close Modals</div>
                <div class="shortcut-item"><kbd>?</kbd> Show Shortcuts</div>
                <button class="btn btn-ghost" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

// ============================================
// 17. EASTER EGG - KONAMI CODE
// ============================================
class EasterEgg {
    constructor() {
        this.sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.userSequence = [];
        
        document.addEventListener('keydown', (e) => this.check(e));
    }
    
    check(e) {
        this.userSequence.push(e.key);
        
        if (this.userSequence.length > this.sequence.length) {
            this.userSequence.shift();
        }
        
        if (JSON.stringify(this.userSequence) === JSON.stringify(this.sequence)) {
            this.activate();
            this.userSequence = [];
        }
    }
    
    activate() {
        // Launch confetti
        if (window.confetti) {
            window.confetti.launch(200);
        }
        
        // Show easter egg message
        const msg = document.createElement('div');
        msg.className = 'easter-egg-msg';
        msg.innerHTML = '🎮 Konami Code Activated! You found the secret!';
        document.body.appendChild(msg);
        
        setTimeout(() => msg.remove(), 3000);
    }
}

// ============================================
// 18. PERFORMANCE MONITOR
// ============================================
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            fps: 0,
            loadTime: 0
        };
        
        this.measureFPS();
        this.measureLoadTime();
    }
    
    measureFPS() {
        let lastTime = performance.now();
        let frames = 0;
        
        const loop = (currentTime) => {
            frames++;
            
            if (currentTime - lastTime >= 1000) {
                this.metrics.fps = frames;
                frames = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(loop);
        };
        
        requestAnimationFrame(loop);
    }
    
    measureLoadTime() {
        window.addEventListener('load', () => {
            const timing = performance.getEntriesByType('navigation')[0];
            this.metrics.loadTime = Math.round(timing.loadEventEnd - timing.startTime);
            console.log(`🚀 FOREXKH loaded in ${this.metrics.loadTime}ms`);
        });
    }
    
    getMetrics() {
        return this.metrics;
    }
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Initialize features based on device capability
    const isTouchDevice = 'ontouchstart' in window;
    const isSmallScreen = window.innerWidth < 768;
    
    // Always initialize
    window.scrollProgress = new ScrollProgress();
    window.backToTop = new BackToTop();
    window.animatedCounter = new AnimatedCounter();
    window.scrollReveal = new ScrollReveal();
    window.keyboardShortcuts = new KeyboardShortcuts();
    window.performanceMonitor = new PerformanceMonitor();
    
    // Initialize on non-touch devices
    if (!isTouchDevice && !prefersReducedMotion) {
        window.customCursor = new CustomCursor();
        window.magneticButtons = new MagneticButtons();
        window.tiltEffect = new TiltEffect();
    }
    
    // Initialize on larger screens
    if (!isSmallScreen && !prefersReducedMotion) {
        window.parallaxEffect = new ParallaxEffect();
    }
    
    // Initialize interactive features
    window.liveChat = new LiveChatWidget();
    window.confetti = new ConfettiEffect();
    window.priceSimulator = new PriceSimulator();
    window.pageTransitions = new PageTransitions();
    window.tooltips = new Tooltips();
    window.easterEgg = new EasterEgg();
    
    // Initialize typing effect
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        window.typingEffect = new TypingEffect(typingElement, [
            'Forex Market',
            'Gold Trading',
            'Crypto Trading',
            'Financial Freedom'
        ]);
    }
    
    console.log('🎮 FOREXKH Ultimate Features Loaded!');
    console.log('💡 Press "?" for keyboard shortcuts');
    console.log('🎮 Try the Konami Code: ↑↑↓↓←→←→BA');
});
