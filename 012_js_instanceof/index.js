"use strict";

function instanceOf(obj, Constructor) {
    if (obj === Constructor.prototype) {
        return true;
    }
    else if (!obj) {
        return false;
    }
    else {
        return instanceOf(Object.getPrototypeOf(obj), Constructor);
    }
}


function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function() {
    console.log(`${this.name} says Hi.`);
}


const p1 = new Person('ABCD', 20);
p1.sayHi();
console.log();

console.log(`instanceOf(p1, Person) : ${instanceOf(p1, Person)}`);
console.log(`instanceOf(p1, Object) : ${instanceOf(p1, Object)}`);

// console.log(`instanceOf([], Array) : ${instanceOf([], Array)}`);
// console.log(`instanceOf([], Object) : ${instanceOf([], Object)}`);

// console.log(`instanceOf(Function, Object) : ${instanceOf(Function, Object)}`);
// console.log(`instanceOf(Object, Function) : ${instanceOf(Object, Function)}`);