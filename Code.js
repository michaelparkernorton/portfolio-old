process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    let sum = 0;
    let reps3 = 0;
    let reps5 = 0;
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        
        rep3 = parseInt(n / 3);
        rep5 = parseInt((n + 15) / 15)*2-1;
        if (n % 15 === 0){
            rep3 -= 1;
            rep5 -= 1;
        } else if (n % 3 === 0) {
            rep3 -= 1;
        } else if (n % 15 === 0) {
            rep5 -= 1;
        }

        for (let i = 1; i <= rep3; i++) {
            sum += 3*i;
        }
        let count = 0;
        let value = 0;
        for (let i = 1; i <= rep5; i++) {
            value = (5*i + 5*count);
            sum += value;
            // console.log(value);
            if (i % 2 === 0) {
                count += 1;
            } 
        }
        console.log(sum);
        sum = 0;
    }
    

}