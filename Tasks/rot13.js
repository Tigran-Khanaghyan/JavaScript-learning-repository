function rot13(message) {
  const lowercaseMessage = message.toLowerCase();
  let encryptedMessage = "";
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < message.length; ++i) {
    if (englishAlphabet.includes(lowercaseMessage[i])) {
      const letterIndex = englishAlphabet.indexOf(lowercaseMessage[i]);
      if (letterIndex + 13 >= englishAlphabet.length) {
        encryptedMessage += englishAlphabet[letterIndex - 13];
      } else {
        encryptedMessage += englishAlphabet[letterIndex + 13];
      }
    } else {
      encryptedMessage += message[i];
    }
    if (capitalLetters.includes(message[i])) {
      encryptedMessage =
        encryptedMessage.slice(0, i - 1) + encryptedMessage[i].toUpperCase();
    }
  }
  return encryptedMessage;
}

console.log(rot13("abcdefghijklmnopqrstuvwxyz"));
