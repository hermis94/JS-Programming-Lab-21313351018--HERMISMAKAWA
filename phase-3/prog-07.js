// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 07 - Multidimensional Arrays
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Multidimensional Arrays");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Creating 2D Arrays ---");
const matrix = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17]
];

console.log("Matrix:");
matrix.forEach(row => console.log(row));

console.log(" \n--- Accessing elements ---");
console.log("matrix[0][0]:", matrix[0][0]); // 2
console.log("matrix[1][2]:", matrix[1][2]); // 12
console.log("matrix[2][1]:", matrix[2][1]); // 16

console.log(" \n--- Iterating 2D array ---");
console.log("Row by row:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

console.log(" \n--- Creating dynamic 2D array ---");
function create2DArray(rows, cols, initialValue = 0) {
    return Array.from({ length: rows },
        () => Array.from({ length: cols }, () => initialValue));
}

const grid = create2DArray(3, 4, '-');
console.log("3x4 grid:");
grid.forEach(row => console.log(row.join(' ')));

console.log(" \n--- Game Board Example ---");
let board = create2DArray(3, 3, ' ');
board[0][0] = 'X';
board[1][1] = 'O';
board[2][2] = 'X';

console.log("Game State:");
console.log(' ' + board[0].join(' | '));
console.log(' ---+---+---');
console.log(' ' + board[1].join(' | '));
console.log(' ---+---+---');
console.log(' ' + board[2].join(' | '));

console.log("\n--- Matrix Operations ---");
function transpose(matrix) {
    return matrix[0].map((_, colIndex) =>
        matrix.map(row => row[colIndex])
    );
}

console.log("Original matrix:");
matrix.forEach(row => console.log(row));
console.log(" \nTransposed:");
const transposed = transpose(matrix);
transposed.forEach(row => console.log(row));

console.log(" \n--- 3D Array Example ---");
const cube = [
    [ // Layer 0
        [1, 2],
        [3, 4]
    ],
    [ // Layer 1
        [5, 6],
        [7, 8]
    ]
];

console.log("3D Array (2x2x2):");
console.log("cube[0][0][0]:", cube[0][0][0]); // 1
console.log("cube[1][1][1]:", cube[1][1][1]); // 8

console.log(" \n--- Practical: Grade Book ---");
const gradeBook = [
    ['Student', 'Math', 'Science', 'English', 'Average'],
    ['Bob', 88, 95, 92],
    ['Carol', 82, 88, 90],
    ['Dan', 95, 92, 88],
    ['Emma', 90, 87, 94]
];

// Calculate averages
for (let i = 1; i < gradeBook.length; i++) {
    const scores = gradeBook[i].slice(1);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    gradeBook[i].push(avg.toFixed(1));
}

// Display grade book
console.log(" \nGrade Book:");
gradeBook.forEach(row => {
    console.log(row.map(cell =>
        cell.toString().padStart(10, ' ')
    ).join(''));
});

console.log(" \n--- Flattening arrays ---");
const nested = [[2, 4], [6, 8, [10, 12]], [14, 16]];
console.log("Nested:", nested);
console.log("flat():", nested.flat());
console.log("flat(2):", nested.flat(2));
console.log("flat(Infinity):", nested.flat(Infinity));
