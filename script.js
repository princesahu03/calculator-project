const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            currentInput = "";
            display.innerText = "0";
        }

        else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || "0";
        }

        else if (value === "=") {
            try {
                currentInput = currentInput
                    .replace(/÷/g, "/")
                    .replace(/×/g, "*")
                    .replace(/−/g, "-");

                currentInput = eval(currentInput).toString();
                display.innerText = currentInput;
            } catch {
                display.innerText = "Error";
                currentInput = "";
            }
        }

        else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});


// ✅ Keyboard Support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        currentInput += key;
        display.innerText = currentInput;
    }

    else if (key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
            display.innerText = currentInput;
        } catch {
            display.innerText = "Error";
            currentInput = "";
        }
    }

    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || "0";
    }

    else if (key === "Escape") {
        currentInput = "";
        display.innerText = "0";
    }
});