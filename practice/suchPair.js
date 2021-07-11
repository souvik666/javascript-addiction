var input = "3 4 0 2 7"
  .split(" ")
  .map(Number)
  .sort(function (a, b) {
    return a - b;
  });
var k = 2;
function ans(el, k) {
  let i = 0,
    j = el.length - 1;
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
console.log(ans(input));
