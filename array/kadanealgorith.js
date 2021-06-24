var input = [-1, -2, -3, -4];

function kadaneAlgorithm(input) {
  var array = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = i; j < input.length; j++) {
      var sum = 0;
      for (var k = i; k <= j; k++) {
        sum += input[k];
      }
      //console.log(array);
      array.push(sum);
    }
  }
  return Math.max(...array)
}

console.log(kadaneAlgorithm(input));
