"use strict";

/*Describe a model of a library. For that define classes: Library, Reader, Book.
To create correct hierarchies and connections, you should have a subclasses of Book such as
LibraryBookBase, LibraryBook, ReaderBook.
Book should have
fields
title string
author string

methods
getters for fields
toString()
isTheSameBook(book) - which returns true if the book title and author is the same with the
current instance, false, otherwise. */

class Book {
  static titles = [];
  constructor(title, author) {
    this.title = title;
    this.author = author;
    Book.titles.push(title);
  }
  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== "string") {
      throw new Error("The title must be a string");
    }
    this._title = value;
  }
  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string") {
      throw new Error("The title must be a string");
    }
    this._author = value;
  }
  toString() {
    return `Title: ${this.title}
Author: ${this.author}`;
  }
  isTheSameBook(book) {
    if (this.title === book.title && this.author === book.author) {
      return true;
    }
    return false;
  }
}

/*LibraryBookBase should have
fields

title - string
author - string
bookId - number

methods
getters for fields
toString() */

class LibraryBookBase extends Book {
  static id = 0;
  constructor(title, author) {
    super(title, author);
    this.bookId = 0;
  }
  get bookId() {
    return this._bookId;
  }

  set bookId(value) {
    value = ++LibraryBookBase.id;
    this._bookId = value;
  }
  toString() {
    let str = super.toString();
    return `${str}
BookId: ${this.bookId}
      `;
  }
}

/*LibraryBook should have
fields
title - string
author - string
bookId - number
quantity - number
methods
getters for fields
setters for appropriate fields
toString()
increaseQuantityBy(amount - number) - increases the quantity of the book by the given
amount.
decreaseQuantityBy(amount - number) - decrease the quantity of the book by the given
amount. */

class LibraryBook extends LibraryBookBase {
  static id = 0;
  constructor(title, author, quantity) {
    super(title, author);
    this.LibraryBookId = 0;
    this.quantity = quantity;
  }
  get LibraryBookId() {
    return this._LibraryBookId;
  }
  set LibraryBookId(value) {
    value = ++LibraryBook.id;
    this._LibraryBookId = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value !== "number") {
      throw new Error("The quantity must be a number");
    }
    this._quantity = value;
  }
  toString() {
    let str = super.toString();
    return `${str}
Library Book Id: ${this.LibraryBookId}
Quantity: ${this.quantity}      `;
  }
  increaseQuantityBy(amount) {
    if (typeof amount !== "number") {
      throw new Error("The amount must be a number");
    }
    this.quantity += amount;
  }
  decreaseQuantityBy(amount) {
    if (typeof amount !== "number") {
      throw new Error("The amount must be a number");
    }
    this.quantity -= amount;
  }
}

/*ReaderBook should have
fields

title - string
author - string
bookId - number
expirationDate - string
isReturned - boolean

methods
getters for fields
setters for appropriate fields
toString() */

class ReaderBook extends LibraryBook {
  static id = 0;
  constructor(title, author, quantity, expirationDate, isReturned) {
    super(title, author, quantity);
    this.readerBookId = 0;
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
  }
  get readerBookId() {
    return this._readerBookId;
  }
  set readerBookId(value) {
    value = ++ReaderBook.id;
    this._readerBookId = value;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(value) {
    if (typeof value !== "string") {
      throw new Error("The Date must be a string");
    }
    this._expirationDate = this.expirationDate;
  }
  get isReturned() {
    return this._isReturned;
  }
  set isReturned(value) {
    if (typeof value !== "boolean") {
      throw new Error("You must enter true or false");
    }
    this._isReturned = value;
  }
  toString() {
    let str = super.toString();
    return `${str}
Reader Book id: ${this.readerBookId}
Expiration Date: ${this.expirationDate}
Returned: ${this.isReturned}`;
  }
}

/*Reader should have
fields

firstName - string
lastName - string
readerId - number
books - Array of ReaderBook

methods
getters for fields
setters for appropriate fields
toString()
borrowBook(book - Book, library - Library) - requests a book from the library. If
returned book is not a null and is a type of ReaderBook, pushes it to the books. */

class Reader {
  static readerIdGenerator() {
    return `R${Math.floor(Math.random() * 1000)}`;
  }
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = 0;
    this.books = [];
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== "string") {
      throw new Error("The name must be a string");
    }
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string") {
      throw new Error("The surname must be a string");
    }
    this._lastName = value;
  }
  get readerId() {
    return this._readerId;
  }

  set readerId(value) {
    value = Reader.readerIdGenerator();
    this._readerId = value;
  }

  toString() {
    return `First Name:${this.firstName}
Last Name: ${this.lastName}
Reader Id: ${this.readerId}
Reader books: ${this.books}`;
  }
  becomeReaderOfLibrary(library) {
    library.readers.push(this);
  }

  //borrowBook(book - Book, library - Library) - requests a book from the library. If
  //returned book is not a null and is a type of ReaderBook, pushes it to the books.
  borrowBook(book, library) {
    let newBook = Library.lendBook.call(library, book, this);
    this.books.push(newBook);
  }
}

