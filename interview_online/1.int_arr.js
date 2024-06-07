// given an integer array, find the largest and smallest index
// if the smallest value's index is larger than the max value in the array, return 0
// else return largest and smallest index
// note this is a real interview question from ANT group

// the idea is that we would need to find the max and min value right?

const arr = [1,4,9,-2,100,6];
function int_arr(arr){
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    // now after getting the direct min and max value
    // how do i retrieve the index

    console.log(min);

    return 1;


}

console.log(int_arr(arr));