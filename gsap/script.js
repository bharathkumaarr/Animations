
// gsap.from("#boxx",{})
gsap.to("#boxx",{
    x:1400,
    duration:4,
    delay: 1,
    backgroundColor: 'rebeccapurple',
    rotate: 360,
    borderRadius: '50%',
    scale: 0.3,

    repeat: -1,
    yoyo: true
})

gsap.from('h2',{
    x:0,
    y:500,
    duration:4,
    delay: 1,
    opacity:0,
    color: 'lemonchiffon',
    stagger: 0.5,
    
    repeat: -1,
    yoyo: true
})

gsap.from('#circle',{
    x:1300,
    duration: 4,
    delay:4,
    borderRadius: '100px',
    rotate: 360,
    repeat: -1,
    yoyo: true

})

// gsap.to('#box h1')
// gsap.to('h1')
