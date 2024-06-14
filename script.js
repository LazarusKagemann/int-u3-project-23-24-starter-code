// Declare variables below to save the different divs of your story.




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
let image = document.querySelector(".image");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
const textElement = document.getElementById('text')



let choices = {
    AA: {
        message: "You feel a tingling sensation in your head. Flecks of dust and dirt are blown across your face by the harsh winds of the wasteland.",
        options: ["Stay.", "Explore."],
        nextKey: "AB"
    },
    AB: {
        message: "You rest and feel better.",
        options: ["Choice 1 for AB", "Choice 2 for AB"],
        nextKey: "BA"
    },
    BA: {
        message: "You found a gas station",
        options: ["Explore", "Leave"],
        nextKey: "AA"
    }
};

textElement.innerText = choices["AA"].message;
o1.textContent = choices["AA"].options[0];
o2.textContent = choices["AA"].options[1];

var currentKey = "AA"; // Starting key

function ask(key) {
    var currentChoice = choices[key];
    textElement.innerText = currentChoice.message;
    o1.textContent = currentChoice.options[0];
    o2.textContent = currentChoice.options[1];

    currentKey = currentChoice.nextKey; // Update current key for next iteration
}

  o1.addEventListener("click", function(){
    ask(choices[currentKey].nextKey);
});


o2.addEventListener("click", function(){
    ask(choices[currentKey].nextKey);
//
    
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });