/* var input = `4 3
2 3 4 6`;
var newInput = input.split("\n");
var hook = newInput[0].split(" ").map(Number);
var data = newInput[1].split(" ").map(Number);
var n = hook[0],
  k = hook[1]; */

const subArraySum = function (data, n, k) {
  let i, wholeSum;
  //let's see if the whole array sum is % by k || !
  wholeSum = data.reduce(function (a, b) {
    return a + b;
  });
  if (wholeSum % k !== 0) {
    return 1;
  } else {
    //step 1. find the right most ele dvisible by k
    //step 2. find the left most element divisble by k
    //step 3. find window size & check

    //step1-->
    let left = 0;
    while (left < n && data[left] % k == 0) {
      left++;
    }
    let right = n - 1;
    //step2-->
    while (right > 0 && data[right] % k == 0) {
      right--;
    }
    //if we don't found nothing
    let windowSize,
      sum = 0,
      count = 0;
    if (left == n) {
      return -1;
    } else {
      //first window sum
      windowSize = Math.max(n - 1 - left, right);
    }
    for (i = 0; i < windowSize; i++) {
      sum += data[i];
    }
    if (sum % k !== 0) {
      count++;
    }
    //rest of the window sum
    for (i = windowSize; i < n; i++) {
      sum += data[i];
      sum = sum - data[i - windowSize];
      if (sum % k !== 0) {
        count++;
      }
    }
    return count;
  }
};

function runProgram(input) {
  var newInput = input.trim().split("\n");
  var hook = newInput[0].split(" ").map(Number);
  var data = newInput[1].split(" ").map(Number);
  var n = hook[0];
  var k = hook[1];
  console.log(subArraySum(data, n, k));
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
