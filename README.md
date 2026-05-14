# hermisJS - JavaScript Programming Laboratory

Welcome to hermisJS, a comprehensive JavaScript programming laboratory featuring 20 progressive programming exercises designed to build fundamental JavaScript skills.

## Overview

This project contains a structured series of JavaScript programs (Phase 1) that progress from basic syntax to more advanced concepts. Each program is self-contained with a verification header for tracking execution and student information.

**Student:** Hermis Makawa  
**Student ID:** 21313351018  
**Project Type:** JavaScript Programming Laboratory

## Project Structure

```
hermisJS/
├── index.html           # HTML entry point for running programs
├── README.md            # This file
└── phase-1/             # Phase 1 programs (20 exercises)
    ├── prog-01.js       # Hello World - Console Output
    ├── prog-02.js       # Comments and Basic Syntax
    ├── prog-03.js       # Variables and Data Types
    ├── prog-04.js       # Operators and Expressions
    ├── prog-05.js       # Conditional Statements (if/else)
    ├── prog-06.js       # Boolean Logic and Comparisons
    ├── prog-07.js       # Switch Statements
    ├── prog-08.js       # Introduction to Loops
    ├── prog-09.js       # Loop Control (break/continue)
    ├── prog-10.js       # User Input with prompt()
    ├── prog-11.js       # Arrays and Array Methods
    ├── prog-12.js       # Array Iteration and Manipulation
    ├── prog-13.js       # String Methods and Operations
    ├── prog-14.js       # Template Literals and String Templates
    ├── prog-15.js       # Objects and Properties
    ├── prog-16.js       # Object Methods and Manipulation
    ├── prog-17.js       # Math Object and Operations
    ├── prog-18.js       # Date Object and Time Operations
    ├── prog-19.js       # Advanced Function Concepts
    └── prog-20.js       # Basic Function Declarations and Invocation
```

## Program Progression

The 20 programs follow a logical learning progression:

### Fundamentals (Programs 1-7)
- **01:** Hello World - Console Output
- **02:** Comments and Basic Syntax
- **03:** Variables and Data Types
- **04:** Operators and Expressions
- **05:** Conditional Statements (if/else)
- **06:** Boolean Logic and Comparisons
- **07:** Switch Statements

### Flow Control (Programs 8-10)
- **08:** Introduction to Loops
- **09:** Loop Control (break/continue)
- **10:** User Input with prompt()

### Data Structures (Programs 11-18)
- **11:** Arrays and Array Methods
- **12:** Array Iteration and Manipulation
- **13:** String Methods and Operations
- **14:** Template Literals and String Templates
- **15:** Objects and Properties
- **16:** Object Methods and Manipulation
- **17:** Math Object and Operations
- **18:** Date Object and Time Operations

### Functions (Programs 19-20)
- **19:** Advanced Function Concepts
- **20:** Basic Function Declarations and Invocation

## Verification System

Each program includes a verification header that automatically generates:
- **Execution Date:** Timestamp of when the program runs
- **Session Token:** Unique token for each execution
- **Verification Hash:** Generated hash for verification purposes
- **Student Information:** Name and ID for tracking

This system ensures accountability and provides traceability for laboratory submissions.

## Running the Programs

### In a Browser
Open `index.html` in your web browser to run the current program (defaults to prog-20.js). To run a different program, modify the script source in `index.html`.

### In Node.js
Run any program directly using Node.js:
```bash
node phase-1/prog-01.js
node phase-1/prog-10.js
node phase-1/prog-20.js
```

### In Browser Console
Open your browser's developer tools (F12) and execute:
```javascript
// Load and execute a program
fetch('phase-1/prog-01.js')
  .then(response => response.text())
  .then(code => eval(code))
```

## Key Concepts Covered

- **Core JavaScript:** Variables, data types, operators, functions
- **Control Flow:** Conditionals (if/else/switch), loops (for/while)
- **Data Structures:** Arrays, objects, strings
- **Built-in Objects:** Math, Date, Array, String
- **User Interaction:** Console output, prompt input
- **Functions:** Declaration, invocation, parameters, return values

## Learning Outcomes

Upon completing this laboratory, students will be able to:
- Write and execute JavaScript programs
- Understand variables and data types
- Control program flow with conditionals and loops
- Work with arrays and objects
- Manipulate strings and dates
- Declare and invoke functions
- Use console for debugging and output

## Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge) or Node.js
- Basic understanding of programming concepts (recommended)
- Text editor for viewing/editing source code

## Notes

- Each program builds upon concepts from previous programs
- Programs include comments explaining key concepts
- The verification header should not be modified
- All programs follow consistent structure and naming conventions

## Future Phases

This project is Phase 1 of a comprehensive JavaScript learning path. Future phases may include:
- Phase 2: Intermediate JavaScript (async/await, APIs, DOM manipulation)
- Phase 3: Advanced JavaScript (OOP, design patterns, frameworks)

---

**Last Updated:** April 27, 2026
