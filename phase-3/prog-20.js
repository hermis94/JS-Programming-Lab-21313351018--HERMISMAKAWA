// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 20 - Error Handling and Debugging
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Error Handling and Debugging");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Basic Try-Catch ---");
try {
    console.log("Attempting operation...");
    const result = 10 / 2;
    console.log("Result:", result);
} catch (error) {
    console.log("Error caught:", error.message);
}

console.log(" \n--- Catching Runtime Errors ---");
try {
    const arr = [1, 2, 3];
    console.log("Array:", arr);
    console.log("Item at index 10:", arr[10]);
    arr.nonExistentMethod();
} catch (error) {
    console.log("Error type:", error.constructor.name);
    console.log("Error message:", error.message);
}

console.log(" \n--- Try-Catch-Finally ---");
try {
    console.log("Opening resource...");
    throw new Error("Resource not found");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Cleanup completed");
}

console.log(" \n--- Multiple Catch Blocks (Simulate) ---");
function processData(value) {
    try {
        if (typeof value !== 'number') {
            throw new TypeError("Input must be a number");
        }
        if (value < 0) {
            throw new RangeError("Value cannot be negative");
        }
        console.log("Processing value:", value);
        return value * 2;
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type error:", error.message);
        } else if (error instanceof RangeError) {
            console.log("Range error:", error.message);
        } else {
            console.log("Unknown error:", error.message);
        }
    }
}
processData("invalid");
processData(-5);
processData(42);

console.log(" \n--- Custom Error Throwing ---");
function validateEmail(email) {
    if (!email.includes('@')) {
        throw new Error("Invalid email: missing @");
    }
    if (!email.includes('.')) {
        throw new Error("Invalid email: missing domain");
    }
    return true;
}

try {
    validateEmail("test@example.com");
    console.log("Email valid!");
} catch (error) {
    console.log("Validation error:", error.message);
}

try {
    validateEmail("invalid");
} catch (error) {
    console.log("Validation error:", error.message);
}

console.log(" \n--- Error Object Properties ---");
try {
    throw new Error("Sample error message");
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Stack trace:", error.stack);
}

console.log(" \n--- Different Error Types ---");
const errorTypes = [
    new SyntaxError("Invalid syntax"),
    new ReferenceError("Variable not defined"),
    new TypeError("Type mismatch"),
    new RangeError("Value out of range")
];

errorTypes.forEach(err => {
    console.log(`${err.name}: ${err.message}`);
});

console.log(" \n--- Async Error Handling (Simulated) ---");
function simulateAsync(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Async operation failed"));
            } else {
                resolve("Operation successful");
            }
        }, 100);
    });
}

simulateAsync(false)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Async error:", error.message));

simulateAsync(true)
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Async error:", error.message));

console.log(" \n--- Debugging Techniques ---");
const debugData = {
    name: "Debug Test",
    values: [1, 2, 3, 4, 5]
};

console.log("Using console.table():");
console.table(debugData);

console.log("\nUsing console.assert():");
console.assert(debugData.values.length === 5, "Array length should be 5");
console.assert(debugData.values.length === 10, "This assertion will fail");

console.log("\nUsing console.group():");
console.group("Debug Group");
console.log("Item 1");
console.log("Item 2");
console.groupEnd();

console.log(" \n--- Error Prevention with Validation ---");
function safeCalculate(a, b, operation) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both inputs must be numbers");
        }
        
        switch (operation) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                if (b === 0) {
                    throw new Error("Division by zero");
                }
                return a / b;
            default:
                throw new Error(`Unknown operation: ${operation}`);
        }
    } catch (error) {
        console.log("Calculation error:", error.message);
        return null;
    }
}

console.log("10 + 5 =", safeCalculate(10, 5, 'add'));
console.log("10 / 2 =", safeCalculate(10, 2, 'divide'));
console.log("10 / 0 =", safeCalculate(10, 0, 'divide'));
console.log("10 + 'five' =", safeCalculate(10, 'five', 'add'));
