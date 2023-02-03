'use strict';

// const bookings = [];

// const createBooking = function (fightNum, numPassengers = 5, price = 1999 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         fightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH12345', 2, 900);
// createBooking('LH12345', undefined, 3900);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 123213213124,
// }

// const checkIn = (flightNum, passenger) => {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;

//     if(passenger.passport === 123213213124) alert('Check In');
//     else alert('Wrong passport!');
// }

// // checkIn(flight, jonas)
// // console.log(flight);
// // console.log(jonas);

// const newPassport = (person) => {
//     person.passport = Math.trunc(Math.random() * 1000000000)
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = (str) => {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = (str) => {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher - order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = () => {
//     console.log('hello')
// }
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey'); //stored call back function in greeterHey
// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hello')('Tuan');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hey')('Tuan Pham Thanh');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(name, flightNum) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({
//       fightDetail: `${this.iataCode} ${flightNum}`,
//       customerName: name,
//     });
//   },
// };

// lufthansa.book('Tuan Pham Thanh', 903);
// console.log(lufthansa);

// const euroWings = {
//   airline: 'Euro Wings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // thằng book copy lufthansa.book nhưng nó không còn là method này nữa

// // Does not work
// // book('Tuan', 23); // book() này bh là regular function call và từ khóa this trỏ đến undefined

// // dùng call, apply & bind để solve problem này

// book.call(euroWings, 'Tuan Thanh', 321); // gọi book function với this keyword dc đặt thành euroWings
// // => point tới euroWings

// // apply method
// const flightData = ['Tuan 2', 333];
// const flightData1 = ['Tuan 1', 111];

// book.apply(euroWings, flightData);
// book.call(euroWings, ...flightData1)

// // bind method

// const bookEW = book.bind(euroWings, 'Tuan Thanh Pham');
// bookEW(666);
// bookEW(888);
// bookEW(555);

// console.log(euroWings);

// // with event listener

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this)
//     this.planes++;
//     console.log(this.planes)
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // partial application
// const addTax = (rate, value) => value + value*rate;
// console.log(addTax(10, 100));
// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(1000));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value*rate;
//     }
// }

// const addVat2 =  addTaxRate(0.23);
// console.log(addVat2(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


// const runOnce = function () {
//     console.log('This will never run again');
// }
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

let f;
const g = function () {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
const h = function () {
    const b = 1000;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
// Re-assign f fn
h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
    const perGroup = n/3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180,3);

///////////////////////////////////////
// Coding Challenge #2
/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

