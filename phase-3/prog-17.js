// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 17 - String Methods and Manipulation
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: String Methods and Manipulation");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- String Case Methods ---");
const text1 = "Python Programming";
console.log("Original:", text1);
console.log("toUpperCase():", text1.toUpperCase());
console.log("toLowerCase():", text1.toLowerCase());

console.log(" \n--- String Search Methods ---");
const text2 = "The quick brown fox jumps over the lazy dog";
console.log("Original:", text2);
console.log("indexOf('fox'):", text2.indexOf('fox'));
console.log("lastIndexOf('the'):", text2.lastIndexOf('the'));
console.log("includes('quick'):", text2.includes('quick'));
console.log("startsWith('The'):", text2.startsWith('The'));
console.log("endsWith('dog'):", text2.endsWith('dog'));

console.log(" \n--- String Extraction Methods ---");
const text3 = "JavaScript";
console.log("Original:", text3);
console.log("substring(0, 4):", text3.substring(0, 4));
console.log("substr(0, 4):", text3.substr(0, 4));
console.log("slice(4):", text3.slice(4));
console.log("charAt(0):", text3.charAt(0));
console.log("charCodeAt(0):", text3.charCodeAt(0));

console.log(" \n--- String Replacement ---");
const text4 = "cat and cat and dog";
console.log("Original:", text4);
console.log("replace('cat', 'dog'):", text4.replace('cat', 'dog'));
console.log("replaceAll('cat', 'bird'):", text4.replaceAll('cat', 'bird'));

console.log(" \n--- String Split and Join ---");
const text5 = "cherry,blueberry,watermelon,grape";
console.log("Original:", text5);
const fruits = text5.split(',');
console.log("split(','):", fruits);
console.log("join(' - '):", fruits.join(' - '));

console.log(" \n--- String Trimming ---");
const text6 = "   Hello World   ";
console.log("Original: '" + text6 + "'");
console.log("trim(): '" + text6.trim() + "'");
console.log("trimStart(): '" + text6.trimStart() + "'");
console.log("trimEnd(): '" + text6.trimEnd() + "'");

console.log(" \n--- String Padding ---");
const text7 = "42";
console.log("Original:", text7);
console.log("padStart(5, '0'):", text7.padStart(5, '0'));
console.log("padEnd(5, '*'):", text7.padEnd(5, '*'));

console.log(" \n--- String Repetition ---");
const text8 = "Ha";
console.log("Original:", text8);
console.log("repeat(5):", text8.repeat(5));

console.log(" \n--- Template Literals ---");
const name = "Alice";
const age = 30;
const city = "Boston";
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

const template = `
    Person:
    - Name: ${name}
    - Age: ${age}
    - City: ${city}
`;
console.log(template);

console.log(" \n--- Practical Example: Email Validation ---");
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}
console.log("valid@email.com:", isValidEmail('valid@email.com'));
console.log("invalidemail.com:", isValidEmail('invalidemail.com'));

console.log(" \n--- Practical Example: Password Strength ---");
function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength];
}
console.log("abc:", checkPasswordStrength('abc'));
console.log("Password123:", checkPasswordStrength('Password123'));
console.log("P@ss1234:", checkPasswordStrength('P@ss1234'));
