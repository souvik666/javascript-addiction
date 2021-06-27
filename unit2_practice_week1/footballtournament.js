var input = `5
A
ABA
ABA
A
A`.split("\n");
var data = input.splice(1);

function whoisthewinner(data) {
  var magicOBJ = {};
  var temp;
  for (var i = 0; i < data.length; i++) {
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
  console.log(ans);
}
whoisthewinner(data);
