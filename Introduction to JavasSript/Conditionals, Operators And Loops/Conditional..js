// CONDITIONAL STATEMENTS
// 1. IF ELSE
// 2. SWITCH

// 1. IF ELSE
// condition will be true or false
// if(condition){
//     // code
// }else{
//     //code
// }

//SIMPLE CODE

var num1 =20;
var num2 = 50;
if(num1>num2){
    console.log("num1 is greater than num2");
}
else{
    console.log("num2 is greater than num1");
}

// if(condition1){
//     statement1
// }
// else if(condition2){
//     statement2
// }
// else if {......}
// else{
//     last_statement
// }

//MULTIPLE CONDITIONS CODE

var a = 0;
if(a>0){
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
}
else if(a==0){
    console.log("a is zero");
}
else{
    console.log("a is nothing")
}

//MULTIPLE IF Execution CODE

var b = -1;
if(b>=0){
    console.log("b is positive");
}
// last 2 statements printed 
if(b<0){
    console.log("b is negative");
}
if(b<=0){
    console.log("b is less than or equal to zero");
}

//NESTED CONDITIONS CODE

var x = 0;
if(x>=0){
    if(x==0){
        console.log("x is zero");
    }
    else{
        console.log("x is positive");
    }
}
else{
    console.log("x is negative");
}

//SWITCHING CONDITIONS CODE

var value1 = 20;
var value2 = 50;

switch(value1>value2){
    case true:
        console.log("value1 is greater than value2");
        break;

    case false:
        console.log("value2 is greater than value1");
        break;
        
    default:
        console.log("value1 and value2 are equal");
}


