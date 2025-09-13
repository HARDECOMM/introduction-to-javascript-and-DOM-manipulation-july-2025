// Question 1
// Basic JS to check voting eligibility based on age input
// Using variables, conditionals, and event handling

document.getElementById('votingAge').onclick = function() {
    let yourName = document.getElementById('userName').value;
    let yourAge = parseInt(document.getElementById('age').value);
    document.getElementById('hd').textContent = 'Hello! My name is ' + yourName + ', and I am ' + yourAge + ' years old.';
    if (yourAge >= 18) {
        console.log('Yes, you can vote!');
        document.getElementById('voteResult').textContent = 'Yes, you can vote!';
    } else {
        console.log('No, you cannot vote.');
        document.getElementById('voteResult').textContent = 'No, you cannot vote.';
    }
};



// Question 2
// JS function practice for reusability and modularity
// Function for calculating totals, formatting strings, or toggling content).

function GreetCustomer(name, age) {
    return `Hello, Mr./Mrs. ${name}, Welcome to this event!, you are ${age} year's old of age.`;
}
function SalesTotal(price, quantity) {
    return price * quantity;
}
function toggleContent(btn) {
    let element = document.getElementById(btn);
    element.style.display = element.style.display === "none" ? "block" : "none";
}
function processAll() {
    let name = document.getElementById("sharedName").value;
    let age = document.getElementById("sharedAge").value;
    let price = parseFloat(document.getElementById("sharedPrice").value);
    let quantity = parseInt(document.getElementById("sharedQuantity").value);
    document.getElementById("greetResult").textContent = GreetCustomer(name, age);
    document.getElementById("salesResult").textContent = "TotalSales: " + SalesTotal(price, quantity);
    toggleContent("toggleBox");
}

// Question 3
// Loop to use function to interact with html to show numbers 1-5 in a list
function showNumbers() {
    let list = document.getElementById("numberList");
    list.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
    }
}

// Second loop example: while loop to show numbers 6-10
function showNumbersWhile() {
    let list = document.getElementById("numberListWhile");
    list.innerHTML = "";
    let i = 6;
    while (i <= 10) {
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
        i++;
    }
}


//Question 4
// DOM Manipulation functions to change text, toggle visibility, and add list items
function changeText() {
    document.getElementById("domText").textContent = "The text has changed!";
}

function toggleBox() {
    let box = document.getElementById("domBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
}

function addItem() {
    let list = document.getElementById("domList");
    let li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
}
