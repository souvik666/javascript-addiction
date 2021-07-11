var input = [1, 3, 4, 2, 2];
var map = {};
var temp;
for (var i = 0; i < input.length; i++) {
  temp = input[i];
  map[temp] = map[temp] || 0;
  map[temp]++;
}
for (var k in map) {

}