/*Library should have
fields
books - Array of LibraryBook
readers - Array of Readers

methods
getters for fields

doHaveBook(requestedBook - Book) - returns true if library has the book, false otherwise.
addBook(newBook - Book) - add new book to the library. If the book already exists, increases
its quantity, otherwise adds new book of type LibraryBook.
addBooks(newBooks) - add new books to the library with the same logic as the addBook.
Returns changed array of the books.
checkReaderId(readerId) - returns true if there exist a reader with the given id, otherwise
returns false.
lendBook(book - Book, readerId) - checks whether the book exists and there is at least
one at the library. Checks whether library has a reader with the given id. If the both are true,
returns a book of type ReaderBook. */

class Library {
  constructor() {
    this.libraryBooks = [];
    this.readers = [];
  }
  doHaveBook(requestedBook) {
    if (this.libraryBooks.includes(requestedBook)) {
      return true;
    }
    return false;
  }

  addBook(newBook) {
    if (this.libraryBooks.includes(newBook)) {
      newBook.increaseQuantityBy(1);
      return;
    } else if (newBook instanceof LibraryBook) {
      this.libraryBooks.push(newBook);
    }
  }
  addBooks(...newBooks) {
    newBooks.forEach((book) => {
      if (this.libraryBooks.includes(book)) {
        book.increaseQuantityBy(1);
        return;
      } else if (book instanceof LibraryBook) {
        this.libraryBooks.push(book);
      }
    });
    return this.libraryBooks;
  }
  checkReaderId(reader) {
    return this.readers.some((item) => item.readerId === reader.readerId);
  }
  static lendBook(book, reader) {
    if (
      this.libraryBooks.includes(book) &&
      this.readers.includes(reader) &&
      book instanceof ReaderBook
    ) {
      return book;
    }
  }
}

let YDNJS = new Book("YDNJS", "Kyle Simpson");
//console.log(book.toString());
let MonteQristo = new LibraryBookBase("Grapf Monte Qrist", "Alexsandr Dyuma");
//let baseBook1 = new LibraryBookBase("Grapf Monte Qrist", "Alexsandr Dyuma");
//console.log(baseBook.toString());
//console.log(Book.titles)
let Vardananq = new LibraryBook("Vardananq", "Derenik Demirchyan", 1);
//console.log(libraryBook.toString());
let Samvel = new ReaderBook("Samvel", "Raffi", 1, "27.5.2021", true);
//console.log(readerBook instanceof ReaderBook);
//console.log(Book.titles)
let reader = new Reader("Tigran", "Khanaghyan");
//console.log(reader.toString());
let nationalLibrary = new Library();
reader.becomeReaderOfLibrary(nationalLibrary);
nationalLibrary.addBooks(Vardananq, Vardananq, YDNJS, Samvel);
console.log(nationalLibrary.checkReaderId(reader));

//console.log(Library.lendBook.call(nationalLibrary, Samvel, reader));
reader.borrowBook(Samvel, nationalLibrary);
console.log(reader.toString());
