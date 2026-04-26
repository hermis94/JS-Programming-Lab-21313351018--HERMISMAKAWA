// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 15 - Nested For Loops 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Nested For Loops"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================

// Program 15: Nested loops for patterns
console.log("Pattern 1: Left Triangle");
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "# ";
    }
    console.log(row);
}

console.log("\nPattern 2: Addition Grid (1-4)");
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        row += (i + j).toString().padStart(3, " ");
    }
    console.log(row);
}

console.log("\nPattern 3: Diamond");
let rows = 6;
for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let symbols = "+".repeat(2 * i - 1);
    console.log(spaces + symbols);
} 
