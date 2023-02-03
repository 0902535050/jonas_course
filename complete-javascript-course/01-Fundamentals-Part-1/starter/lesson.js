// Undefined là 1 giá trị được lấy bởi 1 biến chưa được khai báo = empty value

// CHALLENGE 1&2

// let markInfo = {
//     weight: 78,
//     height: 1.69
// }
// let johnInfo = {
//     weight: 92,
//     height: 1.95
// }

// const markBMI = markInfo.weight/markInfo.height**2;
// const johnBMI = johnInfo.weight/johnInfo.height**2;

// const comparisonBMI = markBMI - johnBMI > 0 ? 'Mark BMI higher than John' : 'John BMI higher than Mark';

// console.log("Mark BMI is: " + markBMI + '\n' + "John BMI is: " + johnBMI + "\n" + comparisonBMI);


// CHALLENGE 3

// const dolphinsScore = [ 96, 108, 89 ];
// const koalasScore = [ 88, 91, 110 ];

// let sumDolScore = sumKoaScore = 0;

// for (let x of dolphinsScore) {
//   sumDolScore += x;
// }
// for (let x of koalasScore) {
//   sumKoaScore += x;
// }

// const dolAverage = sumDolScore / 3;
// const koaAverage = sumKoaScore / 3;
// const checkWinner = dolAverage - koaAverage > 0 ? "Dolphin team won" : "Koala team won";
// console.log("Dolphin score is : " + dolAverage + "\n" + "Koala score is : " + koaAverage + '\n' + checkWinner);

    // BONUS 1
// const dolphinsScore = [ 97, 112, 101 ];
// const koalasScore = [ 109, 95, 123 ];

// let sumDolScore = sumKoaScore = 0;

// for (let x of dolphinsScore) {
//   sumDolScore += x;
// }
// for (let x of koalasScore) {
//   sumKoaScore += x;
// }

// const dolAverage = sumDolScore / 3;
// const koaAverage = sumKoaScore / 3;
// if(dolAverage > koaAverage && dolAverage >= 100) console.log('The winner is Dolphin team');
// else if (dolAverage < koaAverage && koaAverage >= 100) console.log("The winner is Koala team");
// else console.log("No team win the trophy");

    // BONUS 2
const dolphinsScore = [ 97, 112, 101 ];
const koalasScore = [ 109, 95, 106 ];

let sumDolScore = sumKoaScore = 0;

for (let x of dolphinsScore) {
  sumDolScore += x;
}
for (let x of koalasScore) {
  sumKoaScore += x;
}

const dolAverage = sumDolScore / 3;
const koaAverage = sumKoaScore / 3;

if(dolAverage > koaAverage && dolAverage >= 100) console.log('The winner is Dolphin team');
else if (dolAverage < koaAverage && koaAverage >= 100) console.log("The winner is Koala team");
else if (dolAverage === koaAverage & koaAverage >= 100) console.log("Two team draw !")
else console.log("No team win the trophy");


// CHALLENGE 4

let billValues = [ 275, 40, 430 ];
let arr = [];

for (let x of billValues) {
//   if(x >= 50 && x <= 300) totalCount = x + x * 0.15;
//   else totalCount = x + x * 0.2;
  let totalCount = x >= 50 && x <= 300 ? x + x * 0.15 : x + x * 0.2;
  arr.push(totalCount);
}

arr.forEach((bill) => console.log("The final value with each bill values is: " + bill + "\n")); 