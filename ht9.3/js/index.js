// 5. Сделайте функцию isEven() (even — это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное — пусть функция возвращает true, если нечетное — false.

function isEven(num) {
  return num % 2 ? false : true;
}

console.log(isEven(9));

// 6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function getEvenNum(arr) {
  let newArr = [];

  for (const num of arr) {
    if (isEven(num)) newArr.push(num);
  }

  return newArr;
}

console.log(getEvenNum(arr));