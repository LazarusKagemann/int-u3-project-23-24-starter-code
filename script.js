// Get the HTML elements
let image = document.querySelector(".image");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
const textElement = document.getElementById('text');

// Define the choices object  
var choices = {
    AA: {
        message: "You feel a tingling sensation in your head. Flecks of dust and dirt are blown across your face by the harsh winds of the wasteland.",
        image: "wasteland.png",
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
        image: "wasteland.png",
        options: []
    },
    AC: {
        message: "You run into a ghoul.",
        image: "harold.jpg",
        options: [
            {
                text: "Inquire about car insurance",
                nextKey: "CA"
            },
            {
                text: "Run away",
                nextKey: "CB"
            }
        ]
    },
    BA: {
        message: "Message for BA",
        image: "wasteland.png",
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
        image: "wasteland.png",
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
        message: "The ghoul offers his best rates - death. Your bones are scraped clean by the desolate wind.",
        image: "deathscreen.jpg",
        options: []
    },
    CB: {
        message: "You run away to live another day.",
        image: "wasteland.png",
        options: []
    },
    end: {
        message: "This is the end of your adventure. Thank you for playing!",
        image: "wasteland.png",
        options: []
    }
};

// Function to update the text, image, and options based on the current key
function updateScene(key) {
    var currentChoice = choices[key];
    if (!currentChoice) {
        console.error(`No choice found for key: ${key}`);
        return;
    }
    
    textElement.innerText = currentChoice.message;
    image.src = currentChoice.image;

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

o1.addEventListener("mouseover", function() {
    o1.style.color = "red";
});

o1.addEventListener("mouseout", function() {
    o1.style.color = "black";
});

o2.addEventListener("mouseover", function() {
    o2.style.color = "red";
});

o2.addEventListener("mouseout", function() {
    o2.style.color = "black";
});


// Initialize the first scene
updateScene("AA");
