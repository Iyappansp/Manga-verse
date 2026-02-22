// Dashboard Logic

const mockProjects = [
    { title: "Solo Leveling", status: "Ongoing", role: "Translator", progress: 85, nextChapter: 110, deadline: "Tomorrow" },
    { title: "Omniscient Reader", status: "Review", role: "Editor", progress: 95, nextChapter: 45, deadline: "Today" },
    { title: "Tower of God", status: "Completed", role: "Reader", progress: 100, nextChapter: null, deadline: "-" },
    { title: "The Beginning After The End", status: "Ongoing", role: "Translator", progress: 45, nextChapter: 175, deadline: "In 3 days" }
];

const updateRoleDisplay = () => {
    const role = localStorage.getItem('mangaverse_role') || 'Reader';
    const display = document.getElementById('current-user-role');
    if (display) display.innerText = role;
    
    const welcome = document.querySelector('h1 + p');
    if (welcome && welcome.innerText.includes('Welcome back')) {
        welcome.innerText = `Welcome back, ${role}! Here's what's happening today.`;
    }
};

const renderProjects = () => {
    const tableBody = document.getElementById('dashboard-projects-table');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    mockProjects.forEach(project => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors group';
        
        let statusBadge = '';
        if (project.status === 'Ongoing') statusBadge = '<span class="badge badge-ongoing">Ongoing</span>';
        if (project.status === 'Review') statusBadge = '<span class="badge badge-review">Review</span>';
        if (project.status === 'Completed') statusBadge = '<span class="badge badge-completed">Completed</span>';

        tr.innerHTML = `
            <td class="p-4 whitespace-nowrap">
                <div class="font-bold text-gray-900 dark:text-gray-100 group-hover:text-manga-primary transition-colors">${project.title}</div>
            </td>
            <td class="p-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${project.role}</td>
            <td class="p-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                    <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 min-w-[100px]">
                        <div class="bg-manga-primary h-1.5 rounded-full progress-fill" style="width: ${project.progress}%"></div>
                    </div>
                    <span class="text-xs font-bold text-manga-primary">${project.progress}%</span>
                </div>
            </td>
            <td class="p-4 whitespace-nowrap">${statusBadge}</td>
            <td class="p-4 whitespace-nowrap text-end">
                <button class="text-xs font-bold text-manga-primary hover:underline">Manage</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
};

const animateCounters = () => {
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return;
        const duration = 1500;
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * target);
            counter.innerText = currentCount.toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
            else counter.innerText = target.toLocaleString();
        };
        requestAnimationFrame(update);
    });
};

const animateBars = () => {
    const bars = document.querySelectorAll('.bar-item');
    bars.forEach((bar, index) => {
        const height = bar.getAttribute('data-height');
        if (height) {
            setTimeout(() => { bar.style.height = height; }, index * 100);
        }
    });
};

const initSidebar = () => {
    const sidebar = document.getElementById('dashboard-sidebar');
    if (!sidebar) return;

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const notificationPanel = document.getElementById('notification-panel');
    const notificationToggle = document.getElementById('toggle-notifications');
    const notificationToggleSidebar = document.getElementById('toggle-notifications-sidebar');
    const notificationClose = document.getElementById('close-notifications');
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
    const sidebarRtlToggle = document.getElementById('sidebar-rtl-toggle');

    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle('hidden');
            setTimeout(() => sidebarOverlay.classList.toggle('opacity-100'), 10);
        }
    };

    const toggleNotifications = () => {
        if (notificationPanel) notificationPanel.classList.toggle('translate-x-full');
    };

    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);
    
    [notificationToggle, notificationToggleSidebar, notificationClose].forEach(btn => {
        if (btn) btn.addEventListener('click', toggleNotifications);
    });

    if (sidebarThemeToggle) {
        sidebarThemeToggle.addEventListener('click', () => {
            document.getElementById('theme-toggle')?.click();
        });
    }

    if (sidebarRtlToggle) {
        sidebarRtlToggle.addEventListener('click', () => {
            document.getElementById('rtl-toggle')?.click();
        });
    }

    if (window.innerWidth < 768) sidebar.classList.add('-translate-x-full');

    document.querySelectorAll('.sidebar-item:not(button)').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 768) toggleSidebar();
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    updateRoleDisplay();
    renderProjects();
    animateCounters();
    animateBars();
    initSidebar();

    window.addEventListener('storage', (e) => {
        if (e.key === 'mangaverse_role') updateRoleDisplay();
    });
});

