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
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
  
      // Calculate the position to center the mouse on the image
      var imgCenterX = imgRect.width / 2;
      var imgCenterY = imgRect.height / 2;
  
      gsap.to(img, {
        opacity: 1,
        ease: Power3,
        top: diff - imgCenterY,
        left: dets.clientX - imgCenterX,
        rotation: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  