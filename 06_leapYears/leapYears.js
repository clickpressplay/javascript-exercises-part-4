const leapYears = function(year) {

// returns undefined without else clause when running npm test leapYears.spec.js

if ((year % 4 == 0 && year % 100 !== 0) || (year % 4 == 0 && year % 400 == 0)){

    return true;

} else {

    return false;

}





};

// Do not edit below this line
module.exports = leapYears;
