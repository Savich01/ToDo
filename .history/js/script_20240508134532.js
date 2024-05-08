"Use strict";

const taskForm = document.querySelector('.personal');
const taskInput = document.querySelector('.personal-input');
const taskBtn = document.querySelector('.personal-btn');
const taskBlock = document.querySelector('.main-container');
const taskInput2 = document.querySelector('.main-checked');

// Функции
function addTask(event) {
    // Отменяем отправку формы
    event.preventDefault();

    //Достаем текст из input
    const taskText = taskInput.value;
    
    //Формируем разметку задачи
    const taskHTML = `
                <ul class="main-container--list">
                    <li class="main-container--list-link">
                        <input class="main-checked" type="checkbox" data-action = "done">
                        <span class="main-text main-text--done">${taskText}</span>
                    </li>
                    <button class="main--list-btn" data-action = "delete">
                        х
                    </button>
               </ul>
              `;

    //Добавляем задачу на страницу
    taskBlock.insertAdjacentHTML('beforeend', taskHTML);

    //Очищаем поле ввода и возвращаем на него фокус
    taskInput.value = '';
    taskInput.focus();
}


function deleteTask(event){

    // Проверяем что клик был по кнопке удалить задачу
    if(event.target.dataset.action === 'delete'){
        console.log('delete!!!');
        const parenNode = event.target.closest('.main-container--list');
    }
    
}

// Добавляет задачу
taskForm.addEventListener('submit', addTask);

// Удаляет задачу

taskBlock.addEventListener('click', deleteTask);






















































// const form = document.querySelector('.personal');
// const input = document.querySelector('.personal-input');
// const block = document.querySelector('.main-container');
// const addList = document.querySelector('.main-container--list')
// const mainBlock = document.querySelector('.main-block');

// function addTask(){
//     // Отменяем отправку формы
//     event.preventDefault();

//     // Достаем текст задачи из поля ввода
    
//     const taskText = input.value;


//     //Формируем разметку для новой задачи

//     const taskHTML = `<ul class="main-container--list">
//                     <li class="main-container--list-link">
//                         <input class="main-checked" type="checkbox" data-action = "done">
//                         <span class="main-text">${taskText}</span>
//                     </li>
//                     <button class="main--list-btn" data-action = "delete">
//                         х
//                     </button>
//                </ul> 
//                     `
                       

//     // Добавляем задачу на страницу

//     block.insertAdjacentHTML('beforeend', taskHTML)

//     // Отчищаем поле ввода

//     input.value = '';
//     input.focus();
 
// }



// // Добавление задачи 
// form.addEventListener('submit', addTask);

// // // Удаление задачи
// block.addEventListener('click', deleteTask);

// function deleteTask(event){


//     if(event.target.dataset.action === 'delete'){
    
//         const perentNode = event.target.closest('.main-container--list');
//         perentNode.remove();
//     };
// };

// // Отмечаем задачу завершенной

// block.addEventListener('click', doneTask)

// function doneTask(event) {
//     if(event.target.dataset.action === 'done'){
//         const perentNode = event.target.closest('.main-container--list');
//         const taskTitle = perentNode.querySelector('.main-text');
//         taskTitle.classList.toggle('main-text--done');
//     }
// }
