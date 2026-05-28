// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 01 - Basic function declarations and invocation
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Basic function declarations and invocation");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function greet() {
    console.log('Hello, welcome to JavaScript!');
}

function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript learning.`);
}

function add(x, y) {
    return x + y;
}

function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

greet();
greetPerson('Alice');
greetPerson('Bob');
console.log('25 + 30 =', add(25, 30));
console.log('Grade for 88:', getGrade(88));
console.log('Grade for 72:', getGrade(72));
console.log('Grade for 54:', getGrade(54));
