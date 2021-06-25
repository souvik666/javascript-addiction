var input = `2
6
aabbcc
5
aabcd`.split("\n")

for (var i = 1; i < input.length; i += 2) {
    console.log(detectPalindrom(input[i + 1]))
}

function detectPalindrom(el) {
    var magicObj = {}
    var counter = 0
    var hook;
    for (var i = 0; i < el.length; i++) {
        hook = el[i]
        magicObj[hook] = magicObj[hook] || 0
        magicObj[hook]++
    }
    /* 
        check if the count of odd is less or greather than 1
        if the count off odd is greather then 1 then it's not
        a palindrom, in the case of aaaaa-- > aa aa a so here
        two pari is possible that's why it's a palindrom */

    for (var i in magicObj) {
        counter += magicObj[i] % 2
    }
    var temp = counter < 2
    if (temp) return "possible"
    else return "not possible"
}
