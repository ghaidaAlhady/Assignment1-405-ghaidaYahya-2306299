// Switch between light and dark mode on every portfolio page.
const themeKey = 'ghaida-portfolio-theme';

let theme = 'dark';
try {
    if (localStorage.getItem(themeKey) === 'light') {
        theme = 'light';
    }
} catch (error) {
    // The page still works if saving preferences is unavailable.
}

document.documentElement.setAttribute('data-theme', theme);

function updateThemeButton() {
    const lightMode = document.documentElement.getAttribute('data-theme') === 'light';
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    button.querySelector('.theme-label').textContent = lightMode ? 'Dark mode' : 'Light mode';
    button.querySelector('.theme-icon').textContent = lightMode ? '☾' : '☀';
    button.setAttribute('aria-label', lightMode ? 'Switch to dark mode' : 'Switch to light mode');
    button.setAttribute('aria-pressed', lightMode ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', function () {
    updateThemeButton();
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    button.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);

        try {
            localStorage.setItem(themeKey, next);
        } catch (error) {
            // Switching still works without saving.
        }
        updateThemeButton();
    });
});
