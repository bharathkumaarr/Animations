gsap.from('#page1 #box', {
    scale: 0,
    rotate: 360,
    duration: 3,
    // delay:1,
    
}) 

gsap.from('#page2 #box', {
    scale: 0,
    rotate: 360,
    duration: 3,
    delay:0.5,
    scrollTrigger: {
        trigger:'#page2 #box',
        scroller: 'body',
        markers: true,
        start: 'top 55%',
        end: 'top 30%',

        scrub: 3 // can be 1,2,3,4,5 or true. but true makes the animation too rough and not too smooth, better to use 1-5. 5 id tooo smooth and 1 is less smooth
        

    }
}) 

gsap.to('#page3 #box', {
    scale: 3,
    duration: 3,
    delay:0.5,
    scrollTrigger: {
        trigger:'#page3 #box',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        end: 'top 30%',

        scrub: 5 // can be 1,2,3,4,5 or true. but true makes the animation too rough and not too smooth, better to use 1-5. 5 id tooo smooth and 1 is less smooth
    }


}) 

gsap.to('#page4 #box', {
    x:900,
    duration: 3,
    delay:0.5,
    scrollTrigger: {
        trigger:'#page4 #box',
        scroller: 'body',
        markers: true,
        start: 'top 55%',
        end: 'top 30%',

        scrub: 3, // can be 1,2,3,4,5 or true. but true makes the animation too rough and not too smooth, better to use 1-5. 5 id tooo smooth and 1 is less smooth

        pin:true //pins the div from where it starts to ends
    }

    
})

gsap.to('#page5 #box', {
    x:900,
    duration: 3,
    delay:0.5,
    scale:3,
    rotate:366,
    scrollTrigger: {
        trigger:'#page5 #box',
        scroller: 'body',
        markers: true,
        start: 'top 55%',
        end: 'top 30%',

        scrub: 5, // can be 1,2,3,4,5 or true. but true makes the animation too rough and not too smooth, better to use 1-5. 5 id tooo smooth and 1 is less smooth
    }

    
})