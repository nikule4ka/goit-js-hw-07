// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputRef = document.getElementById('validation-input');
const lengthRef = +inputRef.attributes['data-length'].value;

function checkValid() {
    const currentInput = inputRef.value.length;

    if (currentInput === lengthRef) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}

inputRef.addEventListener('blur', checkValid);