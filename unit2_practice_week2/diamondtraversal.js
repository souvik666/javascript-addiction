/* var input = `1
3
1 2 3
4 5 6
7 8 9`;
 */
function diamondTraversal(matrix, row) {
  var rem = (row / 2) | 0;
  var ans = [];
  var x = row - 1;
  for (var i = rem; i >= 0; i--) {
    ans.push(matrix[i][x--]);
  }
  for (var i = 1; i <= rem; i++) {
    ans.push(matrix[i][x--]);
  }
  x = 1;
  for (var i = rem + 1; i <= matrix.length - 1; i++) {
    ans.push(matrix[i][x++]);
  }
  for (var i = matrix.length - 2; i > rem; i--) {
    ans.push(matrix[i][x++]);
  }
  console.log(ans);
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
    //console.log(matrix)
    diamondTraversal(matrix, row);
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
