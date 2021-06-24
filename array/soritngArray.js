var input = [0, 2, 1, 2, 0];

function bubbleSort(input) {
  var len = input.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (input[j] > input[j + 1]) {
        var hook = input[j];
        input[j] = input[j + 1];
        input[j + 1] = hook;
      }
    }
  }
  return input;
}
console.log(bubbleSort(input));

/* https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1 */