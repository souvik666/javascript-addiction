function createObj(data, n) {
    var newObj = {};
    for (let i = 0; i < n; i++) {
        if (newObj[data[i]] == undefined) newObj[data[i]] = 1;
        else newObj[data[i]]++;
    }
    //console.log(newObj);
    var large = 0;
    var pos = 0;
    for (key in newObj) {
        if (newObj[key] > large) {
            large = newObj[key];
            pos = key;
        }
    }
    console.log(pos);
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var n = Number(newInput[0]);
    var data = newInput[1].trim().split(" ").map(Number);
    createObj(data, n);
}

if (process.env.USERNAME === "Albart") {
    runProgram(`5
0 2 0 6 9`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}