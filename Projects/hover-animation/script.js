var circle = document.querySelector('#circle');
var frame = document.querySelector('.frame');

const lerp = (x, y, a) => x * (1 - a) + y * a;




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

    var dims = frame.getBoundingClientRect();
    console.log(dims);

    var xstart = dims.x;
    var xend = dims.x+dims.width;

    var zeroone = gsap.utils.mapRange(xstart,xend,0,1, dets.clientX);
    
    gsap.to(circle,{
        scale:6,
        duration: 0.4,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',

    })
    gsap.to('.frame span',{
        color: "#fff",
        duration: 0.4,
        y:'-5vw'
    })
    gsap.to('.frame span',{
        x:lerp(-50,50,zeroone),
        duration: .4,
    })
})
frame.addEventListener('mouseleave', function(dets){
    gsap.to(circle,{
        scale:1,
        duration: 0.4,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',


    })
    gsap.to('.frame span',{
        color: "#111",
        duration: 0.4,
        y:0

    })
    gsap.to('.frame span',{
        x:0,
        duration: 0.4,
    })

})