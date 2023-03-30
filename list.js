// I learned coding from https://www.youtube.com/watch?v=-pRg_daFjfk

let addToDoBTN = document.getElementById("add-button");
let inputToDo = document.getElementById("todo-input");
let todoContainer = document.getElementById("todo-list-container");

addToDoBTN.addEventListener("click", addToDo);

function addToDo() {
  const toDoParagraph = document.createElement("p");
  toDoParagraph.innerText = inputToDo.value;
  toDoParagraph.classList.add("todo-item");
  todoContainer.appendChild(toDoParagraph);

  const finishBTN = document.createElement("button");
  finishBTN.innerText = "✓";
  finishBTN.classList.add("finish-button");
  todoContainer.appendChild(finishBTN);

  const removeBTN = document.createElement("button");
  removeBTN.innerText = "−";
  removeBTN.classList.add("remove-button");
  todoContainer.appendChild(removeBTN);

  inputToDo.value = "";

  finishBTN.addEventListener("click", function () {
    toDoParagraph.style.textDecoration = "line-through";
  });

  removeBTN.addEventListener("click", function () {
    todoContainer.removeChild(toDoParagraph);
    todoContainer.removeChild(finishBTN);
    todoContainer.removeChild(removeBTN);
  });
}

// function checkToDo() {
//   const toDoParagraph = document.querySelector(".todo-item");
//   toDoParagraph.style.textDecoration = "line-through";
// }
// function removeToDo() {
//   todoContainer.removeChild(toDoParagraph);
//   todoContainer.removeChild(finishBTN);
//   todoContainer.removeChild(removeBTN);
// }
