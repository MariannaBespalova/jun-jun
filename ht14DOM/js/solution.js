const listElements = document.querySelectorAll("li");

console.log(listElements.length);

let arrOfText = []

for (const elem of listElements) {
  arrOfText.push(elem.innerText);
}

console.log(arrOfText);