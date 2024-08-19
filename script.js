gsap.from("h1", {
    opacity:0,
    duration: 1,
    x:50,
    delay: 1,
})
gsap.from("p", {
    opacity:0,
    duration: 1.5,
    x:-50,
    delay: 1,
})
gsap.from(".home-image-box img", {
    opacity:0,
    duration: 1.5,
    y:-70,
    delay: 1,
})
gsap.from(".About-page-box h2", {
    transform: "translateX(-65%)",
    scrollTrigger: {
        trigger: ".About-page-box h2",
        scroller: "body",
        start:50,
        scrub:1
    }
})
gsap.from(".About-page-box #about-info", {
    transform: "translateX(100%)",
    duration:2,
    scrollTrigger: {
        trigger: ".About-page-box #about-info",
        scroller: "body",
        start:50,
        end:100,
        scrub:5
    }
})
gsap.from(".Authors-box #author-heading", {
    transform: "translateY(-95%)",
    duration:2,
    scrollTrigger: {
        trigger: "Authors-box #author-heading",
        scroller: "body",
        start:50,
        end:100,
        scrub:5
    }
})
