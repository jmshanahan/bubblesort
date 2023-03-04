"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Strings_1 = require("./Strings");
const dateArray = [
    new Date("2039 , 9 , 24"),
    new Date("2035 , 9 , 24"),
    new Date("2001 , 9 , 24"),
    new Date("2029 , 9 , 24"),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
// const newNumbers = new Numbers(years);
// newNumbers.sort();
// console.log(newNumbers.number);
const stringData = new Strings_1.Strings("kbjTR");
stringData.sort();
console.log(stringData);
