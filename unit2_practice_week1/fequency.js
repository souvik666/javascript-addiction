var input = `4
aman`.split("\n");
var data = input[1].split("").sort().join("");
var n = data[0];

function countchar(el) {
  var magicOBJ = {};
  var temp;

  for (var i = 0; i < el.length; i++) {
    temp = el[i];
    magicOBJ[temp] = magicOBJ[temp] || 0;
    magicOBJ[temp]++;
  }
  console.log(magicOBJ);
}
countchar(data);
