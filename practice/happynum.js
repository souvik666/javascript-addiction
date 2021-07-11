/* A happy number is a number defined by the following process: Starting with any positive integer, 
replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 
(where it will stay), or itloops endlessly in a cyclewhich does not include 1. 
Those numbers for which this processends in 1are happy numbers.
Return True ifnis a happy number, and False if not.
 */

var input = `3
19
2
312082396`;
var newInput = input.trim().split("\n");
for (var i = 1; i < newInput.length; i++) {
  var n = Number(newInput[i]);
  console.log(isHappy(n));
}
function isHappy(n) {
  let map = {};
  while (n !== 1) {
    let newN = n;
    let sum = 0;
    while (newN !== 0) {
      sum += (newN % 10) ** 2;
      newN = Math.floor(newN / 10);
    }
    if (map[sum]) {
      return false;
    }
    map[sum] = true;
    n = sum;
  }
  return true;
}
