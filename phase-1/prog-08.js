// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 08 - Logical Operators 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Logical Operators"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 8: AND, OR, NOT operators 
let isLoggedIn = false; 
let isAdmin = true; 
let hasPermission = false; 

// AND (&&) - Both must be true 
console.log("Admin access:", isLoggedIn && isAdmin); // false 

// OR (||) - At least one must be true 
console.log("Can view page:", isLoggedIn || hasPermission); // true 

// NOT (!) - Inverts boolean 
console.log("Is NOT admin:", !isAdmin); // true 

// Short-circuit evaluation 
let userName = "User"; 
let displayName = userName || "Guest User"; 
console.log("Display name:", displayName); // "Guest User" 

// Nullish coalescing (??) - Only checks null/undefined 
let count = 5; 
let result = count ?? 10; 
console.log("Nullish result:", result); // 0 (not 10, because 0 is not null/undefined)
