//relation operators for only numbers but comparision operators for all types..
//== equal to

console.log("bablu" == "bablu"); //true
console.log(2 == 2);//true
console.log("2" == "2");//true
console.log("John"=="john");//false case sensitive

//!= not equal to   ----->

// opposite of ==
// true : when value not equal
// false : when value equal

console.log("bablu" != "bablu");//false
console.log(2 != 2);//false
console.log("2" != "2");//false
console.log("John" != "john");//true

// deffrence between == and === ----->

// == : compare only value(funny example : I dont believe in caste(data type) but I believe in human(value))
console.log(2 == "2");//true
// === : compare value and type(funny example : I believe in caste(data type) and I believe in human(value))
console.log(2 === "2");//false

//!= : opposite of ==
//considering only value

// !== : opposite of ===
//considering value and type

console.log(5!=4);
//process to solve this--->
//1st 5==4 false
//2nd opposite of false is true
console.log("a"!=="A");
//("a"==="A") false
//opposite of false is true

//pretice question

console.log(5==5);
console.log(5!=5);
console.log(6=="6");
console.log(6!==7);
console.log("a"=="a");
console.log("a"!="a");

//tips: dry run the problem

let apple = 5;
let a1 = "apple";
let b1 = apple;

console.log(a==b1,a!=b1,a===b1,a!==b1);
