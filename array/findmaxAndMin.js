/* https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/ */

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//higest inside array
function max(array) {
  var max = array[0];
  for (var a = 0; a < array.length; a++) {
    if (max < array[a]) {
      max = array[a];
    }
  }
  return max;
}
console.log(max(input));

//lowest inside array
function low(array) {
  var min = array[0];
  for (var a = 0; a < array.length; a++) {
    if (array[a] < min) {
      min = array[a];
    }
  }
  return min;
}

console.log(low(input));
