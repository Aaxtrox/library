// grab elements
// buttons
addButton = document.getElementById('addButton');
submit = document.getElementById('submit');
discard = document.getElementById('discard');
cogs = document.getElementsByClassName('cogs');
deleteButton = document.getElementsByClassName('deleteButton');
save = document.getElementById('save');
cogsDiscard = document.getElementById('cogsDiscard');
// inputs
pages = document.getElementById('pages');
updatePages = document.getElementById('updatePages');
// main
main = document.getElementsByTagName('main')[0];
// pop up
popup = document.getElementById('popup');
cogsPopup = document.getElementById('cogsPopup');

// create global variables for cogsI
let cogsI;

// array for books
let myLibrary = [];

// prevent default for all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
    });
});

// addButton event listeners to display pop up
addButton.addEventListener('click', () => {
    // change pop up display to block
    document.getElementById('popup').style.display = 'block';

    // run disableHoover function
    disableHoover();
});

// submit event listeners to add book to library
submit.addEventListener('click', () => {
    // change pop up display to none
    popup.style.display = 'none';

    // if pages is empty set it to 0
    if (pages.value == '') {
        pages.value = 0;
    }

    // run enableHoover function
    enableHoover();

    // run addBookToLibrary function
    addBookToLibrary();

    // run clearInput function
    clearInput();
});

// discard event listeners to hide pop up
discard.addEventListener('click', () => {
    // change pop up display to none
    popup.style.display = 'none';

    // run enableHoover function
    enableHoover();

    // run clearInput function
    clearInput();
});

// save event listeners to save changes
save.addEventListener('click', () => {
    // grab input values from updatePages
    let updatePages = document.getElementById('updatePages').value;

    // update pages to myLibrary array
    myLibrary[cogsI].pages = updatePages + ' pages';

    // run enableHoover function
    enableHoover();

    // run displayBooks function
    displayBooks();
    
    // change cogsForm display to none
    cogsPopup.style.display = 'none';
});

// cogsDiscard event listeners to hide pop up
cogsDiscard.addEventListener('click', () => {
    // change cogsForm display to none
    cogsPopup.style.display = 'none';

    // run enableHoover function
    enableHoover();
});

// pages prevent to be empty or negative
pages.addEventListener('input', () => {
    if (pages.value <= 0) {
        pages.value = 0;
    }
});

// updatePages set initial value to be equal to pages
updatePages.addEventListener('click', () => {
    updatePages.value = pages.value;
});

// Book constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
}

// addBookToLibrary function
function addBookToLibrary() {
    // grab input values
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    // create new book object
    let newBook = new Book(title, author, pages);

    // push new book object to myLibrary array
    myLibrary.push(newBook);

    // run displayBooks function
    displayBooks();

    // clear input values
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

// displayBooks function
function displayBooks() {
    // clear everything inside main
    document.getElementsByTagName('main')[0].innerHTML = '';

    // loop through myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {

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
        cogs[i].addEventListener('click', () => {
            // change cogsForm display to block
            cogsPopup.style.display = 'block';
            // assign i to cogsI
            cogsI = i;
            // run disableHoover function
            disableHoover();
        });

        // deleteButton event listeners to delete book
        newButton_2.addEventListener('click', () => {
            // remove book from myLibrary array
            myLibrary.splice(i, 1);
            // run displayBooks function
            displayBooks();
        });
    }
}

// function t disable hoover effect on buttons
function disableHoover() {
    // disable hoover effect on addButton
    addButton.style.pointerEvents = 'none';

    // disable hoover effect on deleteButton
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].style.pointerEvents = 'none';
    }

    // disable click event on cogs
    for (let i = 0; i < cogs.length; i++) {
        cogs[i].style.pointerEvents = 'none';
    }

    //transition main 1s
    main.style.transition = '1s';

    // gray scale main
    main.style.filter = 'grayscale(100%)';
}

// function to enable hoover effect on buttons
function enableHoover() {
    // enable hoover effect on addButton
    addButton.style.pointerEvents = 'auto';

    // enable hoover effect on deleteButton
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].style.pointerEvents = 'auto';
    }

    // enable click event on cogs
    for (let i = 0; i < cogs.length; i++) {
        cogs[i].style.pointerEvents = 'auto';
    }

    //transition main 1s
    main.style.transition = '1s';

    // gray scale main
    main.style.filter = 'grayscale(0%)';
}

// function clear input values
function clearInput() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}