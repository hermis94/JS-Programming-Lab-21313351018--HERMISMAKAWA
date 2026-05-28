// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 32 - Understanding 'this' in object methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Understanding 'this' in object methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const user = {
    name: 'Marcus',
    age: 28,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, I'm ${this.name}`);
    },
    getGreeter() {
        return function() {
            console.log(`Hello, I'm ${this.name}`);
        };
    },
    getGreeterBound() {
        return function() {
            console.log(`Hello, I'm ${this.name}`);
        }.bind(this);
    }
};

user.greet();
user.greetArrow();
const greeter = user.getGreeter();
greeter();
const boundGreeter = user.getGreeterBound();
boundGreeter();
