// Using arrays and loops for multiple books

var bookTitles = [
    "The Hobbit",
    "Harry Potter and the Philosopher's Stone",
    "1984",
    "To Kill a Mockingbird",
    "The Catcher in the Rye",
    "Pride and Prejudice",
    "The Great Gatsby",
    "The Lord of the Rings",
    "Moby-Dick",
    "Alice's Adventures in Wonderland"
];

var bookAuthors = [
    "J. R. R. Tolkien",
    "J.K. Rowling",
    "George Orwell",
    "Harper Lee",
    "J.D. Salinger",
    "Jane Austen",
    "F. Scott Fitzgerald",
    "J. R. R. Tolkien",
    "Herman Melville",
    "Lewis Carroll"
];

// Display details of each book
for (var i = 0; i < bookTitles.length; i++) {
    console.log(bookTitles[i] + " by " + bookAuthors[i]);
}
