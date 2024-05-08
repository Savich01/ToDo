"Use strict";

let taskForm = document.querySelector('.personal');
let taskInput = document.querySelector('.personal-input');
let taskBtn = document.querySelector('.personal-btn');
let taskList = document.querySelector('.main-container--list');

let todoList = [];

taskBtn.addEventListener('click', function(){

    let newObj = {
        todo: taskInput.value,
        checked: false
    };

    todoList.push(newObj);
    displayMesseges()
});

function displayMesseges() {

    todoList.forEach(function(item, i) {
        let displayMessege = `
        <ul class="main-container--list">
                    <li class="main-container--list-link">
                        <input class="main-checked" type="checkbox" data-action = "done">
                        <span class="main-text main-text--done">${item}</span>
                    </li>
                    <button class="main--list-btn" data-action = "delete">
                        х
                    </button>
               </ul>
        `
    });
}




























































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
