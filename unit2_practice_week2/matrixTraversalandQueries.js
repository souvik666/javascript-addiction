/* var input = `2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9`; */

function q1(matrix, row) {
  for (var i = 1; i < row; i += 2) {
    matrix[i].reverse();
  }
  return matrix;
}
//console.log(q1(matrix, row));

function q2(matrix, row) {
  for (var i = 0; i < row; i += 2) {
    matrix[i].reverse();
  }
  return matrix;
}

function printMe(matrix, row, col) {
  var temp = [];
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      temp.push(matrix[i][j]);
    }
  }
  console.log(temp.join(" "));
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  for (var i = 1; i < newInput.length; i++) {
    var line1 = newInput[i].split(" ").map(Number);
    var row = line1[0];
    var col = line1[1];
    var q = line1[2];
    var matrix = [];
    for (var j = i + 1; j <= row + i; j++) {
      matrix.push(newInput[j].split(" ").map(Number));
    }
    i += row;
    //console.log(matrix)
    if (q === 1) {
      printMe(q1(matrix, row), row, col);
    } else {
      printMe(q2(matrix, row), row, col);
    }
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
