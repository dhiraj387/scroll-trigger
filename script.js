document.querySelectorAll('.card').forEach(card => {
    gsap.to(card ,{
        scale:0.7,
        opacity:0,
        scrollTrigger:{
            trigger:card,
            start: 'top 15%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            // markers: true,
            scrub: true
        }
    })
});