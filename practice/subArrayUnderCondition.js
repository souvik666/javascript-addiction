var input = `6 3 -1 -3 4 -2 2 4 6`.split(" ").map(Number);
var n = input.length;

function ans(input, n) {
  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < n; j++) {
      sum += input[j];
      if (sum === 0) {
        console.log([i, j]);
      }
    }
  }
  return "your inputs ain't shit"
}
(ans(input, n));
