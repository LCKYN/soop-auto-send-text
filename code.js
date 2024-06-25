function simulateTyping(element, text, typingDelay = 50) {
    function typeCharacter(index) {
        if (index < text.length) {
            const char = text.charAt(index);
            const keyDownEvent = new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key: char,
                char: char,
                shiftKey: false
            });
            const keyPressEvent = new KeyboardEvent('keypress', {
                bubbles: true,
                cancelable: true,
                key: char,
                char: char,
                shiftKey: false
            });
            const keyUpEvent = new KeyboardEvent('keyup', {
                bubbles: true,
                cancelable: true,
                key: char,
                char: char,
                shiftKey: false
            });
            element.dispatchEvent(keyDownEvent);
            element.dispatchEvent(keyPressEvent);
            element.innerText += char;
            element.dispatchEvent(keyUpEvent);

            setTimeout(() => typeCharacter(index + 1), typingDelay);
        } else {
            simulateEnterPress(element);
        }
    }

    function simulateEnterPress(element) {
        const enterKeyDownEvent = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
            keyCode: 13,
            which: 13
        });
        const enterKeyPressEvent = new KeyboardEvent('keypress', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
            keyCode: 13,
            which: 13
        });
        const enterKeyUpEvent = new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
            keyCode: 13,
            which: 13
        });

        element.dispatchEvent(enterKeyDownEvent);
        element.dispatchEvent(enterKeyPressEvent);
        element.dispatchEvent(enterKeyUpEvent);
    }

    element.focus();
    element.innerText = ''; // Clear existing text if needed
    typeCharacter(0); // Start typing the text
}

// Function to be called every minute
function runScript() {
    const chatInputDiv = document.querySelector('div[placeholder="Enter chat"].sc-916d8198-3.eDQIci.div-textarea.write-inp[contenteditable="true"][spellcheck="false"]');

    if (chatInputDiv) {
        chatInputDiv.click();
        simulateTyping(chatInputDiv, 'test string', 50); // Adjust the delay as needed (in milliseconds)
    }
}

// Start the interval
let intervalId = setInterval(runScript, 60000); // 60000 milliseconds = 1 minute

// Function to stop the interval
function stopScript() {
    clearInterval(intervalId);
    console.log('Interval stopped');
}

// To stop the interval, call stopScript() from the console
