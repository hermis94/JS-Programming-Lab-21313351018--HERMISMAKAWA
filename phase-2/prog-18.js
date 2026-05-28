// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 38 - Advanced property control with descriptors
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Advanced property control with descriptors");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const user = {};
Object.defineProperty(user, 'username', {
    value: 'jordan_dev',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(user, 'id', {
    value: 'USR-' + Math.floor(Math.random() * 10000),
    writable: false,
    enumerable: true,
    configurable: false
});
let _age = 0;
Object.defineProperty(user, 'age', {
    get() {
        console.log(`Getting age: ${_age}`);
        return _age;
    },
    set(value) {
        if (value < 0) {
            console.log('Age cannot be negative!');
        } else if (value > 130) {
            console.log('Age seems unrealistic!');
        } else {
            console.log(`Setting age to ${value}`);
            _age = value;
        }
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(user, 'password', {
    value: 'secretPass',
    writable: true,
    enumerable: false,
    configurable: true
});
Object.defineProperty(user, 'profile', {
    get() {
        return `${this.username} (ID: ${this.id}, Age: ${this.age})`;
    },
    enumerable: true,
    configurable: true
});

console.log('--- Testing Properties ---');
user.username = 'jordan_admin';
console.log('Username:', user.username);
console.log('\n--- Attempting to modify id ---');
user.id = 'new-id';
console.log('ID after modification attempt:', user.id);
console.log('\n--- Testing age setter ---');
user.age = 35;
user.age = -5;
user.age = 150;
console.log('Current age:', user.age);
console.log('\n--- Testing computed property ---');
console.log(user.profile);
console.log('\n--- Enumeration ---');
console.log('Object.keys():', Object.keys(user));
console.log('password exists?', user.password);
const idDescriptor = Object.getOwnPropertyDescriptor(user, 'id');
console.log('ID Descriptor:', idDescriptor);
const ageDescriptor = Object.getOwnPropertyDescriptor(user, 'age');
console.log('Age Descriptor:', ageDescriptor);

const product = {};
Object.defineProperties(product, {
    name: { value: 'Smartphone', writable: true, enumerable: true },
    price: { value: 549.99, writable: false, enumerable: true },
    _stock: { value: 24, writable: true, enumerable: false },
    stock: {
        get() { return this._stock; },
        set(value) { if (value >= 0) this._stock = value; },
        enumerable: true
    },
    inStock: {
        get() { return this._stock > 0; },
        enumerable: true
    }
});
console.log('\n--- Product with Multiple Properties ---');
console.log('Name:', product.name);
console.log('Price:', product.price);
console.log('Stock:', product.stock);
console.log('In Stock:', product.inStock);
product.price = 499.99;
console.log('Price after modification attempt:', product.price);

console.log('\n--- Object Sealing and Freezing ---');
const config = { theme: 'dark', notifications: true };
console.log('Original config:', config);
Object.seal(config);
config.theme = 'light';
config.newProp = 'test';
delete config.notifications;
console.log('After seal - theme changed:', config.theme);
console.log('After seal - new property added:', config.newProp);
console.log('After seal - notification deleted:', config.notifications);
const constants = Object.freeze({ PI: 3.14159, MAX_SIZE: 500 });
constants.PI = 3.14;
console.log('Frozen object PI:', constants.PI);
