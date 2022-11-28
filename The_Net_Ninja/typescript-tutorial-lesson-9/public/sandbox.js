"use strict";
// To make ir more eye-fiendly we can make compbination of the types for variable, array or objects and reuse in the app
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    console.log("".concat(user.name, " says Hello"));
};
var greetAgain = function (user) {
    console.log("".concat(user.name, " says Hello"));
};
