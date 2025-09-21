const inputDate = document.getElementById("inputDate");
const calculatedAge = document.getElementById("calculatedAge");
const year = document.getElementById("year");
const months = document.getElementById("months");
const days = document.getElementById("days");

calculatedAge.addEventListener("click", function () {
    debugger
    if (!inputDate.value) {
        document.getElementById("error").textContent = "Sorry!, Could you please select a valid date.";
        return;
    }
    else {
        debugger
        const birthDate = new Date(inputDate.value);
        const today = new Date();
        let isGetYear = today.getFullYear() - birthDate.getFullYear();
        let isGetMonth = (today.getMonth() + 1) - (birthDate.getMonth() + 1);
        let isGetDate = today.getDate() - birthDate.getDate();
        if (isGetMonth < 0) {
            isGetYear--;
            isGetMonth += 12;
        }
        year.textContent = isGetYear;
        months.textContent = isGetMonth;
        days.textContent = isGetDate;
        document.getElementById("error").textContent = "";

    }
})
