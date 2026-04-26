// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 11 - If-Else Statement 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: If-Else Statement"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================

// Program 11: Conditional execution with if-else
let score = parseInt(prompt("Enter your exam score (0-100):"));

if (score >= 95) {
    console.log("Grade: A+ - Outstanding!");
} else if (score >= 85) {
    console.log("Grade: A - Excellent!");
} else if (score >= 75) {
    console.log("Grade: B - Good!");
} else if (score >= 65) {
    console.log("Grade: C - Acceptable!");
} else {
    console.log("Grade: F - Incomplete.");
}

console.log(`Final score: ${score}`);
