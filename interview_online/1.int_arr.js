// given an integer array, find the largest and smallest index
// if the smallest value's index is larger than the max value in the array, return 0
// else return largest element's and smallest element's index 
// note this is a real interview question from ANT group

// the idea is that we would need to find the max and min value right?

const arr = [1,4,9,-2,100,6];
function int_arr(arr){
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    // now after getting the direct min and max value
    // how do i retrieve the index

    if(arr.indexOf(min) > max){
        return 0;
    } 
    
    else{
        // reference, in javascript we can return an array of values
        // 2nd method is to return an object containing our values
        // https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
        // https://www.geeksforgeeks.org/javascript-return-multiple-values-from-function/
        return [arr.indexOf(min),arr.indexOf(max)];
    }

}

console.log(int_arr(arr));