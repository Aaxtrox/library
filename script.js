addButton = document.getElementById('addButton');
discard = document.getElementById('discard');

addButton.addEventListener('click', () => {
    // change pop up display to block
    document.getElementById('popup').style.display = 'block';
    //disable hoover effect on addButton
    addButton.style.pointerEvents = 'none';
    //shade out effect on body
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(0,0,0,0.2)';
});

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
