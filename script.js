// Set launch date to January 20, 2025
const launchDate = new Date("January 20, 2025 00:00:00").getTime();

// Countdown function
// function updateCountdown() {
//     const now = new Date().getTime();
//     const timeLeft = launchDate - now;

//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     // Update countdown elements
//     document.getElementById('days').innerHTML = `${days}<span>Days</span>`;
//     document.getElementById('hours').innerHTML = `${hours}<span>Hours</span>`;
//     document.getElementById('minutes').innerHTML = `${minutes}<span>Minutes</span>`;
//     document.getElementById('seconds').innerHTML = `${seconds}<span>Seconds</span>`;

//     // If countdown is finished, display a message
//     if (timeLeft < 0) {
//         clearInterval(timerInterval);
//         document.getElementById('countdown').innerHTML = "We're live now!";
//     }
// }

// Start countdown timer
const timerInterval = setInterval(updateCountdown, 1000);

// Document download function
function downloadDocument(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const downloadBtn = document.getElementById("downloadBtn");
    
    // Change button text to loading symbol
    downloadBtn.innerHTML = '<span class="loading-icon">🚀</span> Launching Download...';
    
    // Simulate download action
    setTimeout(() => {
        window.location.href = "assets/documents/pokketo_info.pdf"; // Redirect to the download link
    }, 1000); // Adjust the timeout as needed for user experience
}
