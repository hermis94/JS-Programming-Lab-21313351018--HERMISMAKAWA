// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 17 - Controlling Loop Flow with Break and Continue 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Controlling Loop Flow with Break and Continue"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Example 1: BREAK - Exit loop when condition is met
console.log("Break Example - Stop at 6:");
for (let i = 1; i <= 20; i++) {
    if (i === 6) {
        console.log("Breaking at i =", i);
        break;
    }
    console.log(i);
}

// Example 2: CONTINUE - Skip to next iteration
console.log("\nContinue Example - Skip multiples of 3:");
for (let i = 1; i <= 12; i++) {
    if (i % 3 === 0) {
        console.log("Skipping:", i);
        continue;
    }
    console.log("Number:", i);
}

// Example 3: Using break in nested loops
console.log("\nBreak in Nested Loops:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking at i=" + i + ", j=" + j);
            break;
        }
        console.log("i=" + i + ", j=" + j);
    }
}

// Example 4: Using labeled break (advanced)
console.log("\nSearch Example with break:");
let found = false;
let searchValue = 9;
for (let i = 1; i <= 15 && !found; i++) {
    if (i === searchValue) {
        console.log("Found value:", searchValue, "at position", i);
        found = true;
        break;
    }
}

// Example 5: Practical example - Processing numbers
console.log("\nProcessing numbers 1 to 20:");
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        continue;
    }
    if (num > 15) {
        break;
    }
    console.log("Odd number:", num);
}
