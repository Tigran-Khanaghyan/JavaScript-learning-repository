// "use strict";

// /* Describe a model of a library. For that define classes: Library, Reader, Book.
// To create correct hierarchies and connections, you should have a subclasses of Book such as
// LibraryBookBase, LibraryBook, ReaderBook.*/

// /*Book should have
// fields
// title string
// author string

// methods
// getters for fields
// toString()
// isTheSameBook(book) - which returns true if the book title and author is the same with the
// current instance, false, otherwise. */

// class Book {
//   static titles = [];
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.titles.push(title);
//   }

//   get title() {
//     return this._title;
//   }
//   set title(value) {
//     if (typeof value !== "string") {
//       throw new Error("The title should be a string");
//     }
//     this._title = value;
//   }
//   get author() {
//     return this._author;
//   }

//   set author(value) {
//     if (typeof value !== "string") {
//       throw new Error("The author name should be a string");
//     }
//     this._author = value;
//   }
//   toString() {
//     return `Title: ${this.title}
// Author: ${this.author}`;
//   }
//   isTheSameBook(book) {
//     if (this.title === book.title && this.author === book.author) {
//       return true;
//     }
//     return false;
//   }
// }

// /*LibraryBookBase should have
// fields

// title - string
// author - string
// bookId - number

// methods
// getters for fields
// toString() */

// class LibraryBookBase extends Book {
//   constructor(title, author) {
//     super(title, author);
//     this.bookId = 0;
//   }
//   get bookId() {
//     console.log(1);
//     return this._bookId;
//   }
//   set bookId(value) {
//     this._bookId = ++value;
//   }
//   toString() {
//     let str = super.toString();
//     return `${str}
// BookId: ${this.bookId}
//         `;
//   }
// }

// /*LibraryBook should have
// fields

// title - string
// author - string
// bookId - number
// quantity - number

// methods
// getters for fields
// setters for appropriate fields
// toString()
// increaseQuantityBy(amount - number) - increases the quantity of the book by the given
// amount.
// decreaseQuantityBy(amount - number) - decrease the quantity of the book by the given
// amount. */

// class LibraryBook extends LibraryBookBase {
//   static _id = 0;
//   constructor(title, author, quantity) {
//     super(title, author);
//     this._quantity = quantity;
//     this._bookId = ++LibraryBook._id;
//   }
//   get bookId() {
//     return this._bookId;
//   }
//   get quantity() {
//     return this._quantity;
//   }
//   set quantity(value) {
//     if (typeof value !== "number") {
//       throw new Error("The quantity mus be a number");
//     }
//     this._quantity = value;
//   }
//   toString() {
//     let str = super.toString();
//     return `${str}
// Quantity: ${this.quantity}
// BookId: ${this.bookId}
//         `;
//   }
//   increaseQuantityBy(amount) {
//     if (typeof amount !== "number") {
//       throw new Error("The amount must be a number");
//     }
//     this.quantity = this.quantity + amount;
//   }
//   decreaseQuantityBy(amount) {
//     if (typeof amount !== "number") {
//       throw new Error("The amount must be a number");
//     }
//     this.quantity = this.quantity - amount;
//   }
// }

// /*ReaderBook should have
// fields

// title - string
// author - string
// bookId - number
// expirationDate - string
// isReturned - boolean

// methods
// getters for fields
// setters for appropriate fields
// toString() */

// class ReaderBook extends LibraryBookBase {
//   static _id = 0;
//   constructor(title, author, quantity, expirationDate, isReturned) {
//     super(title, author);
//     this._bookId = ++ReaderBook._id;
//     this._quantity = quantity;
//     this._expirationDate = expirationDate;
//     this._isReturned = isReturned;
//   }
//   get bookId() {
//     return this._bookId;
//   }
//   get expirationDate() {
//     return this._expirationDate;
//   }
//   set expirationDate(value) {
//     if (typeof value !== "string") {
//       throw new Error("The date must be a string");
//     }
//     this._expirationDate = value;
//   }
//   get isReturned() {
//     return this._isReturned;
//   }
//   set isReturned(value) {
//     if (typeof value !== "boolean") {
//       throw new Error("isReturned is boolean type");
//     }
//     this._isReturned = value;
//   }
//   toString() {
//     let str = super.toString();
//     return `${str}
// BookId: ${this.bookId}
// Expiration Date: ${this.expirationDate}
// Quantity : ${this.quantity}
// Returned : ${this.isReturned}
//         `;
//   }
// }

// /*Reader should have
// fields
// firstName - string
// lastName - string
// readerId - number
// books - Array of ReaderBook

// methods
// getters for fields
// setters for appropriate fields
// toString()
// borrowBook(book - Book, library - Library) - requests a book from the library. If
// returned book is not a null and is a type of ReaderBook, pushes it to the books. */

// class Reader {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._readerId = readerId;
//     this._book = [];
//   }

//   borrowBook(book, library) {}

//   get firstName() {
//     return this._firstName;
//   }

//   set firstName(value) {
//     if (typeof value !== "string") {
//       throw new Error("The firstname must be a string");
//     }
//     this._firstName = value;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   set lastName(value) {
//     if (typeof value !== "string") {
//       throw new Error("The lastname must be a string");
//     }
//     this._lastName = value;
//   }
// }

// /*Library should have
// fields
// books - Array of LibraryBook
// readers - Array of Readers

// methods
// getters for fields
// doHaveBook(requestedBook - Book) - returns true if library has the book, false otherwise.
// addBook(newBook - Book) - add new book to the library. If the book already exists, increases
// its quantity, otherwise adds new book of type LibraryBook.
// addBooks(newBooks) - add new books to the library with the same logic as the addBook.
// Returns changed array of the books.
// checkReaderId(readerId) - returns true if there exist a reader with the given id, otherwise
// returns false.
// lendBook(book - Book, readeId) - checks whether the book exists and there is at least
// one at the library. Checks whether library has a reader with the given id. If the both are true,
// returns a book of type ReaderBook. */

// // class Library{
// //     constructor()
// // }

// let book1 = new Book("Charl Chaplin", "Ani Gasparyan");
// let book2 = book1;
// let baseBook = new LibraryBookBase("Charl Chaplin", "Ani Gasparyan");
// let libraryBook = new LibraryBook("Graph Monte Crist", "Alexsandr Dyuma");
// let libraryBook1 = new LibraryBook("Graph Monte Crist", "Alexsandr Dyuma", 100);
// let readerBook = new ReaderBook(
//   "YDNJS",
//   "Kyle Simpson",
//   20,
//   "26/05/2021",
//   true
// );
// libraryBook1.increaseQuantityBy(100);
// libraryBook1.decreaseQuantityBy(50);
// //console.log(book1.isTheSameBook(book2));
// //console.log(libraryBook1.toString());
// //console.log(readerBook.toString());
// console.log(Book.titles);
