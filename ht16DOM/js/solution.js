const button = document.querySelector("button");
// Напишите код, который будет выводить alert с надписью Привет! при нажатии на кнопку.
button.onclick = function () {
  alert("Привет!");
}


// Напишите код, который будет менять текст в инпуте при нажатии на кнопку (изначально в инпуте уже должно быть задан текст).
const buttonForInput = document.querySelector(".input-btn");
const input = document.querySelector("input");

buttonForInput.onclick = function () {
  if (input.getAttribute("value") === "Some text") {
    input.setAttribute("value", "Another text");
  } else {
    input.setAttribute("value", "Some text");
  }
}


// Напишите код, который будет выводить alert с содержимым инпута (изначально в инпуте уже должно быть задан текст).
const alertBtn = document.querySelector(".alert-btn");
const alertText = document.querySelector(".alert-text");

alertBtn.onclick = function () {
  alert(alertText.getAttribute("value"));
}

// Напишите код, который будет выводить alert с содержимым инпута, возведенным в квадрат (для этого вам нужно создать инпут, в который пользователь будет вводить число).

const calcBtn = document.querySelector(".сalc-btn");
const inputNum = document.querySelector(".square-calc");

calcBtn.onclick = function () {
  alert(inputNum.value ** 2);
}

// 5. Вам необходимо создать два инпута с заданными значениями и кнопку, при нажатии на которую будет осуществляться обмен содержимым между двумя инпутами (значение первого инпута должно записаться во второй, а значение второго — в первый).

const inputText1 = document.querySelector(".change-text1");
const inputText2 = document.querySelector(".change-text2");
const changeBtn = document.querySelector(".change-btn");

changeBtn.onclick = function () {
  const inputValue = inputText1.value;
  const inputValue2 = inputText2.value;
  inputText1.value = inputValue2;
  inputText2.value = inputValue;
}

// 6. Напишите код, который будет при нажатии на кнопку менять текст в ней.

const changeTextOfBtn = document.querySelector('.change-text-btn');

changeTextOfBtn.onclick = function () {
  changeTextOfBtn.innerText = "New button name";
}

// 7. Напишите код, который будет при нажатии на кнопку менять цвет текста в инпуте (изначально в инпуте уже должно быть задан текст).

const changeColorBtn = document.querySelector('.change-color-btn');
const coloredInput = document.querySelector('.change-color');

changeColorBtn.onclick = function () {
  coloredInput.style.color = "green";
}