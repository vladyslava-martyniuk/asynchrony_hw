//Завдання 1 Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень
//  зупиніть виконання інтервалу за допомогою clearInterval.

const timer = setInterval(() => {
    console.log('Hello');    
}, 1000);

setTimeout(() => {
    clearInterval(timer);    
}, 5000);
 // Завдання 2: Анімація елементів
 const animatedBox = document.getElementById('animated-box');
 let size = 100;
 setInterval(() => {
     size += 10;
     animatedBox.style.width = `${size}px`;
     animatedBox.style.height = `${size}px`;
 }, 1000);
 // Завдання 3: Інтерактивна гра
 let score = 0;
 const clickButton = document.getElementById('click-button');
 const scoreDisplay = document.getElementById('score');
 clickButton.addEventListener('click', () => {
     score++;
     scoreDisplay.textContent = score;
 });
 setInterval(() => {
     score--;
     scoreDisplay.textContent = score;
 }, 5000);
 // Завдання 4: Контроль часу
 const timeInput = document.getElementById('time-input');
 const startButton = document.getElementById('start-button');
 startButton.addEventListener('click', () => {
     const timeInSeconds = parseInt(timeInput.value, 10);
     if (timeInSeconds <= 0) {
         alert('Будь ласка, введіть додатне число.');
         return;
     }
     setTimeout(() => {
         alert(`Час ${timeInSeconds} секунд минув!`);
     }, timeInSeconds * 1000);
 });