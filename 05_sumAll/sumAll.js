// initialize smallest value as new variable
// initialize largest value as stopping point
// iterate on smallest value until stopping point is reached
// test 

const sumAll = function(x, y) {
    
    
    let sum;
    let floor;
    let ceiling;

    if (!Number.isInteger(x) || !Number.isInteger(y)){

        return "ERROR";

    }

    if ((x || y) < 0){

        return "ERROR";

    }


    if (x > y){

        floor = y;
        ceiling = x;
        sum = floor;

    } else {

        floor = x;
        ceiling = y;
        sum = floor;


    }


    for (let i = floor; i < ceiling; i++ ){

        sum += (floor + 1); 
        floor++;

    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
