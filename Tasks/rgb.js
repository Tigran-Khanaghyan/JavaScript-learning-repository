function rgb(r, g, b) {
  const hexChars = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  const tempArray = [r, g, b];
  const hexArray = tempArray.map((item) => {
    if (item < 0) item = 0;
    else if (item > 255) item = 255;
    let hex = "";
    do {
      const quotient = Math.floor(item / 16);
      const remainder = item - quotient * 16;
      if (remainder < 10) hex = String(remainder) + hex;
      else hex = hexChars[remainder] + hex;
      item = quotient;
    } while (item);
    if (hex.length === 1) return "0" + hex;
    return hex;
  });
  return hexArray.join("");
}

console.log(rgb(148, 0, 255));
