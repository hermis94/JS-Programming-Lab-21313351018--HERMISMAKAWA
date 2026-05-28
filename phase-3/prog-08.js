// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 08 - Array Spread Operator and Destructuring
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Array Spread Operator and Destructuring");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Spread Operator (...) ---");

// Copy array
const original = [2, 4, 6];
const copy = [...original];
console.log("Original:", original);
console.log("Copy:", copy);
console.log("copy === original:", copy === original); // false

// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const merged = [...arr1, ...arr2, ...arr3];
console.log(" \nMerged arrays:", merged);

// Insert elements
const numbers = [2, 8, 10];
const withInsert = [1, ...numbers, 11, 12];
console.log(" \nWith insertions:", withInsert);

// Convert iterables to array
const str = "Hello";
const chars = [...str];
console.log(" \nString to array:", chars);

// Spread in function arguments
function sum(a, b, c) {
    return a + b + c;
}
const nums = [12, 18, 24];
console.log(" \nsum(...nums):", sum(...nums));

// Math operations with spread
const values = [7, 3, 11, 2, 9];
console.log(" \nMath.max(...values):", Math.max(...values));
console.log("Math.min(...values):", Math.min(...values));

console.log(" \n--- Array Destructuring ---");

// Basic destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log("Destructured:", first, second, third);

// Skip elements
const [primary, , tertiary] = colors;
console.log("Skipped second:", primary, tertiary);

// Default values
const smallArray = ['only one'];
const [a = 'def1', b = 'def2'] = smallArray;
console.log("With defaults:", a, b);

// Rest pattern
const [head, ...tail] = [10, 20, 30, 40, 50];
console.log(" \nHead:", head);
console.log("Tail:", tail);

// Swapping variables
let x = 50, y = 100;
console.log(" \nBefore swap: x =", x, "y =", y);
[x, y] = [y, x];
console.log("After swap: x =", x, "y =", y);

// Nested destructuring
const nestedArray = [1, [2, 3], 4];
const [firstNum, [secondNum, thirdNum], fourthNum] = nestedArray;
console.log(" \nNested destructuring:", firstNum, secondNum, thirdNum, fourthNum);

// Destructuring in function parameters
function processCoords([x, y]) {
    return `X: ${x}, Y: ${y}`;
}
console.log(" \nprocessCoords([12, 18]):", processCoords([12, 18]));

// Returning multiple values
function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = getMinMax([6, 2, 9, 1, 5]);
console.log(" \nMin:", min, "Max:", max);

console.log(" \n--- Practical: CSV Parsing ---");
const csvLine = 'John,Doe,35,Manager';
const [fname, lname, age, role] = csvLine.split(',');
console.log("Parsed CSV:", { fname, lname, age, role });

console.log(" \n--- Practical: Function with named array parameters ---");
function calculateStats([...numbers]) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return { sum, avg, min, max };
}

const stats = calculateStats([88, 95, 82, 91, 86]);
console.log("Stats:", stats);
