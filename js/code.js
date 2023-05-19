const expenses = [];


const inputNode = document.getElementById('input')
const buttonNode = document.getElementById('add-btn');
const historyNode = document.getElementById('history');
const totalNode = document.getElementById('sum');


buttonNode.addEventListener('click', function(){
    // get input value
    if (inputNode.value == '' || inputNode.value == NaN || inputNode.value == null) return;

    const expense = parseInt(inputNode.value);
    inputNode.value = '';

    // Save value 
    expenses.push(expense);

    // Expenses history
    let expensesListHTML = '';
    expenses.forEach(el => {
        expensesListHTML += `<li>${el} руб</li>`;
    });
    const html = `<ol>${expensesListHTML}</ol>`
    historyNode.innerHTML = html;

    // Expenses Summ
    let sum = 0;
    expenses.forEach(el => {
        sum += el;
    });
    totalNode.innerText = sum
})