function  ans (data, n, k) {
    var i = 0;
    var j = n - 1;
    while (i < j) {
      if (data[i] + data[j] > k) {
        j--;
      } else if (data[i] + data[j] < k) {
        i++;
      } else {
        return [i, j].join(" ");
      }
    }
    return [-1, -1].join(" ");
  };
  console.log(ans([2,7,11,15],4,9))