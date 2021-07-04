var input = `12
3 4
1 2 3 4
5 6 7 8
9 10 11 12`;

function sprialTravaral(matrix, row, col) {
  var top = 0;
  var botom = row - 1;
  var right = col - 1;
  var left = 0;
  var array = [];
  var lim = row * col;
  while (array.length < lim) {
    for (var i = botom; i >= top && array.length < lim; i--) {
      array.push(matrix[i][left]);
    }
    left++;
    for (var i = left; i <= right && array.length < lim; i++) {
      array.push(matrix[top][i]);
    }
    top++;
    for (var i = top; i <= botom && array.length < lim; i++) {
      array.push(matrix[i][right]);
    }
    right--;
    for (var i = right; i >= left && array.length < lim; i--) {
      array.push(matrix[botom][i]);
    }
    botom--;
  }
  console.log(array.join(" "));
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  for (var i = 1; i < newInput.length; i++) {
    var line1 = newInput[i].split(" ").map(Number);
    var row = line1[0];
    var col = line1[1];
    var matrix = [];

    for (var j = i + 1; j <= row + i; j++) {
      matrix.push(newInput[j].split(" ").map(Number));
    }
    i += row;
    // console.log(matrix)
    sprialTravaral(matrix, row, col);
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
