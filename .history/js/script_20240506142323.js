"Use strict";

const form = document.querySelector('.personal');
const input = document.querySelector('.personal-input');
const block = document.querySelector('.main-container');
const addList = document.querySelector('.main-container--list')


function addTask(){
    // Отменяем отправку формы
    event.preventDefault();

    // Достаем текст задачи из поля ввода
    
    const taskText = input.value;
    console.log(taskText);

    //Формируем разметку для новой задачи

    const taskHTML = `<li class="main-container--list-link">
                        <input class="main-checked" type="checkbox">
                        <span class="main-text">${taskText}</span>
                    </li>
                    <button class="main--list-btn">
                        х
                    </button>
                        `
                       

    // Добавляем задачу на страницу

    block.insertAdjacentHTML('beforeend', taskHTML)

    // Отчищаем поле ввода

    input.value = '';
    input.focus();
}



// Добавление задачи 
form.addEventListener('submit', addTask);

// // Удаление задачи
addList.addEventListener('click', function(){
    console.log('hello');
});

function deleteTask(){
    console.log
}