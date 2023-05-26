const STATUS_IN_LIMIT = "все хорошо";
const STATUS_OUT_OF_LIMIT = "все плохо";
const POPUP_OPENED_CLASSNAME = "popup_opened";
const BODY_FIXED_CLASSNAME = "body_fixed";
const EMPTY_INPUT_ERROR_CLASSNAME = "red-border";

const inputNode = document.getElementById("expensesInput");
const moneyInputNode = document.getElementById("moneyInput");
const categorySelectNode = document.getElementById("categorySelect");
const addButtonNode = document.getElementById("addButton");
const clearButtonNode = document.getElementById("clearButton");
const totalValueNode = document.getElementById("totalValue");
const statusNode = document.getElementById("statusText");
const historyList = document.getElementById("historyList");

const openBtnChangeLimit = document.getElementById("openBtnChangeLimit");
const closeBtnChangeLimit = document.getElementById("closeBtnChangeLimit");
const bodyNode = document.querySelector("body");
const popupNode = document.getElementById("popupChangeLimit");
const popupContentNode = document.getElementById("popupContent");
const newLimitInput = document.getElementById("newLimitInput");
const moneyInputPopupNode = document.getElementById("moneyInputPopup");
const saveNewLimitBtn = document.getElementById("saveNewLimitBtn");

const limitNode = document.getElementById("limitValue");
let limit = parseInt(limitNode.innerText);

function initLimit() {
  const limitFromStorage = parseInt(localStorage.getItem("limit"));
  if (!limitFromStorage) {
    return;
  }
  limitNode.innerText = limitFromStorage;
}

// initLimit();

let expenses = [];

const getTotal = () => {
  let sum = 0;
  expenses.forEach((expense) => {
    sum += expense.amount;
  });
  return sum;
};

const renderStatus = () => {
  const total = getTotal(expenses);
  totalValueNode.innerText = total;

  if (total <= limit) {
    statusNode.innerText = STATUS_IN_LIMIT;
    statusNode.className = "stats__statusText_positive";
  } else {
    statusNode.innerText = `${STATUS_OUT_OF_LIMIT} (${limit - total} руб.)`;
    statusNode.className = "stats__statusText_negative";
  }
};

const renderHistory = () => {
  historyList.innerHTML = "";
  expenses.forEach((expense) => {
    const historyItem = document.createElement("li");
    historyItem.className = "rub";
    historyItem.innerText = `${expense.category} - ${expense.amount}`;

    historyList.appendChild(historyItem);
  });
};

const render = () => {
  renderStatus();
  renderHistory();
};

const togglePopup = () => {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
};

const clickOutsidePopup = (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
};

const getValueFromUser = (input) => parseInt(input.value);

const getSelectedCategory = () => categorySelectNode.value;

const clearInput = (input) => {
  input.value = "";
};

function addButtonHandler() {
  const currentAmount = getValueFromUser(inputNode);
  const currentCategory = getSelectedCategory();

  if (!currentAmount) {
    moneyInputNode.classList.add(EMPTY_INPUT_ERROR_CLASSNAME);
    return;
  } else if (currentCategory === "Категория") {
    categorySelectNode.classList.add(EMPTY_INPUT_ERROR_CLASSNAME);
    return;
  }
  moneyInputNode.classList.remove(EMPTY_INPUT_ERROR_CLASSNAME);
  categorySelectNode.classList.remove(EMPTY_INPUT_ERROR_CLASSNAME);

  const newExpense = { amount: currentAmount, category: currentCategory };
  console.log(newExpense);

  expenses.push(newExpense);

  console.log(expenses);

  render();
  clearInput(inputNode);
}

const clearButtonHandler = () => {
  expenses = [];
  render();
};

function changeLimitHandler() {
  togglePopup();
  saveNewLimitBtn.addEventListener("click", () => {
    const newLimit = getValueFromUser(newLimitInput);
    if (!newLimit) {
      moneyInputPopupNode.classList.add(EMPTY_INPUT_ERROR_CLASSNAME);
      return;
    }
    moneyInputPopupNode.classList.remove(EMPTY_INPUT_ERROR_CLASSNAME);

    limitNode.innerText = newLimit;
    limit = newLimit;
    localStorage.setItem("limit", newLimit);

    clearInput(newLimitInput);

    render();
    togglePopup();
  });
  popupNode.addEventListener("click", clickOutsidePopup);
  closeBtnChangeLimit.addEventListener("click", togglePopup);
}

addButtonNode.addEventListener("click", addButtonHandler);
clearButtonNode.addEventListener("click", clearButtonHandler);
openBtnChangeLimit.addEventListener("click", changeLimitHandler);
