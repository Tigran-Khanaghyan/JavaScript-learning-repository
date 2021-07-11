"use strict";

/*The input is object, which keys are student's names and values are array of their scores. Find the
student with the best average score.

;
// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33 */

function getBestStudent(obj) {
  let bestStudentScore = -Infinity;
  let bestStudent = "";
  for (let key in obj) {
    let score = obj[key].reduce((sum, item) => {
      sum += item;
      return sum;
    }, 0);
    let averageScore = score / obj[key].length;
    if (averageScore > bestStudentScore) {
      bestStudentScore = averageScore;
      bestStudent = key;
    }
  }
  return bestStudent;
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
