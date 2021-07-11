var input = `5 3
2 4 3 5 1`;
var newINput = input.split("\n");
var data = newINput[1].split(" ").map(Number);
var hook = newINput[0].split(" ").map(Number);
var k = hook[1];
var n = hook[0];

function ans(data, n, k) {
  let wholesum = 0,
    i;
  for (i = 0; i < n; i++) {
    wholesum += data[i];
  }
  if (wholesum % k !== 0) {
    return 1;
  } else {
    let left = 0;
    while (left < n && data[left] % k == 0) {
      left++;
    }
    let right = n - 1;
    while (right > 0 && data[right] % k == 0) {
      right--;
    }
    let len,
      sum = 0,
      count = 0;
    if (left == n) {
      return -1;
    } else {
      len = Math.max(n - 1 - left, right);
    }
    for (i = 0; i < len; i++) {
      sum += data[i];
    }
    if (sum % k !== 0) {
      count++;
    }
    for (i = len; i < n; i++) {
      sum += data[i];
      sum = sum - data[i - len];
      if (sum % k !== 0) {
        count++;
      }
    }
    return count;
  }
}
console.log(ans(data, n, k));
