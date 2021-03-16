//takes a number and returns a boolean on whether or not it is armstrong
function armS(number) {
    var sum = 0;


// create a temporary variable
var temp = number;
while (temp > 0) {
    // finding the one's digit
    var remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
    return true;
}
else {
    console.log(`${number} is not an Armstrong number.`);
    return false;
}
    }
    armS(153);