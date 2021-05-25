"use strict";

/*This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
First character of next word must match last character of previous word.
The word must not have already been said.
Below is an example of a Shiritori game:

Write a Shiritori class that has two instance properties:
words: an array of words already said.
game_over: a boolean that is true if the game is over.
Methods:
play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules
#1 and #2 above).
If it is valid, it adds the word to the words array, and returns the words array.
If it is invalid (eitherrule is broken), itreturns "game over" and sets the game_over boolean to
true.
restart: a method that sets the words array to an empty one [] and sets the game_over boolean to
false. It should return "game restarted".

IMPORTANT Words cannot have already been said.
The play method should not add an invalid word to the words array.
You don't need to worry about capitalization or white spaces for the inputs for the play method. There
will only be single inputs for the play method.*/

class Shiritory {
  constructor() {
    this.words = [];
    this.gameOver = false;
  }

  play(word) {
    if (this.words.includes(word)) {
      this.gameOver = true;
      return "Game Over!";
    }
    if (this.words.length === 0) {
      this.words.push(word);
    } else if (this.words[this.words.length - 1].endsWith(word[0])) {
      this.words.push(word);
    } else {
      this.gameOver = true;
      return "Game Over!";
    }
    return this.words;
  }
  restart() {
    this.words.length = 0;
    this.gameOver = false;
  }
}

let myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"
// Corn does not start with an "o".
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
myShiritori.restart(); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"
