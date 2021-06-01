// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

let arr14 = [5, 6, 7, 8, 9];

let result14 = arr14.reduce((acc, elem) => {
  return acc += elem;
})

console.log(result14);