// 6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

let arrRandom = []

for (let i = 0; i < 10; i++) {
  arrRandom.push(+(Math.random().toFixed(2)))
}

console.log(arrRandom);