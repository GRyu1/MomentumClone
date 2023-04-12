const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function saveTodo() {
   localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function handleToDoSubmit(event){
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   const newTodoObj = {
      text : newTodo+ " ",
      id : Date.now(),
   }
   toDos.push(newTodoObj);
   paintTodo(newTodoObj);
   saveTodo();  
}

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveTodo();
}

function paintTodo(newTodoObj){
   const li = document.createElement("li");
   li.id = newTodoObj.id;
   const span = document.createElement("span");
   const button = document.createElement("button");
   button.innerText="X";
   button.onclick = deleteToDo;
   li.appendChild(span);
   li.appendChild(button);
   span.innerText = newTodoObj.text;
   toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
   parsedToDos.forEach(paintTodo);
}