// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.getElementById('value');
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');


let counterValue = +counterRef.textContent;

function increment() {
    counterValue += 1;
}

function decrement() {
    if (counterValue < 1) counterValue = 0;
    if (counterValue >= 1) counterValue -= 1;
};

incrementRef.addEventListener('click', () => {
    increment();
    counterRef.textContent = counterValue;
});

decrementRef.addEventListener('click', () => {
    decrement();
    counterRef.textContent = counterValue;
});