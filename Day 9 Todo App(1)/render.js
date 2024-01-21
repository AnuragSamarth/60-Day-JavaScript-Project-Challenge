import store from "./store.js";

function render() {
  const todos = document.querySelectorAll(".todos");
  console.log(todos);

  const todoElements = store.todos.map((todo) => 

    `<li class="todo" data-id=${todo.id}>
        <span class="todo-title ${todo.completed ? "completed" : ""}">${
      todo.title
    }</span>
        <div class="toggle-delete">
            <input type="checkbox" name="completed" class="todo-checkbox">
            <button class="delete-todo-button">x</button>
        </div>
    </li>`);

    const innertodoElements = todoElements.join("");
    todos.innerHTML = innertodoElements;
}

export default render;
