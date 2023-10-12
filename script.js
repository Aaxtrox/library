// grab elements
// buttons
addButton = document.getElementById('addButton');
submit = document.getElementById('submit');
discard = document.getElementById('discard');
cogs = document.getElementsByClassName('cogs');
deleteButton = document.getElementsByClassName('deleteButton');
save = document.getElementById('save');
cogsDiscard = document.getElementById('cogsDiscard');
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

// don't allow user to type anything other than numbers
document.getElementById('pages').addEventListener('input', () => {
    let pages = document.getElementById('pages').value;
    let regex = /[^0-9]/g;
    document.getElementById('pages').value = pages.replace(regex, '');
    // if pages.value starts with 0 don't accept other numbers after
    if (document.getElementById('pages').value.startsWith(0)) {
        document.getElementById('pages').value = 0;
    }
    // limit input to 15 numbers
    if (document.getElementById('pages').value.length > 15) {
        document.getElementById('pages').value = document.getElementById('pages').value.slice(0, 15);
    }
    // not allowed pages.value to be less than 0
    if (document.getElementById('pages').value < 0) {
        document.getElementById('pages').value = 0;
    }
});

// submit event listeners to add book to library
submit.addEventListener('click', () => {
    if (title.value == '' || author.value == '') {
        alert('Please fill out all fields');
        return false;  
    // else if pages is empty or less than 0
    } else if (title.value != '' && author.value != '' && pages.value == '' ||
    title.value != '' && author.value != '' && pages.value < 0) {
        // assign pages to 0
        pages.value = 0;

        // function run
        run();
    } else {
        // function run
        run();
    }
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

// don't allow user to type anything other than numbers
document.getElementById('updatePages').addEventListener('input', () => {
    let updatePages = document.getElementById('updatePages').value;
    let regex = /[^0-9]/g;
    document.getElementById('updatePages').value = updatePages.replace(regex, '');
    // if updatePages.value starts with 0 don't accept other numbers after
    if (document.getElementById('updatePages').value.startsWith(0)) {
        document.getElementById('updatePages').value = 0;
    }
    // limit input to 15 numbers
    if (document.getElementById('updatePages').value.length > 15) {
        document.getElementById('updatePages').value = document.getElementById('updatePages').value.slice(0, 15);
    }
    //if updatePages.value is less than 0 or empty
    if (document.getElementById('updatePages').value < 0) {
        // assign updatePages to 0
        document.getElementById('updatePages').value = 0;
    }
});

// cogsDiscard event listeners to hide pop up
cogsDiscard.addEventListener('click', () => {
    // change cogsForm display to none
    cogsPopup.style.display = 'none';

    // clear input values
    document.getElementById('updatePages').value = '';

    // run enableHoover function
    enableHoover();
});

// Define the Book class
class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages + ' pages';
    }
}
  
// Define the Library class
class Library {
    constructor() {
        this.myLibrary = [];
    }
  
    addBookToLibrary(title, author, pages) {
        const newBook = new Book(title, author, pages);
        this.myLibrary.push(newBook);
    }
  
    displayBooks() {
        const main = document.getElementsByTagName('main')[0];
        main.innerHTML = '';
  
        this.myLibrary.forEach((book, i) => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('book');
            main.appendChild(newDiv);
    
            const newH2 = document.createElement('h2');
            newH2.classList.add('title');
            newH2.textContent = book.title;
            newDiv.appendChild(newH2);
    
            const newH3 = document.createElement('h3');
            newH3.classList.add('author');
            newH3.textContent = book.author;
            newDiv.appendChild(newH3);
  
            const newH3_2 = document.createElement('h3');
            newH3_2.classList.add('pages');
            newH3_2.textContent = book.pages;
            newDiv.appendChild(newH3_2);
    
            const newDiv_2 = document.createElement('div');
            newDiv.appendChild(newDiv_2);
    
            const newButton = document.createElement('button');
            newButton.classList.add('cogs');
            newButton.innerHTML = '<img src="./img/cogs.svg" alt="cogs">';
            newDiv_2.appendChild(newButton);
  
            const newButton_2 = document.createElement('button');
            newButton_2.classList.add('deleteButton');
            newButton_2.innerHTML = '<img src="./img/delete-forever.svg" alt="delete">';
            newDiv_2.appendChild(newButton_2);
  
            newButton.addEventListener('click', () => {
                document.getElementById('updatePages').value = parseInt(book.pages);
                cogsPopup.style.display = 'block';
                cogsI = i;
                disableHoover();
            });
  
            newButton_2.addEventListener('click', () => {
                this.myLibrary.splice(i, 1);
                this.displayBooks();
            });
        });
    }
}

// Create a library instance
const library = new Library();

// save event listeners to save changes
save.addEventListener('click', () => {
    //if updatePages.value is empty
    if (document.getElementById('updatePages').value == '') {
        // assign updatePages to 0
        document.getElementById('updatePages').value = 0;
    }
    // grab input values from updatePages
    let updatePages = document.getElementById('updatePages').value
    
    // update pages to myLibrary array
    library.myLibrary[cogsI].pages = updatePages + ' pages';

    // run runUpdate function
    runUpdate();
});
  
// Refactor functions to use the library instance
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
  
    library.addBookToLibrary(title, author, pages);
    library.displayBooks();
    clearInput();
}
  
function run() {
    popup.style.display = 'none';
    enableHoover();
    addBookToLibrary();
    clearInput();
}
  
function runUpdate() {
    enableHoover();
    library.displayBooks();
    document.getElementById('updatePages').value = '';
    cogsPopup.style.display = 'none';
}
  
function clearInput() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

// function to disable hoover effect on buttons
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

//current year for links section
document.getElementById("year").innerHTML = new Date().getFullYear();