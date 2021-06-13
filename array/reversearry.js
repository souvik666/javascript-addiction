/* https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
 */
var input = [1, 2, 3];

function reverseArray(array) {
  var i, j, length;
  length = array.length - 1;
  for (i = 0, j = length; i < j; i++, j--) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(reverseArray(input));
