// bring the two elements in the html
const backgroundImage = document.querySelector('.background');
const loadText = document.querySelector('.loading_text');

// initialize a value called load which starts from 0-100
let load = 0;

let int = setInterval(blurring, 30); /*run in an interval of 30mili-seconds */

// a function called blurring
function blurring() {
    load++;  /*increments the load value */

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    backgroundImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}