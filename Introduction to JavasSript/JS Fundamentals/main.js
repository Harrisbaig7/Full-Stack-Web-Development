console.log("Hello World!")
console.log("Hello This Code is From my Html File");

// PRIMITIVE DATA TYPE
// type of data  can me  altered in js
// does not provide any method all except string  data type
// 7 types of primitive data types
// String, Number, Big Int, Boolean, Null, Undefined, Symbol
// String is a data type which is a collection of characters or sequence of characters
// Big Int 2^53 -1 (huge number)
// every value less than 2^53 -1 is a number
// undefined does not have any value or data type also
// Null is a data type which has no value
// Boolean is true or false
// any Number other than 0 is always true

// NON PRIMITIVE DATA TYPE
// Two kinds of non-primitive DATA: Objects and arrays

// var name2 = "Harris";
// var year = 2021;
// console.log(name2 + " " + year);
// // var name = "ahmed";
// // var year = 2020;
// // console.log(name + " " + year);
// const name1 = "Harris";
// const year = 2021;
// console.log(name1 + " " + year);
// const name = "Ahmed";
// const year = 2021;
// console.log(name + " " + year);

const okay = true;
console.log(okay);

const one  =1;
const two = 2.2;
console.log(one + two);
var number = [1,2,3,4,5,100]
console.log(typeof(number));
console.log(number);

console.log(one + two);
var numbers = [1,2,3,4,5,100,"HARRIS"]
console.log(typeof(numbers));

console.log(numbers[6]);
console.log(numbers.length);

var obj = {
    //key : value
    name : "Harris",    
    id : 1,
    year : 2021,
    exam :{
        mid :"pass",
        final:"pass"
    },
    test: ["fail","pass","fail"],
    "full name": "Muhammad Harris"
}

console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj.year);
console.log(obj.exam);
console.log(obj.test);
console.log(obj.exam.mid);
console.log(obj.test[1]);
console.log(obj["full name"])