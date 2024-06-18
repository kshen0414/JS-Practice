// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// ex logic : 0,1,1,2,3,5,8,13,21,.....where n = 9
// fibonacci sequence is basically, we sum up the previous 2 terms
// some helpful intuition, where n = 3 , summation of n = 2
// another hints, it's actually a recursion problem

// var n = 7;

// // attempt 1, the following method returns the current value of Tn up to that sequence
// function fib_seq(n){
//     // T_n
//     // T_1 = 0
//     // T_2 = 1
//     // T_3 = 1 = T_1 + T_2
//     // T_4 = 2 = T_2 + T_3

//     if(n<=1){
//         // our base case
//         return 0;
//     }

//     else if (n<=2){
//         // our second base case
//         return 1;
//     }

//     else{
//         return ((fib_seq(n-1)+fib_seq(n-2)));
//     }

    
// }

// console.log(fib_seq(n));

// attempt 2
// reference :
// https://javascript.plainenglish.io/javascript-program-to-print-the-fibonacci-sequence-985126796ea2

// var n = 7;

// function fib_seq(n){
// // define the first 2 constants of the fibonacci sequence
// // since the fibonacci sequence formula of Tn = Tn-1 + Tn-2 , where n > 2
// var num1 = 0;
// var num2 = 1;
// var sum;

// var fibArr = [num1,num2];
// for (var i=2;i<n;i++){
//     sum = num1+num2;
//     num1 = num2;
//     num2 = sum;
//     fibArr.push(sum);
// }

// return fibArr;


// }

// console.log(fib_seq(n));


// attempt 3, using recursion
// nice fact to know ! Our base case, we can return more than 1 value....never really thought it this way

var num = 3;

function fibonacci(num) {
    if (num <= 1) {
      return [0, 1];
    } else {
      let fibArr = fibonacci(num - 1);
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
      return fibArr;
    }
  }

console.log(fibonacci(num));

// example visualisation for this recursion problem
// where num = 2

// fibonacci(2-1);
// fibonacci(1);
// since 1<=1;

// [0,1] gets returned backed to fib_arr
// fib_arr = [0,1]

// index      0 1
// fib_arr = [0,1]

// fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length -2]);

// fibArr.push(fibArr[2 - 1] + fibArr[2 -2]);
// fibArr.push(fibArr[1] + fibArr[0]);
// fibArr.push(1);
// fib_arr = [0,1,1];



// suggested solution :
// function fibonacciSequence(numTerms) { 

//     if (numTerms <= 0) return []; 
  
//     if (numTerms === 1) return [0]; 
  
     
  
//     let sequence = [0, 1]; 
  
//     while (sequence.length < numTerms) { 
  
//       let nextNumber = sequence[sequence.length – 1] + sequence[sequence.length – 2]; 
  
//       sequence.push(nextNumber); 
  
//     } 
  
//     return sequence; 
  
//   } 