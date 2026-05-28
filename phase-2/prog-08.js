// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 28 - Recursive functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Recursive functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Factorial examples:');
console.log('7! =', factorial(7));
console.log('9! =', factorial(9));
console.log('\nFibonacci sequence:');
for (let i = 0; i <= 9; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
}

function traverseObject(obj, path = '') {
    for (let key in obj) {
        let currentPath = path ? `${path}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            traverseObject(obj[key], currentPath);
        } else {
            console.log(`${currentPath} = ${obj[key]}`);
        }
    }
}

let data = {
    user: {
        name: 'Sarah',
        address: {
            street: '789 Elm St',
            city: 'Accra'
        }
    },
    settings: {
        theme: 'light',
        notifications: false
    }
};
console.log('\nRecursive Object Traversal:');
traverseObject(data);
