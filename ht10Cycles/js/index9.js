// 9. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива выведите ее в консоль

const arrCalc = [1, 2, 3, 4, 5];

let sum = 0

for (const num of arrCalc) {
  sum += num;
}

console.log(sum);