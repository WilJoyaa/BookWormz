const addBook = document.querySelector('#addBook')
const removeBook = document.querySelector('#removeBook')
const librarySpace = document.querySelector('#bookSpace')

/* Book Object */
const bookObj = {
    bookName: null, 
    bookAuthor: null,
    bookPages: null,
    userPages: null,
    bookId: null,
};


/* Add book method */
addBook.addEventListener('click', function(e) {
    /* check for valid input */
    let bookName = prompt("Please enter a book name");
    if (bookName.trim() == null || bookName.trim() == ""){
        alert("please enter a valid book");
    } else {
        /* existing book checker */
        const bookShelf = document.querySelector("#bookSpace");
        const cards = bookShelf.children;
                for ( let i = 0; i < cards.length; i++ ){
                    if (bookName.toLowerCase().trim() == cards[i].textContent.toLowerCase().trim()){
                        alert(bookName + " is already in your library!");
                        return;
                    }
                }

        /* Create new book element */
        const newBookCard = document.createElement("div");
        newBookCard.classList.add("book-card");
        const newBook = document.createElement("div");
        newBook.classList.add("bookTitle");
        newBook.textContent = bookName.trim();

        /* Add new book to bookshelf */
        newBookCard.appendChild(newBook);
        librarySpace.appendChild(newBookCard);
    } 
})


/* Remove Book method */
removeBook.addEventListener('click', function(e){
    /* book count checker */
    const bookShelf = document.querySelector("#bookSpace");
    const cards = bookShelf.children;

    if (cards.length == 0){
        alert("No books to remove!");
    } else {
        /* Retrieve book name */
        let bookName = prompt("Please enter the book you want to remove");
            /* book remover */
            for ( let i = 0; i < cards.length; i++ ){
                if (bookName == cards[i].textContent){
                    bookShelf.removeChild(cards[i]);
                }
            }}
})