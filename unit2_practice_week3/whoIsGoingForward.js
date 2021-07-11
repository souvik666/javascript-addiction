/* var input = `8 5
10 9 8 7 7 7 5 5`; */

const answer = function (data, target) {
  var count = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] >= target && data[i] > 0) {
      count++;
    }
  }
  console.log(count);
};

function runProgram(input) {
  var newInput = input.trim().split("\n");
  var hook = newInput[0].split(" ").map(Number)[1];
  var data = newInput[1].split(" ").map(Number);
  var target = data[hook - 1];
  answer(data, target);
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
