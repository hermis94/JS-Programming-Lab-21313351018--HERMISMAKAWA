// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 09 - Type Coercion and Conversion 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Type Coercion and Conversion"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 9: Understanding automatic and manual type conversion 
// Implicit Coercion (Automatic) 
console.log("8" + 7);        
console.log("12" - 4);        
console.log("6" * "3");      
// "87" (string concatenation) 
// 8 (numeric subtraction) 
// 18 (numeric multiplication) 
console.log(false + true);    // 1 (true is 1, false is 0) 
// Explicit Conversion (Manual) 
let strNumber = "98.76"; 
let intNumber = parseInt(strNumber); 
let floatNumber = parseFloat(strNumber); 
let numberConverted = Number(strNumber); 
console.log("parseInt:", intNumber);           
console.log("parseFloat:", floatNumber);       
// 98 
// 98.76 
console.log("Number():", numberConverted);     
// Converting to String 
let num = 789; 
console.log("toString():", num.toString());    // "789" 
console.log("String():", String(num));         
// Converting to Boolean 
console.log("Boolean(5):", Boolean(5));        
console.log("Boolean(0):", Boolean(0));        
console.log("Boolean(''):", Boolean(""));      
// false 
console.log("Boolean('world'):", Boolean("world")); // true
