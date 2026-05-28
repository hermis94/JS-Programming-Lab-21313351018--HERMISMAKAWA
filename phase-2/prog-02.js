// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 02 - Different ways to define functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Different ways to define functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


console.log('Hoisting Example:');
console.log('multiply(5, 8) =', multiply(5, 8));

function multiply(a, b) {
    return a * b;
}

const subtract = function(a, b) {
    return a - b;
};

const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log('subtract(20, 5) =', subtract(20, 5));
console.log('factorial(5) =', factorial(5));
