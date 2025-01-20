// js objects with function and print there value on function-------

// const obj = {
//     name : "shah",
//     age : 90,
//     hobbies : ["reading","coding"],
//     plan : function(){
//         console.log("master javascript");
//         console.log("name :" , this.name);//using this keyword for reffer the value
//         console.log("age :" , this.age);
//         console.log("hobbies :" , this.hobbies);
//         return "i done";
//     }
// }
//  //dry run code here its not final code

//  console.log(obj.plan());

// const person = {
//     name : "pankaj",
//     age : 22,
//     address : {
//         city : "almora",
//         country : "india",
//     },
//     hobbies : ["readingBook","playing cricket","videoGame"],
//     education : {
//       college : "UOU",
//       year : 2024,
//     }
// }
// // destruturing object ----.............................................................................

// const person = {
//   name : "pankaj",
//   age : 22,
//   address : {
//     city : "almora",
//     area : "nearbyChina",
//     country : "India",
//   },
//   hobbies : ["reading","yoga"],
//   edutation :{
//     School : {
//       name : "GIC",
//       year : 2021,
//     }
//   }
// }

// console.log(person);
// console.log(person.address.city);

// //destrutruing ................................................................................................
// const {name,age} = person;
// const {city,area,country} = person.address;
// const {hobbies} = person;
// console.log("name: ",name);//print the values
// console.log("age: ",age);
// console.log("city: ",city);
// console.log("area: ",area);
// console.log("country:",country);

//loop key value pair.......................................................................................

// const obj1 = {
//   name : "pankaj shah",
//   age : 22,
//   city : "almora",
// };

// for(const key in obj1){
//   console.log(`${key}: ${obj1[key]}`);
// }

//marge the object...............................................................................................

// const obj1 = {
//   name : "shah",
//   age : 22,
// };

// const obj2 = {
//   city : "almora",
//   country : "india"
// };

// const obj3 = {};

// for(const key in obj1){
//   obj3[key] = obj1[key];
// }
// for(const key in obj2){
//   obj3[key] = obj2[key];
// }

// console.log(obj3);