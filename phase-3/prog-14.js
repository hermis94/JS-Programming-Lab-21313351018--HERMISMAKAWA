// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 14 - DOM Element Creation and Removal
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: DOM Element Creation and Removal");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

// Inserting HTML for testing the code
document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program 54 - DOM Element Creation and Removal</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h2 { color: #333; margin-top: 20px; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #9c27b0; }
        #element-container { background: #f3e5f5; padding: 15px; border-radius: 4px; min-height: 60px; }
        #insertion-target { background: #e1bee7; padding: 15px; margin: 10px 0; border: 2px dashed #9c27b0; }
        #clone-source { background: #ce93d8; color: white; padding: 15px; margin: 10px 0; border-radius: 4px; }
        #remove-me { background: #f48fb1; padding: 10px; margin: 10px 0; border-radius: 4px; }
        #old-element { background: #ec407a; color: white; padding: 10px; margin: 10px 0; }
        #fragment-demo { background: #f06292; color: white; padding: 15px; border-radius: 4px; }
        .new-box { background: #8e24aa; color: white; padding: 10px; margin: 5px; border-radius: 4px; }
        .inserted-before { background: #ab47bc; padding: 10px; margin: 5px 0; }
        .inserted-after { background: #ba68c8; padding: 10px; margin: 5px 0; }
        .prepended { background: #ce93d8; padding: 10px; margin: 5px 0; }
        .appended { background: #f8bbd0; padding: 10px; margin: 5px 0; color: #333; }
        .replacement { background: #7b1fa2; color: white; padding: 15px; margin: 10px 0; }
        .fragment-item { display: inline-block; background: #6a1b9a; padding: 8px 12px; margin: 5px; border-radius: 3px; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <h1>DOM Element Creation and Removal Demo</h1>
        
        <div class="section">
            <h2>Element Container</h2>
            <div id="element-container">Container ready for appended elements</div>
        </div>

        <div class="section">
            <h2>Insertion Target</h2>
            <div id="insertion-target">Target Element for Insertions</div>
        </div>

        <div class="section">
            <h2>Cloning Demo</h2>
            <div id="clone-source">Original - This will be cloned</div>
        </div>

        <div class="section">
            <h2>Removal Demo</h2>
            <div id="remove-me">This element will be removed</div>
            <div id="old-element">Old element to replace</div>
        </div>

        <div class="section">
            <h2>Fragment Performance Demo</h2>
            <div id="fragment-demo">Items will be added here using DocumentFragment</div>
        </div>
    </div>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', function() {

    console.log(" --- Creating Elements ---");

    // createElement
    const newDiv = document.createElement('div');
    console.log("Created element:", newDiv);

    // Set properties
    newDiv.id = 'new-div';
    newDiv.className = 'new-box';
    newDiv.textContent = 'Created dynamically!';
    newDiv.setAttribute('data-created', new Date().toISOString());

    console.log("Configured element:", newDiv);

    console.log(" \n--- Appending Elements ---");
    const container = document.getElementById('element-container');

    if (container) {
        container.appendChild(newDiv);
        console.log("Element appended");

        const span1 = document.createElement('span');
        span1.textContent = 'Hello ';
        const span2 = document.createElement('span');
        span2.textContent = 'World!';

        container.append(span1, span2, ' Extra text');
        console.log("Multiple items appended");
    }

    console.log(" \n--- Insertion Methods ---");
    const target = document.getElementById('insertion-target');

    if (target) {
        const before = document.createElement('div');
        before.textContent = 'Before element';
        before.className = 'inserted-before';
        target.before(before);

        const after = document.createElement('div');
        after.textContent = 'After element';
        after.className = 'inserted-after';
        target.after(after);

        const prepend = document.createElement('div');
        prepend.textContent = 'First child';
        prepend.className = 'prepended';
        target.prepend(prepend);

        const append = document.createElement('div');
        append.textContent = 'Last child';
        append.className = 'appended';
        target.append(append);
    }

    console.log(" \n--- Cloning Elements ---");
    const original = document.getElementById('clone-source');

    if (original) {
        const shallowClone = original.cloneNode(false);
        shallowClone.id = 'shallow-clone';
        shallowClone.textContent = 'Shallow Clone';
        original.after(shallowClone);

        const deepClone = original.cloneNode(true);
        deepClone.id = 'deep-clone';
        original.after(deepClone);

        console.log("Clones created");
    }

    console.log(" \n--- Removing Elements ---");

    const removeMe = document.getElementById('remove-me');
    if (removeMe) {
        removeMe.remove();
        console.log("Element removed");
    }

    console.log(" \n--- Replacing Elements ---");
    const oldElement = document.getElementById('old-element');

    if (oldElement) {
        const newElement = document.createElement('div');
        newElement.id = 'replacement';
        newElement.textContent = 'I replaced the old element!';
        newElement.className = 'replacement';

        oldElement.replaceWith(newElement);
        console.log("Element replaced");
    }

    console.log(" \n--- DocumentFragment for Performance ---");
    const fragmentContainer = document.getElementById('fragment-demo');

    if (fragmentContainer) {
        const fragment = document.createDocumentFragment();
        for (let i = 1; i <= 50; i++) {
            const div = document.createElement('div');
            div.textContent = `Item ${i}`;
            div.className = 'fragment-item';
            fragment.appendChild(div);
        }
        fragmentContainer.appendChild(fragment);
        console.log("Fragment appended");
    }
});

/*
HTML Structure Example:
<div id="element-container"></div>
<div id="insertion-target">Target Content</div>
<div id="clone-source">Clone me</div>
<div id="remove-me">Remove this</div>
<div id="old-element">Old</div>
<div id="fragment-demo"></div>
*/
