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

// save event listeners to save changes
save.addEventListener('click', () => {
    //if updatePages.value is empty
    if (document.getElementById('updatePages').value == '') {
        // assign updatePages to 0
        document.getElementById('updatePages').value = 0;
    }
    // grab input values from updatePages
    let updatePages = document.getElementById('updatePages').value;

    // update pages to myLibrary array
    myLibrary[cogsI].pages = updatePages + ' pages';

    // run runUpdate function
    runUpdate();
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

    // run clearInput function
    clearInput();
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
            // set text content of updatePages to myLibrary[i].pages
            document.getElementById('updatePages').value = parseInt(myLibrary[i].pages);

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

//function run
function run() {
    // change pop up display to none
    popup.style.display = 'none';

    // run enableHoover function
    enableHoover();

    // run addBookToLibrary function
    addBookToLibrary();

    // run clearInput function
    clearInput();
}

//function runUpdate
function runUpdate() {
    // run enableHoover function
    enableHoover();

    // run displayBooks function
    displayBooks();

    // clear input values
    document.getElementById('updatePages').value = '';
    
    // change cogsForm display to none
    cogsPopup.style.display = 'none';
}

// function clear input values
function clearInput() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

//current year for links section
document.getElementById("year").innerHTML = new Date().getFullYear();