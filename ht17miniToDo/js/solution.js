const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');


btn.addEventListener('click', () => {
  if (input.value) {
    const li = document.createElement("li");
    li.innerText = input.value;
    list.prepend(li);
    input.value = "";
  }
})