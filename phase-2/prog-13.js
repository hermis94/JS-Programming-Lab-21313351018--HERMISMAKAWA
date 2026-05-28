// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 33 - Creating objects with constructor functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Creating objects with constructor functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.isRunning = false;
    this.mileage = 0;
    this.start = function() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`${this.make} ${this.model} started.`);
        } else {
            console.log(`${this.make} ${this.model} is already running.`);
        }
    };
    this.stop = function() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.make} ${this.model} stopped.`);
        } else {
            console.log(`${this.make} ${this.model} is already stopped.`);
        }
    };
    this.drive = function(distance) {
        if (this.isRunning) {
            this.mileage += distance;
            console.log(`${this.make} ${this.model} drove ${distance} miles. Total mileage: ${this.mileage}`);
        } else {
            console.log(`Cannot drive. ${this.make} ${this.model} is not running.`);
        }
    };
    this.getInfo = function() {
        return `${this.year} ${this.color} ${this.make} ${this.model} - ${this.mileage} miles`;
    };
}

const carA = new Car('Honda', 'Civic', 2022, 'Silver');
const carB = new Car('Toyota', 'RAV4', 2023, 'Blue');
console.log('Car A:', carA.getInfo());
console.log('Car B:', carB.getInfo());
console.log('\n--- Testing Car A ---');
carA.start();
carA.drive(50);
carA.drive(30);
carA.stop();
carA.drive(15);
console.log('\n--- Updated Car A Info ---');
console.log(carA.getInfo());
console.log('carA instanceof Car:', carA instanceof Car);
