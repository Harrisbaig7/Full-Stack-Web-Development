//OPERATORS
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (ternary) Operator
// 8. Comma Operator
// 9. Unary Operators
// 10. Relational Operators
// 11. Binary Operators
// 12. Special Operators

// ARITHMETIC OPERATORS 
// +, -, *, /, %, ++, --
// 4/2 -> 2
// 4%2 -> 0


// ASSIGNMENT OPERATORS
// a = 2

// a = a + 5
// a += 5

// a -= 5
// a = a - 5

// a = a * 5
// a *= 5

// a = a / 5
// a /= 5

// a = a % 5
// a %= 5

// a = a ** 5
// a **= 5


// COMPARISON OPERATORS
// ==, ===, !=, !==, >, <, >=, <=

// == -> value equality -> 2 == '2' -> true
// == -> checks only value not data type

// === -> value and type equality -> 2 === '2' -> false
// === -> checks both value and data type

// != -> not equal to -> 2 != '2' -> false
// != -> checks only value not data type

// !== -> not equal to -> 2 !== '2' -> true
// !== -> checks both value and data type

// > -> greater than -> 2 > 3 -> false
// < -> less than -> 2 < 3 -> true
// >= -> greater than or equal to -> 2 >= 3 -> false
// <= -> less than or equal to -> 2 <= 3 -> true


// LOGICAL OPERATORS

// && , || , !, ??, ?:

// && -> and -> true && true -> true
// All conditions should be true to return true
// && -> if any one is false then it will return false

// || -> or -> true || false -> true -> true || true -> true
// Any one condition should be true to return true
// || -> if any one is true then it will return true
// || -> if all are false then it will return false

// ! -> not -> !true -> false -> !false -> true
// ! -> if condition is true then it will return false
// ! -> if condition is false then it will return true
// ! -> if condition is null or undefined then it will return true
// ! -> if condition is 0 then it will return true
// ! -> if condition is empty string then it will return true
// ! -> if condition is NaN then it will return true

// TERNARY OPERATOR

// ?: -> ternary operator -> (condition) ? true : false
// check if condition is true then return true else return false
// (2 > 3) ? true : false -> false

// ?? -> nullish coalescing operator -> (condition) ?? true : false
// check if condition is null or undefined then return true else return false
// (2 > 3) ?? true : false -> true
// (null) ?? true : false -> true
// (undefined) ?? true : false -> true
// (0) ?? true : false -> false

// NESTED TERNARY OPERATOR

// ?: -> ternary operator -> (condition) ? true : (condition) ? true : false
// (2 > 3) ? true : (3 > 4) ? true : false -> false
// (3 <= 3) ? true : (3 > 4) ? true : false -> true
// (5 < 6) ? true : (6<7) ? true : (7<8) ? true : false -> true


// BITWISE OPERATORS
// &, |, ^, ~, <<, >>, >>>

// & -> and -> 2 & 3 -> 2
// & -> if both are 1 then it will return 1 else 0

// | -> or -> 2 | 3 -> 3
// | -> if any one is 1 then it will return 1 else 0

// ^ -> xor -> 2 ^ 3 -> 1
// ^ -> if both are same then it will return 0 else 1

// ~ -> not -> ~2 -> -3
// ~ -> 2 -> 0010 -> 1101 -> -3

// << -> left shift -> 2 << 3 -> 16
// << -> 2 -> 0010 -> 10000 -> 16

// >> -> right shift -> 2 >> 3 -> 0
// >> -> 2 -> 0010 -> 0000 -> 0
// >> -> 2 -> 0010 -> 0001 -> 1

// >>> -> zero fill right shift -> 2 >>> 3 -> 0
// >>> -> 2 -> 0010 -> 0000 -> 0


// STRING OPERATORS
// +, +=, ==, ===, !=, !==, >, <, >=, <=, ??, ?:, ``, ${}, typeof, instanceof, in, delete

// + -> concatenation -> 'a' + 'b' -> 'ab'

// += -> concatenation -> 'a' += 'b' -> 'ab'

// == -> value equality -> '2' == 2 -> true

// === -> value and type equality -> '2' === 2 -> false

// != -> not equal to -> '2' != 2 -> false

// !== -> not equal to -> '2' !== 2 -> true

