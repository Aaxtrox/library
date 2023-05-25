// grab elements
addButton = document.getElementById('addButton');
discard = document.getElementById('discard');
popup = document.getElementById('popup');
submit = document.getElementById('submit');

//array for books
let myLibrary = [];

//submit prevent default
submit.addEventListener('click', (e) => {
    e.preventDefault();
});

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
    popup.style.display = 'none';
    //enable hoover effect on addButton
    addButton.style.pointerEvents = 'auto';
});

// add event listener to submit button
submit.addEventListener('click', () => {
    //run addBookToLibrary function
    addBookToLibrary();
    // change pop up display to none
    popup.style.display = 'none';
    //enable hoover effect on addButton
    addButton.style.pointerEvents = 'auto';
});

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = read;
}

// addBookToLibrary function
function addBookToLibrary() {
    // grab input values
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    // check if read is true or false
    if (read === true) {
        read = 'Read';
    } else {
        read = 'Not Read';
    }

    // create new book object
    let newBook = new Book(title, author, pages, read);

    // push new book object to myLibrary array
    myLibrary.push(newBook);
    console.log(myLibrary);
}
