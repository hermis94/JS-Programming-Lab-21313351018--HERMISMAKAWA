// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 18 - Handling Errors Gracefully 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Handling Errors Gracefully"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Example 1: Basic try-catch
console.log("Example 1: Basic try-catch");
try {
    console.log("Executing code inside try block...");
    let result = 24 / 4;
    console.log("Result:", result);
    
    let obj = null;
    console.log(obj.method());
} catch (error) {
    console.log("Error occurred:", error.message);
    console.log("Error type:", error.name);
} finally {
    console.log("Cleanup executed.\n");
}

// Example 2: try-catch with specific error handling
console.log("Example 2: Specific error handling");
try {
    let colors = ["red", "blue", "green"];
    console.log("Array count:", colors.length);
    
    let item = colors.toUpperCase();
    console.log("Item:", item);
} catch (error) {
    console.log("Error found:", error.message);
    console.log("Error category:", typeof error);
} finally {
    console.log("Error handling complete.\n");
}

// Example 3: Nested try-catch
console.log("Example 3: Nested try-catch");
try {
    try {
        throw new Error("Internal error detected");
    } catch (innerError) {
        console.log("Inner handler:", innerError.message);
        throw new Error("External error triggered");
    }
} catch (outerError) {
    console.log("Outer handler:", outerError.message);
} finally {
    console.log("Finally reached.\n");
}

// Example 4: Error handling with JSON parsing
console.log("Example 4: JSON parsing with error handling");
try {
    let jsonString = '{"title": "Learning", "level": 5}';
    let obj = JSON.parse(jsonString);
    console.log("Parsed data:", obj);
    
    let badJSON = '{title: Learning}';
    let badObj = JSON.parse(badJSON);
} catch (error) {
    console.log("Parse Error:", error.message);
} finally {
    console.log("Parsing finished.\n");
}

// Example 5: Throwing custom errors
console.log("Example 5: Throwing custom errors");
function subtract(x, y) {
    try {
        if (y > x) {
            throw new Error("Result would be negative");
        }
        return x - y;
    } catch (error) {
        console.log("Subtraction Error:", error.message);
        return null;
    }
}

console.log("50 - 10 =", subtract(50, 10));
console.log("10 - 50 =", subtract(10, 50));
