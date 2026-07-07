// variable Print
// by using let keyword

// let name = "Yash";
// let age = 20;

// age =  30;

// console.log(name, age);

// by using const keyword
// we cannot change the value after addiing const

// const acc = 20000;

// console.log(acc);

// by using var key
// in var keyword we can easily declare same variable

// var a = 10;
// var a = 20;

// console.log(a);

// in if block it can access var b outside scope
// if(true) {
//     var b = 20;
// }

// console.log(b);

// but in function it can't access outside scope
// function fun() {
//     var c = 30;
// }

// console.log(c);


// data types: -//////////

// primitive data types :-

// number, string, boolean, undefined, null, bigint, symbol

// number 

// let a = 10;
// let b = 7.5;
// let c = 'Yash';
// console.log(a, b, c);

// Boolean

// let t = true;
// let f = false;

// console.log(t, f);

// undefined

// let user;

// console.log(user);

//bigint

// let num = 1234567n

// console.log(num);

// Null

// let age = null;

// console.log(age); 

// let whether = current_whether("Pune");
//25
//null
//Undefined

// symbol

// const id1 = Symbol("id");
// const id2 = Symbol("id");

// console.log(id1,id2);
// console.log(id1==id2);

/////////////////////////////////////////////

// non primmitive data types
// array, object, function


// array

// let arr = [10,20,30,40,"Rohit", true];

// console.log(arr);

// object

let user = {
    name : "Yash",
    age:20,
    sex:"male",
    PRN:2425000231
}

console.log(user.name)

user.name = "Ashu";

console.log(user);

// // function

// function greet() {
//     console.log("Good Morning");
// }

// greet();

// // Also We can Store the function in the variables

// let g = function greet() {
//     console.log("Good Morning");
// }

// g();

// console.log(typeof g);


/////////////////////////////////////////////////////////////////

// Primitive data type is immutable : can not change once crete

// let str = "Yash";

// str[0]= "R";

// still it remains same

// console.log(str);

// Non Primittive data types are Mutable

// let arr = [10,20,30];

// arr.push(40);

// console.log(arr);