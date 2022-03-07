let slideIndex = [1, 1, 1, 1];
showSlidesAll(slideIndex[0], 0, "slide");
showSlidesAll(slideIndex[1], 1, "slide2");
showSlidesAll(slideIndex[2], 2, "slide3");
showSlidesAll(slideIndex[3], 3, "slide4");



function plusSlidesAll(n, slide){
    if(slide === 1){
        showSlidesAll(slideIndex[0] += n, 0,"slide");
    } else {
        if(slide === 2){
            showSlidesAll(slideIndex[1] += n, 1, "slide2");
        } else {
            if(slide === 3){
                showSlidesAll(slideIndex[2] += n, 2, "slide3");
            } else {
                if(slide === 4){
                    showSlidesAll(slideIndex[3] += n, 3, "slide4");
                }
            }
        }
    }
}

function showSlidesAll(n, numberOfSlide, slide){
    let i;
    let slides = document.getElementsByClassName(slide);
    if (n > slides.length) {slideIndex[numberOfSlide] = 1}
    if (n < 1) {slideIndex[numberOfSlide] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[numberOfSlide]-1].style.display = "block";
}
