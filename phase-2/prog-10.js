// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 30 - Controlling 'this' with call, apply, and bind
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Controlling 'this' with call, apply, and bind");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const person1 = {
    firstName: 'Amira',
    lastName: 'Kato',
    getFullName: function(greeting, punctuation) {
        return `${greeting} ${this.firstName} ${this.lastName}${punctuation}`;
    }
};

const person2 = {
    firstName: 'Kojo',
    lastName: 'Mensah'
};

console.log('Using call():');
console.log(person1.getFullName.call(person2, 'Hi', '!'));
console.log('\nUsing apply():');
console.log(person1.getFullName.apply(person2, ['Hey', '!!']));
console.log('\nUsing bind():');
const getPerson2Name = person1.getFullName.bind(person2);
console.log(getPerson2Name('Hey', '...'));
const getPerson2NameWithHello = person1.getFullName.bind(person2, 'Hello');
console.log(getPerson2NameWithHello('!'));

const numbers = [5, 6, 7];
const moreNumbers = [8, 9, 10];
Array.prototype.push.apply(numbers, moreNumbers);
console.log('\nBorrowing push method:', numbers);
const arr1 = [12, 13, 14];
const arr2 = [15, 16, 17];
arr1.push(...arr2);
console.log('Using spread operator:', arr1);
