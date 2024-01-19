const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement('li');
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-button">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
  
    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);
    todoList.append(newLi);

    todoInput.value = "";
})


// Event Delegation Method
todoList.addEventListener("click",(e)=>{
    //    console.log(e.target);

    // check if user clicked on done button
    if(e.target.classList.contains("done")){
        console.log("done clicked");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        console.log("remove clicked");
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})