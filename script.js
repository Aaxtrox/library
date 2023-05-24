// grab elements
addButton = document.getElementById('addButton');
discard = document.getElementById('discard');

// addButton event listeners to display pop up
addButton.addEventListener('click', () => {
    // change pop up display to block
    document.getElementById('popup').style.display = 'block';
    //disable hoover effect on addButton
    addButton.style.pointerEvents = 'none';
});

// discard event listeners to hide pop up
discard.addEventListener('click', () => {
    // change pop up display to none
    document.getElementById('popup').style.display = 'none';
    //enable hoover effect on addButton
    addButton.style.pointerEvents = 'auto';
    //body grade out effect
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
});

let myLibrary = [];

function Book() {
}

function addBookToLibrary() {
}
