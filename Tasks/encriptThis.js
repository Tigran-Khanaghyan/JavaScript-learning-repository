function encriptThis(string) {
  let words = string.split(" ");
  let encriptedWords = [];
  words.forEach((word) => {
    if (word.length === 1) {
      encriptedWords.push(word.charCodeAt(0));
      return;
    } else if (word.length === 2) {
      encriptedWords.push(word.charCodeAt(0) + word[1]);
      return;
    }
    const lastLetter = word.slice(-1);
    const secondLetter = word[1];
    const middleString = word.slice(2, word.length - 1);
    encriptedWords.push(
      word.charCodeAt(0) + lastLetter + middleString + secondLetter
    );
  });
  return encriptedWords.join(" ");
}

console.log(encriptThis("aa hello world"));
