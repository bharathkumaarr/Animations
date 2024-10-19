var circle = document.querySelector('#circle');
var frame = document.querySelector('.frame');




window.addEventListener('mousemove', function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration: 1,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',


    })
})
frame.addEventListener('mousemove', function(dets){
    gsap.to(circle,{
        scale:6,
        duration: 1,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',

    })
    gsap.to('.frame span',{
        color: "#fff",
        duration: 0.4,
        y:'-5vw'
    })
})
frame.addEventListener('mouseleave', function(dets){
    gsap.to(circle,{
        scale:1,
        duration: 1,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',


    })
    gsap.to('.frame span',{
        color: "#111",
        duration: 0.4,
        y:0

    })

})