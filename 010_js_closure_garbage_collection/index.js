"use strict";

function outer() {
    let largeArray = new Array(1000).fill("hello");
    return function inner() {
      return largeArray[0]; 
    };
}


let inner1 = outer();
let inner2 = outer();
let inner3 = outer();

let value1 = inner1();
let value2 = inner2();
let value3 = inner3();

console.log(value1);
console.log(value2);
console.log(value3);

// inner1 = null;
// inner2 = null;
// inner3 = null;