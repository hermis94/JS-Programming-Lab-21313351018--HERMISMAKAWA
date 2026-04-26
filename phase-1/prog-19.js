// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 19 - Creating and Using Custom Errors 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Creating and Using Custom Errors"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Custom Error Class 1: ValidationError
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
        this.timestamp = new Date();
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (Field: ${this.field})`;
    }
}

// Custom Error Class 2: PasswordError
class PasswordError extends ValidationError {
    constructor(message, password) {
        super(message, "password");
        this.name = "PasswordError";
        this.password = password;
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (Length: ${this.password.length})`;
    }
}

// Custom Error Class 3: PhoneError
class PhoneError extends ValidationError {
    constructor(message, phone) {
        super(message, "phone");
        this.name = "PhoneError";
        this.phone = phone;
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (Phone: ${this.phone})`;
    }
}

// Example 1: Using ValidationError
console.log("Example 1: ValidationError");
try {
    let email = "";
    if (email.length === 0) {
        throw new ValidationError("Email cannot be empty", "email");
    }
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.getDetails());
    } else {
        console.log("Unknown error:", error.message);
    }
}

// Example 2: Using PasswordError
console.log("\nExample 2: PasswordError");
try {
    let userPassword = "abc";
    if (userPassword.length < 8) {
        throw new PasswordError("Password must be at least 8 characters", userPassword);
    }
} catch (error) {
    if (error instanceof PasswordError) {
        console.log(error.getDetails());
    }
}

// Example 3: Using PhoneError
console.log("\nExample 3: PhoneError");
try {
    let phone = "123456";
    if (!phone.match(/^\d{10}$/)) {
        throw new PhoneError("Invalid phone format", phone);
    }
} catch (error) {
    if (error instanceof PhoneError) {
        console.log(error.getDetails());
    }
}

// Example 4: Validation function with custom errors
console.log("\nExample 4: Validation Function");
function validateContact(email, password, phone) {
    try {
        if (email.length < 5) {
            throw new ValidationError("Email must be at least 5 characters", "email");
        }
        if (password.length < 10) {
            throw new PasswordError("Password must be at least 10 characters", password);
        }
        if (phone.length !== 10) {
            throw new PhoneError("Phone must be 10 digits", phone);
        }
        return { success: true, message: "Validation successful!" };
    } catch (error) {
        return { success: false, error: error.getDetails() };
    }
}

// Testing validation
console.log("Test 1:", validateContact("user@mail", "password123", "5551234567"));
console.log("Test 2:", validateContact("user", "pass", "5551234567"));
console.log("Test 3:", validateContact("user@mail.com", "secure123", "555"));
console.log("Test 4:", validateContact("admin@email.com", "complexpass99", "5559876543"));

// Example 5: Error inheritance chain
console.log("\nExample 5: Error Inheritance");
let testError = new PasswordError("Test password error", "short");
console.log("Is PasswordError?", testError instanceof PasswordError);
console.log("Is ValidationError?", testError instanceof ValidationError);
console.log("Is Error?", testError instanceof Error);
console.log("Error name:", testError.name);
