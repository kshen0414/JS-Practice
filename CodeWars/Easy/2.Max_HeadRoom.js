// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

// function getMax1()
// {
//   var max = 
//   {
//    name: 'Max Headroom'
//   }
//   return max;
// }

// function getMax2()
// {
//   return
//   {
//     name: 'Max Headroom'
//   }
// }




// hmmm, the thought process is about, we have to understand how to return an object in javascript?
// my solution

// function getMax1()
// {
//   var max = 
//   {
//    name: 'Max Headroom'
//   }
//   return max;
// }

// function getMax2()
// {
//     var max2 =
//   {
//     name: 'Max Headroom'
//   }

//   return max2;
// }


// correct solution
function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{

    // js automatically inserts a semicolon after the "return" statement if the return expression is not the same line

    // that's why
    // JavaScript has a mechanism that tries to correct faulty programs by automatically inserting semicolons. Do not depend on this. It can mask more serious errors. It sometimes inserts semicolons in places where they are not welcome. Consider the consequences of semicolon insertion on the return statement. If a return statement returns a value, that value expression must begin on the same line as the return:

  return {
    name: 'Max Headroom'
  }
}



// in summary

// this one auto inserts a semicolon, thus will make the return undefined
// return 
// {
//     1;
// }


// now this is a valid return statement, because the brackets is on the same line
// return {
//     1;
// }
