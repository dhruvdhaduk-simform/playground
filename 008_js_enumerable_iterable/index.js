"use strict";

// const obj = {
//     name: "ABCD",
//     age: 21,
// }

// obj.email = "example@xyz.com";

// Object.defineProperty(obj, "password", {
//     value: "123456",
//     enumerable: false,
//     writable: true,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptors(obj));



// console.log("\n=============== ENUMERABLE ==================");
// console.log(Object.keys(obj));
// console.log("---------------------------------------------");
// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`);
// }
// console.log("---------------------------------------------");





















const range = {
    from: 1,
    to: 10,


    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                }
                else {
                    return { done: true };
                }
            }
        }
    },

}

console.log("\n================ ITERABLE ===================");
console.log("---------------------------------------------");
for (let x of range) {
    console.log(x);
}





















































// obj.email = "example@xyz.com";

// Object.defineProperty(obj, "password", {
//     value: "123456",
//     enumerable: true,
//     writable: true,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptors(obj));






    // [Symbol.iterator]() {
    //     return {
    //         current: this.from,
    //         last: this.to,

    //         next() {
    //             if (this.current <= this.last) {
    //                 return { done: false, value: this.current++ };
    //             }
    //             else {
    //                 return { done: true };
    //             }
    //         }
    //     }
    // },
