let addToDoBTN = document.getElementById("add-button");
let inputToDo = document.getElementById("todo-input");
let todoContainer = document.getElementById("todo-list-container");
let checkToDoBTN = document.querySelector(".finishBTN");
let itemElement = document.querySelector(".todo-item");

addToDoBTN.addEventListener("click", addToDo);
checkToDoBTN.addEventListener("click", checkToDo);

function addToDo() {
  const toDoList = document.createElement("p");
  toDoList.innerText = inputToDo.value;
  toDoList.classList.add("todo-item");
  todoContainer.appendChild(toDoList);

  const finishBTN = document.createElement("button");
  finishBTN.innerText = "✓";
  finishBTN.classList.add("finish-button");
  todoContainer.appendChild(finishBTN);

  const removeBTN = document.createElement("button");
  removeBTN.innerText = "−";
  removeBTN.classList.add("remove-button");
  todoContainer.appendChild(removeBTN);
}

function checkToDo() {
  itemElement.style.textDecoration = "line-through";
}
