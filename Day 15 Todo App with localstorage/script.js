const inputField = document.querySelector(".inputfield");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const listItems = document.querySelector(".list-items");
const outputField = document.querySelector(".outputfield");
let todoListValue = [];
let updatedTodoList;

function getTodoList(){
    return JSON.parse(localStorage.getItem("todoData")) || [];
}


const addTodoLocalStorage = (todo)=>{
    return localStorage.setItem("todoData", JSON.stringify(todo));
}


const addTodoList = (e)=>{
    e.preventDefault();
    
    todoListValue = getTodoList();
    let newTodo = input.value.trim();

    // console.log(newTodo)

      if(newTodo.length != 0 && !todoListValue.includes(newTodo)){
     
           todoListValue.push(newTodo);

           // This line of code is to set unique value in the todoListValue array
           todoListValue = [...new Set(todoListValue)];

          addTodoLocalStorage(todoListValue);
          const liElement = document.createElement("li");
          liElement.classList.add("items");
          liElement.innerHTML = newTodo;
          listItems.appendChild(liElement);
          
          input.value = "";
        }
        
    }
    
 const showTodoList=()=>{
          todoListValue = getTodoList();
          todoListValue.forEach((element) => {
            const liElement = document.createElement("li");
            liElement.classList.add("items");
            liElement.innerHTML = element;
            listItems.appendChild(liElement);
          });
    }
    showTodoList();
    

const removeTodoList = (e)=>{
     let currentTodo = e.target;
     currentTodo.remove();
}


listItems.addEventListener("click", (e)=>{
   removeTodoList(e);
} )

btn.addEventListener("click", (e)=>{
    addTodoList(e);
    // e.preventDefault();
} );
