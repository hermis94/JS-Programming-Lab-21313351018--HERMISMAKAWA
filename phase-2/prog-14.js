// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 34 - Understanding prototypes and inheritance
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Understanding prototypes and inheritance");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

Animal.prototype.eat = function(food) {
    console.log(`${this.name} is eating ${food}.`);
};

Animal.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
};

function Dog(name, breed) {
    Animal.call(this, name, 'Dog');
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log(`${this.name} says: Woof! Woof!`);
};
Dog.prototype.speak = function() {
    console.log(`${this.name} the ${this.breed} barks loudly!`);
};

const lion = new Animal('Leo', 'Lion');
const dogA = new Dog('Max', 'Golden Retriever');
console.log('--- Animal Instances ---');
lion.speak();
lion.eat('meat');
console.log('\n--- Dog Instances ---');
dogA.speak();
dogA.bark();
dogA.eat('bones');
console.log('dogA instanceof Dog:', dogA instanceof Dog);
console.log('dogA instanceof Animal:', dogA instanceof Animal);
