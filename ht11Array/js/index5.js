// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.


let arrX = [];

let sum = '';

for (let i = 0; i < 5; i++) {
  arrX.push(sum += 'x');
}

console.log(arrX);