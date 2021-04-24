let a = Boolean(Number('10')) + 1; //2  (true + 1 = 1 + 1 = 2)
let b = 'sub' + Number(false);//'sub0' ('sub' + 0 = 'sub0')
let c = 16 * '         91      ';//1456 ( 16 * 91 = 1456)
let d = true - 70;//-69 (1-70 = 69)
let e = Number(1 + String(1)) + 1;// 12 (Number('11') + 1 = 11 + 1 = 12)

console.log(a, b, c, d, e);


//========================================================

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum)

let sum2 = Object.values(salaries).reduce((acc, salary) => acc + salary, 0)

console.log(sum2)