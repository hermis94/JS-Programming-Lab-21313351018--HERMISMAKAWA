// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 11 - DOM Selection Methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: DOM Selection Methods");
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
    <title>Program 51 - DOM Selection Methods</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007bff; }
        .card { display: inline-block; padding: 15px; margin: 5px; background: #e7f3ff; border-radius: 4px; cursor: pointer; }
        .card.active { background: #007bff; color: white; }
        p { color: #555; margin: 10px 0; }
        form { margin: 15px 0; }
        input { padding: 8px; margin: 5px 0; width: 100%; box-sizing: border-box; border: 1px solid #ddd; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <div id="page-header">
            <h1>Welcome to DOM Selection Methods Demo</h1>
        </div>

        <div class="section">
            <h2>Card Selection Example</h2>
            <div class="content">
                <div class="card">Card 1</div>
                <div class="card active">Card 2</div>
                <div class="card">Card 3</div>
                <div class="card">Card 4</div>
                <div class="card">Card 5</div>
            </div>
        </div>

        <div class="section">
            <h2>Paragraph Examples</h2>
            <p>Paragraph 1: This is the first paragraph for selection testing.</p>
            <p>Paragraph 2: This is the second paragraph with more content.</p>
            <p>Paragraph 3: Additional paragraph for multiple selection.</p>
        </div>

        <div class="section">
            <h2>Form Elements</h2>
            <form>
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</body>
</html>
`;

document.addEventListener('DOMContentLoaded', function() {

    console.log(" --- getElementById ---");
    const header = document.getElementById('page-header');
    if (header) {
        console.log("Found header:", header);
        console.log("Header text:", header.textContent);
    }

    console.log(" \n--- getElementsByClassName ---");
    const cards = document.getElementsByClassName('card');
    console.log("Cards (HTMLCollection):", cards);
    console.log("Number of cards:", cards.length);

    // HTMLCollection is live!
    for (let i = 0; i < cards.length; i++) {
        console.log(`Card ${i}:`, cards[i].textContent);
    }

    console.log(" \n--- getElementsByTagName ---");
    const paragraphs = document.getElementsByTagName('p');
    console.log("Paragraphs:", paragraphs);
    console.log("First paragraph:", paragraphs[0]?.textContent);

    console.log(" \n--- querySelector ---");
    const firstCard = document.querySelector('.card');
    console.log("First .card:", firstCard?.textContent);

    const nestedElement = document.querySelector('.section .content');
    console.log("Nested element:", nestedElement?.textContent);

    console.log(" \n--- querySelectorAll ---");
    const allCards = document.querySelectorAll('.card');
    console.log("All cards:", allCards);
    console.log("Total count:", allCards.length);

    console.log(" \n--- Combining selectors ---");
    const activeCards = document.querySelectorAll('.card.active');
    console.log("Active cards:", activeCards);

    const inputs = document.querySelectorAll('input[type="text"]');
    console.log("Text inputs:", inputs);
});

/*
HTML Structure Example:
<div id="page-header">
    <h1>Welcome</h1>
</div>

<section class="section">
    <div class="content">
        <div class="card">Card 1</div>
        <div class="card active">Card 2</div>
        <div class="card">Card 3</div>
    </div>
</section>

<p>Paragraph 1</p>
<p>Paragraph 2</p>

<form>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
</form>
*/
