// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 19 - JSON and Object Serialization
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: JSON and Object Serialization");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Converting Objects to JSON ---");
const person = {
    name: "Jane Smith",
    age: 28,
    email: "jane@example.com",
    active: true
};
console.log("Original object:", person);
const jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

console.log(" \n--- Converting JSON to Objects ---");
const jsonData = '{"city":"New York","population":8000000,"founded":1624}';
console.log("JSON string:", jsonData);
const city = JSON.parse(jsonData);
console.log("Parsed object:", city);
console.log("City name:", city.city);
console.log("Population:", city.population);

console.log(" \n--- Pretty Printing JSON ---");
const company = {
    name: "Tech Solutions",
    employees: 150,
    founded: 2015,
    departments: ["Engineering", "Sales", "HR"]
};
console.log("Original:");
console.log(JSON.stringify(company, null, 2));

console.log(" \n--- Arrays to JSON ---");
const numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);
console.log("JSON:", JSON.stringify(numbers));

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
];
console.log("Products array:");
console.log(JSON.stringify(products, null, 2));

console.log(" \n--- Nested Objects ---");
const student = {
    id: 21313351018,
    name: "Hermis Makawa",
    contact: {
        email: "albert@university.edu",
        phone: "555-0100",
        address: {
            street: "123 Main St",
            city: "Boston",
            state: "MA"
        }
    },
    grades: [95, 87, 92, 88]
};
console.log("Nested object:");
console.log(JSON.stringify(student, null, 2));

console.log(" \n--- Selective Serialization with Replacer ---");
const filtered = JSON.stringify(student, ['name', 'email', 'city'], 2);
console.log("Filtered JSON:");
console.log(filtered);

console.log(" \n--- Handling Dates ---");
const event = {
    title: "Conference",
    date: new Date(2024, 0, 15),
    time: "09:00 AM"
};
console.log("Original object:", event);
console.log("JSON with date:", JSON.stringify(event));

const customEvent = {
    title: "Meeting",
    dateTime: "2024-01-15T09:00:00Z",
    location: "Room 101"
};
console.log("Custom format:", JSON.stringify(customEvent, null, 2));

console.log(" \n--- Error Handling with JSON ---");
try {
    const invalidJson = '{"name": "John", "age": 30,}';
    const result = JSON.parse(invalidJson);
} catch (error) {
    console.log("Error caught:", error.message);
}

console.log(" \n--- Deep Copy with JSON ---");
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
copy.b.c = 99;
console.log("Original:", original);
console.log("Modified copy:", copy);

console.log(" \n--- Practical Example: API Response ---");
const apiResponse = {
    status: "success",
    code: 200,
    data: {
        users: [
            { id: 1, username: "alice", role: "admin" },
            { id: 2, username: "bob", role: "user" },
            { id: 3, username: "charlie", role: "user" }
        ],
        totalCount: 3
    },
    timestamp: "2024-01-15T10:30:00Z"
};
console.log("API Response:");
console.log(JSON.stringify(apiResponse, null, 2));

console.log(" \n--- Practical Example: Data Validation ---");
function validateUser(data) {
    try {
        const user = JSON.parse(data);
        if (user.name && user.email) {
            console.log("Valid user data");
            return true;
        } else {
            console.log("Missing required fields");
            return false;
        }
    } catch (error) {
        console.log("Invalid JSON");
        return false;
    }
}
console.log("Test 1:", validateUser('{"name":"John","email":"john@example.com"}'));
console.log("Test 2:", validateUser('{"name":"John"}'));
console.log("Test 3:", validateUser('invalid json'));
