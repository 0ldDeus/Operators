/*Задание №1*/

let a = 10;
let b = 5;
let c = 2;
let sum = a + b + c;
console.log(sum);
let b1 = (a + c) - b;
console.log(b1);
let multiplication = (a * b) / c;
console.log(multiplication);
let residue = a % b;
console.log(residue);

/*Задание №2*/

let x = 7;
x++ + ++x;
console.log(x);
x-- - --x;
console.log(x);

/*Задание №3*/

let d = 4;
let e = 5;
let sum1 = String(d + e);
let text = "The result is:" + sum1;
console.log(text);

/*Задание №4*/

let a2 = 12;
let b2 = 5;
let c2 = 3;

let result = a2 > b2 && a2 > 0 && b2 > 0;
console.log(result);
let result1 = c2 < 10 || c2 == 2;
console.log(result1);
let result2 = a2/c2 != 5;
console.log(result2);

/*Задание №5*/
// "==" Проверяет равенство значений без учета типа данных.
// "==="Проверяет равенство значений с учетом типа данных.
let a3 = 10;
let b3 = "10";
let c3 = a3 == b3;
console.log(c3);
let d3 = a3 ===b3;
console.log(d3);


/*Задание №6*/

let x1 = 9;
const resultx1 = ((x1 % 2 === 0 || x1 % 3 === 0) && x1 % 6 !== 0)
console.log(resultx1);

let y1 = 11;
const resulty1 = y1>10 || y1<5;
console.log(resulty1);