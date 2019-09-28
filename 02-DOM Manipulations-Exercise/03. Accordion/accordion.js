function toggle() {
    let button = document.querySelector('.button');
    let elementToDisplay = document.getElementById('extra');

    if (elementToDisplay.style.display === 'none') {
        elementToDisplay.style.display = 'block';
        button.textContent = 'Less';
    } else {
        elementToDisplay.style.display = 'none';
        button.textContent = 'More';
    }
}