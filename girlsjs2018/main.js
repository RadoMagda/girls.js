let carousel = document.querySelector('.carousel')
let stage = document.querySelector('.stage')
let prev = document.querySelector('.carousel-prev')
let next = document.querySelector('.carousel-next')
let slide = document.querySelectorAll('.single-slide')
var slideWidth = slide.clientWidth;
console.log(slideWidth);
console.log(slide);
var slideWidth = slide[0].clientWidth;
console.log(slideWidth);
var currentIndex = 0;
var slidesNumber = slide.length - 1;
function goToSlide() {
    carousel.style.left = 3 * (-slideWidth);
}
console.log(goToSlide)
function goToSlide(index) {
    carousel.style.left = index * (-slideWidth);
}
console.log(goToSlide(4))
function goToSlide(index) {
    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}
function slideToNext() {
    goToSlide(currentIndex + 1);
}
function slideToPrev() {
    goToSlide(currentIndex + 1);
}
function bindEvents() {
    prev.addEventListener('click', slideToPrev);
    next.addEventListener('click', slideToNext);
}
console.log (bindEvents())
function goToSlide(index) {
    if (index < 0) {
        index = slidesNumber;
    } else if (index > slidesNumber) {
        index = 0;
    }

    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}
function autorotate() {
    setInterval(slideToNext, 1000);
}

autorotate()
