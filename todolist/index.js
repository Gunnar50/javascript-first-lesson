//dom refs
const taskTextRef = document.getElementById("taskText");
const tasksRef = document.getElementById("tasks");
const addTaskRef = document.getElementById("addTask");

//place to store user input temp
let taskTextInput = "";
//place to store the todos
const todos = [];

//listen for user input
taskTextRef.addEventListener("input", (e) => {
  //store in the upper scope
  taskTextInput = e.target.value;
});

//listen for a click
addTaskRef.addEventListener("click", () => {
  //check the data has length
  if (taskTextInput.length < 3) {
    return;
  }

  //find the item if exists
  const index = todos.findIndex((todo) => {
    return todo.name === taskTextInput;
  });

  if (index > -1 && todos[index].complete === false) {
    //already exists and is not done
    return;
  } else if (index > -1 && todos[index].complete === true) {
    todos[index].complete = false;
    createInterface();
    return;
  }

  createTodo();
  createInterface();
});

function createTodo() {
  // add task to the todos list
  todos.push({
    id: Math.round(Math.random() * 1000000),
    name: taskTextInput,
    entryDate: new Date(),
    complete: false,
  });
}

//listen for a toggle click
tasksRef.addEventListener("click", (e) => {
  if (!e.target.id) {
    return;
  }

  //find the item in the array
  const index = todos.findIndex((todo) => {
    return todo.id === Number(e.target.id);
  });

  todos[index].complete = !todos[index].complete;

  createInterface();
});

function createInterface() {
  //add to the interface
  const html = todos.map((todo) => {
    return `<div class="todo ${todo.complete ? "complete" : "incomplete"}">
              <div><p class="name">${todo.name}<p></div>
              <div><p>${todo.entryDate.toString().substring(0, 10)}<p></div>
              <div><button id=${todo.id}>${
      todo.complete ? "Todo" : "Done"
    }</button></div>
            </div>`;
  });
  tasksRef.innerHTML = html.join("");
}
