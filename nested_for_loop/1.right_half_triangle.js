// right half triangle pattern
// Hint using nested for loop
// *
// * *
// * * *
// * * * *
// * * * * *

// for nested for loop
// we finish through the inner for loop first

var n = 3;
for (var i = 0; i < n; i++) {
    // by default console.log() will create a new line
    // process.stdout.write
    for (var j = 0; j <= i; j++) {
        process.stdout.write('* ');
    }
    console.log('');
}