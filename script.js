// Get the HTML elements
let image = document.querySelector(".image");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
const textElement = document.getElementById('text');

// Define the choices object  
var choices = {
    AA: {
        message: "You feel a tingling sensation in your head. Flecks of dust and dirt are blown across your face by the harsh winds of the wasteland.",
        options: [
            {
                text: "Stay",
                nextKey: "AB"
            },
            {
                text: "Explore",
                nextKey: "AC"
            }
        ]
    },
    AB: {
        message: "You lay back down and rest for the night. You'll feel much better in the morning.",
        options: [
            {
                text: "Choice 1 for AB",
                nextKey: "BA"
            },
            {
                text: "Choice 2 for AB",
                nextKey: "BB"
            }
        ]
    },
    AC: {
        message: "Message for AC",
        options: [
            {
                text: "Choice 1 for AC",
                nextKey: "CA"
            },
            {
                text: "Choice 2 for AC",
                nextKey: "CB"
            }
        ]
    },
    BA: {
        message: "Message for BA",
        options: [
            {
                text: "Choice 1 for BA",
                nextKey: "end"
            },
            {
                text: "Choice 2 for BA",
                nextKey: "end"
            }
        ]
    },
    BB: {
        message: "Message for BB",
        options: [
            {
                text: "Choice 1 for BB",
                nextKey: "end"
            },
            {
                text: "Choice 2 for BB",
                nextKey: "end"
            }
        ]
    },
    CA: {
        message: "Message for CA",
        options: [
            {
                text: "Choice 1 for CA",
                nextKey: "end"
            },
            {
                text: "Choice 2 for CA",
                nextKey: "end"
            }
        ]
    },
    CB: {
        message: "Message for CB",
        options: [
            {
                text: "Choice 1 for CB",
                nextKey: "end"
            },
            {
                text: "Choice 2 for CB",
                nextKey: "end"
            }
        ]
    },
    end: {
        message: "This is the end of your adventure. Thank you for playing!",
        options: []
    }
};

// Function to update the text and options based on the current key
function updateScene(key) {
    var currentChoice = choices[key];
    if (!currentChoice) {
        console.error(`No choice found for key: ${key}`);
        return;
    }
    
    textElement.innerText = currentChoice.message;

    if (currentChoice.options.length === 0) {
        o1.style.display = 'none';
        o2.style.display = 'none';
    } else {
        o1.style.display = 'inline-block';
        o2.style.display = 'inline-block';
        o1.textContent = currentChoice.options[0].text;
        o2.textContent = currentChoice.options[1].text;
        
        // Update the click event listeners for the options
        o1.onclick = () => {
            let nextKey = currentChoice.options[0].nextKey;
            if (choices[nextKey]) {
                updateScene(nextKey);
            } else {
                console.error(`No choice found for key: ${nextKey}`);
            }
        };
        
        o2.onclick = () => {
            let nextKey = currentChoice.options[1].nextKey;
            if (choices[nextKey]) {
                updateScene(nextKey);
            } else {
                console.error(`No choice found for key: ${nextKey}`);
            }
        };
    }
}

o1.addEventListener("mouseover", myFunction);

o2.addEventListener("mouseover", myFunction);

// Initialize the first scene
updateScene("AA");
