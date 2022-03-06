let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);


//First Row of Slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


//Second Row of Slides
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slide2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
}


//Third Row of Slides
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}


function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("slide3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3-1].style.display = "block";
}


//Fourth Row of Slides
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}


function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("slide4");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex4-1].style.display = "block";
}