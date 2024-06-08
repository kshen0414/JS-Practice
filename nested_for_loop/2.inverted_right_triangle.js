// *****
// ****
// ***
// **
// *

// hint use process.stdout.write('');

let n = 5;
for(var i=0;i<n;i++){
    for(var j=n;j>i;j--){
        process.stdout.write('*');
    }
    console.log('');
}