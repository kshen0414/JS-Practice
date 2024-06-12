// Write a JavaScript program to find the largest element in a nested array. 
// i guess an assumption, we would give it is that we are iterating through a set of numbers?

// will check again later
// *hint, to access nested elements...we use more indexes arr[i][j][k]
// so the next approach is to obtain the depth of the array
// research from stack overflow suggests that we use a method called flat?
// https://stackoverflow.com/questions/55420156/get-arrays-depth-in-javascript

// more documentation about using array.flat()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// to flatten an array, means to convert a multi-dimensional array into a single dimenstional array 

var arr = [1,2,3,[2,999,0],[899,[3,4,1000]],8];

function nest_arr(arr){
    var flat_arr = arr.flat(Infinity);
    return (Math.max(...flat_arr));
}

console.log(nest_arr(arr));


// suggested solution makes an assumption of a depth of 2
// function findLargestElement(nestedArray) { 

//     let largest = nestedArray[0][0]; 

//     for (let arr of nestedArray) { 

//       for (let num of arr) { 

//         if (num > largest) { 

//           largest = num; 
  
//         } 
  
//       } 
  
//     } 
  
//     return largest; 
  
//   } 