// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 39 - Working with Object static methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Working with Object static methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const person = {
    firstName: 'Ahmed',
    lastName: 'Hassan',
    age: 28,
    email: 'ahmed.hassan@example.com',
    isActive: true
};
console.log('--- Object.keys() ---');
const keys = Object.keys(person);
console.log('Keys:', keys);
keys.forEach(key => console.log(`${key}: ${person[key]}`));
console.log('\n--- Object.values() ---');
const values = Object.values(person);
console.log('Values:', values);
console.log('Sum of numeric values:', values.filter(v => typeof v === 'number').reduce((a, b) => a + b, 0));

console.log('\n--- Object.entries() ---');
const entries = Object.entries(person);
console.log('Entries:', entries);
entries.forEach(([key, value]) => console.log(`${key} = ${value}`));
const entriesToObject = Object.fromEntries(entries);
console.log('\n--- Object.fromEntries() ---');
console.log('Reconstructed object:', entriesToObject);

console.log('\n--- Object.assign() ---');
const defaults = { theme: 'light', fontSize: 14, notifications: true, language: 'en' };
const userSettings = { theme: 'dark', fontSize: 16 };
const finalSettings = Object.assign({}, defaults, userSettings);
console.log('Default settings:', defaults);
console.log('User settings:', userSettings);
console.log('Merged settings:', finalSettings);

console.log('\n--- Object.assign() Shallow Copy ---');
const original = { name: 'Original', settings: { volume: 50, brightness: 80 } };
const shallowCopy = Object.assign({}, original);
shallowCopy.name = 'Copy';
shallowCopy.settings.volume = 100;
console.log('Original after modifying copy:', original);
console.log('Shallow copy:', shallowCopy);
console.log('Warning: Nested objects are shared!');

console.log('\n--- Object.hasOwn() ---');
console.log('Has firstName:', Object.hasOwn(person, 'firstName'));
console.log('Has toString:', Object.hasOwn(person, 'toString'));

console.log('\n--- Object.is() ---');
console.log('Object.is(42, 42):', Object.is(42, 42));
console.log('Object.is(0, -0):', Object.is(0, -0));
console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN));

console.log('\n--- Property Name Methods ---');
const objWithNonEnum = {};
Object.defineProperty(objWithNonEnum, 'hidden', { value: 'secret', enumerable: false });
objWithNonEnum.visible = 'public';
console.log('Object.keys():', Object.keys(objWithNonEnum));
console.log('Object.getOwnPropertyNames():', Object.getOwnPropertyNames(objWithNonEnum));

console.log('\n--- Manual grouping fallback ---');
const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Bailey', grade: 'B' },
    { name: 'Casey', grade: 'A' },
    { name: 'Dakota', grade: 'C' },
    { name: 'Emma', grade: 'B' }
];
const manualGroup = students.reduce((acc, student) => {
    if (!acc[student.grade]) acc[student.grade] = [];
    acc[student.grade].push(student);
    return acc;
}, {});
console.log('Students grouped manually:', manualGroup);
