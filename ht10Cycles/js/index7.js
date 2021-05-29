// 7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

let arrRand = [];

for (let i = 0; i < 10; i++) {
  arrRand.push(+(Math.random() * 10).toFixed(0))
}

console.log(arrRand);