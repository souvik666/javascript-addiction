function runProgram(input) {
  var data = input.split(" ").map(Number);
  var A = data[0];
  var B = data[1];
  console.log(A ** B % (10 ** 9 + 7));
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
