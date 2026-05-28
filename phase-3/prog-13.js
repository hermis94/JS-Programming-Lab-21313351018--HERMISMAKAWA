// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 13 - DOM Attributes and Classes
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: DOM Attributes and Classes");
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
    <title>Program 53 - DOM Attributes and Classes</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h2 { color: #333; margin-top: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #e91e63; }
        #profile-image { max-width: 100px; height: 100px; margin: 10px 0; border: 2px solid #007bff; border-radius: 50%; }
        #user-info { background: #f0f0f0; padding: 15px; border-radius: 4px; margin: 10px 0; }
        .box { background: #e3f2fd; padding: 20px; margin: 10px 0; border-radius: 4px; transition: all 0.3s; }
        .box.highlighted { background: #fff9c4; border-left: 4px solid #fbc02d; }
        .box.active { background: #c8e6c9; font-weight: bold; }
        .box.visible { opacity: 1; }
        .box.selected { background: #ffccbc; border: 2px solid #ff6f00; }
        .box.enabled { background: #dcedc8; }
        #styled-element { background: #e0e0e0; color: #444; padding: 20px; border-radius: 8px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>DOM Attributes and Classes Demo</h1>
        
        <div class="section">
            <h2>Image with Attributes</h2>
            <img id="profile-image" src="https://via.placeholder.com/100" alt="Profile" data-id="user123">
        </div>

        <div class="section">
            <h2>Data Attributes</h2>
            <div id="user-info" data-user-id="42" data-user-role="admin">User Card - Admin User</div>
        </div>

        <div class="section">
            <h2>Class Manipulation</h2>
            <div id="demo-box" class="box">Box 1 - Basic Element</div>
            <div id="modern-box" class="box">Box 2 - Modern classList</div>
        </div>

        <div class="section">
            <h2>Styled Element</h2>
            <div id="styled-element">This element will receive inline styles</div>
        </div>
    </div>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', function() {

    console.log(" --- Working with Attributes ---");

    const image = document.getElementById('profile-image');

    if (image) {
        // getAttribute
        console.log("src:", image.getAttribute('src'));
        console.log("alt:", image.getAttribute('alt'));
        console.log("data-id:", image.getAttribute('data-id'));

        // setAttribute
        image.setAttribute('alt', 'User profile picture');
        image.setAttribute('data-loaded', 'true');
        image.setAttribute('loading', 'lazy');

        // hasAttribute
        console.log("Has alt?", image.hasAttribute('alt'));
        console.log("Has title?", image.hasAttribute('title'));

        // removeAttribute
        image.removeAttribute('data-id');
        console.log("After remove data-id:", image.hasAttribute('data-id'));

        // Direct property access
        console.log("Direct src:", image.src);
        image.title = "Profile Image";
    }

    console.log(" \n--- Data Attributes ---");
    const userCard = document.getElementById('user-info');

    if (userCard) {
        // Using dataset
        console.log("Dataset:", userCard.dataset);
        console.log("User ID:", userCard.dataset.userId);
        console.log("User Role:", userCard.dataset.userRole);

        // Setting dataset
        userCard.dataset.lastLogin = new Date().toISOString();
        userCard.dataset.loginCount = '25';
        console.log("Updated dataset:", userCard.dataset);
    }

    console.log(" \n--- Working with Classes - className ---");
    const box = document.getElementById('demo-box');

    if (box) {
        console.log("Original className:", box.className);
        box.className += ' highlighted';
        console.log("After adding class:", box.className);
        box.className = box.className.replace('highlighted', '').trim();
        console.log("After removing class:", box.className);
    }

    console.log(" \n--- Working with Classes - classList (Modern) ---");
    const modernBox = document.getElementById('modern-box');

    if (modernBox) {
        // add
        modernBox.classList.add('active', 'visible');
        console.log("After add:", modernBox.className);

        // remove
        modernBox.classList.remove('visible');
        console.log("After remove:", modernBox.className);

        // toggle
        modernBox.classList.toggle('selected');
        console.log("After toggle (add):", modernBox.className);
        modernBox.classList.toggle('selected');
        console.log("After toggle (remove):", modernBox.className);

        // contains
        console.log("Contains 'active'?", modernBox.classList.contains('active'));
        console.log("Contains 'hidden'?", modernBox.classList.contains('hidden'));

        // replace
        modernBox.classList.replace('active', 'enabled');
        console.log("After replace:", modernBox.className);

        // iteration
        console.log("Number of classes:", modernBox.classList.length);
        console.log("All classes:", [...modernBox.classList]);
    }

    console.log(" \n--- Style Property ---");
    const styledElement = document.getElementById('styled-element');

    if (styledElement) {
        // Individual styles
        styledElement.style.backgroundColor = '#e0e0e0';
        styledElement.style.color = '#444';
        styledElement.style.padding = '20px';
        styledElement.style.borderRadius = '8px';

        // Getting computed styles
        const computed = window.getComputedStyle(styledElement);
        console.log("Computed background:", computed.backgroundColor);
        console.log("Computed font-size:", computed.fontSize);
    }
});

/*
HTML Structure Example:
<img id="profile-image" src="pic.jpg" alt="Profile" data-id="user123">
<div id="user-info" data-user-id="42" data-user-role="admin">User Card</div>
<div id="demo-box" class="box">Box 1</div>
<div id="modern-box" class="box">Box 2</div>
<div id="styled-element">Styled Element</div>
*/
