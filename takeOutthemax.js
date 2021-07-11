var input = `10 3
-1 -1 -2 1 -2 4 1 9 3 9`;
var newInput = input.split("\n");
var data = newInput[1].split(" ").map(Number);
var hook = newInput[0].split(" ").map(Number)[1];

function ans(data, hook) {
  //first window sum
  var firstwindowsum = 0;
  for (var i = 0; i < hook; i++) {
    firstwindowsum += data[i];
  }
  var currentsum = firstwindowsum;
  for (var i = hook; i < data.length; i++) {
    currentsum += data[i] - data[i - hook];
    firstwindowsum = Math.max(firstwindowsum, currentsum);
  }
  console.log(firstwindowsum);
}
ans(data, hook);
