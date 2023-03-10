let keyboard = document.querySelector('.keyboard');
let calc = document.querySelector('#calc');
let display = document.querySelector('#display');
let key = document.querySelectorAll('.key');

let exp = '';

for (let key of keyboard) {
    key.addEventListener('click', function (evt) {
        evt.preventDefault();
        exp = exp + key.textContent;
        display.value = exp;
    })
}