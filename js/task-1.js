
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.Получится 'В списке 3 категории.'.

const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);


// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Категория: Животные
// Количество элементов: 4

itemRef.forEach((el) => {
    const titleRef = el.querySelector('h2').textContent;
    const allItemsRef = el.querySelectorAll('li');

    console.log(`Категория: ${titleRef}`);
    console.log(`Количество элементов: ${allItemsRef.length}`);
});