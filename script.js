// 1. PARTY COUNTDOWN TIMER SETUP
// Configured to target January 16, 2027 at 4:00 PM (16:00)
const eventDate = new Date("January 16, 2027 15:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Direct mathematical conversions
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Dynamic node text updates
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Check expiration frame
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "<h4 style='color: #e11221; font-weight:800;'>The Green Flag Has Waved! The Race is On!</h4>";
    }
};

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);


// 2. BACKGROUND AUDIO TOGGLE MECHANICS
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

// Handle modern browser autoplay constraints
window.addEventListener('click', () => {
    if (bgMusic.paused && musicToggle.innerText === "🔊 Mute Track") {
        bgMusic.play().catch(err => console.log("Audio autoplay waiting for interactions."));
    }
}, { once: true });

musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.innerText = "🔊 Mute Track";
    } else {
        bgMusic.pause();
        musicToggle.innerText = "🔇 Play Track";
    }
});

// 3. PERSISTENT RSVP LOGIC WITH FORMSPREE & HEADCOUNT
let globalGuestCounter = 0;

const attendanceDropdown = document.getElementById("attendance");
const guestCountDropdown = document.getElementById("guestCount");
const totalCountDisplay = document.getElementById("totalCount");
const rsvpFormNode = document.getElementById("rsvpForm");
const submitButton = document.getElementById("submitBtn");
const feedback = document.getElementById("formFeedback");

// Disable headcount picker instantly if guest declines
attendanceDropdown.addEventListener("change", function() {
    if (this.value === "no") {
        guestCountDropdown.value = ""; 
        guestCountDropdown.disabled = true;
        guestCountDropdown.removeAttribute("required");
    } else {
        guestCountDropdown.disabled = false;
        guestCountDropdown.setAttribute("required", "required");
    }
});

rsvpFormNode.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default browser redirect

    const guestName = document.getElementById("guestName").value.trim();
    const attendance = attendanceDropdown.value;
    const additionalSeats = parseInt(guestCountDropdown.value) || 0;
    const formData = new FormData(rsvpFormNode);

    // Visual loading state for the submit button
    submitButton.disabled = true;
    submitButton.innerText = "Transmitting Data... 🏎️💨";

    // Send data securely to Formspree
    fetch(rsvpFormNode.action, {
        method: rsvpFormNode.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        feedback.classList.remove("hidden");
        
        if (response.ok) {
            // Update local counter visual dashboard instantly if attending
            if (attendance === "yes") {
                globalGuestCounter += additionalSeats;
                totalCountDisplay.innerText = globalGuestCounter;
                feedback.textContent = `Vroom! 🏎️ Thanks ${guestName}! ${additionalSeats} Pit Pass(es) Saved to Spreadsheet. See you at Jollibee Kumintang!`;
                feedback.className = "success";
            } else {
                feedback.textContent = `Sad to miss you on the track, ${guestName}. Your response has been logged.`;
                feedback.className = "success";
            }
            
            // Clean up and reset form fields
            rsvpFormNode.reset();
            guestCountDropdown.disabled = false;
            guestCountDropdown.setAttribute("required", "required");
        } else {
            throw new Error("Transmission error");
        }
    }).catch(error => {
        feedback.classList.remove("hidden");
        feedback.textContent = "Oops! Communication with pit lane failed. Please try again.";
        feedback.className = "error";
    }).finally(() => {
        // Restore button state
        submitButton.disabled = false;
        submitButton.innerText = "Submit RSVP";
    });
});


