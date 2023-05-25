// grab elements
addButton = document.getElementById('addButton');
discard = document.getElementById('discard');
popup = document.getElementById('popup');
submit = document.getElementById('submit');

//array for books
let myLibrary = [];

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
    //run displayBooks function
    displayBooks();
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
    // myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not read yet'));
    // myLibrary.push(new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, 'Read'));
    // grab input values
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    //console.log label value
    console.log(read)
    // add new book to myLibrary array
    myLibrary.push(new Book(title, author, pages, read));
    // clear input values
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = '';
}

function displayBooks() {
    //if array got 1 more book than cards in main add last book to main
    if (myLibrary.length > document.querySelectorAll('main div').length) {
        // create div
        let div = document.createElement('div');
        // add class to div
        div.classList.add('card');
        // create h1
        let h1 = document.createElement('h1');
        // add class to h1
        h1.classList.add('title');
        // create h2
        let h2 = document.createElement('h2');
        // add class to h2
        h2.classList.add('author');
        // create h3
        let h3 = document.createElement('h3');
        // add class to h3
        h3.classList.add('pages');
        // create button
        let button = document.createElement('button');
        // add class to button
        button.classList.add('read');
        // add id to button
        button.id = 'read';
        // add text to button
        button.innerText = 'Read';
        // create button
        let buttonRemove = document.createElement('button');
        // add class to button
        buttonRemove.classList.add('remove');
        // add id to button
        buttonRemove.id = 'remove';
        // add text to button
        buttonRemove.innerText = 'Remove';
        // append h1 to div
        div.appendChild(h1);
        // append h2 to div
        div.appendChild(h2);
        // append h3 to div
        div.appendChild(h3);
        // append button to div
        div.appendChild(button);
        // append button to div
        div.appendChild(buttonRemove);
        // append div to main
        document.getElementsByTagName('main')[0].appendChild(div);
        // add text to h1
        h1.innerText = myLibrary[myLibrary.length - 1].title;
        // add text to h2
        h2.innerText = myLibrary[myLibrary.length - 1].author;
        // add text to h3
        h3.innerText = myLibrary[myLibrary.length - 1].pages;
    }
}
