'use strict'

const SalmonCookiesSales = document.getElementById('salesLocations');

console.log(SalmonCookiesSales);

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.'];

let seattle = {
  name: 'Seattle',
  max: 65,
  min: 23,
  avg: 6.3,
  dailyTotal: 0,
  hourSalesArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let seattleDiv = document.createElement('div');
seattleDiv.setAttribute('id', 'seattleDiv');
document.getElementById('salesLocations').appendChild(seattleDiv);
let seattleData = document.createElement('ul');
seattleData.innerText = `${seattle.name} Data`;
seattleDiv.appendChild(seattleData);
// seattleData.style.font

for (let i = 0; i < hours.length; i++) {
  let numberOfCookies = seattle.getRandomCustomers() * seattle.avg;
  seattle.hourSalesArray.push(Math.trunc(numberOfCookies));
  seattle.dailyTotal = seattle.dailyTotal + numberOfCookies;
  // console.log(Math.trunc(seattle.dailyTotal))
};
let seattleList = document.getElementById('seattleList')


function listItem() {
  for (let i = 0; i < hours.length; i++) {
    console.log(`${hours[i]}: ${seattle.hourSalesArray[i]} cookies sold`);
    let listItem = document.createElement('li');
    listItem.innerText = `${hours[i]}: ${seattle.hourSalesArray[i]} cookies sold`;
    seattleData.appendChild(listItem);
  }
  let listItem2 = document.createElement('li');
    listItem2.innerText = `Total: ${Math.trunc(seattle.dailyTotal)}`;
    seattleData.appendChild(listItem2);
};
listItem();


// console.log(listItem());
// console.log(Math.trunc(seattle.dailyTotal))

let tokyo = {
  name: 'Tokyo',
  max: 24,
  min: 3,
  avg: 1.2,
  dailyTotal: 0,
  hourSalesArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let tokyoDiv = document.createElement('div');
tokyoDiv.setAttribute('id', 'tokyoDiv');
document.getElementById('salesLocations').appendChild(tokyoDiv);
let tokyoData = document.createElement('ul');
tokyoData.innerText = `${tokyo.name} Data`;
tokyoDiv.appendChild(tokyoData);

for (let i = 0; i < hours.length; i++) {
  let numberOfCookies = tokyo.getRandomCustomers() * tokyo.avg;
  tokyo.hourSalesArray.push(Math.trunc(numberOfCookies));
  tokyo.dailyTotal = tokyo.dailyTotal + numberOfCookies;
  // console.log(numberOfCookies)
};
let tokyoList = document.getElementById('tokyoList')

function listItem2() {
  for (let i = 0; i < hours.length; i++) {
    // console.log(`${hours[i]}: ${tokyo.hourSalesArray[i]} cookies sold`);
    let listItem2 = document.createElement('li');
    listItem2.innerText = `${hours[i]}: ${tokyo.hourSalesArray[i]} cookies sold`;
    tokyoData.appendChild(listItem2);
  }
  let listItem3 = document.createElement('li');
    listItem3.innerText = `Total: ${Math.trunc(tokyo.dailyTotal)}`;
    tokyoData.appendChild(listItem3);
};
listItem2();
