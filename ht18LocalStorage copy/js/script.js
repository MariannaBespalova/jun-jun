const template = createEmptyTemplate();

document.getElementById('todoForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');

    const todoItem = {};

    for (let input of inputs) {
      if (input.value === '') return alert('Заполните форму!');
      todoItem[input.name] = input.value;
    }

    saveItem(todoItem);
    renderItem(todoItem);
    e.target.reset();
  })

document.addEventListener('change', (e) => {
  if (e.target.type === "checkbox") {
    const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) {
        localStorage.todos[i].completed = true;
        console.log(JSON.parse(localStorage.todos)[i])

      }
    }


  };
})

window.addEventListener('load', function (e) {
  if (!localStorage.todos) return;

  const todos = JSON.parse(localStorage.getItem('todos'));

  todos.forEach(function (item) {
    renderItem(item)
  });

})


function saveItem(todoItem) {
  // const checkbox = document.querySelector(`input[type="checkbox"]`);
  // console.dir(checkbox.checked);

  todoItem.completed = false;

  if (localStorage.todos) {
    let todosArray = JSON.parse(localStorage.todos);
    todosArray.push(todoItem);
    todosArray = JSON.stringify(todosArray);
    localStorage.setItem('todos', todosArray);
    return;
  }

  // const taskCompleted = JSON.stringify(checkbox);


  let todosArray = JSON.stringify([todoItem]);
  localStorage.setItem('todos', todosArray);
  // localStorage.todos = "false";
  // localStorage.todos.taskCompleted = checkbox.checked
}


function renderItem(todoItem) {
  const localTemplate = template.cloneNode(true);
  localTemplate.querySelector('.taskHeading').innerText = todoItem.title
  localTemplate.querySelector('.taskDescription').innerText = todoItem.description;
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
  label.innerText = "completed"

  label.append(checkbox);
  inputWrap.append(label);
  taskWrapper.append(taskHeading);
  taskWrapper.append(taskDescription);
  taskWrapper.append(inputWrap);

  return col;
}








