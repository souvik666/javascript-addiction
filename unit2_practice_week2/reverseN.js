/* var input = `1
3
1 2 3
4 5 6
7 8 9`;
 */
function reverseN(matrix, row) {
  var ans = [];

  for (var i = 0; i < row; i++) {
    ans.push(matrix[i][0]);
  }

  for (var i = row - 2; i >= 0; i--) {
    for (var j = 0; j < row; j++) {
      if (i + j === row - 1) {
        ans.push(matrix[i][j]);
      }
    }
  }

  for (var i = 1; i < row; i++) {
    ans.push(matrix[i][row - 1]);
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  for (var i = 1; i < newInput.length; i++) {
    var line1 = newInput[i].split(" ").map(Number);
    var row = line1[0];
    var matrix = [];

    for (var j = i + 1; j <= row + i; j++) {
      matrix.push(newInput[j].split(" ").map(Number));
    }
    i += row;
    // console.log(matrix);
    reverseN(matrix, row);
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
