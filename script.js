// 1. Эффект печатающегося текста
const textElement = document.getElementById('typing-text');
const profession = textElement.textContent; // Получаем текст из элемента
textElement.textContent = ''; // Очищаем текст для эффекта печати
let index = 0;

function typeEffect() {
    if (index < profession.length) {
        textElement.textContent += profession.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Скорость печати
    }
}

// 2. Переключение темной темы
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Меняем иконку
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Запуск функций
window.onload = () => {
    typeEffect();
};