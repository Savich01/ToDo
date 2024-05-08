"Use strict";

const form = document.querySelector('.personal');
const input = document.querySelector('.personal-input');

const taskText = taskInput.value;

form.addEventListener('submit', function(event){
    // Отменяем отправку формы
    event.preventDefault();

    // Достаем текст задачи из поля ввода

    
    console.log(taskText);
})