// grab elements
addButton = document.getElementById('addButton');
discard = document.getElementById('discard');
cogsDiscard = document.getElementById('cogsDiscard');
popup = document.getElementById('popup');
cogsPopup = document.getElementById('cogsPopup');
submit = document.getElementById('submit');
readButton = document.getElementsByClassName('readButton');
deleteButton = document.getElementsByClassName('deleteButton');
main = document.getElementsByTagName('main')[0];

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
    // disable hoover effect on addButton
    addButton.style.pointerEvents = 'none';
    // disable hoover effect on readButton
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].style.pointerEvents = 'none';
    }
    // disable hoover effect on deleteButton
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].style.pointerEvents = 'none';
    }
    // grascale main
    main.style.filter = 'grayscale(100%)';
});

// discard event listeners to hide pop up
discard.addEventListener('click', () => {
    // change pop up display to none
    popup.style.display = 'none';
    //enable hoover effect on addButton
    addButton.style.pointerEvents = 'auto';
    // enable hoover effect on readButton
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].style.pointerEvents = 'auto';
    }
    // enable hoover effect on deleteButton
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].style.pointerEvents = 'auto';
    }
    // grascale main
    main.style.filter = 'grayscale(0%)';
});

// submit event listeners to add book to library
submit.addEventListener('click', () => {
    // run addBookToLibrary function
    addBookToLibrary();
    // change pop up display to none
    popup.style.display = 'none';
    //enable hoover effect on addButton
    addButton.style.pointerEvents = 'auto';
    // enable hoover effect on readButton
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].style.pointerEvents = 'auto';
    }
    // enable hoover effect on deleteButton
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].style.pointerEvents = 'auto';
    }
    // grascale main
    main.style.filter = 'grayscale(0%)';
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

    // run displayBooks function
    displayBooks();

    // clear input values
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

    // clear read checkbox
    document.getElementById('read').checked = false;
}

// displayBooks function
function displayBooks() {
    // clear everything inside main
    document.getElementsByTagName('main')[0].innerHTML = '';

    // loop through myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);

        // create new div element inside main
        let newDiv = document.createElement('div');
        newDiv.classList.add('book');
        // add newDiv to tag name main
        document.getElementsByTagName('main')[0].appendChild(newDiv);

        //create new h2 element inside newDiv
        let newH2 = document.createElement('h2');
        newH2.classList.add('title');
        newH2.textContent = myLibrary[i].title;
        newDiv.appendChild(newH2);

        //create new h3 element inside newDiv
        let newH3 = document.createElement('h3');
        newH3.classList.add('author');
        newH3.textContent = myLibrary[i].author;
        newDiv.appendChild(newH3);

        //create new h3 element inside newDiv
        let newH3_2 = document.createElement('h3');
        newH3_2.classList.add('pages');
        newH3_2.textContent = myLibrary[i].pages;
        newDiv.appendChild(newH3_2);

        //create new div element inside newDiv
        let newDiv_2 = document.createElement('div');
        newDiv.appendChild(newDiv_2);

        // create new cogs button element inside newDiv > newDiv_2
        let newButton = document.createElement('button');
        newButton.classList.add('cogs');
        newButton.innerHTML = '<img src="./img/cogs.svg" alt="cogs">';
        newDiv_2.appendChild(newButton);

        // create new button element inside newDiv
        let newButton_2 = document.createElement('button');
        newButton_2.classList.add('deleteButton');
        newButton_2.innerHTML = '<img src="./img/delete-forever.svg" alt="delete">';
        newDiv_2.appendChild(newButton_2);

        // newButton event listeners to display pop up
        newButton.addEventListener('click', () => {
            // change cogsForm display to block
            cogsPopup.style.display = 'block';
        });

        // deleteButton event listeners to delete book
        newButton_2.addEventListener('click', () => {
            // remove book from myLibrary array
            myLibrary.splice(i, 1);
            // run displayBooks function
            displayBooks();
        });

        // cogsDiscard event listeners to hide pop up
        cogsDiscard.addEventListener('click', () => {
            // change cogsForm display to none
            cogsPopup.style.display = 'none';
        });
    }
}

