// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

function arrayFill(symbol, elemNum) {
  let arr = [];
  for (let i = 0; i < elemNum; i++) {
    arr.push(symbol);
  }

  return arr;
}

console.log(arrayFill('x', 5));