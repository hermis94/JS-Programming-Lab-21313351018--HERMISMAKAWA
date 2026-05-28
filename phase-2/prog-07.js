// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 07 - Higher-order functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Higher-order functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const doubleIt = multiplyBy(2);
const tripleIt = multiplyBy(3);
const quadrupleIt = multiplyBy(4);

console.log('Double 8:', doubleIt(8));
console.log('Triple 5:', tripleIt(5));
console.log('Quadruple 7:', quadrupleIt(7));

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const addOne = x => x + 1;
const timesThree = x => x * 3;
const addOneThenTriple = compose(timesThree, addOne);
console.log('addOneThenTriple(6):', addOneThenTriple(6));

function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log('curryAdd(3)(5)(7) =', curryAdd(3)(5)(7));
