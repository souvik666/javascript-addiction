var input = `Wednesday
8`.split("\n");
var day = input[0];
var n = Number(input[input.length - 1]);

function dayOfWeek(day, n) {
  var data = {
    daysW: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  };
  for (var i = 0; i < data.daysW.length; i++) {
    if (data.daysW[i] === day) {
      var temp = data.daysW.indexOf(data.daysW[i]);
      if (n < 7) {
        return data.daysW[temp + n];
      } else if (n % 7 === 0) {
        return day;
      } else if (n > 7) {
        var d = n % 7;
        return data.daysW[temp + d];
      }
    }
  }
  var a = 7 - (temp % 7);
  return data.daysW[temp - a];
}
