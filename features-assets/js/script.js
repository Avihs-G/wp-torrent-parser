/* ═══════════════════════════════════════════════════════════════
   FEATURES SHOWCASE JAVASCRIPT
   WP Torrent Tracker & TorrentBlog Theme
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initSmoothScroll();
    initNavigation();
    initAnimations();
});

/* ═══════════════════════════════════════════════════════════════
   TAB FUNCTIONALITY
   ═══════════════════════════════════════════════════════════════ */

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLLING
   ═══════════════════════════════════════════════════════════════ */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION ACTIVE STATE
   ═══════════════════════════════════════════════════════════════ */

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        // Get all sections
        const sections = document.querySelectorAll('[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATIONS ON SCROLL
   ═══════════════════════════════════════════════════════════════ */

function initAnimations() {
    // Animate cards on scroll
    const cards = document.querySelectorAll('.overview-card, .feature-card, .shortcode-card, .table-info, .security-item, .perf-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/* ═══════════════════════════════════════════════════════════════
   COPY TO CLIPBOARD
   ═══════════════════════════════════════════════════════════════ */

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        const message = document.createElement('div');
        message.className = 'copy-success';
        message.textContent = 'Copied!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #22c55e;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(function() {
            message.remove();
        }, 2000);
    });
}

/* ═══════════════════════════════════════════════════════════════
   CODE SNIPPET HIGHLIGHTING
   ═══════════════════════════════════════════════════════════════ */

function highlightCodeSnippets() {
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(block => {
        // Add line numbers
        const lines = block.textContent.split('\n');
        let numberedContent = '';
        
        lines.forEach((line, index) => {
            if (line.trim()) {
                numberedContent += `<span class="line-number">${index + 1}</span>${line}\n`;
            }
        });
        
        // Add syntax highlighting class based on language
        if (block.className) {
            block.innerHTML = numberedContent;
        }
    });
}

/* ═══════════════════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════════════════ */

function animateCounters() {
    const stats = document.querySelectorAll('.stat strong');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Start animation when visible
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(stat);
            }
        });
        
        observer.observe(stat);
    });
}

// Initialize counters
animateCounters();

/* ═══════════════════════════════════════════════════════════════
   SEARCH FUNCTIONALITY
   ═══════════════════════════════════════════════════════════════ */

function initSearch() {
    const searchInput = document.getElementById('feature-search');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.feature-card, .overview-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });
}

initSearch();

/* ═══════════════════════════════════════════════════════════════
   PRINT FUNCTIONALITY
   ═══════════════════════════════════════════════════════════════ */

function initPrintButton() {
    const printBtn = document.getElementById('print-features');
    
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

initPrintButton();

/* ═══════════════════════════════════════════════════════════════
   EXPAND/COLLAPSE SECTIONS
   ═══════════════════════════════════════════════════════════════ */

function initCollapsible() {
    const headers = document.querySelectorAll('.collapsible-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            content.style.display = isOpen ? 'none' : 'block';
            this.classList.toggle('open');
        });
    });
}

initCollapsible();

/* ═══════════════════════════════════════════════════════════════
   MOBILE MENU TOGGLE
   ═══════════════════════════════════════════════════════════════ */

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

initMobileMenu();

/* ═══════════════════════════════════════════════════════════════
   LAZY LOADING IMAGES
   ═══════════════════════════════════════════════════════════════ */

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

initLazyLoading();

/* ═══════════════════════════════════════════════════════════════
   DARK MODE TOGGLE
   ═══════════════════════════════════════════════════════════════ */

function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
}

initDarkMode();

/* ═══════════════════════════════════════════════════════════════
   SCROLL TO TOP BUTTON
   ═══════════════════════════════════════════════════════════════ */

function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

initScrollToTop();

/* ═══════════════════════════════════════════════════════════════
   UTILITY FUNCTIONS
   ═══════════════════════════════════════════════════════════════ */

// Utility: Get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Utility: Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Utility: Check if element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Console message
console.log('%c🚀 WP Torrent Tracker Features Showcase', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cComplete BitTorrent tracking solution for WordPress', 'color: #6b7280; font-size: 14px;');
console.log('%cRepository: https://github.com/Avihs-G/wp-torrent-tracker', 'color: #3b82f6;');
