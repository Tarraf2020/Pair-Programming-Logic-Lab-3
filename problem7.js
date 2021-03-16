
    function primeNb(number){
        var isPrime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (number > 1) {
    
        // looping through 2 to number-1
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`${number} is a prime number`);
            return true;
        } else {
            console.log(`${number} is a not prime number`);
            return false;
        }
    }
}
primeNb(10);