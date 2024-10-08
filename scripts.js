// Add any interactive functionality here if needed
console.log('Portfolio website loaded');

// JavaScript for mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});
