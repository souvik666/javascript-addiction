var input = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
//bubblesort
function assending(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (input[j] > input[j + 1]) {
        var temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}
console.log(assending(input));

//alternative
function rearrange(arr, n) {
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      if (i != j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}
console.log(rearrange(input, 9));
