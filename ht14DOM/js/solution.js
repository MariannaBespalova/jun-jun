const listItems = document.body.children[0].children;

let arrOfInnerText = [];

for (const item of listItems) {
  arrOfInnerText.push(item.innerText);
}

console.log(arrOfInnerText);



const listElements = document.querySelectorAll("li");

let arrOfText = []

for (const elem of listElements) {
  arrOfText.push(elem.innerText);
}

console.log(arrOfText);