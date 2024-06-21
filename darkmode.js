document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        navLinks.forEach(link => link.classList.toggle('dark-mode'));
    });
});
