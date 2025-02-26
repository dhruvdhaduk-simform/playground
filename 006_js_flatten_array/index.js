"use strict";

const arr = [1, 2, [3,4], 45, [3,[5,6, [4]]]];

// function reduceArr(newArr, ele) {
//     if (Array.isArray(ele)) {
//         // return ele.reduce(reduceArr, newArr);
//         return reduceArr(newArr, ele);
//     }
//     else {
//         newArr.push(ele);
//         return newArr;
//     }
// }

// const newArr = arr.reduce(reduceArr, []);
//
// console.log(newArr);

// const newArr = JSON.stringify(arr)
//     .replaceAll('[', '')
//     .replaceAll(']', '')
//     .split(',')
//     .map(Number);

const flatArray1 = (arr) => {
    return arr.reduce((acc, val) => Array.isArray(val) ?  acc.concat(flatArray1(val)): acc.concat(val), [])
}

const flatArray2 = (arr) => {
    return arr.toString().split(',').map(Number);
}

const flatArray3 = (arr) => {
    return JSON.stringify(arr)
    .replaceAll('[', '')
    .replaceAll(']', '')
    .split(',')
    .map(Number);
}

// console.log(flatArray1(arr));
// console.log(flatArray2(arr));
// console.log(flatArray3(arr));

function benchmark(fn) {
    const iterations = 10000000;
    
    const start = Date.now();

    for (let i = 0; i < iterations; i++) {
        fn();
    }

    return (Date.now() - start);
}

console.log(benchmark(() => flatArray1(arr)));
console.log(benchmark(() => flatArray2(arr)));
console.log(benchmark(() => flatArray3(arr)));


