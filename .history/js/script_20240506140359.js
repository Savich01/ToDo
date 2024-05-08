"Use strict";

const form = document.querySelector('.personal');
const input = document.querySelector('.personal-input');
const block = document.querySelector('.main-container');



function addTask () {
    // Отменяем отправку формы
    event.preventDefault();

    // Достаем текст задачи из поля ввода
    
    const taskText = input.value;
    console.log(taskText);

    //Формируем разметку для новой задачи

    const taskHTML = `<ul class="main-container--list">
                    <li class="main-container--list-link">
                        <input class="main-checked" type="checkbox">
                        <span class="main-text">${taskText}</span>
                    </li>
                    <button class="main--list-btn">
                        х
                    </button>
               </ul> 
                        `
                        console.log(taskHTML);

    // Добавляем задачу на страницу

    block.insertAdjacentHTML('beforeend', taskHTML)

    // Отчищаем поле ввода

    input.value = '';
    input.focus();

    //Скрываем блок

    

    if(mainBlock.children.lentgh < 1) {
       mainBlock.classList.add('none'); 
    }
}



// Добавление задачи 
form.addEventListener('submit', addTask);

// Удаление задачи
block.addEventListener('click', deleteTask);

function deleteTask(){
    console.log
}