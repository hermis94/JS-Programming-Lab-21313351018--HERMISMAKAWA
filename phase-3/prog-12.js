// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 12 - DOM Content Manipulation
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: DOM Content Manipulation");
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
    <title>Program 52 - DOM Content Manipulation</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h2 { color: #333; margin-top: 0; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #28a745; }
        #main-heading { color: #007bff; font-size: 28px; }
        #content-area { background: #e8f5e9; padding: 15px; border-radius: 4px; margin: 10px 0; }
        #box { background: #fff3e0; padding: 15px; margin: 10px 0; }
        #target { background: #fce4ec; padding: 15px; margin: 10px 0; border: 2px solid #c2185b; }
        #old-content { background: #e1f5fe; padding: 10px; margin: 10px 0; }
        #dynamic-container { background: #f3e5f5; padding: 15px; border-radius: 4px; }
        #clear-me { background: #ffebee; padding: 10px; margin: 10px 0; }
        ul#items-list { list-style: none; padding: 0; }
        .list-item { background: #ede7f6; padding: 10px; margin: 5px 0; border-left: 3px solid #7c4dff; }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="main-heading">Original Heading</h1>
        
        <div class="section">
            <h2>Content Areas for Manipulation</h2>
            <div id="content-area">Original content goes here</div>
            <div id="box"><p>Content with hidden text</p><p style="display: none;">This is hidden</p></div>
            <div id="target">This is the target element</div>
        </div>

        <div class="section">
            <h2>Content Updates</h2>
            <div id="old-content">Old content to be replaced</div>
            <div id="dynamic-container"></div>
            <div id="clear-me"><p>This content will be cleared</p></div>
        </div>

        <div class="section">
            <h2>List Items</h2>
            <ul id="items-list"></ul>
        </div>
    </div>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', function() {

    console.log(" --- textContent (safest) ---");
    const heading = document.getElementById('main-heading');
    if (heading) {
        console.log("Original content:", heading.textContent);
        heading.textContent = "Updated Heading";
        console.log("After update:", heading.textContent);
    }

    console.log(" \n--- innerHTML (with HTML) ---");
    const content = document.getElementById('content-area');
    if (content) {
        console.log("Original:", content.innerHTML);
        content.innerHTML = "<p>New HTML content</p><span>Added span</span>";
        console.log("After update:", content.innerHTML);
    }

    console.log(" \n--- innerText vs textContent ---");
    const box = document.getElementById('box');
    if (box) {
        box.innerHTML = `
            <p>Visible text</p>
            <p style="display: none;">Hidden text</p>
        `;
        console.log("textContent includes hidden:", box.textContent);
        console.log("innerText excludes hidden:", box.innerText);
    }

    console.log(" \n--- insertAdjacentHTML ---");
    const target = document.getElementById('target');
    if (target) {
        target.insertAdjacentHTML('beforebegin', '<div>Before target</div>');
        target.insertAdjacentHTML('afterbegin', '<span>Inside start</span>');
        target.insertAdjacentHTML('beforeend', '<span>Inside end</span>');
        target.insertAdjacentHTML('afterend', '<div>After target</div>');
    }

    console.log(" \n--- Replacing Content ---");
    const old = document.getElementById('old-content');
    if (old) {
        old.textContent = "Content has been replaced!";
    }

    console.log(" \n--- Creating and Adding Elements Dynamically ---");
    const container = document.getElementById('dynamic-container');
    if (container) {
        const newPara = document.createElement('p');
        newPara.textContent = "Dynamically created paragraph";
        newPara.className = 'dynamic-para';
        container.appendChild(newPara);
        console.log("New element added");
    }

    console.log(" \n--- Clearing Content ---");
    const clearMe = document.getElementById('clear-me');
    if (clearMe) {
        console.log("Before clear:", clearMe.innerHTML);
        clearMe.innerHTML = '';
        console.log("After clear: empty");
    }

    console.log(" \n--- Template Literals with HTML ---");
    const list = document.getElementById('items-list');
    if (list) {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        list.innerHTML = items
            .map(item => `<li class="list-item">${item}</li>`)
            .join('');
        console.log("List populated with template literals");
    }
});

/*
HTML Structure Example:
<h2 id="main-heading">Original Heading</h2>
<div id="content-area">Original content</div>
<div id="box">Content</div>
<div id="target">Target</div>
<div id="old-content">Old</div>
<div id="dynamic-container"></div>
<div id="clear-me"><p>Content to clear</p></div>
<ul id="items-list"></ul>
*/
