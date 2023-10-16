const clockElement = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarmTime");
const setButton = document.querySelector("button");
const stopButton = document.getElementById("stopButton");
const alarmSound = document.getElementById("alarmSound");
let alarmInterval;

// Function to display the current time
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to set the alarm
function setAlarm() {
    const alarmTime = alarmTimeInput.value;
    if (alarmTime === "") {
        alert("Please enter a valid alarm time.");
        return;
    }

    const [alarmHours, alarmMinutes] = alarmTime.split(":");
    const now = new Date();
    const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        parseInt(alarmHours),
        parseInt(alarmMinutes)
    );

    const currentTime = now.getTime();
    const alarmTimeValue = alarmDate.getTime();

    if (alarmTimeValue <= currentTime) {
        alert("The specified alarm time has already passed for today.");
        return;
    }

    const timeUntilAlarm = alarmTimeValue - currentTime;
    startAlarm(timeUntilAlarm);
}

// Function to start the alarm countdown
function startAlarm(timeUntilAlarm) {
    setButton.disabled = true;
    alarmTimeInput.disabled = true;

    alarmInterval = setTimeout(() => {
        playAlarmSound();
        stopButton.disabled = false;
    }, timeUntilAlarm);
}

// Function to play the alarm sound
function playAlarmSound() {
    alarmSound.play();
}

// Function to stop the alarm
function stopAlarm() {
    clearTimeout(alarmInterval);
    setButton.disabled = false;
    alarmTimeInput.disabled = false;
    stopButton.disabled = true;
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

// Update the time display every second
setInterval(updateTime, 1000);

// Initialize time display
updateTime();
