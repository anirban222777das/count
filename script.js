const countdownElement = document.getElementById('countdown');

// Set the target launch date to January 20, 2025
const launchDate = new Date("2025-01-01T00:00:00Z");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate.getTime() - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "The website is live!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Call the function every second
setInterval(updateCountdown, 1000);

// Initialize the countdown display
updateCountdown();
