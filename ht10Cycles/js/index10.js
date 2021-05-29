// 10. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

const arrToPow = [1, 2, 3, 4, 5];

let sumOfPow = 0;

for (const num of arrToPow) {
  sumOfPow += num ** 2;
}

console.log(sumOfPow);