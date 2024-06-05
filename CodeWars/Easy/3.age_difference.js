// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

//At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].


// function differenceInAges(ages){
//     return [0, 0, 0];
//   }



// we want to find the oldest and youngest family members
// edge case :
//if baby is 5 months old, it is of age 0
// question did not mention, but the number of family members were not mentioned
// means we cannot assume any array size
// [youngest_age,oldest_age,diff_oldest_youngest]
// arr[0] = smallest_num , arr[1] = largest_num , arr[2] = diff_largest_smallest 

// methods about loops :
// https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

// find min and max element in an array :
// https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa#:~:text=The%20Math.,of%20zero%20or%20more%20numbers.&text=of%20Math%20object-,The%20Math.,of%20zero%20or%20more%20numbers.

const array = [1, 20, 30, 5, 10]

function differenceInAges(ages) {
  var new_arr = [];
  var oldest;
  var youngest;

  // ages.forEach(element => {
  // oldest = Math.max(element[index]);
  // oldest = Math.max(...ages);
  // oldest = element[index];


  // youngest = Math.min(...ages)
  // youngest = element[index];


  // new_arr.push(oldest);
  // new_arr.push(youngest);
  // new_arr.push(oldest - youngest);
  // });

  // without a for loop
  oldest = Math.max(...ages);
  youngest = Math.min(...ages)
  new_arr.push(youngest);
  new_arr.push(oldest);
  new_arr.push(oldest - youngest);

  // or use
  // Math.max.apply(Math,ages)
  // Math.min.apply(Math,ages)


  return new_arr;
}

console.log(differenceInAges(array));





// another suggested solution :
// function differenceInAges (ages) {

//   let max = Math.max(...ages),
//       min = Math.min(...ages)
//       diff = max - min
      
//   return [min, max, diff]
// }


// using purely for loop
// function differenceInAges(ages){
//   let youngest = ages[0];
//   let oldest = ages[0];
//   for(i = 0; i < ages.length; i++) {
//     if(ages[i] > oldest) {
//       oldest = ages[i];
//     } else if(ages[i] < youngest) {
//       youngest = ages[i];
//     }
//   }
//   return [youngest, oldest, oldest - youngest];
// }