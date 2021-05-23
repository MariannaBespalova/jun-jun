// Запрашиваем у пользователя число — с помощью prompt 
// Запрашиваем у пользователя степень в которую это число нужно возвести —  с помощью prompt
// Создаем функцию которая принимает 2 аргумента (число, степень)
// Задаем аргументу который принимает степень значение по умолчанию = 1
// Внутри функции нужно написать проверку if ( ) если аргументы не являются числами завершить функцию с указанием того, что пользователь ввел неправильные данные, например (return ‘some error’)
// Если проверка прошла успешно, то возвести число в степень (работаем с аргументами функции)
// Вернуть результат выполнения функции и завершить ее
// Результат вызова функции записать в переменную и вывести пользователю через alert()

let userNum = +prompt("Введите число");
let userPow = +prompt("Введите степень числа");

function mathPow(num, pow = 1) {
  if (Number.isNaN(num) || Number.isNaN(pow)) {
    return "Only numbers";
  }
  return num ** pow;
}

let result = mathPow(userNum, userPow);
alert(result);


// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:

// строку 
// число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа) 
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.

// Результат вызова функции нужно вывести в консоль — после завершения функции.
// Например:

// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

// Вызов padString(‘hello’, 2) вернет ‘he’

// P.S. Если число меньше, чем размер введенной строки, нужно строку обрезать при помощи метода substr


function pudString(string, num, char = "*", isStart = true) {
  let result;
  const charNum = num - string.length;
  if (string.length < num && char !== "" && isStart) {
    result = string + createChars(charNum, char);
  } else if (string.length < num && char !== "" && !isStart) {
    result = createChars(charNum, char) + string;
  }
  return result || string;
}

result = pudString("кошка", 8, "%", false);

console.log(result);

function createChars(charQuantity, char) {
  let stringOfChars = "";
  for (let i = 0; i < charQuantity; i++) {
    stringOfChars += char[0];
  }
  return stringOfChars;
}


function padStr(str, strLength, symbol = "*", isStart = false) {
  if (typeof str !== 'string') return 'str param should be a String type';
  if (typeof strLength !== 'number') return 'strLength param should be a Number type';
  if (str.length >= strLength) return strLength.substr(0, num);
  if (symbol.length > 1) return 'Symbol should be only 1 char';

  const symbolsQty = strLength - str.length;
  let localSymbols = '';

  for (let i = 0; i < symbolsQty; i++) {
    localSymbols += symbol
  }

  return isStart ? str + localSymbols : localSymbols + str;
}

result = padStr("собака", 8, "%", true);

console.log(result);