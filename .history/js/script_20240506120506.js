"Use strict";

const form = document.querySelector('.personal');
const input = document.querySelector('.personal-input');

form.addEventListener('submit', function(event){
    // Отменяем отправку формы
    // event.preventDefault();

    // Достаем текст задачи из поля ввода

    const taskText = taskInput.value;
    console.log(taskText);
    
})