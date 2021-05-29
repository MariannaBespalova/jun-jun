// Запросить у пользователя 2 числа (число, степень) после чего вывести ему результат во всплывающем окне

function powNum(mathOperation) {
  let num = +prompt("Введите число");
  let degree = +prompt("Введите степень числа");
  if (typeof num === "number" &&
    typeof degree === "number" &&
    !Number.isNaN(num) &&
    !Number.isNaN(degree)) {
    alert(powFunc(num, degree))
  } else {
    alert("Only numbers allowed");
  }
}


function powFunc(num, degree) {
  return num ** degree;
}

powNum(powFunc);