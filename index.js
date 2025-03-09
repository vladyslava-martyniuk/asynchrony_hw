//Завдання 1 Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень
//  зупиніть виконання інтервалу за допомогою clearInterval.

const timer = setInterval(() => {
    console.log('Hello');    
}, 1000);

setTimeout(() => {
    clearInterval(timer);    
}, 5000);