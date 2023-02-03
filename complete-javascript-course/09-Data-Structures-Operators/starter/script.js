'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()}  to ${to.slice(0, 3).toUpperCase()} at (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data! */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [key, values] of rows.entries()) {
    const [first, second] = values.toLowerCase().trim().split('_');
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(key + 1)}`);
  }
});

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[1]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(1, -1));
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat ');
//   else console.log('You got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

// const email = 'hello@tuan.io';
// const loginEmail = '  Hello@Tuan.Io \n';
// console.log(loginEmail.toLowerCase().trim().includes('@'));

// // Comparing email

// const price = '288,97&';
// const priceUS = price.replace('&', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); //replace first door they in this string
// console.log(announcement.replace(/door/g, 'gate')); //replace all dor in this string => /g = global => regular expression

// console.log('a+very+nice+string'.split('+'));
// console.log('Thanh Tuan'.split(' '));

// const [firstName, lastName] = 'Thanh Tuan'.split(' '); //convert string to array
// const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' '); // convert array to string
// console.log(newName);

// function capitalizeName (name) {
//   const names = name.split(' ');
//   let nameUpper = [];

//   for( let n of names ) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0],n[0].toUpperCase())); // another way
//   }
//   console.log(nameUpper.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('thanh tuan');

// // Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+')); // this string long 25
// console.log('Thanh Tuan'.padEnd(20, '-')); // but this long only 20

// // Repeat
// const message2 = 'Bad weather ... All departures delayed ... \n';
// console.log(message2.repeat(5));
// const planesInline = (n) => {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }

// planesInline(10);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.

const events = new Set(gameEvents.values());
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] At ${min} min : ${event}`);
}

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   getOder: function (startIndex, endIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[endIndex]];
//   },
//   orderDelivery: function (obj) {
//     // console.log(obj)
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients)
//   },

//   // ES6 enhanced object literals
//   openingHours,
// };

// const question = new Map([
//   ['question', 'What is the best programing language in the world ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   ['Correct', 3],
//   ['Javascript', 4],
//   [true, 'Correct Answer'],
//   [false, 'Try again!']
// ]);
// console.log(question);

// // convert object to map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app

// console.log(question.get('question'));
// for ( const [key, value] of question) {
//   if( typeof key === 'number') console.log(`Answer ${key}: ${value}`);

// }
// const answer = Number(prompt('Your answer'));

// console.log(answer);
// console.log(question.get(question.get('Javascript') === answer));

// // convert map to array

// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// // const rest = new Map();
// // rest.set('name', 'Classico Italino');
// // rest.set(1, 'Firenze, Italy');
// // console.log(rest.set(2, 'Lisbon, Portugal'))

// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open :D')
// //   .set(false, 'We are closed T_T');

// //   // console.log(rest.get('name'));
// //   // console.log(rest.get('categories'));
// //   // console.log(rest.get(1));
// // const time = 21;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// // console.log(rest.has('categories')); // expect true;
// // rest.delete(2);
// // rest.clear();
// // const arr = [1,2];
// // rest.set(arr, 'Test');
// // console.log(rest.get(arr));
// // console.log(rest);
// // console.log(rest.size);

// // const ingredients = [prompt('Let\'s make paste! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];

// // restaurant.orderPasta(...ingredients);

// const newMenu = [...restaurant.mainMenu, 'garlic'];
// // console.log(newMenu);

// // join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);
// // for ( const [item] of menu.entries()) {
// for (const [index, value] of menu.entries()) {
//   // item[0] : index in each element
//   // item[1] : value in each element
//   // console.log(`${item[0] + 1}: ${item[1]}`);
//   console.log(`${index}: ${value}`);
// }
// console.log(menu);

// for (const item in menu) {
//   // item : index of each element
//   console.log(`${item}: ${menu[item]}`);
// }

// // Object, SPREAD on right side of =
// const newRestaurant = {
//   ...restaurant,
//   founder: 'Tuấn Phạm Thanh',
//   release: '2022',
// };
// // console.log(newRestaurant);

// // REST, because on LEFT side of = and must be last element
// const [ab, bc, ...others] = [1, 2, 3, 4, 5];
// // console.log(ab,bc, others);

// // Nested destructuring

// const [starter, mainCourse] = restaurant.getOder(2, 0);

// // console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// // console.log(i, j ,k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r)

// let a = 100;
// let b = 999;

// const obj = { a: 1, b: 2, c: 3 };

// ({ a, b } = obj);

// // console.log(a, b);

// const {
//   fri: { open: open, close: close },
// } = restaurant.openingHours;

// // console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   staterIndex: 2,
// });

// // `${... ?} => not working => đó là bởi vì nó k phải là nơi mong đợi nhiều giá trị dc phân tách bằng dấu phẩy
// // Spread operator => phân tách giá trị bằng dấu phẩy thường là ở việc chuyển các đối số (argument) vào 1 hàm hoặc khi xây dựng 1 mảng mới

// // CHALLENGE 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski'
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze'
//     ]
//   ],
//   score: '4:0',
//   scored: ['Lewandowki', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// }
// // // 1.
// // const [players1, players2] = game.players;

// // // 2.
// // const [gk, fieldPlayers] = players1;

// // // 3.
// // const allPlayers = [...players1, ...players2];

// // // 4.
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // // 5.
// // const { odds: {team1, x:draw, team2} } = game;

// // // 6.
// // const printGoals = function (...players) {
// //   console.log(players.length + 'Goals were scored');
// // }

// // printGoals(...game.scored);

// // // 7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

// // CHALLENGE 2

// // 1.
// for (const [i,player] of game.scored.entries()) {
//   console.log(`Goal ${i+1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for(const [team,odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
//   console.log(`Odd off ${teamStr} ${odd}`);
// }

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('vegetable'));
// ordersSet.add('Garlic');
// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);
// // SET is iterable => for (const order of ordersSet) console.log(order);
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
