// const LIMIT = 10000;
// const CURRENCY = "руб.";
// const STATUS_BAD = "Badly";
// const STATUS_BAD_CLASSNAME = "status_red";

// const inputNode = document.getElementById("input");
// const buttonNode = document.getElementById("add-btn");
// const historyNode = document.getElementById("history");
// const sumNode = document.getElementById("sum");
// const limitNode = document.getElementById("limit");
// const statusNode = document.getElementById("status");

// const expenses = [];

// init(expenses);

// buttonNode.addEventListener("click", function () {
//   const expense = getExpenseFromUser();
//   if (!expense) {
//     return
//   }
//   trackExpense(expense);
//   render(expenses);
// });

// function init(expenses) {
//   limitNode.innerText = LIMIT;
//   sumNode.innerText = calculateExpenses(expenses);
// }
// function trackExpense(expense) {
//   expenses.push(expense);
// }
// function getExpenseFromUser() {
//   if (
//     inputNode.value == "" ||
//     inputNode.value == NaN ||
//     inputNode.value == null
//   )
//     return;
//   const expense = parseInt(inputNode.value);
//   clearInput();
//   return expense;
// }
// function clearInput() {
//   inputNode.value = "";
// }
// function calculateExpenses(expenses) {
//   let sum = 0;
//   expenses.forEach((el) => {
//     sum += el;
//   });
//   return sum;
// }
// function render(expenses) {
//   const sum = calculateExpenses(expenses);
//   renderHistory(expenses);
//   renderSum(sum);
//   renderStatus(sum);
// }
// function renderHistory(expenses) {
//   let expensesListHTML = "";
//   expenses.forEach((el) => {
//     expensesListHTML += `<li>${el} ${CURRENCY}</li>`;
//   });
//   const html = `<ol>${expensesListHTML}</ol>`;
//   historyNode.innerHTML = html;
// }
// function renderSum(sum) {
//   sumNode.innerText = sum;
// }
// function renderStatus(sum) {
//   if (sum > LIMIT) {
//     statusNode.innerText = STATUS_BAD;
//     statusNode.classList.add(STATUS_BAD_CLASSNAME);
//   }
// }
