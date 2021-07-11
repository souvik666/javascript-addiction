var input = `10 3
-1 -1 -2 1 -2 4 1 9 3 9`;
var newInput = input.split("\n");
var hook = newInput[0].split(" ").map(Number);
var data = newInput[1].split(" ").map(Number);
var k = hook[1];
var n = hook[0];

function ans(data, n, k) {
  //first k size sum
  var sum = 0;
  for (var i = 0; i < k; i++) {
    sum += data[i];
  }
  //becasue of immutability
  var currentSum = sum;
  var ans = [];
  for (var i = k; i < n; i++) {
    currentSum += data[i] - data[i - k];
    sum = Math.max(sum, currentSum);
  }
  return sum;
}
console.log(ans(data, n, k));
