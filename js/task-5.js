// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputRef = document.getElementById('name-input');
const outputRef = document.getElementById('name-output');

function replaceValue() {
    outputRef.textContent = inputRef.value
        ? inputRef.value
        : 'незнакомец';
}

inputRef.addEventListener('input', replaceValue);