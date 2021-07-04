const container = document.querySelector(".container");
const ul = document.createElement("ul");

container.appendChild(ul);

if (localStorage.data) {
  const parcedData = JSON.parse(localStorage.data);

  for (const data in parcedData) {
    const li = document.createElement('li');
    li.innerText = `${data}: ${parcedData[data]}`;
    ul.appendChild(li);
  }
}








