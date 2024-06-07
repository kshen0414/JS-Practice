// what is a prime number?
// a prime number is a number that can:
// only divided by itself and not by others
// 2 is prime number
// the only factors of 2 is (2 and 1)

// 4 is not a prime number
// the factors of 4 is (1,2,4)

var n = 99;

function prime(n) {
    var counter = 0;
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            counter++;
        }
    }

    if (counter == 1) {
        return ("Is a prime number");
    }
    else {
        return ("not a prime number");
    }

}

console.log(prime(n));

// algorithmic view of sqrt(n) :
// https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is
// https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript

// lol too be honest, my solution is quite redundant....sad sad
// solution :
// To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime. 

// function isPrime(num) { 

//   validation for only positive numbers
//   if (num <= 1) return false; 

//   for (let i = 2; i <= Math.sqrt(num); i++) { 

//     if (num % i === 0) return false; 

//   } 

//   return true; 

// } 
