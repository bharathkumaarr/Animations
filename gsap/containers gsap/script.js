var tl = gsap.timeline()

tl.to('#box1',{
    x:1400,
    duration:3,
    // delay:1,
    repeat: Infinity,
    yoyo: true

}) 

tl.to('#box2',{
    x:1400,
    duration:3,
    // delay:3,
    repeat: Infinity,
    yoyo: true,
    rotate: 360

}) 
tl.to('#box3',{
    x:1400,
    duration:4,
    // delay:4,
    repeat: Infinity,
    yoyo: true,
    borderRadius: '50%'

}) 
gsap.from('#box4',{
    x:800,
    duration:3,
    delay:1,
    repeat: Infinity,
    yoyo: true,
    scale: '2.5'

}) 
