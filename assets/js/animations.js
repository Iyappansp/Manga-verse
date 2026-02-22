// Animations & Scroll Reveals

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Observer
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Apply to standard elements
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        revealObserver.observe(el);
    });

    // Staggered reveals for grids
    document.querySelectorAll('.stagger-grid').forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            child.classList.add('reveal-on-scroll');
            // add delay class based on index, max 4
            const delayClass = `stagger-${(index % 4) + 1}`;
            child.classList.add(delayClass);
        });
    });

    // Number Counter Animation
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // ms
                const step = target / (duration / 16); // 60fps

                let current = 0;
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.innerText = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.animated-counter').forEach(counter => {
        counterObserver.observe(counter);
    });
});
