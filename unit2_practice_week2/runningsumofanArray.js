var input = `1
5
1 2 3 4 5`;
var newInput = input.split("\n");
for (var i = 1; i < newInput.length; i += 2) {
  runningsum(newInput[i + 1].split(" ").map(Number));
}

function runningsum(el) {
  var ans = [];
  sum = 0;
  for (var i = 0; i < el.length; i++) {
    sum += el[i];
    ans.push(sum);
  }
  console.log(ans.join(" "));
}
