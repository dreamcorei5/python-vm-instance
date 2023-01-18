window.onload = function () {
    slideOne();
    slideTwo();
    slideOne2();
    slideTwo2();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let sliderOne2 = document.getElementById("slider-3");
let sliderTwo2 = document.getElementById("slider-4");
let displayValOne2 = document.getElementById("range3");
let displayValTwo2 = document.getElementById("range4");
let minGap = 5;
let sliderTrack = document.querySelector(".slider-track");
let sliderTrack2 = document.getElementById("slider-track2");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function slideOne2() {
    if (parseInt(sliderTwo2.value) - parseInt(sliderOne2.value) <= minGap) {
        sliderOne2.value = parseInt(sliderTwo2.value) - minGap;
    }
    displayValOne2.textContent = sliderOne.value;
    fillColor2();
}
function slideTwo2() {
    if (parseInt(sliderTwo2.value) - parseInt(sliderOne2.value) <= minGap) {
        sliderTwo2.value = parseInt(sliderOne2.value) + minGap;
    }
    displayValTwo2.textContent = sliderTwo2.value;
    fillColor2();
}
function fillColor2() {
    percent1 = (sliderOne2.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo2.value / sliderMaxValue) * 100;
    sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}