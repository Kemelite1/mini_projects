/*selects the HTML element with the class name 'tags' and assigns it to the variable tagsElements */
const tagsElements = document.querySelector('.tags');

/*selects the HTML element with the class name 'textarea' and assigns it to the variable textarea */
const textarea = document.querySelector('.textarea');

// This will automatically put the cursor inside the textarea element when the page loads.
textarea.focus();

// adds an event listener to the textarea element for the 'keyup' event. When the user releases a key, the specified callback function will be executed.
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()); /* The map function is used to trim any trailing whitespace from each tag*/

    tagsElements.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElements.appendChild(tagElement);
    });
}

function randomSelect() {
    const times = 30; /*  the number of times the tags will be randomly highlighted before stopping.*/
    const intervalDelay = 100; /* determines the delay between each tag highlighting.*/
    const highlightDelay = 100; /*  the duration for which a tag will be highlighted before unhighlighting*/

    let counter = 0;
    const interval = setInterval(() => {
        if (counter === times) {
            clearInterval(interval);
            setTimeout(() => {
                const randomTag = pickRandomTag(); /*this part causes it to shift from one tag to another*/
                highLightTag(randomTag);
            }, highlightDelay);
        } else {
            const randomTag = pickRandomTag();
            highLightTag(randomTag);
            setTimeout(() => {
                unHighLightTag(randomTag);
            }, highlightDelay);
            counter++;
        }
    }, intervalDelay);
}


// selects all elements with the class 'tag' and returns a randomly selected tag element from the list.
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

// adds the CSS class 'highlight' to the specified tag element, visually highlighting it
function highLightTag(tag) {
    tag.classList.add('highlight');
}

// removes the CSS class 'highlight' from the specified tag element, removing the visual highlight effect.
function unHighLightTag(tag) {
    tag.classList.remove('highlight');
}
