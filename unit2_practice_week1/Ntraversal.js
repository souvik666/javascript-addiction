var input = `1
3
1 2 3
4 5 6
7 8 9`;

var newInput = input.split("\n");
for (var i = 1; i < newInput.length; i++) {
  var line1 = newInput[i].split(" ").map(Number);
  var hook = line1[0];
  var matrix = [];
  for (var j = i + 1; j <= i + hook; j++) {
    matrix.push(newInput[j].split(" ").map(Number));
  }
  i += hook;
  console.log(Ntraversal(matrix));
}

function Ntraversal(data) {
  var ans = [];
  for (var i = data.length - 1; i >= 0; i--) {
    ans.push(data[i][0]);
  }
  for (var i = 1; i < data.length; i++) {
    ans.push(data[i][i]);
  }
  for (var i = data.length - 2; i >= 0; i--) {
    ans.push(data[i][data.length - 1]);
  }
  return ans;
}
