/* var input = `1
5
10 4 3 7 4
3 3 6 5 7
4 2 3 9 10
5 7 6 5 8
5 8 8 1 8`; */

function diamondtraversal(matrix) {
  var ans = [];
  var walk = matrix.length - 1;
  var rem = (matrix.length / 2) | 0;
  for (var i = rem; i >= 0; i--) {
    ans.push(matrix[i][walk--]);
  }
  for (var i = 1; i <= rem; i++) {
    ans.push(matrix[i][walk--]);
  }
  walk = 1;
  for (var i = rem + 1; i < matrix.length; i++) {
    ans.push(matrix[i][walk++]);
  }
  for (var i = matrix.length - 2; i > rem; i--) {
    ans.push(matrix[i][walk++]);
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
    //console.log(matrix)
    diamondtraversal(matrix);
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
