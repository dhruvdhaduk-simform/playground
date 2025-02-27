"use strict";

function deepFreeze(obj) {
    Object.keys(obj).forEach((key) => {
        obj[key] = deepFreeze(obj[key]);
    });

    return Object.freeze(obj);
}


let obj = {
    x: {
        y: 10,
    },
};

// obj = Object.freeze(obj);
obj = deepFreeze(obj);

obj.x.y = 20;

console.log(obj);