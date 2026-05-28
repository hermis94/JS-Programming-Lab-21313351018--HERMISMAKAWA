// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 05 - Array Modification Methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Array Modification Methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

let fruits = ['apple', 'grape', 'peach'];
console.log("Original array:", fruits);

console.log(" \n--- push() - add to end ---");
let pushResult = fruits.push('lemon', 'lime');
console.log("After push:", fruits);
console.log("push() return value (new length):", pushResult);

console.log(" \n--- pop() - remove from end ---");
let popped = fruits.pop();
console.log("After pop():", fruits);
console.log("pop() return value:", popped);

console.log(" \n--- unshift() - add to beginning ---");
let unshiftResult = fruits.unshift('kiwi', 'mango');
console.log("After unshift():", fruits);
console.log("unshift() return value:", unshiftResult);

console.log(" \n--- shift() - remove from beginning ---");
let shifted = fruits.shift();
console.log("After shift():", fruits);
console.log("shift() return value:", shifted);

console.log(" \n--- splice() - Swiss Army knife ---");
let seasons = ['spring', 'summer', 'fall', 'winter', 'monsoon'];
console.log("Seasons array:", seasons);

// Remove elements
let removed = seasons.splice(1, 2);
console.log(" \nAfter splice(1, 2) - remove 2 from index 1:");
console.log("Modified array:", seasons);
console.log("Removed elements:", removed);

// Insert elements
seasons = ['spring', 'summer', 'fall'];
console.log(" \nBefore insert:", seasons);
seasons.splice(1, 0, 'early-summer', 'mid-summer');
console.log("After splice(1, 0, 'early-summer', 'mid-summer'):", seasons);

// Replace elements
seasons = ['spring', 'summer', 'fall'];
console.log(" \nBefore replace:", seasons);
let replaced = seasons.splice(1, 1, 'warm', 'hot');
console.log("After splice(1, 1, 'warm', 'hot'):", seasons);
console.log("Replaced element:", replaced);

console.log(" \n--- splice() with negative index ---");
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
console.log("Months:", months);
let removedFromEnd = months.splice(-2, 1);
console.log("After splice(-2, 1):", months);
console.log("Removed:", removedFromEnd);

console.log(" \n--- fill() - fill array with value ---");
let nums = [1, 2, 3, 4, 5];
console.log("Original:", nums);
nums.fill(0);
console.log("After fill(0):", nums);

nums = [1, 2, 3, 4, 5];
nums.fill(7, 1, 4);
console.log("After fill(7, 1, 4):", nums);

console.log(" \n--- copyWithin() - copy within array ---");
let arr = [10, 20, 30, 40, 50];
console.log("Original:", arr);
arr.copyWithin(0, 3);
console.log("After copyWithin(0, 3):", arr);

arr = [10, 20, 30, 40, 50];
arr.copyWithin(1, 2, 4);
console.log("After copyWithin(1, 2, 4):", arr);

console.log(" \n--- Practical Stack and Queue Examples ---");
// Stack (LIFO) using push/pop
let stack = [];
stack.push('page1');
stack.push('page2');
stack.push('page3');
console.log("Stack:", stack);
console.log("Pop:", stack.pop());
console.log("Pop:", stack.pop());
console.log("Stack after pops:", stack);

// Queue (FIFO) using push/shift
let queue = [];
queue.push('job1');
queue.push('job2');
queue.push('job3');
console.log(" \nQueue:", queue);
console.log("Dequeue:", queue.shift());
console.log("Dequeue:", queue.shift());
console.log("Queue after dequeues:", queue);
