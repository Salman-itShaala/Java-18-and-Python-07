const todos = [];

const todoInput = document.getElementById("todo-input");
const todosWrapper = document.getElementById("todos-wrapper");

function addTodo() {
    const todoValue = todoInput.value;
    todos.push(todoValue);

    // depending upon that todos array update your html

    // iterating over todos array
    let htmlToAdd = "";
    for (let i = 0; i < todos.length; i++) {
        htmlToAdd = htmlToAdd + `<div class="todo">
        <p>${todos[i]}</p>
        <button class="mark-as-done-btn">Mark as done</button>
        <button class="delete-btn">Delete</button>
      </div>`;
    }

    todosWrapper.innerHTML = htmlToAdd;
}