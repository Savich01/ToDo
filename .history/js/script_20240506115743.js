"Use strict";

const form = document.querySelector('.personal');
const input = document.querySelector('.personal-input');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('submit!!')
});