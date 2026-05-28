// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 15 - DOM Events - Basic
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: DOM Events - Basic");
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
    <title>Program 55 - DOM Events - Basic</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h2 { color: #333; margin-top: 20px; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ff6f00; }
        button { background: #ff6f00; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin: 5px; font-size: 14px; }
        button:hover { background: #e65100; }
        #mouse-box { background: #ffb74d; color: #333; padding: 30px; text-align: center; margin: 15px 0; border-radius: 4px; cursor: pointer; transition: all 0.3s; }
        #text-input { padding: 10px; border: 2px solid #ddd; border-radius: 4px; width: 100%; box-sizing: border-box; margin: 10px 0; font-size: 14px; }
        #demo-form { background: #fff8e1; padding: 15px; border-radius: 4px; margin: 10px 0; }
        #demo-form input { margin: 5px 0; }
        #demo-form label { display: block; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>DOM Events - Basic Demo</h1>
        
        <div class="section">
            <h2>Button Click Event</h2>
            <button id="action-btn">Click me for action</button>
        </div>

        <div class="section">
            <h2>Mouse Events (Hover over the box)</h2>
            <div id="mouse-box">Hover over this box to see mouse events</div>
        </div>

        <div class="section">
            <h2>Keyboard Events</h2>
            <label for="text-input">Type in the input field:</label>
            <input type="text" id="text-input" placeholder="Type here to see keyboard events">
        </div>

        <div class="section">
            <h2>Form Events</h2>
            <form id="demo-form">
                <label><input type="checkbox"> I agree to terms</label>
                <input type="text" placeholder="Your name">
                <button type="submit">Submit Form</button>
            </form>
        </div>

        <div class="section">
            <h2>Other Events</h2>
            <button id="temp-btn">Temporary Button</button>
            <p>Watch the console for scroll and resize events as well.</p>
        </div>
    </div>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', function() {

    console.log(" --- Basic Event Listeners ---");

    const button = document.getElementById('action-btn');
    if (button) {
        button.addEventListener('click', function(e) {
            console.log('Button clicked!');
            console.log('Event type:', e.type);
            console.log('Target:', e.target.id);
        });
    }

    console.log(" \n--- Mouse Events ---");
    const box = document.getElementById('mouse-box');
    if (box) {
        box.addEventListener('mouseenter', function() {
            console.log('Mouse entered box');
            this.style.backgroundColor = '#ffcccc';
        });

        box.addEventListener('mouseleave', function() {
            console.log('Mouse left box');
            this.style.backgroundColor = '#ffffff';
        });

        box.addEventListener('mousemove', function(e) {
            console.log('Mouse position:', e.clientX, e.clientY);
        });
    }

    console.log(" \n--- Keyboard Events ---");
    const input = document.getElementById('text-input');
    if (input) {
        input.addEventListener('keydown', function(e) {
            console.log('Key pressed:', e.key);
            if (e.key === 'Enter') {
                console.log('Enter key detected');
            }
        });

        input.addEventListener('keyup', function(e) {
            console.log('Current value:', e.target.value);
        });

        input.addEventListener('focus', function() {
            console.log('Input focused');
            this.style.borderColor = 'blue';
        });

        input.addEventListener('blur', function() {
            console.log('Input blurred');
            this.style.borderColor = 'gray';
        });
    }

    console.log(" \n--- Form Events ---");
    const form = document.getElementById('demo-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
        });

        form.addEventListener('change', function(e) {
            if (e.target.type === 'checkbox') {
                console.log('Checkbox changed:', e.target.checked);
            }
        });

        form.addEventListener('input', function(e) {
            if (e.target.type === 'text') {
                console.log('Input changed:', e.target.value);
            }
        });
    }

    console.log(" \n--- Window Events ---");
    window.addEventListener('scroll', function() {
        console.log('Scroll position:', window.scrollY);
    });

    window.addEventListener('resize', function() {
        console.log('Window size:', window.innerWidth, 'x', window.innerHeight);
    });

    window.addEventListener('load', function() {
        console.log('Page fully loaded');
    });

    console.log(" \n--- Removing Event Listeners ---");
    const tempBtn = document.getElementById('temp-btn');
    function tempHandler() {
        console.log('Temporary button clicked');
    }

    if (tempBtn) {
        tempBtn.addEventListener('click', tempHandler);
        console.log('Event listener added');

        // Later, remove it
        // tempBtn.removeEventListener('click', tempHandler);
    }
});

/*
HTML Structure Example:
<button id="action-btn">Click me</button>
<div id="mouse-box">Hover over me</div>
<input type="text" id="text-input" placeholder="Type here">
<form id="demo-form">
    <input type="checkbox"> Agree
    <button type="submit">Submit</button>
</form>
<button id="temp-btn">Temporary Button</button>
*/
