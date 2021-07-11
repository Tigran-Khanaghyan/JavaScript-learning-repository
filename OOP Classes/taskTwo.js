"use strict";

/*Create an Account class. Account should have:
fields

id
name
balance

getters for fields
setters - for name and balance

credit(amount) - which should add amount to balance and return the updated balance.
debit(amount) - which should subtract the amount from the balance, if amount is less than the
balance, otherwise output “Amount exceeded balance.”
transferTo(anotherAccount, amount) - which should subtract the amount from the account
balance and add it to the given anotherAccount and return the updated balance, if amount is less
than the balance, otherwise output “Amount exceeded balance.”
static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
and identifies if they are the same or not comparing all fields.
toString() */

let idGenerator = () => {
  return Math.floor(Math.random() * 100);
};

class Account {
  constructor(name, balance) {
    this.id = idGenerator();
    this._name = name;
    this._balance = balance;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (!isNaN(value)) {
      throw new Error("The name must be a word");
    }
    this._name = value;
  }

  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (typeof value !== "number") {
      throw new Error("The balance must be a number");
    }
    this._balance = value;
  }
  credit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  debit(amount) {
    if (amount > this.balance) {
      return "Amount exceeded balance.";
    }
    this.balance -= amount;
    return this.balance;
  }
  transferTo(anotherAccount, amount) {
    this.balance = this.balance - amount;
    anotherAccount.balance = anotherAccount.balance + amount;
    return this.balance;
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id) {
      return true;
    }
    return false;
  }
  toString() {
    return `${this.name} account balance is $${this.balance}`;
  }
}

let savingAcc = new Account("Saving account", 9000);
let cardAcc = new Account("Card account", 6000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(2000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is$1400.
