// Declare variables below to save the different divs of your story.




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
let image = document.querySelector(".image");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
const textElement = document.getElementById('text')



var choices = {
    AA: {
        message: "Message for AA",
        options: ["Choice 1 for AA", "Choice 2 for AA"],
        nextKey: "AB"
    },
    AB: {
        message: "Message for AB",
        options: ["Choice 1 for AB", "Choice 2 for AB"],
        nextKey: "BA"
    },
    BA: {
        message: "Message for BA",
        options: ["Choice 1 for BA", "Choice 2 for BA"]
    }
};

var currentKey = "AA"; // Starting key

function ask(key) {
    var currentChoice = choices[key];
    textElement.innerText = currentChoice.message;
    o1.textContent = currentChoice.options[0];
    o2.textContent = currentChoice.options[1];
    // You may want to check if `currentChoice.nextKey` exists before assigning it.
    currentKey = currentChoice.nextKey; // Update current key for next iteration
}

  o1.addEventListener("click", function(){
    ask(choices[currentKey].nextKey);
});


o2.addEventListener("click", function(){

//
    
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });