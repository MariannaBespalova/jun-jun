// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

let arr6 = [];


for (let i = 1; i <= 5; i++) {
  str = '';

  for (let j = 1; j <= i; j++) {
    str += i;
  }
  arr6.push(str);
}

console.log(arr6)