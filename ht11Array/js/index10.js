// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr10 = [[1, 2, 3], [4, 5], [6]];

let sum10 = 0;



for (const elem of arr10) {
  for (const item of elem) {
    sum10 += item;
  }
}


let su = 0;

for (let i = 0; i < arr10.length; i++) {
  for (let j = 0; j < arr10[i].length; j++) {
    su += arr10[i][j]
  }
}


console.log(sum10, su);