// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 14 - For Loop - Basic Iteration 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: For Loop - Basic Iteration"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================

// Program 14: Introduction to for loops
console.log("Counting from 1 to 15:");
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

console.log("\nCounting backwards from 15 to 1:");
for (let i = 15; i >= 1; i--) {
    console.log(i);
}

console.log("\nOdd numbers from 1 to 25:");
for (let i = 1; i <= 25; i += 2) {
    console.log(i);
}

let number = parseInt(prompt("Enter a number for times table:"));
console.log(`\nTimes table for ${number}:`);
for (let i = 1; i <= 12; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
} 
