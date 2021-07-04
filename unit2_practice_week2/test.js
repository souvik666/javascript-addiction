/* var newInput = input.trim().split("\n");
for (var i = 1; i < newInput.length; i++) {
  var line1 = newInput[i].split(" ").map(Number);
  var row = line1[0];
  var col = line1[1];
  var matrix = [];
  for (var j = i + 1; j <= row + i; j++) {
    matrix.push(newInput[j].split(" ").map(Number));
  }
  i += row;
  //console.log(matrix)
}

function sprialTravaral(matrix, row, col) {
  var top = 0;
  var botom = row - 1;
  var right = col - 1;
  var left = 0;
  var limit = row * col;
  var arry = [];
  while (arry.length < limit) {
    for (var i = botom; i >= top && arry.length < limit; i--) {
      arry.push(matrix[i][left]);
    }
    left++;
    for (var i = left; i <= right && arry.length < limit; i++) {
      arry.push(matrix[top][i]);
    }
    top++;
    for (var i = top; i <= botom && arry.length < limit; i++) {
      arry.push(matrix[i][right]);
    }
    right--;
    for (var i = right; i >= left && arry.length < limit; i--) {
      arry.push(matrix[botom][i]);
    }
    botom--;
  }
  console.log(arry);
}
sprialTravaral(matrix, row, col);
 */