let obj1 = {};


















































let obj2 = {
    [Symbol.toPrimitive](hint) {
        return 404;
    }
}

let obj3 = {
    valueOf: function() {
        return 500;
    }
}

let obj4 = {
    toString: function() {
        return "1000";
    }
}