const btn = document.getElementById("reminderBtn");
const result = document.getElementById("reminderResult");
const dateInput = document.getElementById("startDate");

// Set today as the default date
dateInput.valueAsDate = new Date();

btn.addEventListener("click", function () {
    const parts = document.getElementById("plantSelect").value.split("|");
    const plantName = parts[0];
    const gapDays = parseInt(parts[1]);

    if (!dateInput.value) {
        result.textContent = "Please choose the last watered date.";
        return;
    }

    const nextDate = new Date(dateInput.value);
    nextDate.setDate(nextDate.getDate() + gapDays);

    const formatted = nextDate.toDateString();
    result.textContent = "💧 Water your " + plantName + " on " + formatted + " (every " + gapDays + " day(s)).";
});