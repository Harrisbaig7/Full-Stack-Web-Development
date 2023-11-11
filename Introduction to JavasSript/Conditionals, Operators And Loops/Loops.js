// LOOPS in JavaScript
// Loops are used to execute the same block of code again and again, as long as a certain condition is met.
// While Loop, For Loop, Do While Loop, For In Loop, For Of Loop, For Each Loop, Break, Continue

// For Loop

// for(initialization; condition; increment/decrement){
//     // code
// }

for(var i=0; i<100; i++){
    if(i%5==0){
        console.log(i);
    }
}

// While Loop

// while(condition){
//     // code
// }

var j = 0;
while(j<100){
    if(j%5==0){
        console.log(j);
    }
    j++;
}

// Do While Loop

// do{
//     // code
// }while(condition);

var k = 0;
do{
    if(k%5===0){
        console.log(k);
    }
    k++;
}while(k<100);

