// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 20 - Basic Function Declarations and Invocation 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Basic Function Declarations and Invocation"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Function 1: Without parameters
function welcome() {
    console.log("Welcome to Programming Functions!");
}

// Function 2: With parameters
function greetUser(firstName) {
    console.log(`Hi ${firstName}! Ready to code?`);
}

// Function 3: With return value
function multiply(a, b) {
    return a * b;
}

// Function 4: With multiple return logic
function getStatus(points) {
    if (points >= 100) return "Excellent";
    if (points >= 80) return "Good";
    if (points >= 60) return "Satisfactory";
    if (points >= 40) return "Needs Work";
    return "Fail";
}

// Function 5: With multiple parameters and calculations
function calculateVolume(length, width, height) {
    return length * width * height;
}

// Function 6: Processing an array
function findMax(values) {
    let max = values[0];
    for (let val of values) {
        if (val > max) max = val;
    }
    return max;
}

// Function 7: String manipulation
function toUpperCase(text) {
    return text.toUpperCase();
}

// Function 8: Boolean check
function isPositive(num) {
    return num > 0;
}

// Calling the functions
console.log("=== Function Calls ===\n");

// Call Function 1
welcome();

// Call Function 2
greetUser("Sarah");
greetUser("Mike");

// Call Function 3
let product = multiply(7, 9);
console.log("7 * 9 =", product);

// Call Function 4
console.log("\nStatus Checker:");
console.log("Score 95 status:", getStatus(95));
console.log("Score 75 status:", getStatus(75));
console.log("Score 50 status:", getStatus(50));

// Call Function 5
console.log("\nVolume Calculator:");
console.log("Box (3 x 4 x 5) volume:", calculateVolume(3, 4, 5));
console.log("Box (10 x 2 x 6) volume:", calculateVolume(10, 2, 6));

// Call Function 6
console.log("\nArray Operations:");
let nums = [15, 32, 8, 45, 22];
console.log("Numbers:", nums);
console.log("Maximum:", findMax(nums));

// Call Function 7
console.log("\nString Conversion:");
let message = "learning code";
console.log("Original:", message);
console.log("Uppercase:", toUpperCase(message));

// Call Function 8
console.log("\nPositive Check:");
console.log("Is 12 positive?", isPositive(12));
console.log("Is -5 positive?", isPositive(-5));
console.log("Is 0 positive?", isPositive(0));

// Demonstrating function scope
console.log("\n=== Function Scope Demo ===");
let appName = "MyApp";

function displayScope() {
    let funcName = "displayScope";
    console.log("In function - App:", appName);
    console.log("In function - Local:", funcName);
}

displayScope();
console.log("Outside function - App:", appName);

// Function calling another function
function divide(x, y) {
    return x / y;
}

function processNumbers(a, b, c) {
    let quotient = divide(a, b);
    return quotient * c;
}

console.log("\n=== Nested Function Calls ===");
console.log("(20 / 4) * 3 =", processNumbers(20, 4, 3));
console.log("(100 / 5) * 2 =", processNumbers(100, 5, 2));
