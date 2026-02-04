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


gsap.from(".hero-right", {
    x: 600,
    opacity: 0,
    duration: 1.2,
    delay: 0.6,
    ease: "power4.out"
});
gsap.from(".hero-right video", {
    scale: 1,
    opacity: 0,
    duration: 1.2,
    delay: 1,
    ease: "power4.out"
});


// About section animation

const aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 101%",
        toggleActions: "play none none none",
        markers: false // turn true if debugging
    }
});

// aboutTL.from("#about", {
//     x: -300,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out"
// });

aboutTL.from(".about-text p", {
    x: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.4");

aboutTL.from("#about", {
    x: -1000,
    opacity: 0,
    duration: 1,
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

const aboutBtn = document.querySelector(".aboutBtn");

aboutBtn.addEventListener("click", () => {

    document.body.style.overflow = "hidden";
    aboutBtn.style.color = "transparent";

    // Store original state
    gsap.set(aboutBtn, {
        transformOrigin: "center center"
    });

    gsap.to(aboutBtn, {
        scale: 1000,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {

            // RESET before navigation
            gsap.set(aboutBtn, {
                scale: 1,
                opacity: 1,
                clearProps: "all"
            });

            document.body.style.overflow = "";

            // Navigate AFTER reset
            window.location.href = "DetailedOverview.html";
        }
    });
});


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

//calendly integration
function scrollToCalendly() {
    const calendlySection = document.getElementById("contact");
    if (calendlySection) {
        const yOffset = -80; // adjust if navbar is fixed
        const y = calendlySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

/* Toggle menu */
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent document click from firing
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

/* Close when clicking a nav link */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

/* Close when clicking anywhere outside */
document.addEventListener('click', (e) => {
    if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    }
});
