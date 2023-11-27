var cursor = document.querySelectorAll('.cursor');
document.addEventListener('mousemove', function(e){
    cursor[0].style.left = e.clientX + 'px';
    cursor[0].style.top = e.clientY + 'px';

    });
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});





