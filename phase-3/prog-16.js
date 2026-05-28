// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 16 - Event Propagation and Delegation
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Event Propagation and Delegation");
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
    <title>Program 56 - Event Propagation and Delegation</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h2 { color: #333; margin-top: 20px; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #d32f2f; }
        #grandparent { background: #ffebee; padding: 20px; margin: 10px 0; border: 3px solid #c62828; border-radius: 4px; cursor: pointer; }
        #parent { background: #ef5350; color: white; padding: 15px; margin: 10px; border: 2px solid #c62828; border-radius: 4px; cursor: pointer; }
        #child { background: #f44336; color: white; padding: 15px; margin: 10px; border: 2px solid #b71c1c; border-radius: 4px; cursor: pointer; }
        #stop-container { background: #ffcdd2; padding: 20px; margin: 10px 0; border: 2px solid #e53935; border-radius: 4px; cursor: pointer; }
        #stop-propagation { background: #d32f2f; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; margin: 10px 0; }
        #stop-propagation:hover { background: #b71c1c; }
        .input-group { margin: 15px 0; }
        #item-input { padding: 10px; border: 2px solid #d32f2f; border-radius: 4px; width: 70%; box-sizing: border-box; }
        #add-item-btn { background: #d32f2f; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-left: 5px; }
        #add-item-btn:hover { background: #b71c1c; }
        #item-count { background: #c62828; color: white; padding: 5px 10px; border-radius: 4px; margin-left: 10px; font-weight: bold; }
        ul#item-list { list-style: none; padding: 0; }
        .list-item { background: #ffebee; padding: 12px; margin: 8px 0; border-left: 4px solid #d32f2f; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; }
        .item-text { flex-grow: 1; font-weight: 500; }
        .edit-btn, .delete-btn { padding: 5px 12px; margin: 0 5px; border: none; border-radius: 3px; cursor: pointer; font-size: 12px; }
        .edit-btn { background: #ff9800; color: white; }
        .edit-btn:hover { background: #f57c00; }
        .delete-btn { background: #d32f2f; color: white; }
        .delete-btn:hover { background: #b71c1c; }
        #demo-link { color: #d32f2f; text-decoration: underline; cursor: pointer; margin: 15px 0; display: inline-block; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Event Propagation and Delegation Demo</h1>
        
        <div class="section">
            <h2>Event Bubbling Example - Click any element:</h2>
            <div id="grandparent">
                <strong>Grandparent</strong>
                <div id="parent">
                    <strong>Parent</strong>
                    <div id="child"><strong>Child (Click me)</strong></div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Stop Propagation Example</h2>
            <div id="stop-container">
                <p>Container (click here to see event)</p>
                <button id="stop-propagation">Stop Propagation Button</button>
            </div>
        </div>

        <div class="section">
            <h2>Event Delegation - Todo List</h2>
            <div class="input-group">
                <input type="text" id="item-input" placeholder="Add a new item...">
                <button id="add-item-btn">Add</button>
                <span id="item-count">0</span> items
            </div>
            <ul id="item-list"></ul>
        </div>

        <div class="section">
            <h2>Prevent Default</h2>
            <a href="https://example.com" id="demo-link">Click this link - navigation is prevented</a>
        </div>
    </div>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', function() {

    console.log(" --- Event Bubbling ---");

    const grandparent = document.getElementById('grandparent');
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    if (grandparent && parent && child) {
        grandparent.addEventListener('click', function(e) {
            console.log('Grandparent clicked (bubbling phase)');
            console.log('Target:', e.target.id);
        });

        parent.addEventListener('click', function(e) {
            console.log('Parent clicked (bubbling phase)');
        });

        child.addEventListener('click', function(e) {
            console.log('Child clicked (bubbling phase)');
        });
    }

    console.log(" \n--- Event Capturing ---");

    if (grandparent) {
        grandparent.addEventListener('click', function(e) {
            console.log('Grandparent clicked (CAPTURING phase)');
        }, { capture: true });

        parent.addEventListener('click', function(e) {
            console.log('Parent clicked (CAPTURING phase)');
        }, true);
    }

    console.log(" \n--- Stopping Propagation ---");

    const stopBtn = document.getElementById('stop-propagation');
    const stopContainer = document.getElementById('stop-container');

    if (stopContainer) {
        stopContainer.addEventListener('click', function() {
            console.log('Container clicked');
        });
    }

    if (stopBtn) {
        stopBtn.addEventListener('click', function(e) {
            console.log('Button clicked');
            e.stopPropagation();
            console.log('Propagation stopped!');
        });
    }

    console.log(" \n--- Event Delegation Pattern ---");

    const itemList = document.getElementById('item-list');
    const addBtn = document.getElementById('add-item-btn');
    const input = document.getElementById('item-input');
    const count = document.getElementById('item-count');

    if (itemList) {
        itemList.addEventListener('click', function(e) {
            const target = e.target;

            if (target.classList.contains('delete-btn')) {
                const item = target.closest('.list-item');
                if (item) {
                    item.remove();
                    updateCount();
                    console.log('Item deleted');
                }
            }

            if (target.classList.contains('edit-btn')) {
                const item = target.closest('.list-item');
                const text = item.querySelector('.item-text');
                const newText = prompt('Edit:', text.textContent);
                if (newText) {
                    text.textContent = newText;
                }
            }
        });
    }

    function updateCount() {
        if (count && itemList) {
            count.textContent = itemList.children.length;
        }
    }

    function createItem(text) {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <span class="item-text">${text}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        return li;
    }

    if (addBtn && input && itemList) {
        addBtn.addEventListener('click', function() {
            const text = input.value.trim();
            if (text) {
                itemList.appendChild(createItem(text));
                input.value = '';
                updateCount();
            }
        });

        ['Learn Delegation', 'Master Events', 'Build Apps'].forEach(text => {
            itemList.appendChild(createItem(text));
        });
        updateCount();
    }

    console.log(" \n--- Preventing Default Behavior ---");

    const link = document.getElementById('demo-link');
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Link navigation prevented');
        });
    }
});

/*
HTML Structure Example:
<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <div id="child">Child (Click me)</div>
    </div>
</div>

<div id="stop-container">
    Container
    <button id="stop-propagation">Stop Propagation</button>
</div>

<div>
    <input type="text" id="item-input" placeholder="Add item...">
    <button id="add-item-btn">Add</button>
    <span id="item-count">0</span>
</div>
<ul id="item-list"></ul>

<a href="https://example.com" id="demo-link">Link</a>
*/
