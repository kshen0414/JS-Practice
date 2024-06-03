// Write a JavaScript program to find the maximum number in an array. 

var arr = [1,5,10,200,9,1000];

function max_array(arr){
    // var max = 0;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]>max)
    //         max = arr[i];
    //     else
    //         continue;
    // }
    // return max;

    // shorter answer,using a built-in Math.max
    // and a spread operator
    return Math.max(...arr);
}


console.log(max_array(arr));