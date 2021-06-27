var input = `5
0 2 0 6 9`.split("\n");
var len = Number(input[0]);
var data = input[1].split(" ").map(Number);

function maxOccuringElement(data, len) {
  var magicOBJ = {};
  var temp;
  for (var i = 0; i < len; i++) {
    temp = data[i];
    magicOBJ[temp] = magicOBJ[temp] || 0;
    magicOBJ[temp]++;
  }
  var max = 0;
  var ans;
  for (var key in magicOBJ) {
    if (magicOBJ[key] > max) {
      max = magicOBJ[key];
      ans = key;
    }
  }
  console.log(ans)
}
maxOccuringElement(data, len);
