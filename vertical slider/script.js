const mainContainer = document.querySelector('.main_container');
const rightSlide = document.querySelector('.right_slide');
const leftSlide = document.querySelector('.left_slide');
const upButton = document.querySelector('.up_button');
const downButton = document.querySelector('.down_button');
// to know how many slides i have, i did not use document cos i am interested in all the divs in the righslide
const slidesLength = rightSlide.querySelectorAll('div').length;

// to know which slide is in view
let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

// make the buttons functional when clicked on
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = mainContainer.clientHeight;

    if(direction == 'up'){
        activeSlideIndex++;

        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    } else if (direction == 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}