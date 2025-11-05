const todos = [];

const todoInput = document.getElementById("todo-input");
const todosWrapper = document.getElementById("todos-wrapper");

function addTodo() {
  const todoValue = todoInput.value;

  // !todoValue
  if (todoValue === "") {
    alert("You can not insert empty todo!!");
    return;
  }

  todos.push(todoValue);

  updateDOM();

  todoInput.value = "";

}

function deleteTodo(index) {
  todos.splice(index, 1);

  updateDOM();
}



function updateDOM() {
  let htmlToAdd = "";
  for (let i = 0; i < todos.length; i++) {

    htmlToAdd = htmlToAdd + `<div class="todo">
        <p>${todos[i]}</p>
        <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
      </div>`;

  }

  todosWrapper.innerHTML = htmlToAdd;
}












