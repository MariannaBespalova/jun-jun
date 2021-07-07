const template = createEmptyTemplate();

document.getElementById('todoForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');

    const todoItem = {};

    for (let input of inputs) {
      if (input.value === '') return alert('Заполните форму!');
      todoItem[input.name] = input.value;
      todoItem.completed = false;
      todoItem.id = Date.now();
    }

    saveItem(todoItem);
    renderItem(todoItem);
    e.target.reset();
  })

document.addEventListener('change', (e) => {
  if (e.target.type === "checkbox") {
    const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
    const todosLocal = JSON.parse(localStorage.getItem("todos"));
    const todosItems = document.querySelectorAll(".todo-item");

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        const changedTodo = todosLocal.find((todo) => todo.id == todosItems[i].id);
        changedTodo.completed = true;

        localStorage.setItem("todos", JSON.stringify(todosLocal))
      } else if (checkboxes[i].checked === false) {
        const changedTodo = todosLocal.find((todo) => todo.id == todosItems[i].id);
        changedTodo.completed = false;

        localStorage.setItem("todos", JSON.stringify(todosLocal))
      }
    }
  };
})


document.addEventListener("click", e => {
  if (e.target.matches(".btn-close")) {

    const todosLocal = JSON.parse(localStorage.getItem("todos"));
    const arrOfTodos = todosLocal.filter((todo) => todo.id != e.target.parentNode.parentNode.id);

    localStorage.setItem("todos", JSON.stringify(arrOfTodos));
    e.target.parentNode.parentNode.remove();

  }
})

window.addEventListener('load', function (e) {
  if (!localStorage.todos) return;

  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.forEach(function (item) {
    renderItem(item)
  });

})


function saveItem(todoItem) {

  if (localStorage.todos) {
    let todosArray = JSON.parse(localStorage.todos);
    todosArray.push(todoItem);
    todosArray = JSON.stringify(todosArray);
    localStorage.setItem('todos', todosArray);
    return;
  }

  let todosArray = JSON.stringify([todoItem]);
  localStorage.setItem('todos', todosArray);
}


function renderItem(todoItem) {
  const localTemplate = template.cloneNode(true);
  localTemplate.querySelector('.taskHeading').innerText = todoItem.title;
  localTemplate.querySelector('.taskDescription').innerText = todoItem.description;
  localTemplate.id = todoItem.id;

  if (todoItem.completed) {
    localTemplate.querySelector("input").setAttribute('checked', 'true');
  }

  document.getElementById('todoItems').prepend(localTemplate);
}


function createEmptyTemplate() {
  const col = document.createElement('div');
  col.className = 'col-4 todo-item';

  const taskWrapper = document.createElement('div');
  taskWrapper.className = 'taskWrapper';
  col.append(taskWrapper);

  const taskHeading = document.createElement('div');
  taskHeading.className = 'taskHeading';

  const taskDescription = document.createElement('div');
  taskDescription.className = 'taskDescription';

  const inputWrap = document.createElement('div');
  inputWrap.className = "input-wrap";

  const checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox")
  const label = document.createElement('label');
  label.innerText = "completed";

  const deleteItemBtn = document.createElement("button");
  deleteItemBtn.classList.add("btn-close");


  taskWrapper.append(deleteItemBtn);
  label.append(checkbox);
  inputWrap.append(label);
  taskWrapper.append(taskHeading);
  taskWrapper.append(taskDescription);
  taskWrapper.append(inputWrap);


  return col;
}








