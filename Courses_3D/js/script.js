

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');
let menuLinks = menu.querySelectorAll('.nav__link');



burger.addEventListener('click', function(){

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav__list--active');

  document.body.classList.toggle('stop-scroll');
})



menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav__list--active');

    document.body.classList.remove('stop-scroll');
  })
})
