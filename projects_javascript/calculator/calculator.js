const calculationScreen = document.getElementById("calculationScreen");
const buttons = document.querySelectorAll("button");
const form = document.querySelector("form");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // stop form submit        
        const value = btn.textContent.trim();
        if (value === "AC") {
            calculationScreen.value = ""; // clear screen
        } else if (value === "=") {
            try {
                // replace custom symbols with JS operators
                const expression = calculationScreen.value
                    .replace(/x/g, "*")
                    .replace(/÷/g, "/");

                calculationScreen.value = eval(expression);
            } catch {
                calculationScreen.value = "Error";
            }
        } else {
            calculationScreen.value += value; // append clicked value
        }
    });
});
