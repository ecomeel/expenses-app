const STATUS_IN_LIMIT = "все хорошо";
const STATUS_OUT_OF_LIMIT = "все плохо";

const inputNode = document.getElementById('expensesInput');
const categorySelectNode = document.getElementById('categorySelect')
const addButtonNode = document.getElementById('addButton');
const clearButtonNode = document.getElementById('clearButton');
const limitNode = document.getElementById('limitValue');
const totalValueNode = document.getElementById('totalValue');
const statusNode = document.getElementById('statusText');
const historyList = document.getElementById('historyList');


let expenses = [];
const limit = parseInt(limitNode.innerText);

const getTotal = () => {
    let sum = 0;
    expenses.forEach((expense) => {
        sum += expense.amount;
    })
    return sum;
}

const renderStatus = () => {
    const total = getTotal(expenses);
    totalValueNode.innerText = total;

    if (total <= limit) {
        statusNode.innerText = STATUS_IN_LIMIT;
        statusNode.className = "stats__statusText_positive";
    } else {
        statusNode.innerText = `${STATUS_OUT_OF_LIMIT} (${limit-total} руб.)`;
        statusNode.className = "stats__statusText_negative";
    }
}

const renderHistory = () => {
    historyList.innerHTML = "";
    expenses.forEach(expense => {
        const historyItem = document.createElement("li");
        historyItem.className = "rub";
        historyItem.innerText = `${expense.category} - ${expense.amount}`;

        historyList.appendChild(historyItem);
    });
}

const render = () => {
    renderStatus();
    renderHistory();
}

const getExpenseFromUser = () => parseInt(inputNode.value);

const getSelectedCategory = () => categorySelectNode.value

const clearInput = () => {
    inputNode.value = '';
}

function addButtonHandler() {
    const currentAmount = getExpenseFromUser();
    if (!currentAmount) return

    const currentCategory = getSelectedCategory();
    if (currentCategory === 'Категория') return

    const newExpense = {amount: currentAmount, category: currentCategory}
    console.log(newExpense);

    expenses.push(newExpense);

    console.log(expenses);

    render();
    clearInput();
}

const clearButtonHandler = () => {
    expenses = [];
    render();
}

addButtonNode.addEventListener('click', addButtonHandler);
clearButtonNode.addEventListener('click', clearButtonHandler);
