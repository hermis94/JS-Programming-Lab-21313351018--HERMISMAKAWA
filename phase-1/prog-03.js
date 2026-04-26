// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 03 - Variables with var, let, and const 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Variables with var, let, and const"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 3: Variable declarations and scope differences 
// var - function scoped (older way) 
var oldWay = "I am declared with var"; 
console.log("var variable:", oldWay); 
// let - block scoped (modern way) 
let modernWay = "I am declared with let"; 
console.log("let variable:", modernWay); 
// const - cannot be reassigned 
const constantValue = "I cannot change"; 
console.log("const variable:", constantValue); 
// Uncommenting below line would cause error: 
// constantValue = "New value"; // TypeError: Assignment to constant