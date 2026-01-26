gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});
gsap.from(".nav-links li", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
});


// About section animation

const aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false // turn true if debugging
    }
});

aboutTL.from("#about", {
    x: -300,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

aboutTL.from(".about-text p", {
    x: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.4");

gsap.from(".hero-right", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

gsap.from("#about", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out"
})
aboutTL.from(".about-image img", {
    scale: 1.6,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.6");

aboutTL.from(".about-text h1", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.5");

// services section animation
gsap.from("#services", {
    scrollTrigger: {
        trigger: "#services",
    },
    y: 200,
    opacity: 0,
    duration: 1.3,
    delay: 0.4,
    ease: "power4.out"
})
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".service-card",
    },
    // y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    stagger: 0.2,
    ease: "power4.out"
});

// Work section animation
gsap.from("#work", {
    scrollTrigger: {
        trigger: "#work",
    },
    y: 200,
    opacity: 0,
    duration: 1.3, 
    delay: 0.4,
    ease: "power4.out"
})
gsap.from(".work-card", {
    scrollTrigger: {
        trigger: ".work-card",
    },
    // y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    stagger: 0.2,
    ease: "power4.out"
});