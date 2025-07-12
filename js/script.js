/*
====================================
 MAIN INTERACTIVITY & ANIMATIONS
====================================
*/

// ===============================
// COUNTDOWN TIMER
// To change the launch date, update the countdownDate below.
// ===============================
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 30); // Set launch date to 30 days from now

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeLeft = countdownDate.getTime() - currentTime;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ===============================
// EMAIL SIGN-UP FORM - TEMPORARILY DISABLED
// Code removed as requested - will be re-enabled when client wants it
// ===============================
// Email form functionality has been removed

// ===============================
// SMOOTH SCROLL FOR NAVIGATION
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// CTA BUTTONS SCROLL TO SIGNUP
// ===============================
document.getElementById('hero-cta').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
// Remove the countdown-cta event listener as we've removed that button

// ===============================
// SCROLL-TRIGGERED ANIMATIONS
// To adjust animation threshold, change the threshold value below.
// ===============================
function animateOnScrollIO(targetSelector, visibleClass) {
    const elements = document.querySelectorAll(targetSelector);
    const observer = new window.IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(visibleClass);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.18 }
    );
    elements.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', () => {
    animateOnScrollIO('.founder-card', 'visible');
    animateOnScrollIO('.service-card', 'visible');
});

