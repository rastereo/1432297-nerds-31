let slideFirst = document.querySelector('.slide:first-child');
let slideSecond = document.querySelector('.slide:nth-of-type(2)');
let slideThird = document.querySelector('.slide:last-child');
let slideButtonFirst = document.querySelector('.slider-controls button:first-child');
let slideButtonSecond = document.querySelector('.slider-controls button:nth-of-type(2)');
let slideButtonThird = document.querySelector('.slider-controls button:last-child');


slideButtonFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideFirst.classList.remove('slide-closed');
    slideSecond.classList.add('slide-closed');
    slideThird.classList.add('slide-closed');
    slideButtonFirst.classList.add('current');
    slideButtonSecond.classList.remove('current');
    slideButtonThird.classList.remove('current');
});

slideButtonSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideFirst.classList.add('slide-closed');
    slideSecond.classList.remove('slide-closed');
    slideThird.classList.add('slide-closed');
    slideButtonFirst.classList.remove('current');
    slideButtonSecond.classList.add('current');
    slideButtonThird.classList.remove('current');
});

slideButtonThird.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideFirst.classList.add('slide-closed');
    slideSecond.classList.add('slide-closed');
    slideThird.classList.remove('slide-closed');
    slideButtonFirst.classList.remove('current');
    slideButtonSecond.classList.remove('current');
    slideButtonThird.classList.add('current');
});