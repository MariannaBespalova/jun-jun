// 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(num) {
  let arr = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(getDivisors(42));