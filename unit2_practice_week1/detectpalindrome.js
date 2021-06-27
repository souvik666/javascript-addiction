var input = `2
6
aabbcc
5
aabcd`.split("\n");
for (var i = 1; i < input.length; i += 2) {
   console.log(detectPalindrom(input[i+1]))
}

function detectPalindrom(data) {
  var magicOBJ = {};
  var sum = 0;
  var temp;
  for (var i = 0; i < data.length; i++) {
    temp = data[i];
    magicOBJ[temp] = magicOBJ[temp] || 0;
    magicOBJ[temp]++;
  }
  for (var key in magicOBJ) {
    sum += magicOBJ[key] % 2;
  }
  if (sum < 2) return "Possible";
  else return "Not Possible";
}
