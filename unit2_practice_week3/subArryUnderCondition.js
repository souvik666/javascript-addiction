/* var input = `6 3 -1 -3 4 -2 2 4 6`; */

function answer(data) {
  for (var i = 0; i < data.length; i++) {
    var sum = 0;
    for (var j = i; j < data.length; j++) {
      sum += data[j];
      if (sum === 0) {
        console.log([i, j].join(" "));
      }
    }
  }
}

function runProgram(input) {
  var newInput = input.split(" ").map(Number);
  answer(newInput);
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
