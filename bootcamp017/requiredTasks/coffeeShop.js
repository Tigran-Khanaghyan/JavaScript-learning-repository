"use strict";

/*Properties:
name: a string (basically, of the shop)
menu: an array of items (of object type), with each item containing the item (name of the item), type
(whether food or a drink) and price.
orders: an empty array

Methods:
addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise,
return "This item is currently unavailable!"

fulfillOrder: if the orders array is not empty,return "The {item} is ready!". If the orders array is
empty,return "All orders have been fulfilled!" listOrders:returns the list of orders taken, otherwise, an
empty array.

dueAmount:returns the total amount due for the orders taken.

cheapestItem:returns the name of the cheapest item on the menu.

drinksOnly:returns only the item names of type drink from the menu.
foodOnly:returns only the item names of type food from the menu.
IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order. */

class Coffeeshop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
    this.count = 0;
  }

  addOrder(order) {
    let isExistItem = false;
    this.menu.forEach((element) => {
      if (element.name === order) {
        (isExistItem = true), this.orders.push(order);
        ++this.count;
        console.log("Order added!");
        return;
      }
    });
    if (isExistItem === false)
      console.log("This item is currently unavailable!");
  }
  listOrders() {
    console.log(this.orders);
  }
  fulfillOrder() {
    --this.count;
    if (this.count < 0) {
      this.orders.length = 0;
      console.log("All orders have been fulfilled!");
      return;
    }
    console.log(`The ${this.orders[this.count]} is ready!`);
  }
  dueAmount() {
    let amount = this.orders.reduce((acc, item) => {
      this.menu.forEach((elem) => {
        if (elem.name === item) {
          acc += elem.price;
        }
      });

      return acc;
    }, 0);
    return amount;
  }
  cheapestItem() {
    let cheapestProduct = this.menu[0].name;
    let cheapestPrice = this.menu[0].price;
    this.menu.forEach((item) => {
      if (item.price < cheapestPrice) {
        cheapestPrice = item.price;
        cheapestProduct = item.name;
      }
    });
    return cheapestProduct;
  }
  drinksOnly() {
    let drinks = [];
    this.menu.forEach((item) => {
      if (item.type === "drink") {
        drinks.push(item.name);
      }
    });
    return drinks;
  }
  foodOnly() {
    let foods = [];
    this.menu.forEach((item) => {
      if (item.type === "food") {
        foods.push(item.name);
      }
    });
    return foods;
  }
}

let tcs = new Coffeeshop("tcs", [
  { name: "Snickers", type: "food", price: 220 },
  { name: "Rom", type: "drink", price: 5000 },
  { name: "hot cocoa", type: "drink", price: 750 },
  { name: "cinnamon roll", type: "food", price: 1500 },
  { name: "iced coffee", type: "drink", price: 500 },
  { name: "lemonade", type: "drink", price: 100 },
]);

tcs.addOrder("hot cocoa"); // 'This item is currently unavailable!'
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea"); // 'This item is currently unavailable!'
// specifying the variant of 'iced tea' will help the process
tcs.addOrder("cinnamon roll"); // 'Order added!'
tcs.addOrder("iced coffee"); // 'Order added!'

tcs.listOrders(); // ['cinnamon roll', 'iced coffee']
// the list of all the items in the current order
console.log(tcs.dueAmount()); // 2.17
tcs.fulfillOrder(); // 'The cinnamon roll is ready!'
tcs.fulfillOrder(); // 'The iced coffee is ready!'
tcs.fulfillOrder(); // 'All orders have been fulfilled!'
// all orders have been presumably served
tcs.fulfillOrder();
tcs.listOrders(); // []
// an empty array is returned if all orders have been exhausted
console.log(tcs.dueAmount()); // 0.0
// no new orders taken, expect a zero payable
console.log(tcs.cheapestItem()); // 'lemonade'
console.log(tcs.drinksOnly()); // ['orange juice', 'lemonade', 'cranberry juice',
//'pineapple juice', 'lemon iced tea', 'vanilla chai latte', 'hot
//chocolate', 'iced coffee']
console.log(tcs.foodOnly()); // ['tuna sandwich', 'ham and cheese sandwich', 'bacon and
//egg', 'steak', 'hamburger', 'cinnamon roll']
