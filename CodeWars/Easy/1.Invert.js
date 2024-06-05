// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []



// nice info :
// https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript
// thought process
// change the sign of an integer
// the idea is -(x)
// and use map function
// https://stackoverflow.com/questions/55894283/how-do-i-perform-a-calculation-on-each-object-in-my-array-then-output-that-arra



const arr = [1,2,3];

function invert(array) {
    // by using a map function
    const newArr = array.map(i=>-(i));
    return newArr;

    // using a for loop
    // var newArr = [];
    // for(var i=0;i<array.length;i++){
    //     newArr.push(-array[i]);
    // }
    // return newArr;

    // try in your free time, using a for-each loop !
}

console.log(invert(arr)); 