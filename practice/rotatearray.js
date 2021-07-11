var input = `3
2 1
1 2
2 2
1 2
3 1
1 2 3`;
var newInput = input.split("\n");
for (var i = 1; i < newInput.length; i += 2) {
  var hook = newInput[i].split(" ").map(Number)[1];
  var data = newInput[i + 1].split(" ").map(Number);
  console.log(rotatearray(data, hook));
}

function rotatearray(data, k) {
  var ans = [];
  for (var i = 0; i < data.length; i++) {
    if (i < k) {
      ans.push(data[data.length + i - k]);
    } else {
      ans.push(data[i - k]);
    }
  }
  return ans.join(" ");
}
