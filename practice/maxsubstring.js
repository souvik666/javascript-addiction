var input = `6
ababaa`.split("\n");
var data = input[1];
console.log(data);

function ans(el) {
  let max = "a";
  let indexval = [];
  for (var i = 0; i < el.length; i++) {
    if (el[i] > max) {
      max = el[i];
      indexval.push(i);
    }
  }
  var ans = "";
  for (var i = 0; i < indexval.length; i++) {
    if (el.substring(indexval[i], el.length) > ans) {
      ans = el.substring(indexval[i], el.length);
    }
  }
  console.log(ans);
}
ans(data)