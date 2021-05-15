// Необходимо построить пирамиду при помощи символа *. Для этого вам нужно запросить у пользователя число, которое будет количеством ярусов и  высотой вашей пирамиды. Вся пирамида должна быть одной строкой, при этом важно учесть пробелы перед символами * в каждом ярусе (кроме последнего) для того, чтобы пирамида была выровнена по центру. В итоге alert или console.log должен выводить такую пирамиду:


let randomNum = +prompt("Введите число");

if (!Number.isNaN(randomNum) && randomNum !== 0 && randomNum > 0) {
  let str = '';
  for (let i = 0; i < randomNum; i++) {
    for (let j = 0; j <= randomNum - i; j++) {
      str += ' ';
    }

    for (let n = 0; n <= i * 2; n++) {
      str += "*";
    }
    str += '\n';

  }
  console.log(str);
} else {
  alert("Only numbers greater than zero");
}




