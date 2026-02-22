// Static Role Simulation for Dashboard

class RoleSimulator {
    constructor() {
        this.roles = ['reader', 'translator', 'editor', 'admin'];
        this.currentRole = localStorage.getItem('mangaverse_role') || 'reader';
    }

    setRole(role) {
        if (this.roles.includes(role)) {
            this.currentRole = role;
            localStorage.setItem('mangaverse_role', role);
            this.updateUI();
        }
    }

    getRole() {
        return this.currentRole;
    }

    updateUI() {
        // Hide all role-specific elements
        document.querySelectorAll('[data-role]').forEach(el => {
            el.classList.add('hidden');
        });

        // Show elements for current role, and 'all'
        document.querySelectorAll(`[data-role="${this.currentRole}"], [data-role="all"]`).forEach(el => {
            el.classList.remove('hidden');
        });
        
        // Admins can see lower roles usually, but for simplicity we strictly match here or specific hierarchies
        if (this.currentRole === 'admin') {
             // Admin sees translator and reader areas too
             document.querySelectorAll('[data-role="translator"]').forEach(el => el.classList.remove('hidden'));
        }

        const roleDisplay = document.getElementById('current-role-display');
        if (roleDisplay) {
            roleDisplay.textContent = this.currentRole.charAt(0).toUpperCase() + this.currentRole.slice(1);
        }
    }
}

const roleSim = new RoleSimulator();

document.addEventListener('DOMContentLoaded', () => {
    roleSim.updateUI();
});
