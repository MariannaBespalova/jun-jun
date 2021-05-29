// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так — пусть функция возвращает true, если не так — false.

function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(0));

// 2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

const arr = [10, 1, -1, -10, 1192, 321, 312, 16, 6, -9, 33, -34, -1, 0, -0, 8, 8, 8, 9, 4, -2, -5, 2];

function arrOfRangedNumbers(arr) {
  let newArr = [];

  for (const num of arr) {
    if (isNumberInRange(num)) {
      newArr.push(num);
    }
  }

  return newArr;

}

console.log(arrOfRangedNumbers(arr));