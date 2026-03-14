
const textElement = document.getElementById('typing-text');
const profession = "Designer UI/UX et Développeur";
let index = 0;

function typeEffect() {
    if (index < profession.length) {
        textElement.textContent += profession.charAt(index);
        index++;

        const speed = Math.random() * (150 - 50) + 50; 
        setTimeout(typeEffect, speed); 
    }
}


const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    } else {і
        body.classList.remove('dark-mode');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const isDark = body.classList.contains('dark-mode');
    const currentTheme = isDark ? 'dark' : 'light';
    
    
    localStorage.setItem('theme', currentTheme);
    
    
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

window.onload = () => {
    typeEffect();
};