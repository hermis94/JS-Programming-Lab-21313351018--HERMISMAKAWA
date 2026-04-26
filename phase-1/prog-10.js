// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 10 - User Input with prompt() 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: User Input with prompt()"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================

// Program 10: Getting input from user via prompt dialog
let userName = prompt("What is your full name?");
let userAge = prompt("How old are you?");

// Convert age string to number
let ageNumber = parseInt(userAge);

// Calculate birth year
let currentYear = 2026;
let birthYear = currentYear - ageNumber;

// Display output using alert
alert(`Hello ${userName}! You were born around ${birthYear}.`);

// Also log to console
console.log(`User: ${userName}, Age: ${ageNumber}, Birth Year: ${birthYear}`);
