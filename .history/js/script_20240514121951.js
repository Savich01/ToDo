"Use strict";

const taskForm = document.querySelector('.personal');
const taskInput = document.querySelector('.personal-input');
const taskBtn = document.querySelector('.personal-btn');
const taskBlock = document.querySelector('.main-container');
const taskInput2 = document.querySelector('.main-checked');
const taskMain = document.querySelector('.main-block');
const mainBtn3 = document.querySelector('.main-btn3');
const checked = document.querySelector('.checkbox-active');
const deleteBtn = document.querySelector('.btn');



//При нажатии удаляются выбранные эллементы
deleteBtn.addEventListener('click', function(item){
    tasks.forEach(function(item){
        if(item.checked = checked.checked){
            delete item;
        }
        render(tasks);
    });
    
})


//При нжатии все чекбоксы активны
checked.addEventListener('click', function(item){
    tasks.forEach(function(item){
        item.checked = checked.checked;
    });
    render(tasks);
});


let tasks = [];

// Добавляем задачу
function addTask(event) {
    // Отменяем отправку формы
    event.preventDefault();

    //Достаем текст из input
    const taskText = taskInput.value;
    
    //Ничего не выводим если строка пустая
    if(taskInput.value == '')return;

    //Описываем задачу в виде объекта
    let newTask = {
        id: Date.now(),
        text: taskText,
        checked: false
    };

    //Добавляем задачу в массив
    tasks.push(newTask);
    render(tasks);
}
// ----------------------------------------------------------------------------


const render = (array) => {
    taskBlock.innerHTML = '';
    array.forEach(function(item){
        //Добавляем задачу 
    const cssClass = item.checked ? 'main-text main-text--done' : 'main-text';
    const ul = document.createElement('ul')
    ul.classList.add('main-container--list')
    taskBlock.append(ul);
    //Формируем разметку задачи
    ul.innerHTML += `
                    <li class="main-container--list-link">
                        <input id='${item.id}' class="main-checked" type="checkbox" data-action = "done">
                        <span class="${cssClass}">${item.text}</span>
                    </li>
                    <button id='${item.id}' class="main--list-btn" data-action = "delete">
                        х
                    </button>
              `;
        console.log(ul)
    
   
    //Очищаем поле ввода и возвращаем на него фокус
    taskInput.value = '';
    taskInput.focus();
    
    const a = document.getElementById(`${item.id}`);
    
    a.checked = item.checked;
    console.log(a);
    }); 
}
   

//=======================================================================================    


//Добавляем задачу на страницу
function doneTask(event){
    if(event.target.dataset.action == 'done'){
        const parentNode = event.target.closest('.main-checked');

        //Определяем id Задачи
        const id = parentNode.id;
    
        const task = tasks.find(function(task){
            if(task.id == id) {
                return true;
            }
        });

        task.checked = !task.checked;
        

        // const taskTitle = parentNode.querySelector('.main-text');
        // taskTitle.classList.toggle('main-text--done');
        // console.log(event.target.checked);
    };
   
};


//УДАЛЯЕМ ЗАДАЧУ
function deleteTask(event){
    // Проверяем что клик был по кнопке удалить задачу
    if(event.target.dataset.action === 'delete'){
        const parenNode = event.target.closest('.main-container--list');

        // //Определяем id задачи
        const id = Number(parenNode.id);

        //Удаление задачи по индексу
        const index = tasks.findIndex(function(task){
            if(task.id === id){
                return true;
            };
        });
    
        //Удаляем из массива с задачами
        tasks.splice(index, 1);

        
        //Удаляем задачу из разметки
        parenNode.remove();
    }
    
}

//=============================================================

//ЗАвершенная задача в (Completed)
const arrCompleted = function(){

    let arrTask = [];

    tasks.forEach((item) => {
        if (item.checked == true) {
            arrTask.push(item)
        }     
    });
    // console.log(arrTask, tasks)
    render(arrTask);
    // console.log(arrTask, tasks);
}


//Активная задача в (Active)
const arrActive = function(){

    let taskArr = [];

    tasks.forEach((item) => {
        if (item.checked == false){
            taskArr.push(item)
        }
    });
    render(taskArr);
}



//====================================================================



// Добавляет задачу
taskForm.addEventListener('submit', addTask);

// Удаляет задачу
taskBlock.addEventListener('click', deleteTask);

//Отмечаем задачу завершенной
taskBlock.addEventListener('click', doneTask);


mainBtn3.addEventListener('click', arrCompleted);
// mainBtn2.addEventListener('click', arrActive);




document.querySelector('.main-btn1').addEventListener('click', () => {
    render(tasks)
});


document.querySelector('.main-btn2').addEventListener('click', arrActive);















































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
