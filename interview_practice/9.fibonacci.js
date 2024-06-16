// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// ex logic : 0,1,1,2,3,5,8,13,21,.....where n = 9
// fibonacci sequence is basically, we sum up the previous 2 terms
// some helpful intuition, where n = 3 , summation of n = 2
// another hints, it's actually a recursion problem

var n = 7;

function fib_seq(n){
    // T_n
    // T_1 = 0
    // T_2 = 1
    // T_3 = 1 = T_1 + T_2
    // T_4 = 2 = T_2 + T_3

    if(n<=1){
        // our base case
        return 0;
    }

    else if (n<=2){
        // our second base case
        return 1;
    }

    else{
        return ((fib_seq(n-1)+fib_seq(n-2)));
    }

    // if (n>0){
    //     ((fib_seq(n-1)+fib_seq(n-2)));
    //     // console.log(n+'');
    //     process.stdout.write(n+",");
    // }
    
}

console.log(fib_seq(n));
// (fib_seq(n));