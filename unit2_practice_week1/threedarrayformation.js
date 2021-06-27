var input = `2 2 2
1 2 3 4 5 6 7 8`.split("\n");

var hook = input[0].split(" ").map(Number);
var data = input[1].split(" ").map(Number);

function threeDArrayFormation(data, hook) {
  var oneDArray = [];
  var twoDArray = [];
  var threeDArray = [];
  var walk = 0;

  for (var i = 0; i < hook[0]; i++) {
    twoDArray = [];
    for (var j = 0; j < hook[1]; j++) {
      oneDArray = [];
      for (var k = 0; k < hook[2]; k++) {
        oneDArray.push(data[walk++]);
      }
      twoDArray.push(oneDArray);
    }
    threeDArray.push(twoDArray);
  }
  return threeDArray;
}

function printingThreeDArray(data, hook) {
  for (var i = 0; i < hook[0]; i++) {
    for (var j = 0; j < hook[1]; j++) {
      var ans = [];
      for (var k = 0; k < hook[2]; k++) {
        ans.push(data[i][j][k]);
      }
      console.log(ans.join(" "));
    }
  }
}
var temp = threeDArrayFormation(data, hook);

printingThreeDArray(temp, hook);
