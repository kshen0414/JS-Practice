// given a string "dog"
//reverse the string of dog

var string = "dog";

function reverse_string(animal){

    var empty = "";
    // the logic is that assume our string is split into many individual characters
    // in our example 'dog'
    //where d = 0 , o = 1 , g = 2
    // then the idea is that we want to print from index 2 --> index 1 --> index 0

    for (var i = animal.length-1; i>=0;i--){
        empty = empty + animal[i];
    }

    return empty;
}


console.log(reverse_string(string));