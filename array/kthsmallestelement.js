/* https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1 */

var input = [6,5,4,3,2,1];
var K = 3;
function kthMax(array, k) {
  var min = array[0];
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      count++;
      if (count === 3) {
        min = array[i];
      }
    }
  }
  return min;
}
console.log(kthMax(input));
