const addBook = document.querySelector('#addBook')
const removeBook = document.querySelector('#removeBook')
const librarySpace = document.querySelector('#bookSpace')


/* Add book method */
addBook.addEventListener('click', function(e) {
    /* Retrieve book name */
    let bookName = prompt("Please enter a book name");

    /* Create new book element */
    const newBookCard = document.createElement("div");
    newBookCard.classList.add("book-card");
    const newBook = document.createElement("div");
    newBook.classList.add("book-title");
    newBook.textContent = bookName;

    /* Add new book to bookshelf */
    newBookCard.appendChild(newBook);
    librarySpace.appendChild(newBookCard);
})


/* Remove Book method */
removeBook.addEventListener('click', function(e){
    /* Retrieve book name */
    let bookName = prompt("Please enter the book you want to remove");

    /* get bookshelf and all book cards */
    const bookShelf = document.getElementById("#bookSpace");
    const cards = bookShelf.children;


    
})