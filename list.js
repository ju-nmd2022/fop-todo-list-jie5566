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

  finishBTN.addEventListener("click", function (event) {
    //this are two ways to target the element I create in JS, not in the HTML
    // console.log(event.currentTarget);

    // finishBTN.addEventListener("click", (event) => {
    //   console.log("Start the game!");
    // });

    toDoParagraph.style.textDecoration = "line-through";
  });

  removeBTN.addEventListener("click", function () {
    todoContainer.removeChild(toDoParagraph);
    todoContainer.removeChild(finishBTN);
    todoContainer.removeChild(removeBTN);
  });

  // localStorage.setItem("todoList", todoContainer.innerHTML);
  //the method has some issues because the localstorage cannot store the whole function of addtodo, too much information.
}

// a storage function should be set
