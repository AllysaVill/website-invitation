// 1. PARTY COUNTDOWN TIMER SETUP
// January 16, 2027 at 2:00 PM
const eventDate = new Date("January 16, 2027 14:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

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

// 3. RACING LIGHTS AUTOMATION LOOP
const readyL = document.getElementById("readyLight");
const setL = document.getElementById("setLight");
const goL = document.getElementById("goLight");

const birthday = new Date("January 16, 2027 14:00:00");

let currentLightPhase = 0;

// setInterval(() => {
//     readyL.classList.remove("active");
//     setL.classList.remove("active");
//     goL.classList.remove("active");

//     if (currentLightPhase === 0) {
//         readyL.classList.add("active"); // Sindi Pula
//         currentLightPhase = 1;
//     } else if (currentLightPhase === 1) {
//         setL.classList.add("active");   // Sindi Dilaw
//         currentLightPhase = 2;
//     } else if (currentLightPhase === 2) {
//         goL.classList.add("active");    // Sindi Berde
//         currentLightPhase = 0;
//     }
// }, 2500);

function showGoLight() {
    readyL.classList.remove("active");
    setL.classList.remove("active");
    goL.classList.add("active");
}

if (new Date() >= birthday) {

    showGoLight();

} else {

    const lightInterval = setInterval(() => {

        if (new Date() >= birthday) {
            clearInterval(lightInterval);
            showGoLight();
            return;
        }

        readyL.classList.remove("active");
        setL.classList.remove("active");
        goL.classList.remove("active");

        if (currentLightPhase === 0) {
            readyL.classList.add("active");
            currentLightPhase = 1;

        } else if (currentLightPhase === 1) {
            setL.classList.add("active");
            currentLightPhase = 2;

        } else {
            goL.classList.add("active");
            currentLightPhase = 0;
        }

    }, 2000);

}

// 4. OPENING AND CLOSING IMAGE
function openImage(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = src;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

// Get reserved seats from URL
const urlParams = new URLSearchParams(window.location.search);
const seats = urlParams.get("seats") || "1";

document.getElementById("reservedSeats").textContent = seats;