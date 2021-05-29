// 3. Сделайте функцию getDigitsSum (digit — это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num) {
  const arrOfStr = num.toString().split('');
  const arrOfDigits = arrOfStr.map(Number);

  let sum = 0;
  for (const digit of arrOfDigits) {
    sum += digit;
  }

  return sum;

}

console.log(getDigitsSum(45));

// 4. Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

const range = {
  from: 1,
  to: 2021
}

function getRangedYars(range) {
  let rangedArr = []

  for (let i = range.from; i < range.to; i++) {
    if (getDigitsSum(i) === 13) {
      rangedArr.push(i)
    }
  }

  return rangedArr;

}

console.log(getRangedYars(range));
