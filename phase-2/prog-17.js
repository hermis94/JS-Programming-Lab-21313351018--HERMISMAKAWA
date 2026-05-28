// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 37 - Object.create() for prototypal inheritance
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Object.create() for prototypal inheritance");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const animalProto = {
    init(name, species) {
        this.name = name;
        this.species = species;
        return this;
    },
    speak() {
        console.log(`${this.name} makes a sound.`);
    },
    eat(food) {
        console.log(`${this.name} is eating ${food}.`);
    },
    describe() {
        return `${this.name} is a ${this.species}`;
    }
};

const animal1 = Object.create(animalProto).init('Kenya', 'Kangaroo');
const animal2 = Object.create(animalProto).init('Petra', 'Penguin');
console.log('--- Objects from animalProto ---');
console.log(animal1.describe());
animal1.speak();
animal1.eat('grass');
console.log(animal2.describe());
animal2.speak();

const dogProto = Object.create(animalProto);
dogProto.bark = function() {
    console.log(`${this.name} says: Woof!`);
};
dogProto.speak = function() {
    console.log(`${this.name} barks loudly!`);
};
dogProto.init = function(name, breed) {
    animalProto.init.call(this, name, 'Dog');
    this.breed = breed;
    return this;
};
dogProto.describe = function() {
    return `${this.name} is a ${this.breed} ${this.species}`;
};

const dogA = Object.create(dogProto).init('Charlie', 'Cocker Spaniel');
console.log('\n--- Dog Instances ---');
console.log(dogA.describe());
dogA.speak();
dogA.bark();
dogA.eat('bones');

const guardDogProto = Object.create(dogProto);
guardDogProto.guard = function() {
    console.log(`${this.name} is guarding the house!`);
};
guardDogProto.init = function(name, breed, trainingLevel) {
    dogProto.init.call(this, name, breed);
    this.trainingLevel = trainingLevel;
    return this;
};

const guardDog = Object.create(guardDogProto).init('Rex', 'German Shepherd', 'Professional');
console.log('\n--- Guard Dog Instance ---');
console.log(guardDog.describe());
console.log('Training level:', guardDog.trainingLevel);
guardDog.speak();
guardDog.guard();

console.log('\n--- Prototype Chain Check ---');
console.log('guardDogProto.isPrototypeOf(guardDog):', guardDogProto.isPrototypeOf(guardDog));
console.log('dogProto.isPrototypeOf(guardDog):', dogProto.isPrototypeOf(guardDog));
console.log('animalProto.isPrototypeOf(guardDog):', animalProto.isPrototypeOf(guardDog));

const dictionary = Object.create(null);
dictionary.hello = 'A greeting';
dictionary.world = 'The planet Earth';
console.log('\n--- Object without prototype ---');
console.log('dictionary.hello:', dictionary.hello);
console.log('toString in dictionary:', 'toString' in dictionary);
