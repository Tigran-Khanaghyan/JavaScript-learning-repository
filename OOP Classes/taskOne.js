"use strict";

//Create an Author class and a Book class.

/*Author should have:
fields
name
email
gender
methods
getters for fields
toString() */

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
  set name(value) {
    if (!isNaN(value)) {
      throw new Error("The name must be a word");
    } else if (value.length < 3) {
      throw new Error("The name is too short");
    }
    this._name = value;
  }
  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Your input is not correct");
    }
    this._email = value;
  }
  set gender(value) {
    if (value !== "male" || value !== "female") {
      throw new Error("You must enter correct gender");
    }
    this._gender = this.gender;
  }
  toString() {
    return `${this.name}
${this.email}
${this.gender}
             `;
  }
}

/*Book should have:
fields

title
author(Author)
price
quantity

methods

getters for fields
setters for fields
getProfit() - which calculates the profit from the book based on the price and quantity.
toString() */

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this.title = value;
  }
  get author() {
    this._author = author;
  }
  set author(value) {
    if (value instanceof Author) {
      this._author = value;
      return;
    }
    throw new Error("You entered a wrong author");
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      throw new Error("The price must be a number");
    }
    this._price = value;
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
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author1.name = "Tigran"; // throws error
let newBook = new Book("book title", author1, 9000, 100);
console.log(newBook);
