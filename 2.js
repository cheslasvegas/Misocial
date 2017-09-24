"use strict";

function some(callback1, callback2, par) {
    callback1(par);
    callback2();

}

function callback1(par) {
    console.log(par);
}
let callback2 = () => {
    console.log(this);

};
// some(callback1, callback2, 'ehrth');

let obj = {
    meth1(callback1, callback2, par) {
        callback1(par);
        callback2.call(this);
    }
};

obj.meth1(callback1, function () {
    console.log(this);

}, 'rgerg4r');