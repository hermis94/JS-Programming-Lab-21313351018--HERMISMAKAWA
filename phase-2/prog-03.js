// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 03 - ES6 Arrow functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: ES6 Arrow functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const traditionalAdd = function(a, b) {
    return a + b;
};

const arrowAdd = (a, b) => {
    return a + b;
};

const implicitAdd = (a, b) => a + b;
const square = x => x * x;
const getRandom = () => Math.floor(Math.random() * 200) + 1;
const createPerson = (name, age) => ({ name, age });

console.log('Traditional:', traditionalAdd(10, 3));
console.log('Arrow with braces:', arrowAdd(10, 3));
console.log('Arrow implicit:', implicitAdd(15, 6));
console.log('Square of 8:', square(8));
console.log('Random number:', getRandom());
console.log('Created person:', createPerson('Eva', 25));
