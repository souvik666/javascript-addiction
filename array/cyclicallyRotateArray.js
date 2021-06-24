var input = [1, 2, 3, 4, 5];

function cyclicallyRotate(input) {
  for (var i = 0; i < 1; i++) {
    input.unshift(input.pop());
  }
  return input;
}
console.log(cyclicallyRotate(input));
