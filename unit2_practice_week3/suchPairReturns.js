

function answer(el, k) {
  let i = 0;
  let j = el.length - 1;
  while (i < j) {
    if (el[i] + el[j] > k) {
      j--;
    } else if (el[i] + el[j] < k) {
      i++;
    } else {
      return 1;
    }
  }
  return -1;
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  for (var i = 1; i < newInput.length; i += 2) {
    var hook = newInput[i].split(" ").map(Number);
    var k = hook[1];
    var data = newInput[i + 1]
      .split(" ")
      .map(Number)
      .sort(function (a, b) {
        return a - b;
      });
    console.log(answer(data, k));
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
