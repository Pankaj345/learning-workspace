//relation operators

//> (greater than)
//>= (greater than or equal to)
//< (less than)
//<= (less than or equal to)
//input--->Relation operators-->boolean(true/false);
//1.> (greater than operator)

//True=> first value is strictly greater than the second value.
console.log(5>4);//true
//False=> first value is less than or equal to the second value..
console.log(4>5);//false
console.log(4>4);//false

// ***example 1st***
const ageOfRam = 20;
const ageOfShyam = 25;
console.log(ageOfRam > ageOfShyam); //false

//***example 2nd sunil pass or not***
//program is not right because if sunil marks is 35 then he is pass but in this program it is showing false.
//use >= operator instead of > operator.
const sunilMarks = 36;
const passingMarks = 35;
console.log(sunilMarks > passingMarks); //true

//2.>= (greater than or equal to operator)

//True=> first value is greater than or equal to the second value.
//case1 : 5>=4;//true
//case2 : 5>=5;//true

//False=> first value is less than the second value.
//case3 : 4>=5;//false

console.log(10>6,10>=6,10>=10,-9>-8,10>10);
//true true true false false
//(-9>-8) is false because -9 is less than -8.
//because -8 is coming first in number line.
//number line for understanding this
// -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10
//---------------------------------------->increasing order

//3.< (less than operator)

//True=> first value is strictly less than the second value.
//case1 : 4<5;//true(only this case is true)

//False=> first value is greater than or equal to the second value.
//case2 : 5<4;//false
//case3 : 5<5;//false

console.log(5<5,3<5,15<8);
//false true false

//check java fail or not

const javaMarks = 34;
const javaPassingMarks = 35;

const isJavaFail = javaMarks < javaPassingMarks;
console.log("java is fail :",isJavaFail);
//use <= operator instead of < operator bcoz if javaMarks is 35 then he is pass but in this program it is showing false.

//4.<= (less than or equal to operator)

//True=> first value is strictly less than or equal to the second value.

//case1 : 5<=7;//true
//case2 : 5<=5;//true

//False=> first value is greater than the second value.
//case3 : 5<=4;//false

// problem eligible for discount or not

const minimumPurchaseAmount = 4000;
const javaScriptPurchaseAmount = 5000;

const isEligibleForDiscount = javaScriptPurchaseAmount >= minimumPurchaseAmount;

console.log("is eligible for discount :",isEligibleForDiscount);
//**first understand the problem statement**
//**then use relation operator according to the problem statement**

//legal age in india to drive vehicle or not

const legalAge = 18;
const ageOfPerson = 19;

const driveVachicle = ageOfPerson >= legalAge;
console.log("drive vachicle :",driveVachicle);
