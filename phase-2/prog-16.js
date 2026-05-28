// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 36 - Class inheritance using extends and super
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Class inheritance using extends and super");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this._speed = 0;
        this._engine = false;
    }
    startEngine() {
        if (!this._engine) {
            this._engine = true;
            console.log(`${this.make} ${this.model} engine started.`);
        } else {
            console.log('Engine is already running.');
        }
    }
    stopEngine() {
        if (this._engine) {
            this._engine = false;
            this._speed = 0;
            console.log(`${this.make} ${this.model} engine stopped.`);
        } else {
            console.log('Engine is already off.');
        }
    }
    accelerate(amount) {
        if (this._engine) {
            this._speed += amount;
            console.log(`Accelerating to ${this._speed} km/h`);
        } else {
            console.log('Start the engine first!');
        }
    }
    brake(amount) {
        this._speed = Math.max(0, this._speed - amount);
        console.log(`Braking to ${this._speed} km/h`);
    }
    get speed() {
        return this._speed;
    }
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors, fuelType) {
        super(make, model, year);
        this.doors = doors;
        this.fuelType = fuelType;
        this._trunkOpen = false;
    }
    openTrunk() {
        this._trunkOpen = true;
        console.log('Trunk opened.');
    }
    closeTrunk() {
        this._trunkOpen = false;
        console.log('Trunk closed.');
    }
    getInfo() {
        return `${super.getInfo()} - ${this.doors} doors, ${this.fuelType}`;
    }
    accelerate(amount) {
        super.accelerate(amount);
        if (this.speed > 140) {
            console.log('Warning: High speed detected!');
        }
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
        this._helmetOn = false;
    }
    putOnHelmet() {
        this._helmetOn = true;
        console.log('Helmet on - safe to ride!');
    }
    startEngine() {
        if (this._helmetOn) {
            super.startEngine();
        } else {
            console.log('Put on your helmet first!');
        }
    }
    wheelie() {
        if (this._engine && this._speed > 20) {
            console.log('Doing a wheelie!');
        } else {
            console.log('Need more speed for a wheelie!');
        }
    }
    getInfo() {
        return `${super.getInfo()} - ${this.type} Motorcycle`;
    }
}

const myCar = new Car('Ford', 'Focus', 2022, 4, 'Petrol');
console.log('Car info:', myCar.getInfo());
myCar.startEngine();
myCar.accelerate(60);
myCar.accelerate(90);
myCar.brake(40);
myCar.openTrunk();
myCar.closeTrunk();
myCar.stopEngine();

const myBike = new Motorcycle('Suzuki', 'GSX', 2024, 'Sport');
console.log('\nMotorcycle info:', myBike.getInfo());
myBike.startEngine();
myBike.putOnHelmet();
myBike.startEngine();
myBike.accelerate(35);
myBike.wheelie();
myBike.stopEngine();

console.log('myCar instanceof Car:', myCar instanceof Car);
console.log('myBike instanceof Motorcycle:', myBike instanceof Motorcycle);
