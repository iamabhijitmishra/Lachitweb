// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the navigation buttons
    const navButtons = document.querySelectorAll('.nav-buttons button');

    // Add event listeners to buttons to scroll to sections
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const targetSection = document.getElementById(button.getAttribute('data-target'));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust scroll position
                    behavior: 'smooth',
                });
            }
        });
    });
});
