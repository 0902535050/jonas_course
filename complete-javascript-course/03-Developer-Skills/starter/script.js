// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM

// We work for a company building a smart home thermometer.
// Our most recent rask is this: "Given an array off temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes the might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What is a sensor error? And what to do?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// = Find max value in temp array
// - Find  min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTemAmplitude = (temps1, temps2) => {
//   const temps = temps1.concat(temps2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTemAmplitude(temperatures, ["a", "b", "c", "d"]);

// console.log(amplitude);

// max = 3, 5 > 3 = true => max = 5
// max = 5, 6 > 5 = true => max = 6
// max = 6, 7 > 6 = true => max = 7

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! just merge two arrays
// 2. Breaking up into sub-problems
// - Merge 2 arrays

// const measureKelvin = () => {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degrees celsius: "), // thus return a string value !
//   };
//   console.log(measurement);
//   console.table(measurement);
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// CHALLENGE 1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}*C in day ${i + 1} \n`;
  }
  console.log(str);
};

printForecast(data1);
