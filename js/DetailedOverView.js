gsap.registerPlugin(ScrollTrigger);

const doTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#DOsection",
        markers: false // turn true if debugging
    }
});

doTL.from("#DOsection .profile", {
    y: 300,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});
doTL.from(".about", {
    y: 300,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
});
doTL.from("#DOsection .details h1", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
}, "-=0.6");

doTL.from("#DOsection .about p", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
}, "-=0.6");

doTL.from(".profile-header p", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
}, "-=0.6")

doTL.from("#DOsection .socials li", {
    x: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.4");

// gsap.from(".certifications", {
//     y: 100,
//     opacity: 0,
//     duration: 0.6,
//     delay: 1.2,
//     ease: "power3.out"
// }, "-=0.4");

gsap.from(".certifications, .cert-grid div", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 1.4,
    ease: "power3.out",
});