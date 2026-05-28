// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 18 - Regular Expressions Basics
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Regular Expressions Basics");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Creating Regular Expressions ---");
const regex1 = /hello/;
const regex2 = /world/i; // case-insensitive
const regex3 = /js/g;    // global
const regex4 = new RegExp('pattern');
console.log("Regex 1:", regex1);
console.log("Regex 2:", regex2);
console.log("Regex 3:", regex3);
console.log("Regex 4:", regex4);

console.log(" \n--- String Matching ---");
const text1 = "Hello World";
console.log("Text:", text1);
console.log("test(/hello/i):", /hello/i.test(text1));
console.log("test(/java/):", /java/.test(text1));

console.log(" \n--- Finding Matches ---");
const text2 = "The year 2025 is here, welcome to 2025!";
console.log("Text:", text2);
console.log("match(/2024/):", text2.match(/2024/));
console.log("match(/2024/g):", text2.match(/2024/g));
const result = text2.match(/20\d{2}/g);
console.log("match(/20\\d{2}/g):", result);

console.log(" \n--- Finding Index ---");
console.log("search(/year/):", text2.search(/year/));
console.log("search(/2024/):", text2.search(/2024/));

console.log(" \n--- Replace with Regex ---");
const text3 = "apple orange apple banana orange";
console.log("Original:", text3);
console.log("replace(/apple/, 'mango'):", text3.replace(/apple/, 'mango'));
console.log("replace(/apple/g, 'mango'):", text3.replace(/apple/g, 'mango'));

console.log(" \n--- Split with Regex ---");
const text4 = "apple, banana; orange:mango";
console.log("Original:", text4);
console.log("split(/[,;:]/):", text4.split(/[,;:]/));

console.log(" \n--- Common Patterns ---");
const email = "user@example.com";
const emailRegex = /^[^@]+@[^@]+\\.[^@]+$/;
console.log("Email:", email);
console.log("Is valid email:", emailRegex.test(email));

const phone = "123-456-7890";
const phoneRegex = /^\\d{3}-\\d{3}-\\d{4}$/;
console.log("Phone:", phone);
console.log("Is valid phone:", phoneRegex.test(phone));

const zipcode = "12345";
const zipcodeRegex = /^\\d{5}$/;
console.log("Zipcode:", zipcode);
console.log("Is valid zipcode:", zipcodeRegex.test(zipcode));

console.log(" \n--- Character Classes ---");
const text5 = "Hello123World";
console.log("Text:", text5);
console.log("Digits: /\\d/g:", text5.match(/\\d/g));
console.log("Letters: /[a-z]/gi:", text5.match(/[a-z]/gi));
console.log("Non-digits: /\\D/g:", text5.match(/\\D/g));

console.log(" \n--- Quantifiers ---");
const regex_match = /a{2,4}/;
const test1 = "a";
const test2 = "aa";
const test3 = "aaa";
const test4 = "aaaa";
const test5 = "aaaaa";
console.log("Pattern: a{2,4}");
console.log("'a':", regex_match.test(test1));
console.log("'aa':", regex_match.test(test2));
console.log("'aaa':", regex_match.test(test3));
console.log("'aaaa':", regex_match.test(test4));
console.log("'aaaaa':", regex_match.test(test5));

console.log(" \n--- Anchors ---");
const text6 = "Start at the beginning End at the end";
console.log("Text:", text6);
console.log("test(/^Start/):", /^Start/.test(text6));
console.log("test(/end$/):", /end$/.test(text6));
