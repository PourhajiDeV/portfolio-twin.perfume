window.addEventListener('load', () => {

    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    const hoverTargets = document.querySelectorAll('a, button, .capsule-link, .white-product-card, .budget-card');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        
        follower.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 150, fill: "forwards" });
    });

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            follower.classList.add('hovered');
        });
        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
            follower.classList.remove('hovered');
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    const header = document.querySelector('.split-luxury-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const tlHero = gsap.timeline();
    
    tlHero.fromTo('.hero-text-column > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    ).fromTo('.main-frame',
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' },
        "-=0.6"
    ).fromTo('.main-frame img',
        { scale: 1.3 },
        { scale: 1, duration: 1.2, ease: 'power3.out' },
        "-=1.2"
    ).fromTo('.info-plaque',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' },
        "-=0.5"
    ).fromTo('.authenticity-stamp',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' },
        "-=0.6"
    );

    gsap.fromTo('.capsule-link',
        { y: 40, opacity: 0 },
        {
            scrollTrigger: { trigger: '.capsule-categories', start: "top 85%" },
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)'
        }
    );

    gsap.fromTo('.white-product-card',
        { y: 60, opacity: 0 },
        {
            scrollTrigger: { trigger: '.royal-purple-section', start: "top 75%" },
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
        }
    );

    gsap.fromTo('.budget-card',
        { scale: 0.9, opacity: 0 },
        {
            scrollTrigger: { trigger: '.budget-shopping', start: "top 80%" },
            scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)'
        }
    );

    gsap.fromTo('.feat-box',
        { y: 30, opacity: 0 },
        {
            scrollTrigger: { trigger: '.exclusive-features', start: "top 90%" },
            y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out'
        }
    );

    setTimeout(() => { ScrollTrigger.refresh(); }, 1000);
});