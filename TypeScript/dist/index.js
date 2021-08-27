"use strict";
//configuration file : tsc --init
/** ***************************************************************************** */
//type infernce
/******************************************************************************* */
let id = 5;
let company = 'Barozgaar';
let isPublished = false;
let income = 50000;
let ids = [1, 2, 3, 4, 5]; //array
let person = [1, 'topi', true]; // Tuples
let employ = [
    [1, 'dev'],
    [2, 'topi'],
];
/** ***************************************************************************** */
//Union
/******************************************************************************* */
let pid = 22;
/** ***************************************************************************** */
//enum
/******************************************************************************* */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Directions;
(function (Directions) {
    Directions["Up"] = "UP";
    Directions["Down"] = "Down";
    Directions["Left"] = "Left";
    Directions["Right"] = "Right";
})(Directions || (Directions = {}));
const user = { id: 1, name: 'user' };
/** ***************************************************************************** */
//Type Assertion
/******************************************************************************* */
let cid = 1;
let customerId = cid; // way 1
let productId = cid; // way 2
