// This is new js file created using object, to make the code more cleaner and reasonable
// most part of the solution is from chatGPT
let addToDoBTN = document.getElementById("add-button");
let inputToDo = document.getElementById("todo-input");
let todoContainer = document.getElementById("todo-list-container");

let todoList = [];

addToDoBTN.addEventListener("click", addToDo);
document.addEventListener("DOMContentLoaded", loadToDo);

function addToDo() {
  //if people type in something in the input, a newToDo is made and stored in the array todoList.

  //newToDo is a temporary variable that is used to create a new to-do item object inside the addToDo() function whenever the user clicks the add button.

  if (inputToDo.value.length > 0) {
    let newToDo = {
      text: inputToDo.value,
      completed: false,
    };
    todoList.push(newToDo);
    //after store newToDo in the array, the function displayToDo is carried out
    displayToDo();
    //then the input area becomes blank again
    inputToDo.value = "";
    //in the end, save the todolist in localstorage
    saveToDo();
  }
}

function displayToDo() {
  // we don't want to load all the todolist repeatly, so set innerHTML to blank
  todoContainer.innerHTML = "";

  //The forEach() method takes a callback function as an argument, which is executed once for each element in the array. In this case, the callback function takes two parameters, todo and index, which represent the current element being processed and its index in the array, respectively.

  //The todo parameter in the todoList.forEach(function (todo, index)) code is a reference to the current to-do item being processed in the forEach() loop.
  //forEach(function(element, index, array), the parameters can be upto three: element, index and array

  todoList.forEach((todo, index) => {
    const toDoParagraph = document.createElement("p");
    toDoParagraph.innerText = todo.text;
    toDoParagraph.classList.add("todo-item");
    //if I remove the following two lines, the localstorage can not store the the line-through when I reload the browser, because in the finshBTN, the complete only become true when the finishBTN is clicked. when reload the browser, by the two lines below, we can make sure the value will be stored when it is true
    if (todo.completed) {
      toDoParagraph.style.textDecoration = "line-through";
    }
    todoContainer.appendChild(toDoParagraph);

    const finishBTN = document.createElement("button");
    finishBTN.innerText = "✓";
    finishBTN.classList.add("finish-button");
    todoContainer.appendChild(finishBTN);

    const removeBTN = document.createElement("button");
    removeBTN.innerText = "−";
    removeBTN.classList.add("remove-button");
    todoContainer.appendChild(removeBTN);

    finishBTN.addEventListener("click", function () {
      todo.completed = true;
      toDoParagraph.style.textDecoration = "line-through";
      saveToDo();
    });

    removeBTN.addEventListener("click", function () {
      todoList.splice(index, 1);
      displayToDo();
      saveToDo();
    });
  });
}

function saveToDo() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function loadToDo() {
  if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    displayToDo();
  }
}
