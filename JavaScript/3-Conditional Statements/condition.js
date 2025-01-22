//1.*************************************if-statement*************************************************

/*

syntax--> if(condition/Boolean expression)
{
    block of code
}

    */

//true means allowed go inside the block
//false means not allowed

if(true)
{
    console.log("hello World");
}

const result = 5>4;
if(result)
{
    console.log("5 is greater than 4");
}

// example:------->

const goodKarma = true;

if(goodKarma)
{
    console.log("Heaven is waiting for you");
}

//2. **************************************if-else statement*************************************

//if ---> execute on true
//else ---> execute on false

// syntax--> if(condition)
//     {
//         block of code
//     }
    
//      else{
//         block of code
//      }

let karma = false;
if(karma){
    console.log("heaven is waiting for you");
}
else{
    console.log("hell is waiting for you");
}

//example:----->

// name are equal or not

const name1 = "Alex";
const name2 = "Musk";
if (name1===name2) {
    console.log("equal names");
} else {
    console.log("oops not equal");
}

if(true){ // 1 is also true
    console.log("Hello");
}

if(false){ // 0 is also false
    console.log("hi");   
}

//problem: discount is available or not

const totalBill = 699;
const discountStartPrice = 500;

if (totalBill >= discountStartPrice) {
    console.log("Discount is available");
} else {
    console.log("Discount is not available");
}

//3.**************************else-if statement******************************

let pocket = 200;

if (pocket >= 1000) { // first check condition is true or not if true then execute if not then check next condition
    console.log("five star hotel dinner");
} else if (pocket >= 500) {
    console.log("street food");
} else if (pocket >= 200) {
  console.log("local food");
}
else if (pocket >= 100) {
    console.log("snacks only");
}
else {
    console.log("poor");
}

// 