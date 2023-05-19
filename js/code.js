const expenses = [];


const inputNode = document.getElementById('input')
const buttonNode = document.getElementById('add-btn');
const historyNode = document.getElementById('history')


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
        expensesListHTML += `<li>${el}</li>`;
    });
    const html = `<ol>${expensesListHTML}</ol>`
    historyNode.innerHTML = html;
})