
// Вам нужно запросить у пользователя число. Добавить условие при котором число будет выводиться (через alert) с правильным словом: «год», «года» или «лет». Т.е. «29 лет» или «4 года».

// Ограничений по возрасту — нет, 0 тоже подходит.

// Также сделайте простую проверку, что пользователь ввел число.

let randomNum = +prompt("Введите любое число");

if (Number.isNaN(randomNum)) {
  confirm("Only numbers are allowed");
} else if (randomNum % 10 >= 5 && randomNum % 10 <= 9 || randomNum % 10 === 0 || randomNum % 100 >= 11 && randomNum % 100 <= 14) {
  alert(`${randomNum} лет`);
} else if (randomNum % 10 === 1) {
  alert(`${randomNum} год`);
} else {
  alert(`${randomNum} годa`);
}

