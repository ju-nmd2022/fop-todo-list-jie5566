// I learned coding from https://www.youtube.com/watch?v=-pRg_daFjfk
// localstorage solution comes from chatGPT

let addToDoBTN = document.getElementById("add-button");
let inputToDo = document.getElementById("todo-input");
let todoContainer = document.getElementById("todo-list-container");

addToDoBTN.addEventListener("click", addToDo);
document.addEventListener("DOMContentLoaded", loadToDo);
//The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

function addToDo() {
  if (inputToDo.value.length > 0) {
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
      saveToDo();
    });

    removeBTN.addEventListener("click", function () {
      todoContainer.removeChild(toDoParagraph);
      todoContainer.removeChild(finishBTN);
      todoContainer.removeChild(removeBTN);
      saveToDo();
    });
  }

  saveToDo();
  // localStorage.setItem("todoList", todoContainer.innerHTML);
  //the method has some issues because the localstorage cannot store the whole function of addtodo, too much information.
}

//the saveToDo() function saves the current state of the to-do list, which is represented as the innerHTML of the todoContainer element, to the local storage of the browser. This function is called from the addToDo() function every time a new to-do item is added, completed, or removed.
function saveToDo() {
  localStorage.setItem("todoList", todoContainer.innerHTML);
}

function loadToDo() {
  if (localStorage.getItem("todoList")) {
    todoContainer.innerHTML = localStorage.getItem("todoList");

    //The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.
    //item is used as a loop variable to iterate over all the todo items loaded from the localStorage.
    const todoItemsSaved = document.querySelectorAll(".todo-item");
    todoItemsSaved.forEach(function (itemSaved) {
      const finishBTNSaved = itemSaved.nextElementSibling;
      const removeBTNSaved = finishBTNSaved.nextElementSibling;
      finishBTNSaved.addEventListener("click", function () {
        itemSaved.style.textDecoration = "line-through";
      });
      removeBTNSaved.addEventListener("click", function () {
        todoContainer.removeChild(itemSaved);
        todoContainer.removeChild(finishBTNSaved);
        todoContainer.removeChild(removeBTNSaved);
        saveToDo();
      });
    });
  }
}
