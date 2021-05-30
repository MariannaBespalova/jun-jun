// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arr9 = [1, 2, 3, 4, 5, 6, 7];

const reverseArr = []

for (let i = arr9.length - 1; i >= 0; i--) {
  reverseArr.push(arr9[i]);
}

console.log(reverseArr);