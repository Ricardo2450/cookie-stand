'use strict'

const SalmonCookiesSales = document.getElementById('salesLocations');

console.log(SalmonCookiesSales);

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

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

let dubai = {
  name: 'Dubai',
  max: 38,
  min:11,
  avg: 3.7,
  dailyTotal: 0,
  hourSalesArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let dubaiDiv = document.createElement('div');
dubaiDiv.setAttribute('id', 'dubaiDiv');
document.getElementById('salesLocations').appendChild(dubaiDiv);
let dubaiData = document.createElement('ul');
dubaiData.innerText = `${dubai.name} Data`;
dubaiDiv.appendChild(dubaiData);

for (let i = 0; i < hours.length; i++) {
  let numberOfCookies = dubai.getRandomCustomers() * dubai.avg;
  dubai.hourSalesArray.push(Math.trunc(numberOfCookies));
  dubai.dailyTotal = dubai.dailyTotal + numberOfCookies;
  // console.log(numberOfCookies)
};
let dubaiList = document.getElementById('dubaiList')

function listItem3() {
  for (let i = 0; i < hours.length; i++) {
    console.log(`${hours[i]}: ${dubai.hourSalesArray[i]} cookies sold`);
    let listItem3 = document.createElement('li');
    listItem3.innerText = `${hours[i]}: ${dubai.hourSalesArray[i]} cookies sold`;
    dubaiData.appendChild(listItem3);
  }
  let listItem4 = document.createElement('li');
    listItem4.innerText = `Total: ${Math.trunc(dubai.dailyTotal)}`;
    dubaiData.appendChild(listItem4);
};
listItem3();


let paris = {
  name: 'Paris',
  max: 38,
  min:20,
  avg: 2.3,
  dailyTotal: 0,
  hourSalesArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let parisDiv = document.createElement('div');
parisDiv.setAttribute('id', 'parisDiv');
document.getElementById('salesLocations').appendChild(parisDiv);
let parisData = document.createElement('ul');
parisData.innerText = `${paris.name} Data`;
parisDiv.appendChild(parisData);

for (let i = 0; i < hours.length; i++) {
  let numberOfCookies = paris.getRandomCustomers() * paris.avg;
  paris.hourSalesArray.push(Math.trunc(numberOfCookies));
  paris.dailyTotal = paris.dailyTotal + numberOfCookies;
  // console.log(numberOfCookies)
};
let parisList = document.getElementById('parisList')

function listItem4() {
  for (let i = 0; i < hours.length; i++) {
    console.log(`${hours[i]}: ${paris.hourSalesArray[i]} cookies sold`);
    let listItem4 = document.createElement('li');
    listItem4.innerText = `${hours[i]}: ${paris.hourSalesArray[i]} cookies sold`;
    parisData.appendChild(listItem4);
  }
  let listItem5 = document.createElement('li');
    listItem5.innerText = `Total: ${Math.trunc(paris.dailyTotal)}`;
    parisData.appendChild(listItem5);
};
listItem4();

let lima = {
  name: 'Lima',
  max: 16,
  min:2,
  avg: 4.6,
  dailyTotal: 0,
  hourSalesArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let limaDiv = document.createElement('div');
limaDiv.setAttribute('id', 'limaDiv');
document.getElementById('salesLocations').appendChild(limaDiv);
let limaData = document.createElement('ul');
limaData.innerText = `${lima.name} Data`;
limaDiv.appendChild(limaData);

for (let i = 0; i < hours.length; i++) {
  let numberOfCookies = lima.getRandomCustomers() * lima.avg;
  lima.hourSalesArray.push(Math.trunc(numberOfCookies));
  lima.dailyTotal = lima.dailyTotal + numberOfCookies;
  // console.log(numberOfCookies)
};
let limaList = document.getElementById('limaList')

function listItem5() {
  for (let i = 0; i < hours.length; i++) {
    console.log(`${hours[i]}: ${lima.hourSalesArray[i]} cookies sold`);
    let listItem5 = document.createElement('li');
    listItem5.innerText = `${hours[i]}: ${lima.hourSalesArray[i]} cookies sold`;
    limaData.appendChild(listItem5);
  }
  let listItem6 = document.createElement('li');
    listItem6.innerText = `Total: ${Math.trunc(lima.dailyTotal)}`;
    limaData.appendChild(listItem6);
};
listItem5();
