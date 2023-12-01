var cursor = document.querySelectorAll('.cursor');
document.addEventListener('mousemove', function(e){
    cursor[0].style.left = e.clientX + 'px';
    cursor[0].style.top = e.clientY + 'px';

    });
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function firstPageAnim(){

    var tl = gsap.timeline();

    tl.from('.nav', {

        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
        
    })

    .to('.boundingelem', {

        y: 0,
        delay : 0,
        duration: 2,
        delay:-1.1,
        ease: Expo.easeInOut,
        stagger : .2
    })
    .to('.boundingelem2', {

        y: 0,
        delay : 0,
        duration: 1,
        
        delay:-4.1,
        ease: Expo.easeInOut,
        stagger : .2
    })

    .from('.homeFooter', {

        y: -10,
        opacity: 0,
        duration: 1.5 ,
        ease: Expo.easeInOut,
        delay: -1.3,
        ease: Expo.easeInOut
        
    })
}

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {

    gsap.to(elem.querySelector("h1"), {
      opacity: 1,
      transform : 'translateX(0%)',
      ease : Expo.easeout,
      duration: .5,
      scale: 1
      
    });
  })
  elem.addEventListener("mouseenter", function () {
    
    gsap.to(elem.querySelector("h1"), {
      opacity: .3,
      transform : 'translateX(13%)',
      ease : Expo.easeInOut,
      duration: 0.5,
      scale: .9
    });
  })

})


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    var img = elem.querySelector("img");
    var imgRect = img.getBoundingClientRect();
  
    elem.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var elemRect = elem.getBoundingClientRect();
      var imgCenterX = imgRect.width / 2;
      var imgCenterY = imgRect.height / 2;
  
      var diffX = dets.clientX - elemRect.left - imgCenterX;
      var diffY = dets.clientY - elemRect.top - imgCenterY;
  
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
  
      // Ensure the image stays within the container
      var maxX = elemRect.width - imgRect.width;
      var maxY = elemRect.height - imgRect.height;
  
      gsap.to(img, {
        opacity: 1,
        ease: Power3,
        top: Math.min(maxY, Math.max(0, diffY)) + "px",
        left: Math.min(maxX, Math.max(0, diffX)) + "px",
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  


firstPageAnim();



