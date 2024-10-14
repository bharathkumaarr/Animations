var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var imageDiv = document.querySelector('#imageDiv');


main.addEventListener('mousemove', function(dets){
    gsap.to(cursor,{
        x:dets.x-45,
        y:dets.y-45,
        duration: 1,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',


    })
})
imageDiv.addEventListener('mouseenter', function() {
    cursor.innerHTML = 'Click'
    gsap.to(cursor,{
        scale:2,
        backgroundColor: '#ffe4c42f'
    })
})

imageDiv.addEventListener('mouseleave', function() {
    cursor.innerHTML = ''
    gsap.to(cursor,{
        scale:1,
        backgroundColor: 'bisque'
    })
})