// 11. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество) и вывести результат в консоль

const someArr = [1, 2, 3, 7, 6, 9];

let sumCalc = 0

for (const num of someArr) {
  sumCalc += num;
}

let result = sumCalc / someArr.length;

console.log(result);