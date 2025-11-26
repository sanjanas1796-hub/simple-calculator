const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result");

for (let i = 0; i < buttonsE1.length; i++) {
    buttonsE1[i].addEventListener("click", () => {
        const buttonValue = buttonsE1[i].textContent; // <-- You need to define this!
        console.log(buttonValue);

        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldE1.value = "";
}

function calculateResult() {
    try {
        inputFieldE1.value = eval(inputFieldE1.value); // Evaluate the expression
    } catch (error) {
        inputFieldE1.value = "Error"; // Simple error handling
    }
}

function appendValue(buttonValue) {
    inputFieldE1.value += buttonValue;
}
