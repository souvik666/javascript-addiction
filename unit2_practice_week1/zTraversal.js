var input = `1
3
1 2 3
4 5 6
7 8 9`.split("\n");
for (var i = 1; i < input.length; i++) {
  var line1 = input[i].split(" ").map(Number);
  var hook = line1[0];
  var matrix = [];
  for (var j = i + 1; j <= i + hook; j++) {
    matrix.push(input[j].split(" ").map(Number));
  }
  i += hook;
  //   console.log(matrix)
}

function ztraversal(el) {
  var ans = [];
  for (var i = 0; i < el.length; i++) {
    ans.push(el[0][i]);
  }
  for (var i = 1; i < el.length; i++) {
    for (var j = 0; j < el.length; j++) {
      if (i + j === el.length - 1) {
        ans.push(el[i][j]);
      }
    }
  }
  for (var i = 1; i < el.length; i++) {
    ans.push(el[el.length - 1][i]);
  }
  console.log(ans.join(" "));
}
ztraversal(matrix);
