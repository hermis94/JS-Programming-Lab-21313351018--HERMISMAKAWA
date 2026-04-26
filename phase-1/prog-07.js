// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 07 - Comparison Operators 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Comparison Operators"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 7: Understanding comparison operators 
let x = 7; 
let y = "7"; 
let z = 12; 

console.log("Equal (==):", x == y);          // true (loose equality) 
console.log("Strict Equal (===):", x === y); // false (strict equality) 
console.log("Not Equal (!=):", x != y);       // false 
console.log("Strict Not Equal (!==):", x !== y); // true 

console.log("Greater than:", z > x);         // true 
console.log("Less than:", x < z);            // true 
console.log("Greater or equal:", x >= 5);    // true 
console.log("Less or equal:", z <= 10);      // true 
