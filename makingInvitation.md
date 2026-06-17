

Here is a complete, modern, and responsive **digital invitation website** using HTML, CSS, and JavaScript. It features an elegant card layout, a live countdown timer, and an interactive RSVP form. [[1](https://github.com/topics/digital-invitation), [2](https://mostaql.com/portfolio/1588025-modern-login-registration-page-html-css-javascript)]

1. ## HTML (`index.html`)

This file defines the structure of your invitation card, content sections, and the RSVP form. [[1](https://dev.to/enlabe/basic-css-and-javascript-animations-for-an-interactive-web-page-3g8b)]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You Are Invited!</title>
    <link rel="stylesheet" href="style.css">
    <!-- Google Fonts for Elegant Typography -->
    <link href="https://googleapis.com" rel="stylesheet">
</head>
<body>

    <div class="invitation-container">
        <!-- Header Section -->
        <header class="hero-section">
            <p class="subtitle">The Celebration of</p>
            <h1 class="main-title">Alex & Jordan</h1>
            <p class="subtitle">Are Getting Married</p>
        </header>

        <!-- Countdown Timer Section -->
        <section class="countdown-section">
            <h3>Counting Down to the Big Day</h3>
            <div id="countdown">
                <div class="time-box"><span id="days">00</span><p>Days</p></div>
                <div class="time-box"><span id="hours">00</span><p>Hours</p></div>
                <div class="time-box"><span id="minutes">00</span><p>Mins</p></div>
                <div class="time-box"><span id="seconds">00</span><p>Secs</p></div>
            </div>
        </section>

        <!-- Details Section -->
        <section class="details-section">
            <div class="detail-item">
                <h4>When</h4>
                <p>Saturday, October 10, 2026</p>
                <p>at 4:00 PM</p>
            </div>
            <div class="detail-item">
                <h4>Where</h4>
                <p>The Grand Rose Garden</p>
                <p>123 Celebration Way, NY</p>
            </div>
        </section>

        <!-- RSVP Section -->
        <section class="rsvp-section">
            <h3>Will You Attend?</h3>
            <form id="rsvpForm">
                <input type="text" id="guestName" placeholder="Your Full Name" required>
                <select id="attendance" required>
                    <option value="" disabled selected>Select Attendance</option>
                    <option value="yes">Joyfully Accept</option>
                    <option value="no">Regretfully Decline</option>
                </select>
                <button type="submit" class="submit-btn">Send Response</button>
            </form>
            <div id="formFeedback" class="hidden"></div>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>

```

2. ## CSS (`style.css`)

This stylesheet establishes a clean, luxury aesthetic using gold, cream, and deep charcoal colors. It implements CSS Flexbox to maintain perfect responsiveness on mobile screens.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f1ea;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* Card Container */
.invitation-container {
    background-color: #ffffff;
    max-width: 600px;
    width: 100%;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #dfd5c6;
    text-align: center;
}

/* Typography & Hero */
.hero-section {
    margin-bottom: 40px;
}

.main-title {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    color: #b89753;
    margin: 15px 0;
    letter-spacing: 2px;
}

.subtitle {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #777777;
}

/* Countdown Timer */
.countdown-section {
    margin-bottom: 40px;
}

.countdown-section h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #888888;
    margin-bottom: 15px;
}

#countdown {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.time-box {
    background: #faf8f5;
    border: 1px solid #eae1d4;
    padding: 12px;
    border-radius: 8px;
    min-width: 70px;
}

.time-box span {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #b89753;
}

.time-box p {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: #999999;
    margin-top: 5px;
}

/* Event Details */
.details-section {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    border-top: 1px solid #eae1d4;
    border-bottom: 1px solid #eae1d4;
    padding: 30px 0;
    margin-bottom: 40px;
}

.detail-item h4 {
    font-family: 'Cinzel', serif;
    color: #b89753;
    margin-bottom: 8px;
    letter-spacing: 1px;
}

.detail-item p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #555555;
}

/* RSVP Form */
.rsvp-section h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #333333;
}

#rsvpForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    margin: 0 auto;
}

#rsvpForm input, #rsvpForm select {
    padding: 12px;
    border: 1px solid #dfd5c6;
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    outline: none;
    background-color: #faf8f5;
}

#rsvpForm input:focus, #rsvpForm select:focus {
    border-color: #b89753;
}

.submit-btn {
    background-color: #b89753;
    color: #ffffff;
    border: none;
    padding: 14px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: background 0.3s;
}

.submit-btn:hover {
    background-color: #9c7f43;
}

/* Feedback Messages */
#formFeedback {
    margin-top: 15px;
    font-size: 0.9rem;
    font-weight: 600;
}

.success { color: #2e7d32; }
.error { color: #c62828; }
.hidden { display: none; }

/* Responsive adjustments */
@media (max-width: 480px) {
    .details-section {
        flex-direction: column;
        gap: 25px;
    }
    .main-title {
        font-size: 2rem;
    }
}
```

3. ## JavaScript (`script.js`)

This script targets the live countdown mechanics and manages the submission feedback loop without reloading the page.

```js
// 1. COUNTDOWN TIMER
// Set your target event date here
const eventDate = new Date("October 10, 2026 16:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update UI elements
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If countdown expires
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "<h4>The Event Has Begun!</h4>";
    }
};

// Run calculation instantly, then repeat every second
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);


// 2. INTERACTIVE RSVP FORM HANDLING
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    const guestName = document.getElementById("guestName").value.trim();
    const attendance = document.getElementById("attendance").value;
    const feedback = document.getElementById("formFeedback");

    if (guestName === "" || attendance === "") {
        feedback.textContent = "Please fill out all fields.";
        feedback.className = "error";
        return;
    }

    // Success response styling
    feedback.classList.remove("hidden");
    if (attendance === "yes") {
        feedback.textContent = `Thank you, ${guestName}! We can't wait to celebrate with you.`;
        feedback.className = "success";
    } else {
        feedback.textContent = `Thank you for letting us know, ${guestName}. You will be missed!`;
        feedback.className = "success";
    }

    // Clear input fields
    document.getElementById("rsvpForm").reset();
});

```

### How to Run this Project

1. Save each block of code into its respective filename (`index.html`, `style.css`, and `script.js`).
2. Make sure all three files are saved in the **exact same folder**.
3. Double-click the `index.html` file to open and test your customized invitation site locally in any browser. [[1](https://www.codingnepalweb.com/responsive-image-slider-html-css-javascript/), [2](https://learn.shayhowe.com/html-css/building-your-first-web-page/)]

If you plan to launch this publicly, you can easily deploy it for free using a static hosting provider like [GitHub Pages](https://www.wearedevelopers.com/en/magazine/705/getting-started-with-hosting-html-css-javascript-demos-web-sites-on-github-pages-705). [[1](https://www.wearedevelopers.com/en/magazine/705/getting-started-with-hosting-html-css-javascript-demos-web-sites-on-github-pages-705)]







Here is the customized **"Jollirace" racing-themed 1st Birthday invitation** codebase. The color scheme features Jollibee's signature bright red and sunny yellow with racing checkered-flag visual structures, an auto-playing audio element, and an embedded responsive Google Maps layout for the [Jollibee Kumintang branch](https://www.jollibee.com.ph/stores/jollibee-kumintang)

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ready, Set, Go! Turning One!</title>
    <link rel="stylesheet" href="style.css">
    <!-- Google Fonts for Playful and Energetic Theme -->
    <link href="https://googleapis.com" rel="stylesheet">
</head>
<body>

    <!-- Background Music Section -->
    <!-- Pro tip: Replace 'music.mp3' with your actual party background track or a Jollibee theme track -->
    <audio id="bgMusic" loop autoplay>
        <source src="music.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <div class="invitation-container">
        <!-- Checkered Header Border -->
        <div class="checkered-flag"></div>

        <!-- Music Control Widget -->
        <button id="musicToggle" class="music-btn">🔊 Mute Track</button>

        <!-- Header Section -->
        <header class="hero-section">
            <p class="subtitle">🏎️ RACING INTO ONE! 🏎️</p>
            <h1 class="main-title">Our Little Racer Is Turning 1!</h1>
            <p class="theme-badge">Theme: Jollirace</p>
        </header>

        <!-- Countdown Timer Section -->
        <section class="countdown-section">
            <h3>Time Left Until Green Flag 🟢</h3>
            <div id="countdown">
                <div class="time-box"><span id="days">00</span><p>Days</p></div>
                <div class="time-box"><span id="hours">00</span><p>Hours</p></div>
                <div class="time-box"><span id="minutes">00</span><p>Mins</p></div>
                <div class="time-box"><span id="seconds">00</span><p>Secs</p></div>
            </div>
        </section>

        <!-- Details Section -->
        <section class="details-section">
            <div class="detail-item">
                <h4>🏁 Pit Stop Details</h4>
                <p class="highlight-text">Saturday, October 10, 2026</p>
                <p>Party Starts at 4:00 PM</p>
            </div>
            <div class="detail-item">
                <h4>📍 Race Track Venue</h4>
                <p class="highlight-text">Jollibee Kumintang</p>
                <p>J.P. Laurel Highway cor. M.H. De Joya St.</p>
                <p>Batangas City, Batangas</p>
            </div>
        </section>

        <!-- Google Maps Embed Section -->
        <section class="map-section">
            <h3>Find Your Way To The Grid</h3>
            <div class="map-wrapper">
                <iframe 
                    src="https://google.com" 
                    width="100%" 
                    height="250" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>

        <!-- RSVP Section -->
        <section class="rsvp-section">
            <h3>Reserve Your Pit Pass!</h3>
            <form id="rsvpForm">
                <input type="text" id="guestName" placeholder="Driver / Guest Name" required>
                <select id="attendance" required>
                    <option value="" disabled selected>Lock In Attendance</option>
                    <option value="yes">Joining the Race (Yes)</option>
                    <option value="no">Stuck in Pit Lane (No)</option>
                </select>
                <button type="submit" class="submit-btn">Submit RSVP</button>
            </form>
            <div id="formFeedback" class="hidden"></div>
        </section>

        <!-- Checkered Footer Border -->
        <div class="checkered-flag bottom-flag"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: #fffae6; /* Cream/Soft Yellow Base */
    color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* Card Container */
.invitation-container {
    background-color: #ffffff;
    max-width: 550px;
    width: 100%;
    padding: 0 0 30px 0;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(225, 18, 33, 0.15); /* Soft Red Glow */
    border: 4px solid #e11221; /* Jollibee Red */
    text-align: center;
    overflow: hidden;
    position: relative;
}

/* Checkered Flag Graphic Ends */
.checkered-flag {
    background-image: 
        linear-gradient(45deg, #000 25%, transparent 25%), 
        linear-gradient(-45deg, #000 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #000 75%), 
        linear-gradient(-45deg, transparent 75%, #000 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    background-color: #fff;
    height: 24px;
    width: 100%;
}

.bottom-flag {
    margin-top: 30px;
}

/* Audio Widget Control Button */
.music-btn {
    background-color: #222;
    color: #fff;
    border: none;
    padding: 6px 12px;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 20px;
    margin-top: 15px;
    cursor: pointer;
    transition: transform 0.2s;
}
.music-btn:hover {
    transform: scale(1.05);
}

/* Typography & Hero */
.hero-section {
    padding: 25px 20px;
}

.main-title {
    font-family: 'Bangers', cursive;
    font-size: 2.8rem;
    color: #e11221; /* Jollibee Red */
    letter-spacing: 1px;
    text-shadow: 2px 2px 0px #ffca18; /* Jollibee Yellow shadow */
    margin: 10px 0;
}

.subtitle {
    font-size: 1.1rem;
    font-weight: 800;
    color: #ffca18;
    background-color: #e11221;
    display: inline-block;
    padding: 4px 14px;
    border-radius: 30px;
}

.theme-badge {
    font-size: 1rem;
    font-weight: bold;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Countdown Timer */
.countdown-section {
    background-color: #ffca18; /* Jollibee Yellow */
    padding: 20px;
    margin: 10px 20px 25px 20px;
    border-radius: 12px;
    border: 2px dashed #e11221;
}

.countdown-section h3 {
    font-size: 1rem;
    font-weight: 800;
    color: #e11221;
    margin-bottom: 12px;
}

#countdown {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.time-box {
    background: #ffffff;
    padding: 10px;
    border-radius: 8px;
    min-width: 65px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.time-box span {
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
    color: #222;
}

.time-box p {
    font-size: 0.7rem;
    font-weight: bold;
    color: #666;
    text-transform: uppercase;
}

/* Event Details Layout */
.details-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 25px;
    margin-bottom: 25px;
}

.detail-item {
    background-color: #fff9e6;
    padding: 15px;
    border-radius: 10px;
    border-left: 6px solid #ffca18;
    text-align: left;
}

.detail-item h4 {
    font-size: 1.1rem;
    font-weight: 800;
    color: #e11221;
    margin-bottom: 5px;
}

.detail-item p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.4;
}

.highlight-text {
    font-weight: 700;
    color: #111 !important;
}

/* Interactive Map Framework */
.map-section {
    padding: 0 25px;
    margin-bottom: 25px;
    text-align: left;
}

.map-section h3 {
    font-size: 1rem;
    font-weight: 800;
    color: #222;
    margin-bottom: 10px;
}

.map-wrapper {
    border: 3px solid #222;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

/* RSVP Form Custom Layout */
.rsvp-section {
    padding: 0 25px;
}

.rsvp-section h3 {
    font-family: 'Bangers', cursive;
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #e11221;
    letter-spacing: 0.5px;
}

#rsvpForm {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 100%;
}

#rsvpForm input, #rsvpForm select {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.95rem;
    outline: none;
    background-color: #fafafa;
    transition: border-color 0.2s;
}

#rsvpForm input:focus, #rsvpForm select:focus {
    border-color: #e11221;
}

.submit-btn {
    background-color: #e11221;
    color: #ffffff;
    border: none;
    padding: 14px;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Bangers', cursive;
    letter-spacing: 1px;
    transition: background 0.2s, transform 0.1s;
}

.submit-btn:hover {
    background-color: #c40f1c;
    transform: translateY(-1px);
}

/* Feedback Notifications */
#formFeedback {
    margin-top: 12px;
    font-size: 0.95rem;
    font-weight: bold;
}

.success { color: #2e7d32; }
.error { color: #c62828; }
.hidden { display: none; }
```

```javascript
// Configured to target October 10, 2026 at 4:00 PM (16:00)
const eventDate = new Date("October 10, 2026 16:00:00").getTime();

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


// 3. RSVP LOGIC CONTROL
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value.trim();
    const attendance = document.getElementById("attendance").value;
    const feedback = document.getElementById("formFeedback");

    feedback.classList.remove("hidden");
    
    if (attendance === "yes") {
        feedback.textContent = `Vroom! 🏎️ Thanks ${guestName}! Pit Pass Confirmed. See you at Jollibee Kumintang!`;
        feedback.className = "success";
    } else {
        feedback.textContent = `Sad to miss you on the track, ${guestName}. Thanks for letting us know!`;
        feedback.className = "success";
    }

    document.getElementById("rsvpForm").reset();
});
```

### Quick Steps to Finalize

1. Place your desired party theme music file into the same directory and name it `music.mp3`.
2. Change the `eventDate` variable string inside `script.js` to match the exact calendar date of your son's birthday party so the live timer displays accurately.







Here is your updated script and form structure. To track the total headcount accurately, we need to capture how many seats or passes each responding guest is reserving.

I have added a **"Number of Pit Passes"** dropdown to your form and a live visual **Headcount Dashboard** that automatically aggregates the numbers without reloading the page.

1. ## Updated HTML Section (`index.html`)

Replace your original `<section class="rsvp-section">` block with this updated version containing the number selector and the dashboard tracker:

```        html
        <section class="rsvp-section">
            <h3>Reserve Your Pit Pass!</h3>
            
            <!-- Dynamic Guest Dashboard Track Counter -->
            <div class="headcount-dashboard">
                <div class="counter-box">
                    <span id="totalCount">0</span>
                    <p>Drivers Confirmed</p>
                </div>
            </div>

            <form id="rsvpForm">
                <input type="text" id="guestName" placeholder="Driver / Family Name" required>
                
                <select id="attendance" required>
                    <option value="" disabled selected>Lock In Attendance</option>
                    <option value="yes">Joining the Race (Yes)</option>
                    <option value="no">Stuck in Pit Lane (No)</option>
                </select>

                <!-- New Dynamic Headcount Selector Field -->
                <select id="guestCount" required>
                    <option value="" disabled selected>Number of Pit Passes Needed</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                </select>

                <button type="submit" class="submit-btn">Submit RSVP</button>
            </form>
            <div id="formFeedback" class="hidden"></div>
        </section>
```

2. ## Updated CSS Styles (`style.css`)

Add these visual dashboard styles to the bottom of your existing stylesheet to style the new counter widget elegantly alongside the theme:

```css
.headcount-dashboard {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.counter-box {
    background-color: #222222; /* Sleek black racing tire color block */
    color: #ffffff;
    padding: 12px 25px;
    border-radius: 50px;
    border: 2px solid #ffca18;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 12px;
}

#totalCount {
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
    color: #ffca18; /* Bright yellow count display */
    line-height: 1;
}

.counter-box p {
    font-size: 0.85rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Adjust layout behavior when attendance selection is 'No' */
#rsvpForm select:disabled {
    background-color: #eaeaea;
    cursor: not-allowed;
    opacity: 0.6;
}
```

3. ## Updated JavaScript (`script.js`)

Replace your original **Section 3 (RSVP LOGIC CONTROL)** with this new logic. It updates the live UI tracker counter globally and automatically disables the headcount dropdown if a guest marks "No":

```javascript
// 3. RSVP LOGIC CONTROL WITH HEADCOUNT TRACKER
let globalGuestCounter = 0;

const attendanceDropdown = document.getElementById("attendance");
const guestCountDropdown = document.getElementById("guestCount");
const totalCountDisplay = document.getElementById("totalCount");
const rsvpFormNode = document.getElementById("rsvpForm");

// Smart Field UI Toggling: Disable headcount picker if guest declines
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
    event.preventDefault();

    const guestName = document.getElementById("guestName").value.trim();
    const attendance = attendanceDropdown.value;
    const additionalSeats = parseInt(guestCountDropdown.value) || 0;
    const feedback = document.getElementById("formFeedback");

    feedback.classList.remove("hidden");
    
    if (attendance === "yes") {
        // Accumulate running total sum
        globalGuestCounter += additionalSeats;
        totalCountDisplay.innerText = globalGuestCounter;

        feedback.textContent = `Vroom! 🏎️ Thanks ${guestName}! ${additionalSeats} Pit Pass(es) Confirmed. See you at Jollibee Kumintang!`;
        feedback.className = "success";
    } else {
        feedback.textContent = `Sad to miss you on the track, ${guestName}. Thanks for letting us know!`;
        feedback.className = "success";
    }

    // Reset components & clear form state
    rsvpFormNode.reset();
    guestCountDropdown.disabled = false;
    guestCountDropdown.setAttribute("required", "required");
});

```

### 💡Hosting Note for Live Use

Because this standard frontend JavaScript code saves numbers directly inside your visitor's browser memory (RAM), the counter will reset to `0` whenever the webpage is refreshed.

If you want to save your guest list permanently to view it later, I can show you how to link this submit button to a free backend option like a **Google Sheets spreadsheet** or **Email service form capture**. Would you like to set that up?









To save your guest list and headcount permanently, we will link your RSVP form directly to a **Google Sheets spreadsheet**. This means every time a guest clicks "Submit RSVP," their name, attendance, and headcount will instantly appear in your private spreadsheet! [[1](https://www.studiocreativethings.com/blogs/tutorials-instructions/how-to-create-a-google-form-wedding-rsvp?srsltid=AfmBOoq2YRdr7dA6JFOVi6T73wS99Pb2PlVThDhnGhBRNV3YBMIW8N3R)]

We will use a completely free service called **Formspree** to act as the secure bridge between your code and Google Sheets. No backend programming or servers required. [[1](https://medium.com/@imeudani/no-backend-no-problem-handling-forms-with-formspree-in-html-react-and-next-js-64307ba4c7af)]

## Step 1: Get Your Free Formspree URL

1. Go to [formspree.io](https://formspree.io/) and sign up for a free account.
2. Click **Create Project**, name it `Jollirace Birthday`, and select **New Form**.
3. Name your form `RSVP List` and click **Create Form**.
4. You will see a unique URL that looks exactly like this:
   `https://formspree.io`
5. **Copy that URL.** You will paste it into your HTML code next.

## Step 2: Updated HTML (`index.html`)

We need to give your input fields specific `name` attributes so Google Sheets knows what labels to put at the top of your columns. [[1](https://medium.com/solute-labs/how-i-handled-forms-with-static-website-b2f412ff3992)]

Replace your existing `<form id="rsvpForm">` block with this version:

```            html
            <form id="rsvpForm" action="https://formspree.io" method="POST">
                
                <label for="guestName" class="visually-hidden">Driver Name</label>
                <input type="text" id="guestName" name="Driver_Name" placeholder="Driver / Family Name" required>
                
                <label for="attendance" class="visually-hidden">Attendance Status</label>
                <select id="attendance" name="Attendance_Status" required>
                    <option value="" disabled selected>Lock In Attendance</option>
                    <option value="yes">Joining the Race (Yes)</option>
                    <option value="no">Stuck in Pit Lane (No)</option>
                </select>

                <label for="guestCount" class="visually-hidden">Number of Pit Passes</label>
                <select id="guestCount" name="Pit_Passes_Needed" required>
                    <option value="" disabled selected>Number of Pit Passes Needed</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                </select>

                <button type="submit" class="submit-btn" id="submitBtn">Submit RSVP</button>
            </form>
            <div id="formFeedback" class="hidden"></div>
```

*(Make sure to replace `https://formspree.io` with your actual URL from Step 1).*

## Step 3: Updated JavaScript (`script.js`)

We use JavaScript's `fetch()` API to seamlessly transmit the form data to your spreadsheet in the background without refreshing the page. Replace your **Section 3 (RSVP LOGIC CONTROL)** with this updated code: [[1](https://sheetmonkey.io/blog/submit-form-to-google-sheets-without-backend)]

```javascript
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
```

## Step 4: Link Formspree to Your Google Sheets [[1](https://www.raymondcamden.com/2020/11/20/building-a-web-app-powered-by-google-forms-and-sheets), [2](https://www.hipaatizer.com/docs/integrations/google-sheets)]

1. Back inside your Formspree dashboard, click on your form name.
2. Navigate to the **Settings** or **Plugins** tab on the top/left menu.
3. Look for the **Google Sheets** integration card and click **Connect**.
4. Grant Formspree permission to access your Google account.
5. Select **Create a new spreadsheet** and name it `Jollirace RSVP Guest List`. [[1](https://help.involve.me/en/articles/5226596-google-sheets-integration), [2](https://preset.io/blog/preset-dashboard-using-google-sheets-data/), [3](https://teachers.tech/google-forms-to-sheets-guide/)]

### 🏁 How to Test It

Open your invitation website locally on your computer, fill out a fake name with 3 pit passes, and hit **Submit RSVP**. Now open your Google Drive—you will see a brand new spreadsheet populated perfectly with your guest details!

Would you like to add an **automatic email confirmation notification** that gets sent to your email box whenever a guest registers?











The absolute easiest, fastest, and **100% free** way to deploy your website invitation is by using **GitHub Pages**. Since your website is built purely with HTML, CSS, and JavaScript, GitHub will host it permanently without costing you a single cent.



Follow these step-by-step instructions to get your live link:

## Step 1: Organize Your Files Locally

Before uploading anything, make sure all your files are inside a single folder on your computer and named **exactly** like this:

- index.html
- style.css
- script.js
- music.mp3 *(your background audio file)*

## Step 2: Create a GitHub Account and Repository

1. Go to [github.com](https://github.com/) and sign up for a free account.
2. Once logged in, click the green **New** button on the left panel (or click the **`+`** icon in the top-right corner and choose **New repository**).
3. Set up your repository details:
   1. **Repository name**: Type a simple name like `jollirace-invitation`.
   2. **Public/Private**: Select **Public** *(This must be public so your family can see the link!)*.
   3. **Initialize this repository with**: Leave everything unchecked.
4. Click the green **Create repository** button at the bottom.

## Step 3: Upload Your Files

1. On the next screen, look for the text that says: *"Get started by creating a new file or uploading an existing file."*
2. Click on the blue link that says **uploading an existing file**.
3. Drag and drop your **4 files** (`index.html`, `style.css`, `script.js`, and `music.mp3`) directly into the box on the screen.
4. Wait for all files to finish uploading.
5. Scroll down to the bottom and click the green **Commit changes** button.

## Step 4: Turn on GitHub Pages

1. Inside your repository page, click on the ⚙️ **Settings** tab located in the top menu bar.
2. Look at the left sidebar menu, scroll down to the *Code and automation* section, and click on **Pages**.
3. Under the **Build and deployment** section, look for **Source** and ensure it says *Deploy from a branch*.
4. Under **Branch**, click the dropdown menu that currently says **None**, and change it to **main** (or **master**).
5. Leave the folder as `/ (root)` and click the **Save** button.

### 🚀 Get Your Public Invitation Link!

GitHub will now take about 1 to 2 minutes to process your invitation card.

Refresh your browser page, and at the very top of that same **Pages** setting tab, you will see a green success bar displaying your public link, looking something like this:
👉 `https://github.io`



You can now copy that link, send it via Messenger, Viber, or post it on Facebook for your family and friends to view, play the music, and send their RSVPs directly to your Google Sheet!

If you want to make changes or test it out, let me know! If your link shows a **404 Error** right after saving, give it 1 minute and refresh—that is normal while GitHub sets up your page. Do you need help **generating a free QR code** for this link to print on physical tags?





Oo naman! Pwedeng-pwedeng dagdagan natin ito ng isang **Photo Gallery** section para makita ng mga bisita ang mga cute na larawan ng iyong anak bago sila mag-RSVP.

Gagamit tayo ng modernong CSS Grid para maayos at pantay-pantay ang pagkaka-display ng mga litrato, maging sa computer man o sa phone.

## Step 1: Ihanda ang mga Larawan

Bago mo i-update ang code, i-save ang mga larawan ng iyong anak sa loob ng **iyong folder** (kung nasaan ang `index.html`). Para madali, pangalanan mo ang mga ito ng:

- photo1.jpg
- photo2.jpg
- photo3.jpg
- photo4.jpg

(Siguraduhin na `.jpg` o `.png` ang format ng mga files).

## Step 2: I-update ang HTML (`index.html`)

Ipasok ang bagong `<section class="gallery-section">` na ito sa iyong `index.html`. Ilagay ito **sa itaas ng RSVP section** (bago mag-`<!-- RSVP Section -->`):

```        html
        <!-- Photo Gallery Section -->        
        <section class="gallery-section">
            <h3>📸 Our Little Racer's Gallery</h3>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="photo1.jpg" alt="Baby Photo 1" loading="lazy">
                </div>
                <div class="gallery-item">
                    <img src="photo2.jpg" alt="Baby Photo 2" loading="lazy">
                </div>
                <div class="gallery-item">
                    <img src="photo3.jpg" alt="Baby Photo 3" loading="lazy">
                </div>
                <div class="gallery-item">
                    <img src="photo4.jpg" alt="Baby Photo 4" loading="lazy">
                </div>
            </div>
        </section>
```

## Step 3: I-update ang CSS (`style.css`)

Idagdag ang mga sumusunod na codes sa **pinakailalim** ng iyong `style.css` file. Ito ang mag-aayos sa mga larawan para maging responsive sa phone:

```css
/* Photo Gallery Custom Styles */
.gallery-section {
    padding: 0 25px;
    margin-bottom: 30px;
    text-align: left;
}

.gallery-section h3 {
    font-family: 'Bangers', cursive;
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #e11221; /* Jollibee Red */
    letter-spacing: 0.5px;
}

/* Gagawa ng 2 columns sa phone, at 4 columns sa malaking screen */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.gallery-item {
    background-color: #f7f7f7;
    border: 3px solid #ffca18; /* Jollibee Yellow Border */
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 1 / 1; /* Gagawing perfect square ang portrait o landscape na picture */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

/* Effect kapag pinindot o hinawakan sa phone */
.gallery-item:active, .gallery-item:hover {
    transform: scale(1.03);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Saktong pagkasya ng image nang hindi nage-stretch */
    display: block;
}

/* Para sa mas malalaking screen gaya ng Tablets o Laptop */
@media (min-width: 480px) {
    .gallery-grid {
        grid-template-columns: repeat(4, 1fr); /* Magiging 4 columns kapag malawak ang screen */
    }
}
```

### 💡 Paano ito lalabas sa Phone?

Sa screen ng cellphone ng iyong mga kamag-anak, ang mga larawan ay awtomatikong magiging **grid layout na may 2 columns (2x2 grid)** para hindi sila mahirapang mag-scroll pababa. Naka-program din ito bilang `object-fit: cover` para kahit magkakaiba ang sukat ng mga original na kuhang litrato mo sa phone, awtomatiko silang magiging magkakasukat at magkakadikit nang maayos sa website nang hindi nayuyupi ang mukha ng baby mo.

Kapag nai-save mo na ang mga bagong files na ito, i-upload mo lang silang muli sa iyong **GitHub Pages** repository para mag-update ang iyong live link.

Gusto mo ba ng tulong kung paano gawing **clickable ang bawat picture para lumaki sa screen** (Lightbox effect), o sapat na ang simpleng grid gallery na ito?