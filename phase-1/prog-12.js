// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 12 - Nested If-Else 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Nested If-Else"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================

// Program 12: Nested conditional statements
let age = parseInt(prompt("What is your age?"));
let hasPermission = prompt("Do you have parental permission? (yes/no)").toLowerCase();

if (age >= 21) {
    console.log("You are of legal age.");
    if (hasPermission === "yes") {
        console.log("You have full authorization.");
    } else if (hasPermission === "no") {
        console.log("You need authorization first.");
    } else {
        console.log("Permission response unclear.");
    }
} else if (age >= 18) {
    console.log("You are legally an adult.");
    if (hasPermission === "yes") {
        console.log("You are fully authorized.");
    } else {
        console.log("Request authorization.");
    }
} else {
    console.log("You are still a minor.");
} 
