var input = `5
0 0 2 0 9`.split("\n")
var data = input[1].split(" ").map(Number)
var hook = {}
var temp;

for (var i =0; i<data.length; i++){
  temp = data[i]
  if (hook[temp] === undefined){
    hook[temp] = 1
  }else{
    hook[temp]++
  }
}
var ans = ""
for(i in hook){
  var max = hook[0]
  if (hook[i]>max){
    max = hook[i]
    var ans = i
  }
}
console.log(max, ans)
