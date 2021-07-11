/* var input = `abcxyz`;
 */
//first part
const firsthalf = function (el, halt) {
  var ans = [];
  for (var i = halt - 1; i >= 0; i--) {
    ans.push(el[i]);
  }
  return ans;
};

//secondPart

const lastHlaf = function (el, halt) {
  var ans = [];
  for (var i = el.length - 1; i > el.length - 1 - halt; i--) {
    ans.push(el[i]);
  }
  return ans;
};

function runProgram(input) {
  var l = input.length;
  var even = Number.isInteger(l / 2);
  var halt = (l / 2) | 0;
  var mid;
  if (!even) {
    mid = input[halt];
  } else {
    mid = "";
  }
  var partOne = firsthalf(input, halt).join("");
  var partTwo = lastHlaf(input, halt).join("");
  console.log(partOne + mid + partTwo);
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
