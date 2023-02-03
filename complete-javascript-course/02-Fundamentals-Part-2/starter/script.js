'use strict'

// => {} = curly braces

// CHALLENGE 1

// const calcAverage = ( a , b, c ) => ( a + b + c)/3;
// let dolphinAverageScore = calcAverage(44, 23, 71);
// let koalaAverageScore = calcAverage(65, 54, 49); 

// const checkWinner = (dolphin, koala) => {
//     if(dolphin > koala *2) console.log(`Dolphin team won`);
//     else if (koala > dolphin * 2) console.log(`Koala team won`);
//     else console.log(`No team won...`);
// }

// checkWinner(dolphinAverageScore, koalaAverageScore);


// dolphinAverageScore=calcAverage(85,54,41);
// koalaAverageScore=calcAverage(23,34,27);

// checkWinner(dolphinAverageScore, koalaAverageScore);


// arr.push() => thêm 1 phần tử vào cuối mảng
// arr.unshift() => thêm 1 phần tử vào đầu mảng
// arr.pop() => xóa 1 phần tử ở cuối mảng
// arr.shift() => xóa 1 phần tử ở đầu mảng
// arr.indexOf(?) => return index của phần tử ?
// arr.includes(?) => return true/false khi kiểm tra trong mảng có phần tử ? không


// CHALLENGE 2

// let billValues = [125, 555, 44];
// let arrFinalBill = [];

// for (let x of billValues) {
//   let totalCount = x >= 50 && x <= 300 ? x + x * 0.15 : x + x * 0.2;
//   arrFinalBill.push(totalCount);
// }

// arrFinalBill.forEach((bill) =>
//   console.log("The final value with each bill values is: " + bill + "\n")
// ); 


// const obj = {
//   firstName: "Tuan",
//   lastName: "Pham Thanh",
//   birthYear: 1998,
//   job: "dev",
//   friend: ["cún", "dâu", "..."],
//   age: (birthYear) => {
//     return 2023 - birthYear;
//   },
//   calcAge: function () {
//     console.log(this); // this chỉ đối tượng obj chỉ dùng dc trong function () {}
//     return 2023 - this.birthYear;
//   }
// };

// const pushProp = prompt('What do you want to know about Me? Choose between firstName, lastName, age, job and ma friends'); 
//                 // return a text value when user clicks OK, otherwise it returns null.
// if (obj[pushProp]) console.log(obj[pushProp]); // => obj.job = obj['dev'];
// else console.log('Wrong request! Pls choose between firstName, lastName, age, job and ma friends !')

// add new prop to object => obj.? = ''; / obj[''] = '';
// obj.location = 'HCM';
// obj['pet'] = 'Husky';
// console.log(obj.age(1998)); // => obj['age''](1998)
// console.log(obj.calcAge());


// CHALLENGE 4
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for ( let i = 0 ; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip);
  totals.push(tip + bills[i]);
}

const calcAverage = (arr) => {
  let sum = 0;
  for ( let i = 0 ; i < arr.length ; i++) {
    sum += arr[i]
  }
  return sum / arr.length;
}
console.log(totals)

console.log('Total bill average is: ' + calcAverage(totals));
console.log("Total tip average is: " + calcAverage(tips));
