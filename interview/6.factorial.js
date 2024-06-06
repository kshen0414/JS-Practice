// Write a JavaScript program to calculate the factorial of a given number. 
// challenge implement in recursion, then in for loop

var factorial = 5;

function cal_factorial(factorial){

    var base = 1;

    if (factorial==base){
        return 1;
    }

    else{
        var result = factorial*(cal_factorial(factorial-1));
    }

    // could also directly return the result at the else statement
    return result;
    
}

console.log(cal_factorial(factorial));



// suggested solution : 
// A factorial number is the product of all positive integers, which are equal to or less than the given number.  

// function factorial(number) { 

//   if (number === 0 || number === 1) { 

//     return 1; 

//   } else { 

//     return number * factorial(number – 1); 

//   } 

// } 