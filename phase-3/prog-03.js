// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 03 - Array Transformation Methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Array Transformation Methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const orders = [
    { type: 'sale', amount: 120 },
    { type: 'return', amount: 45 },
    { type: 'sale', amount: 180 },
    { type: 'return', amount: 60 },
    { type: 'sale', amount: 90 }
];

console.log(" --- Basic reduce ---");
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log("Sum of numbers:", sum);

const product = numbers.reduce((acc, cur) => acc * cur, 1);
console.log("Product of numbers:", product);

console.log(" \n--- reduce without initial value ---");
const maximum = numbers.reduce((acc, cur) => cur > acc ? cur : acc);
console.log("Maximum value:", maximum);

const minimum = numbers.reduce((acc, cur) => cur < acc ? cur : acc);
console.log("Minimum value:", minimum);

console.log(" \n--- reduce with objects ---");
const balance = orders.reduce((acc, order) => {
    if (order.type === 'purchase') {
        return acc + order.amount;
    } else {
        return acc - order.amount;
    }
}, 0);
console.log("Final balance:", balance);

console.log(" \n--- reduce for grouping ---");
const groupedByType = orders.reduce((acc, o) => {
    if (!acc[o.type]) acc[o.type] = [];
    acc[o.type].push(o.amount);
    return acc;
}, {});
console.log("Grouped by type:", groupedByType);

console.log(" \n--- reduce for counting ---");
const items = ['apple', 'orange', 'apple', 'banana', 'orange', 'apple'];
const itemCounts = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log("Item counts:", itemCounts);

console.log(" \n--- reduce for flattening ---");
const nested = [[2, 4], [6, 8], [10, 12]];
const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened array:", flattened);

console.log(" \n--- reduceRight (right-to-left) ---");
const words = ['JavaScript', 'is'];
const sentence = words.reduceRight((acc, word) => acc + ' ' + word);
console.log("reduceRight result:", sentence);

console.log(" \n--- Complex reduce example: Pipeline ---");
const pipeline = [
    (x) => x + 5,
    (x) => x * 3,
    (x) => x - 2,
    (x) => x / 2
];

const result = pipeline.reduce((value, fn) => fn(value), 10);
console.log("Pipeline result for 10:", result);
