
let repeatedString = repeatString('hey', 3);
console.log(repeatedString);


function repeatString(input, repeats){

    let baseString = input;
    let finalResult = input;
    let i = 0;

    while(i < repeats - 1){

        finalResult += baseString;
        i++;
        

    }

    return finalResult;
}

// Do not edit below this line
module.exports = repeatString;
