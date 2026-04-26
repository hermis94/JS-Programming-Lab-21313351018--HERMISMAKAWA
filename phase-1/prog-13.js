// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 13 - Switch Statement 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Hermis Makawa"); 
console.log("ID: 21313351018"); 
console.log("PROGRAM: Switch Statement"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================

// Program 13: Multiple conditions with switch
let monthNumber = parseInt(prompt("Enter a month number (1-12):"));
let monthName;
switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    default:
        monthName = "Invalid month!";
}
console.log(`Month ${monthNumber} is ${monthName}`);

let rating = prompt("Enter rating (1, 2, 3, 4, 5):").toUpperCase();
let feedback;
switch (rating) {
    case "5":
        feedback = "Excellent experience!";
        break;
    case "4":
    case "3":
        feedback = "Satisfactory!";
        break;
    case "2":
        feedback = "Needs improvement.";
        break;
    case "1":
        feedback = "Unsatisfactory.";
        break;
    default:
        feedback = "Invalid rating.";
}

console.log(`${feedback}`);

