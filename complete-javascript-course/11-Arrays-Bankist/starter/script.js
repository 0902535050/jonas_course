'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FILTER
// const withdrew = movements.filter(item => item < 0);
// console.log(withdrew);
// REDUCE

// find maximum value with reduce

// const max = movements.reduce((acc, mov, i) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]); //set default value của acc là phần tử đầu tiên của mảng movements

// console.log(max);

//////////////////////// BANKIST PROJECT

// MAP
const createUserName = accounts => {
  accounts.forEach((value, key) => {
    const username = value.owner
      .toLowerCase()
      .split(' ')
      .map(item => item[0])
      .join('');
    value.username = username;
    console.log(username);
  });
};
createUserName(accounts);
console.log(accounts);

const calcPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur, i, arr) => {
    // console.log(`Iteration ${i}: ${acc}`);
    return acc + cur;
  }, 0); // set default value of acc = 0;
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(item => {
      // console.log(item);
      return item > 1 && item < 10;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const displayMovements = acc => {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  acc.movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html); // afterbegin => thêm vào đằng trc phần tử đầu tiên
    //beforeend => thêm vào đằng sau phần tử đầu tiên
  });
};

// EVENT HANDLER
let currentUser;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN SUCCESS');
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '' && inputLoginPin.blur();

    // Display movements
    displayMovements(currentUser);

    // Display balance
    calcPrintBalance(currentUser);

    // Display summary
    calcDisplaySummary(currentUser);

    // Display balance date
    labelDate.textContent = `${new Date().toLocaleDateString()}`;
  } else console.log('Something went wrong!');
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc =>
      acc.username === inputTransferTo.value &&
      currentUser.username !== inputTransferTo.value
  );
  let money = [];
      receiverAcc.moneyReceive = money.push({
        amountReceive: amount,
        perSent: currentUser.username,
        perReceive: inputTransferTo.value,
      });

      console.log(receiverAcc);
  // if (receiverAcc.moneyReceive) {
  //   receiverAcc.moneyReceive = money.push({
  //     amountReceive: amount,
  //     perSent: currentUser.username,
  //     perReceive: inputTransferTo.value,
  //   });

  //   console.log(receiverAcc);
  // } else {
  //   receiverAcc.moneyReceive = money.push({
  //     amountReceive: amount,
  //     perSent: currentUser.username,
  //     perReceive: inputTransferTo.value,
  //   });
  //   console.log(receiverAcc);
  // }
});

// // FIND
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const results = movements.map((movement, i) => `Movement ${i + 1}: You ${movement > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(movement)}`);

// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov * 2);
// }
// console.log(movementsUSDFor);
// console.log(results);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// // SLICE
// console.log(arr.slice(0, 2)); //get index from 0 <= ? < 2
// console.log(arr.slice(2)); //get index from 2
// console.log(arr.slice(-2)); //get 2 last index
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// console.log(arr.splice(2)); // trích xuất những phần tử từ vị trí index = 2 thành 1 mảng mới
// console.log(arr.splice(-1));
// console.log(arr); // mảng sau khi trích xuất chỉ còn lại 2 phần tử đầu

// // REVERSE
// console.log(movements.reverse());

// console.log(arr[0]);
// console.log(arr.at(0));

// // CONCAT
// console.log(movements.concat(arr));
// console.log([...movements, ...arr]);

// console.log(movements.join(' - '));

// // Getting last array element
// console.log(movements[movements.length-1]);
// console.log(movements.at(-1));

// console.log('jonas'.at(3));

// console.log('--------FOR OF---------');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('--------FOR EACH---------');
// movements.forEach((movement, i, arr) => {
//   // 0: function(200)
//   // 1: function(450)
//   // 2: function(400)
//   // ...
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// console.log('--------MAP---------');

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log(currencies);
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });
// console.log('--------SET---------');

// const currenciesUnique = new Set(['USD', 'USD', 'EURO', 'VND', 'GBP', 'USD']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _ , map) => {
//   // console.log(`${key}: ${value}`); // SET don't have Key
//    console.log(`${value}: ${value}`); // SET don't have Key
// });
