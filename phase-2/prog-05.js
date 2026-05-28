// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 05 - Understanding scope and closures
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Understanding scope and closures");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


let globalVar = 'Global variable';

function outerFunction(outerParam) {
    let outerVar = 'Outer variable';

    function innerFunction(innerParam) {
        let innerVar = 'Inner variable';
        console.log('Inner can access:');
        console.log(' - globalVar:', globalVar);
        console.log(' - outerParam:', outerParam);
        console.log(' - outerVar:', outerVar);
        console.log(' - innerParam:', innerParam);
        console.log(' - innerVar:', innerVar);
    }

    innerFunction('inner param');
}

outerFunction('outer param');

function createCounter(initialValue = 0) {
    let count = initialValue;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        },
        reset: function() {
            count = initialValue;
            return count;
        }
    };
}

const counterA = createCounter(10);
console.log('Counter A increment:', counterA.increment());
console.log('Counter A increment:', counterA.increment());
console.log('Counter A value:', counterA.getValue());
console.log('Counter A reset:', counterA.reset());
