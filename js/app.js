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
