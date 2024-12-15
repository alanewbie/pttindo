document.addEventListener('DOMContentLoaded', () => {
    // Select the cookie banner div
    const cookieBanner = document.getElementById('cookie-banner');

    // Select the buttons
    const acceptButton = document.getElementById('accept-btn');
    const rejectButton = document.getElementById('reject-btn');

    // Add click event listeners to both buttons
    acceptButton.addEventListener('click', () => {
        cookieBanner.style.display = 'none'; // Hide the banner
    });

    rejectButton.addEventListener('click', () => {
        cookieBanner.style.display = 'none'; // Hide the banner
    });
});