// > -> greater than -> '2' > 3 -> false

// < -> less than -> '2' < 3 -> true

// >= -> greater than or equal to -> '2' >= 3 -> false

// <= -> less than or equal to -> '2' <= 3 -> true

// ?? -> nullish coalescing operator -> (condition) ?? true : false

// ?: -> ternary operator -> (condition) ? true : false

// `` -> template literals -> `a` -> 'a'

// ${} -> template literals -> `a${2}` -> 'a2'

// typeof -> typeof 'a' -> string

// instanceof -> 'a' instanceof String -> false

// in -> 'a' in String -> true
// in -> 'a' in Number -> false

// delete -> delete String -> false


// UNARY OPERATORS
// +, -, ++, --, !, ~, typeof, delete, void, await, new, super, this, yield

// + -> unary plus -> +2 -> 2
// + -> converts string,  boolean, null, undefined to number

// - -> unary minus -> -2 -> -2
// - -> converts string,  boolean, null, undefined to number

// ++ -> increment -> ++2 -> 3
// ++ -> converts string,  boolean, null, undefined to number

// -- -> decrement -> --2 -> 1
// -- -> converts string,  boolean, null, undefined to number

// ! -> not -> !true -> false
// ! -> if condition is true then it will return false

// ~ -> not -> ~2 -> -3
// ~ -> 2 -> 0010 -> 1101 -> -3

// typeof -> typeof 'a' -> string
// checks the type of the variable

// delete -> delete String -> false
// deletes the property of an object

// void -> void 0 -> undefined
// void the expression

// await -> await 'a' -> error
// await can only be used inside async function

// new -> new String -> String {}
// creates an instance of an object

// super -> super() -> error
// super can only be used inside class

// this -> this -> window
// this can only be used inside class

// yield -> yield 'a' -> error
// yield can only be used inside generator function


// RELATIONAL OPERATORS
// relational operators are used to compare two values

// in -> 'a' in String -> true
// in -> 'a' in Number -> false

// instanceof -> 'a' instanceof String -> false
// instanceof -> 'a' instanceof Number -> false


// BINARY OPERATORS
// binary operators are used to perform arithmetic operations on two values

// +, -, *, /, %, **, <<, >>, >>>, &, |, ^, &&, ||, ==, ===, !=, !==, >, <, >=, <=, ??, ?:, ``, ${}, typeof, instanceof, in, delete


// Special Operators
// 1. Conditional (ternary) Operator
// 2. Comma Operator
// 3. Grouping Operator
// 4. Destructuring Assignment
// 5. Spread Operator
// 6. Optional Chaining Operator
// 7. Nullish Coalescing Operator
// 8. delete Operator
// 9. typeof Operator
// 10. void Operator
// 11. instanceof Operator
// 12. in operator
// 13. new Operator
// 14. super Operator
// 15. this Operator
// 16. yield Operator


// EXAMPLES

a ="2";
b = 2;

if(a===b){
    console.log("a is not equal to b as a is a string and b is a number");
    console.log("a and b are not equal because they both have different data types");
}
else{
    console.log("a and b are equal");
}

var x = 0;

if(x===0 && x>0){
    console.log("x is equal to 0 and greater than 0");
    console.log("x is +ve");
}
else if(x===0 && x<0){
    console.log("x is equal to 0 and less than 0");
    console.log("x is -ve");
}
else if(x===0 && x===0){
    console.log("x is equal to 0 and equal to 0");
    console.log("x is zero");
}
else{
    console.log("x is nothing")
}

var y = 1;
if(y!=0 || y>0){
    console.log("y is not equal to 0 or greater than 0");
    console.log("y is +ve");
}
else if(y!=0 || y<0){
    console.log("y is not equal to 0 or less than 0");
    console.log("y is -ve");
}
else if(y!=0 || y===0){
    console.log("y is not equal to 0 or equal to 0");
    console.log("y is zero");
}
else{
    console.log("y is nothing")
}

/* IMPORTANT! */

var a=0;
var b=0;
var c=0;

b = a++;
// b = a++ -> b = a; a = a + 1; -> b = 0; a = 1;
c = ++a;
// c = ++a -> a = a + 1; c = a; -> a = 2; c = 2;
console.log({a,b,c});
// {a: 2, b: 0, c: 2}
