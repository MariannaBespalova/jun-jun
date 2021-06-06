// Вывести общее кол-во элементов в консоль

const listElements = document.querySelectorAll("li");

console.log("Общее количество элементов:", listElements.length);

// Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль

let arrOfText = [];

for (const elem of listElements) {
  arrOfText.push(elem.innerText);
}

console.log(arrOfText);

// Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль

const ul = document.querySelector("ul");


const ulAttr = ul.attributes;

const arrOfAttributesName = [];

for (const attr of ulAttr) {
  arrOfAttributesName.push(attr.name);
}

console.log(arrOfAttributesName);

const ulAttributes = ul.getAttributeNames();
console.log(ulAttributes);

// Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль


const arrOfAttributesValue = [];

for (const attr of ulAttr) {
  arrOfAttributesValue.push(attr.value);
}

console.log(arrOfAttributesValue);

// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя;

listElements[listElements.length - 1].innerText = `Привет, меня зовут Марианна`;


// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя

listElements[0].setAttribute("data-my-name", "Марианна");

console.log(listElements[0].attributes);

// Удалить у тега ul аттрибут ‘data-dog-tail‘;

ul.removeAttribute("data-dog-tail");
