"use strict";

let obj = {
    some(callback1, callback2) {
        // callback1();
        return callback2();
    }
};


function callback2() {
    let inner = () => {
        return this;
    };
    return inner();
}

console.log(obj.some(function callback1() {
    this.newField = 'newField';
}, callback2));