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

if (pocket >= 1000) { //check condition 200>=1000
    console.log("five star hotel dinner");
} else if (pocket >= 500) { //check condition 200>=500
    console.log("street food");
} else if (pocket >= 200) {//check condition 200>=200 if its true then it will execute code ends here
  console.log("local food");
}
else if (pocket >= 100) {
    console.log("snacks only");
}
else {
    console.log("poor");
}
//only one condition will be executed at a time 

//understanding else if with one example if there is one poor family and they have
//limited money they can buy only one items at a time

const rice_available = true;
const bread_available = true;
const apple_available = true;
if(rice_available){
    console.log("buy rice"); //execute only one condition at a time
}
else if(bread_available){
    console.log("buy bread");
}
else if(apple_available){
    console.log("buy apple");
}
else{
    console.log("Market is closed");
}

//if there is one rich family and they have to buy all items at a time they we use multiple if statement

const riceAvailable = true;
const breadAvailable = true;
const appleAvailable = true;
if(riceAvailable){
    console.log("buy rice"); //execute all conditions
}
if(breadAvailable){
    console.log("buy bread");
}
if(appleAvailable){
    console.log("buy apple");
}
//if we want to execute all conditions we use multiple if statement 

//problem :---->Bill and discount

const total_Bill = 799; // use 1500 value to check program

if(total_Bill>=500){
    console.log("10% discount");
}
else if(total_Bill>=1000){
    console.log("20% discount");
}
else{
    console.log("No discount");
}

//<--program is not right because-->
// if total bill is more then 1000 still we getting 10% discount 
// so Ordering is important
//put 1000 at first and then 500 and then no discount
//always put best amount first then second best amount
//1st highest then 2nd highest then lowest

if(total_Bill>=1000){
    console.log("20% discount");// correct ordering largest amount first
}
else if(total_Bill>=500){
    console.log("10% discount");
}
else{
    console.log("No discount");
}

//**************nested if & else if statement******************

const gender = "female";
const age = 20;

if(gender === "male"){//if this true then only check age

    if(age >= 21){

    console.log("Eligible for marriage");

    }
    else{
        console.log("Not eligible for marriage");
    }
}//if end here

else if(gender === "female"){

    if(age >= 18){
        console.log("Eligible for marriage");
    }
    else{
        console.log("Not eligible for marriage");
    }

    }// else if end

    else{
        console.log("Invalid gender");
    }//else end

    //1srt zwbwqnwqq
    



