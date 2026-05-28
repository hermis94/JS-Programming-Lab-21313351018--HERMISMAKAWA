// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 35 - Modern class syntax (ES6+)
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Modern class syntax (ES6+)");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


class Person {
    species = 'Homo Sapiens';
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._email = '';
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    introduce() {
        return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`;
    }
    celebrateBirthday() {
        this.age++;
        console.log(`Happy Birthday ${this.firstName}! You are now ${this.age} years old.`);
    }
    get email() {
        return this._email;
    }
    set email(value) {
        if (value.includes('@') && value.includes('.')) {
            this._email = value;
        } else {
            console.log('Invalid email address!');
        }
    }
    static createAnonymous() {
        return new Person('Anonymous', 'User', 0);
    }
}

const personA = new Person('Lisa', 'Chen', 26);
const personB = new Person('James', 'Smith', 31);
console.log('--- Person Instances ---');
console.log(personA.introduce());
console.log(personB.introduce());
console.log('\n--- Birthday Celebration ---');
personA.celebrateBirthday();
personA.celebrateBirthday();
console.log('\n--- Email Testing ---');
personA.email = 'lisa.chen@example.com';
console.log('Valid email set:', personA.email);
personA.email = 'lisa-at-example';
console.log('Email after invalid attempt:', personA.email);
console.log('\n--- Static Methods ---');
const anonymous = Person.createAnonymous();
console.log(anonymous.introduce());
