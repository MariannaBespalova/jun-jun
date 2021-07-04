const form = document.querySelector('#form');

console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll('input, textarea, select');

  const data = {};

  for (const input of inputs) {
    data[input.name] = input.value;
  }


  if (!localStorage.data) {
    localStorage.setItem("data", JSON.stringify(data));
  } else if (localStorage.data) {
    const parcedData = JSON.parse(localStorage.data);
    for (const key in data) {
      if (data[key] !== parcedData[key]) {
        localStorage.setItem("data", JSON.stringify(data));
      }
    }
  }
})


function preFillForm() {
  if (localStorage.data) {
    const inputs = document.querySelectorAll('input, textarea, select');
    for (const input of inputs) {
      input.value = JSON.parse(localStorage.data)[input.name];
    }
  };
}

preFillForm();








