// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

var string = "radar";

function palindrome(string){
    // note that there are also syntax such as lastIndexof
    // i guess the idea is to iterate through the string
    // compare string[0] with string[string.length-1]
    // compare string[1] with string[string.length-2]
    // but how do i know when to stop comparing
    // ya that's the problem, additionally an extra letter would be impossible to detect?
    // .....

    // another way would be creating a new string and append the characters from the back
    // then we compare new string with passed string as parameter

    // var new_string = ""
    // for(let i=string.length-1;i>=0;i--){
    //     new_string +=string[i];
    // }

    // if(new_string==string){
    //     return ("Palindrome")
    // }
    // else
    //     return ("Not a Palindrome")

    // suggested answer
    // return string===string.split('').reverse().join('');

}

console.log(palindrome(string)); 



// practical visualisation of what suggested answer mean
// ----------------------

// dog

// 'd' , 'o' , 'g'

// 'g' , 'o' , 'd'

// god

// ----------------------

// radar

// 'r' , 'a' , 'd' , 'a' , 'r'

// 'r' , 'a' , 'd' , 'a' , 'r'

// radar
