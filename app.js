document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for interactivity and animation
    const button = document.getElementById('button');
    const letter = document.getElementById('letter');
    const backButton = document.getElementById('back-button');
    const confettiContainer = document.getElementById('confetti-container');

    button.addEventListener('click', function() {
        // Hide the opening page and show the letter
        confettiContainer.style.display = 'none';
        letter.style.display = 'block';
    });

    backButton.addEventListener('click', function() {
        // Show the opening page and hide the letter
        confettiContainer.style.display = 'block';
        letter.style.display = 'none';
    });

    // Create animated confetti
    const confettiColors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        confettiContainer.appendChild(confetti);
    }
});
