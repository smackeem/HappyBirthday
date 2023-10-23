const openLetterButton = document.getElementById('openLetter');
const letter = document.getElementById('letter');

openLetterButton.addEventListener('click', () => {
    letter.style.display = 'block';
    openLetterButton.style.display = 'none';
});
