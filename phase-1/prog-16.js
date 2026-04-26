// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 16 - Do-While Loop (Executes at Least Once) 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Do-While Loop (Executes at Least Once)"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

let choice;
do {
    console.log("\n=== UTILITY MENU ===");
    console.log("1. Show Welcome");
    console.log("2. Display Current Date");
    console.log("3. Display Current Time");
    console.log("4. Generate Random Dice Roll");
    console.log("5. Exit Program");
    
    choice = parseInt(prompt("Select option (1-5):"));
    
    switch(choice) {
        case 1:
            console.log("Welcome to the Utility Program!");
            break;
        case 2:
            console.log("Current Date:", new Date().toLocaleDateString());
            break;
        case 3:
            console.log("Current Time:", new Date().toLocaleTimeString());
            break;
        case 4:
            console.log("Dice Roll (1-6):", Math.floor(Math.random() * 6) + 1);
            break;
        case 5:
            console.log("Thanks for visiting!");
            break;
        default:
            console.log("Invalid option. Try again.");
    }
} while (choice !== 5);

// Example 2: Input validation
console.log("\n--- PIN Validation ---");
let pin;
do {
    pin = prompt("Enter PIN (minimum 6 digits):");
    if (pin === null) break;
    if (pin.length < 6) {
        console.log("PIN too short! Must be at least 6 digits.");
    } else {
        console.log("PIN accepted!");
    }
} while (pin.length < 6);

// Example 3: Counter with do-while
console.log("\n--- Countdown Demo ---");
let count = 5;
do {
    console.log("Remaining:", count);
    count--;
} while (count > 0);

