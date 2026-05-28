// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 10 - Array-like Objects and Conversion
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Array-like Objects and Conversion");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Understanding Array-like Objects ---");

// Creating array-like object
const arrayLike = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3
};

console.log("Array-like object:", arrayLike);
console.log("Is array?", Array.isArray(arrayLike)); // false
console.log("Has length:", arrayLike.length);
console.log("Can access by index:", arrayLike[0]);

console.log(" \n--- Common Array-like Objects ---");

// Arguments object in function
function demoArguments() {
    console.log("arguments object:", arguments);
    console.log("arguments.length:", arguments.length);
    console.log("arguments[0]:", arguments[0]);
    console.log("Is array?", Array.isArray(arguments));
}
demoArguments('p', 'q', 'r');

// String as array-like
const str = "World";
console.log(" \nString as array-like:");
console.log("str.length:", str.length);
console.log("str[0]:", str[0]);
console.log("Is array?", Array.isArray(str));

console.log(" \n--- Converting Array-like to Array ---");

const arrayLikeObj = { 0: 'x', 1: 'y', 2: 'z', length: 3 };

// Method 1: Array.from()
const asArray1 = Array.from(arrayLikeObj);
console.log("Array.from():", asArray1);

// Method 2: Array.prototype.slice.call()
const asArray3 = Array.prototype.slice.call(arrayLikeObj);
console.log("slice.call():", asArray3);

// Method 3: Array.from() with strings
const strArray = Array.from("World");
console.log("String to array:", strArray);

console.log(" \n--- Borrowing Array Methods ---");

const list = { 0: 100, 1: 200, 2: 300, length: 3 };

// forEach
Array.prototype.forEach.call(list, (item, index) => {
    console.log(`list[${index}] = ${item}`);
});

// map
const doubled = Array.prototype.map.call(list, x => x * 2);
console.log("Doubled:", doubled);

// filter
const filtered = Array.prototype.filter.call(list, x => x > 150);
console.log("Filtered > 150:", filtered);

console.log(" \n--- HTMLCollection Simulation ---");
function simulateHTMLCollection() {
    const divs = {
        0: { tagName: 'DIV', className: 'card', textContent: 'Card 1' },
        1: { tagName: 'DIV', className: 'item', textContent: 'Item 2' },
        2: { tagName: 'DIV', className: 'item', textContent: 'Item 3' },
        length: 3
    };

    // Convert and filter
    const divArray = Array.from(divs);
    const items = divArray.filter(div => div.className === 'item');
    console.log("Items with class 'item':", items);

    // Direct iteration using Array methods
    Array.prototype.forEach.call(divs, (div, i) => {
        console.log(`${i}: ${div.tagName}.${div.className} - "${div.textContent}"`);
    });
}
simulateHTMLCollection();

console.log(" \n--- Creating Custom Iterable ---");
const customCollection = {
    items: ['red', 'green', 'blue'],
    length: 3,

    // Make it iterable
    [Symbol.iterator]: function() {
        let index = 0;
        const items = this.items;
        return {
            next: function() {
                if (index < items.length) {
                    return { value: items[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

console.log("Custom iterable can use spread:", [...customCollection]);
console.log("Can use for...of:");
for (const item of customCollection) {
    console.log(`  ${item}`);
}

console.log(" \n--- Practical: Function that accepts array OR array-like ---");
function processCollection(collection) {
    // Convert to array if needed
    const items = Array.isArray(collection) ? collection :
        Array.from(collection);

    return {
        count: items.length,
        first: items[0],
        last: items[items.length - 1],
        all: items
    };
}

console.log("Process array:", processCollection([10, 20, 30]));
console.log("Process array-like:", processCollection({0: 'a', 1: 'b', length: 2}));
console.log("Process string:", processCollection("Hi"));
