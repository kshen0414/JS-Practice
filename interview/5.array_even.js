// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

var arr = [-2, -1, 0, 2, 5, 6, 8];

function even_arr(arr) {
    var new_arr = []
    // return new_arr;
    // rebuilding an array from scratch is quite redundant

    // i guess 'i' means the elements inside the array
    arr.forEach(i => {
        if (i % 2 == 0) {
            new_arr.push(i);
        }
    });

    return new_arr;
}

console.log(even_arr(arr));

// What is the difference between map function and forEach?
// map returns a new array with the results of the function
// forEach does not return everything (and only modifies the original array)

// https://medium.com/@v.kharate2995/difference-between-map-foreach-and-filter-d6d1c20c1e6e#:~:text=map()%20will%20return%20a,array%20if%20no%20matching%20happens.
// difference between filter, map and forEach


// suggested solution
// function filterEvenNumbers(numbers) { 

//     return numbers.filter(num => num % 2 === 0); 
  
//   }