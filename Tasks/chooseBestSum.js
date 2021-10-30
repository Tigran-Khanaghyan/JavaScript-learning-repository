function chooseBestSum(miles, quantity, townsList) {
  if (townsList.length < quantity) {
    return null;
  }
  let townsGroups = [];
  for (let i = 0; i < townsList.length - 2; ++i) {
    for (let j = i + 1; j < townsList.length - 1; ++j) {
      for (let k = j + 1; k < townsList.length; ++k) {
        townsGroups.push([townsList[i], townsList[j], townsList[k]]);
      }
    }
  }
  let townsMiles = townsGroups.map((towns) => {
    return towns.reduce((acc, item) => acc + item, 0);
  });
  let closest = 0;
  for (let i = 0; i < townsMiles.length; ++i) {
    if (townsMiles[i] < miles) {
      closest = townsMiles[i];
      break;
    }
  }
  townsMiles.forEach((item) => {
    if (item <= miles) {
      if (miles - item < miles - closest) {
        closest = item;
      }
    }
  });
  return closest;
}

let ls = [91, 74, 73, 85, 73, 81, 87];

console.log(chooseBestSum(230, 3, ls));
