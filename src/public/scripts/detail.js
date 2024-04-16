let currentPosition = 0;
const slidesToShow = 7; // Number of slides to show at once
const slideStep = 1; // Number of slides to move per click
const slideWidth = document.querySelector('.thumbnail-slider').clientWidth/slidesToShow
const slider = document.querySelector('.thumbnail-slider');
const slidesCount = slider.children.length;
const maxSlideIndex = slidesCount - slidesToShow;
let slideIndex = 0;

function toggleButtons() {
    if (slideIndex===0 || slidesCount <= slidesToShow) {
        $("#prevBtn").hide();
    } else {$("#prevBtn").show();}
    
    if (slideIndex===maxSlideIndex || slidesCount <= slidesToShow) {
        $("#nextBtn").hide();
    } else {$("#nextBtn").show();}
}

function slide(direction) {
    slideIndex += direction * slideStep;
    slideIndex = Math.min(maxSlideIndex, Math.max(0, slideIndex));

    toggleButtons()

    currentPosition = -slideIndex * (slideWidth + 2);

    slider.style.transform = `translateX(${currentPosition}px)`;
}

toggleButtons()

// Previous button event listener
document.querySelector('#prevBtn').addEventListener('click', () => slide(-1));

// Next button event listener
document.querySelector('#nextBtn').addEventListener('click', () => slide(1));
