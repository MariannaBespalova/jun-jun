// Запросить у пользователя 2 числа (число, степень) после чего вывести ему результат во всплывающем окне

function powNum(mathOperation) {
  let num1 = +prompt("Введите число");
  let num2 = +prompt("Введите степень числа");
  if (typeof num1 === "number" &&
    typeof num2 === "number" &&
    !Number.isNaN(num1) &&
    !Number.isNaN(num2)) {
    alert(mathOperation(num1, num2))
  } else {
    alert("Only numbers allowed");
  }
}


function powFunc(num, degree) {
  return num ** degree;
}

function multiplay(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function modulus(num1, num2) {
  return `Remainder of ${num1} and ${num2} is ${num1 % num2}`;
}

powNum(powFunc);
powNum(multiplay);
powNum(division);
powNum(modulus);


