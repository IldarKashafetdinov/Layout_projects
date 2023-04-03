// BURGER
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






// TABS
let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.work__content');


tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work__btn--active')});
    e.currentTarget.classList.add('work__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tab-content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
  })
})






// SEARCH
document.querySelector(".search").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
})


document.querySelector(".header__form--btn__close").addEventListener("click", function() {
   let form = document.querySelector(".header__form");
  form.classList.remove("form__active");
    form.querySelector(".header__form__input").value = "";
    document.querySelector(".search").classList.remove("active")
});


document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__form__container")) {
  form.classList.remove("form__active");
    form.querySelector(".header__form__input").value = "";
    document.querySelector(".search").classList.remove("active")
  }
})






//SWIPER
const container = document.querySelector(".hero_container")
const swiper =  new Swiper('.hero__swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 7000,
   },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
})



new Accordion('.accordion-container');
