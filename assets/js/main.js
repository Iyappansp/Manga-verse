// Shared Reusable Header and Footer
const headerHTML = `
<nav class="glass-header fixed w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-2">
    <div class="w-full px-4 sm:px-6 lg:px-10">
        <div class="flex justify-between items-center h-16 relative">
            <!-- Left: Logo -->
            <div class="flex items-center flex-shrink-0">
                <a href="index.html" class="flex items-center hover:opacity-80 transition-opacity">
                    <img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="h-10 md:h-12 w-auto max-w-[200px] lg:max-w-[250px] object-contain transition-all">
                </a>
            </div>

            <!-- Center: Nav -->
            <div class="hidden lg:flex items-center justify-center space-x-3 xl:space-x-6 flex-1 px-2 nav-links overflow-hidden">
                <a href="index.html" class="nav-item">Home</a>
                <a href="home-2.html" class="nav-item whitespace-nowrap">Projects</a>
                <a href="about.html" class="nav-item">About</a>
                <a href="library.html" class="nav-item">Library</a>
                <a href="genres.html" class="nav-item">Genres</a>
                <a href="community.html" class="nav-item">Community</a>
                <a href="pricing.html" class="nav-item">Pricing</a>
                <a href="faq.html" class="nav-item">FAQ</a>
                <a href="contact.html" class="nav-item">Contact</a>
            </div>

            <!-- Right: Controls & Auth -->
            <div class="flex items-center gap-2 lg:gap-4 flex-shrink-0 relative z-10">
                <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Theme">
                    <!-- Sun/Moon icon injected via JS depending on state -->
                </button>
                <button id="rtl-toggle" class="p-2 font-semibold text-sm rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle RTL">
                    RTL
                </button>
                
                <div class="hidden lg:flex items-center gap-3">
                    <a href="login.html" class="btn btn-outline-primary py-2.5 rounded-full px-5 text-sm font-bold">Login</a>
                    <a href="dashboard.html" class="btn btn-primary py-2.5 rounded-full px-5 text-sm font-bold shadow-manga">Dashboard</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 dark:text-gray-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="lg:hidden hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 absolute w-full slide-down text-sm">
        <div class="px-4 pt-2 pb-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
            <a href="index.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Home</a>
            <a href="home-2.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Projects</a>
            <a href="library.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Library</a>
            <a href="genres.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Genres</a>
            <a href="community.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Community</a>
            <a href="about.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
            <a href="pricing.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Pricing</a>
            <a href="faq.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">FAQ</a>
            <a href="contact.html" class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
            <div class="pt-4 flex flex-col gap-2">
                <a href="login.html" class="btn btn-outline-primary w-full text-center rounded-full">Login</a>
                <a href="dashboard.html" class="btn btn-primary w-full text-center rounded-full shadow-manga">Dashboard</a>
            </div>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
    <div class="w-full px-4 sm:px-6 lg:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <!-- Brand -->
            <div>
                <a href="index.html" class="flex items-center mb-4 hover:opacity-80 transition-opacity">
                    <img src="assets/logo.png?v=14" alt="MangaVerse Logo" class="h-16 md:h-20 w-auto max-w-[300px] object-contain">
                </a>
                <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    Premium Manga & Comic Translation Platform.<br>
                    <strong>Read. Translate. Publish.</strong>
                </p>
                <div class="flex space-x-4 social-links">
                    <a href="#" class="text-gray-400 hover:text-manga-primary transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                    <a href="#" class="text-gray-400 hover:text-manga-primary transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="#" class="text-gray-400 hover:text-manga-primary transition-colors"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                </div>
            </div>

            <!-- Platform -->
            <div>
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Platform</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="library.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Browse Library</a></li>
                    <li><a href="index.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Latest Chapters</a></li>
                    <li><a href="home-2.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Ongoing Projects</a></li>
                    <li><a href="genres.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Popular Genres</a></li>
                </ul>
            </div>

            <!-- Community -->
            <div>
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Community</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="register.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Join as Translator</a></li>
                    <li><a href="about.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Contributor Guidelines</a></li>
                    <li><a href="community.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Discord & Forums</a></li>
                    <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">FAQ</a></li>
                </ul>
            </div>

            <!-- Legal -->
            <div>
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Legal</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Terms of Service</a></li>
                    <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">DMCA</a></li>
                    <li><a href="contact.html" class="text-gray-600 dark:text-gray-400 hover:text-manga-primary transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-500 dark:text-gray-400">
                &copy; ${new Date().getFullYear()} MangaVerse. All rights reserved.
            </p>
            <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                <span>EN / JP / KR</span>
            </div>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer if containers exist
    const headerEl = document.getElementById('header-container');
    const footerEl = document.getElementById('footer-container');

    if (headerEl) headerEl.innerHTML = headerHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Theme System
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    // Default to dark mode
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }
    
    const applyTheme = () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            htmlEl.classList.add('dark');
            if(themeToggle) themeToggle.innerHTML = `
                <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1m-16 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>`;
        } else {
            htmlEl.classList.remove('dark');
            if(themeToggle) themeToggle.innerHTML = `
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>`;
        }
    };

    applyTheme();

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme');
            localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
            applyTheme();
        });
    }

    // RTL System
    const rtlToggle = document.getElementById('rtl-toggle');
    
    const applyRTL = () => {
        const isRtl = localStorage.getItem('rtl') === 'true';
        if (isRtl) {
            htmlEl.setAttribute('dir', 'rtl');
            htmlEl.classList.add('rtl-mode');
        } else {
            htmlEl.setAttribute('dir', 'ltr');
            htmlEl.classList.remove('rtl-mode');
        }
    };

    applyRTL();

    if(rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const isRtl = localStorage.getItem('rtl') === 'true';
            localStorage.setItem('rtl', !isRtl);
            applyRTL();
        });
    }

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Shrink header on scroll
    const headerNav = document.querySelector('.glass-header');
    if (headerNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                headerNav.classList.add('py-0', 'shadow-md');
                headerNav.classList.remove('py-2');
            } else {
                headerNav.classList.remove('py-0', 'shadow-md');
                headerNav.classList.add('py-2');
            }
        });
    }

    // Update active nav state
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Auto-generate Breadcrumbs
    const skipBreadcrumbs = ['', 'index.html', 'login.html', 'register.html', 'view-site.html'];
    if (!skipBreadcrumbs.includes(currentPath)) {
        const pageNames = {
            'home-2.html': 'Ongoing Projects',
            'about.html': 'About Us',
            'library.html': 'Library',
            'genres.html': 'Genres',
            'community.html': 'Community Hub',
            'pricing.html': 'Pricing',
            'faq.html': 'FAQ',
            'contact.html': 'Contact Us',
            'dashboard.html': 'Dashboard',
            'manga-details.html': 'Manga Details'
        };
        const pageName = pageNames[currentPath] || currentPath.replace('.html', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        const mainContent = document.querySelector('main');
        if (mainContent && !document.querySelector('.breadcrumb-nav')) {
            const breadcrumbHTML = document.createElement('div');
            breadcrumbHTML.className = 'breadcrumb-nav container mx-auto px-6 py-4 fade-in slide-down';
            breadcrumbHTML.innerHTML = `
                <nav class="flex text-xs font-medium text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-2">
                        <li>
                            <a href="index.html" class="hover:text-manga-primary transition-colors flex items-center">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </a>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-gray-400 rtl:rotate-180" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span class="ml-2 text-manga-primary font-bold tracking-wide">${pageName}</span>
                        </li>
                    </ol>
                </nav>
            `;
            mainContent.insertBefore(breadcrumbHTML, mainContent.firstChild);
        }
    }
});
