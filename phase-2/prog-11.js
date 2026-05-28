// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 31 - Creating objects with object literals
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Creating objects with object literals");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const book = {
    title: 'The Art of Coding',
    author: 'B. Developer',
    year: 2025,
    genre: 'Technical',
    getDescription: function() {
        return `${this.title} by ${this.author} (${this.year})`;
    },
    updateYear(newYear) {
        this.year = newYear;
        console.log(`Year updated to ${newYear}`);
    }
};

console.log('Book object:', book);
console.log('Description:', book.getDescription());
console.log('\nDot notation:', book.title);
console.log('Bracket notation:', book['author']);
book.publisher = 'Code House';
book['ISBN'] = '978-9876543210';
console.log('\nAfter adding properties:', book);
delete book.genre;
console.log('\nAfter deleting genre:', book);
console.log('\nHas author?', 'author' in book);
console.log('Has genre?', 'genre' in book);
console.log('Own property toString?', book.hasOwnProperty('toString'));
