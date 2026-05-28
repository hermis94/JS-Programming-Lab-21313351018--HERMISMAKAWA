// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 06 - Callback functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Callback functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i));
    }
    return result;
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

function formatCurrency(x) {
    return `$${x.toFixed(2)}`;
}

let numbers = [3, 5, 7, 9];
console.log('Original array:', numbers);
console.log('Doubled:', processArray(numbers, double));
console.log('Squared:', processArray(numbers, square));

let prices = [15.99, 22.5, 45.25];
console.log('Prices:', processArray(prices, formatCurrency));

let tripled = processArray(numbers, function(x) {
    return x * 3;
});
console.log('Tripled:', tripled);
let halved = processArray(numbers, x => x / 2);
console.log('Halved:', halved);
