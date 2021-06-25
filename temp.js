function printN(data, n) {
    var s = "";
    for (let i = n - 1; i >= 0; i--) {
        s = s + data[i][0] + " ";
    }
    for (let i = 1; i < n; i++) {
        s = s + data[i][i] + " ";
    }
    for (let i = n - 2; i >= 0; i--) {
        s = s + data[i][n - 1] + " ";
    }
    console.log(s.trim());
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var test = Number(newInput[0]);
    var j = 1;
    for (let i = 0; i < test; i++) {
        var matrix = [];
        var n = Number(newInput[j]);
        for (let k = j + 1; k < j + 1 + n; k++) {
            matrix.push(newInput[k].trim().split(" ").map(Number));
        }
        j = j + 1 + n;
        printN(matrix, n);
    }
}

if (process.env.USERNAME === "Albart") {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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