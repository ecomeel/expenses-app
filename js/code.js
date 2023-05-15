const expenses = [];

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', function(){
    if (inputNode.value == '' || inputNode.value == NaN || inputNode.value == null) return;

    const expense = parseInt(inputNode.value);
    console.log(expense, typeof expense);
    inputNode.value = '';
    console.log(expenses)
})