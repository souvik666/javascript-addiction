/* var input = `2
5
12 14 16 17 29
6
1 2 3 4 5 51`; */

function runProgram(input) {
  var newInput = input.trim().split("\n");
  for (var i = 1; i < newInput.length; i += 2) {
    console.log(
      newInput[i + 1]
        .split("")
        .map(Number)
        .reduce(function (a, b) {
          return a + b;
        })
    );
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
