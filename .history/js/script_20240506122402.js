"Use strict";

const form = document.querySelector('.personal');
const input = document.querySelector('.personal-input');



form.addEventListener('submit', function(event){
    // Отменяем отправку формы
    event.preventDefault();

    // Достаем текст задачи из поля ввода
    
    const taskText = input.value;
    console.log(taskText);

    //Формируем разметку для новой задачи

    const taskHTML = `<li class="main-container--list-link">
                        <input class="main-checked" type="checkbox">
                        <span class="main-text">lorem</span>
                        </li>
                        <button class="main--list-btn">
                            х
                        </button>
                        `
                        console.log(taskHTML);

    // Добавляем задачу на страницу
});