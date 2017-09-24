"use strict";

let user = {
    firstname: 'john',
    lastname: 'doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe',
    }
};
let person = {
    firstname: "joe",
    lastname: "doe",
    age: 35
};

function post(url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}

// let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
    return {
        firstname: 'john',
        lastname: 'doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }

    }
};

let {firstname, lastname, social: {twitter}} = getUserInfo();
console.log(firstname, lastname, twitter);