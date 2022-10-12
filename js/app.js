'use strict'

// const SalmonCookiesSales = document.getElementById('salesLocations');
// console.log(SalmonCookiesSales);

const salesTable = document.getElementById('salesLocations');
const salesHead = document.querySelector('thead');
const salesFoot = document.querySelector('tfoot');

let locationsArray = [];


let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];



function Locations(name, max, min, avg) {
  this.name = name,
    this.max = max,
    this.min = min,
    this.avg = avg,
    // this.listId = `${this.name}Sales.`
    this.dailyTotal = 0,
    this.hourSalesArray = [],
    this.getRandomCustomers = function () {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    locationsArray.push(this)
};
//math
Locations.prototype.generateCookiesSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let numberOfCookies = this.getRandomCustomers() * this.avg;
    this.hourSalesArray.push(Math.trunc(numberOfCookies));
    this.dailyTotal = this.dailyTotal + (Math.ceil(numberOfCookies));
  }
}
//table head
function renderTableHeader() {
  let th = document.createElement('th');
  th.textContent = ' ';
  salesTable.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    salesTable.appendChild(th);
  }
  let th2 = document.createElement('th');
  th2.textContent = ' Daily Total';
  salesTable.appendChild(th2);
}

//body or main
Locations.prototype.renderTableBody = function () {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  // this.renderTableHeader();
  this.generateCookiesSales();
  for (let i = 0; i < hours.length; i++) {
    let tableDate = document.createElement('td');
    tableDate.textContent = this.hourSalesArray[i];
    tr.appendChild(tableDate);
  }
  let td2 = document.createElement('td');
  td2.textContent = this.dailyTotal;
  tr.appendChild(td2);

  // this.renderTableFooter();
}


// total per hour for all locations
Locations.prototype.renderTableFooter = function () {
  for (let i = 0; i < hours.length; i++) {
    let allTotals = 0;
    for(let j = 0; j <locationsArray.length; j++){
      allTotals += locationsArray[j.hourSalesArray[i]];
    }
  }
  return allTotals
  console.log(allTotals)
}

renderTableHeader();



// name, max, min, avg
let seattle = new Locations('Seattle', 65, 23, 6.3);
// seattle.generateCookiesSales();
seattle.renderTableBody();

let tokyo = new Locations('Tokyo', 24, 3, 1.2);
// tokyo.generateCookiesSales();
tokyo.renderTableBody();

let dubai = new Locations('Dubai', 38, 11, 3.7);
// dubai.generateCookiesSales();
dubai.renderTableBody();


let paris = new Locations('Paris', 38, 20, 2.3);
// paris.generateCookiesSales();
paris.renderTableBody();


let lima = new Locations('Lima', 16, 2, 4.6);
// lima.generateCookiesSales();
lima.renderTableBody();





// Locations.prototype.renderLocationPage = function () {
//   let locationDiv = document.createElement('div');
//   // locationDiv.setAttribute('id', 'locationDiv');
//   salesTable.appendChild(locationDiv);
//   let locationData = document.createElement('ul');
//   ul.id = this.listId
//   locationData.innerText = `${this.name} Data`;
//   locationDiv.appendChild(locationData);


//   this.renderLocationPage();
// }

// Locations.prototype.renderList = function () {
//   let storeSales = document.getElementById(this.listId)
//   for (let i = 0; i < hours.length; i++) {
//     let numberOfCookies = this.getRandomCustomers() * this.avg;
//     this.hourSalesArray.push(Math.trunc(numberOfCookies));
//     this.dailyTotal = this.dailyTotal + numberOfCookies;
//     // console.log(`${hours[i]}: ${Location.hourSalesArray[i]} cookies sold`);
//     let listItem = document.createElement('li');
//     listItem.innerText = `${hours[i]}: ${this.hourSalesArray[i]} cookies sold`;
//     //last item  in renderlist 
//     locationData.appendChild(listItem);
//   }
// }

// // name, max, min, avg
// let seattle = new Locations('Seattle', 65, 23, 6.3);
// // seattle.generateCookiesSales();
// seattle.renderTableBody();

// let tokyo = new Locations('Tokyo', 24, 3, 1.2);
// // tokyo.generateCookiesSales();
// tokyo.renderTableBody();

// let dubai = new Locations('Dubai', 38, 11, 3.7);
// // dubai.generateCookiesSales();
// dubai.renderTableBody();


// let paris = new Locations('Paris', 38, 20, 2.3);
// // paris.generateCookiesSales();
// paris.renderTableBody();


// let lima = new Locations('Lima', 16, 2, 4.6);
// // lima.generateCookiesSales();
// lima.renderTableBody();

// console.log(seattle);
// console.log(tokyo);
// tokyo.renderTableBody();






// let seattle = {
//   name: 'Seattle',
//   max: 65,
//   min: 23,
//   avg: 6.3,
//   dailyTotal: 0,
//   hourSalesArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let seattleDiv = document.createElement('div');
// seattleDiv.setAttribute('id', 'seattleDiv');
// document.getElementById('salesLocations').appendChild(seattleDiv);
// let seattleData = document.createElement('ul');
// seattleData.innerText = `${seattle.name} Data`;
// seattleDiv.appendChild(seattleData);
// // seattleData.style.font

// for (let i = 0; i < hours.length; i++) {
//   let numberOfCookies = seattle.getRandomCustomers() * seattle.avg;
//   seattle.hourSalesArray.push(Math.trunc(numberOfCookies));
//   seattle.dailyTotal = seattle.dailyTotal + numberOfCookies;
//   // console.log(Math.trunc(seattle.dailyTotal))
// };
// // let seattleList = document.getElementById('seattleList')


// function listItem() {
//   for (let i = 0; i < hours.length; i++) {
//     console.log(`${hours[i]}: ${seattle.hourSalesArray[i]} cookies sold`);
//     let listItem = document.createElement('li');
//     listItem.innerText = `${hours[i]}: ${seattle.hourSalesArray[i]} cookies sold`;
//     seattleData.appendChild(listItem);
//   }
//   let listItem2 = document.createElement('li');
//     listItem2.innerText = `Total: ${Math.trunc(seattle.dailyTotal)}`;
//     seattleData.appendChild(listItem2);
// };
// listItem();


// // console.log(listItem());
// // console.log(Math.trunc(seattle.dailyTotal))

// let tokyo = {
//   name: 'Tokyo',
//   max: 24,
//   min: 3,
//   avg: 1.2,
//   dailyTotal: 0,
//   hourSalesArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let tokyoDiv = document.createElement('div');
// tokyoDiv.setAttribute('id', 'tokyoDiv');
// document.getElementById('salesLocations').appendChild(tokyoDiv);
// let tokyoData = document.createElement('ul');
// tokyoData.innerText = `${tokyo.name} Data`;
// tokyoDiv.appendChild(tokyoData);

// for (let i = 0; i < hours.length; i++) {
//   let numberOfCookies = tokyo.getRandomCustomers() * tokyo.avg;
//   tokyo.hourSalesArray.push(Math.trunc(numberOfCookies));
//   tokyo.dailyTotal = tokyo.dailyTotal + numberOfCookies;
//   // console.log(numberOfCookies)
// };
// let tokyoList = document.getElementById('tokyoList')

// function listItem2() {
//   for (let i = 0; i < hours.length; i++) {
//     // console.log(`${hours[i]}: ${tokyo.hourSalesArray[i]} cookies sold`);
//     let listItem2 = document.createElement('li');
//     listItem2.innerText = `${hours[i]}: ${tokyo.hourSalesArray[i]} cookies sold`;
//     tokyoData.appendChild(listItem2);
//   }
//   let listItem3 = document.createElement('li');
//     listItem3.innerText = `Total: ${Math.trunc(tokyo.dailyTotal)}`;
//     tokyoData.appendChild(listItem3);
// };
// listItem2();

// let dubai = {
//   name: 'Dubai',
//   max: 38,
//   min:11,
//   avg: 3.7,
//   dailyTotal: 0,
//   hourSalesArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let dubaiDiv = document.createElement('div');
// dubaiDiv.setAttribute('id', 'dubaiDiv');
// document.getElementById('salesLocations').appendChild(dubaiDiv);
// let dubaiData = document.createElement('ul');
// dubaiData.innerText = `${dubai.name} Data`;
// dubaiDiv.appendChild(dubaiData);

// for (let i = 0; i < hours.length; i++) {
//   let numberOfCookies = dubai.getRandomCustomers() * dubai.avg;
//   dubai.hourSalesArray.push(Math.trunc(numberOfCookies));
//   dubai.dailyTotal = dubai.dailyTotal + numberOfCookies;
//   // console.log(numberOfCookies)
// };
// let dubaiList = document.getElementById('dubaiList')

// function listItem3() {
//   for (let i = 0; i < hours.length; i++) {
//     console.log(`${hours[i]}: ${dubai.hourSalesArray[i]} cookies sold`);
//     let listItem3 = document.createElement('li');
//     listItem3.innerText = `${hours[i]}: ${dubai.hourSalesArray[i]} cookies sold`;
//     dubaiData.appendChild(listItem3);
//   }
//   let listItem4 = document.createElement('li');
//     listItem4.innerText = `Total: ${Math.trunc(dubai.dailyTotal)}`;
//     dubaiData.appendChild(listItem4);
// };
// listItem3();


// let paris = {
//   name: 'Paris',
//   max: 38,
//   min:20,
//   avg: 2.3,
//   dailyTotal: 0,
//   hourSalesArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let parisDiv = document.createElement('div');
// parisDiv.setAttribute('id', 'parisDiv');
// document.getElementById('salesLocations').appendChild(parisDiv);
// let parisData = document.createElement('ul');
// parisData.innerText = `${paris.name} Data`;
// parisDiv.appendChild(parisData);

// for (let i = 0; i < hours.length; i++) {
//   let numberOfCookies = paris.getRandomCustomers() * paris.avg;
//   paris.hourSalesArray.push(Math.trunc(numberOfCookies));
//   paris.dailyTotal = paris.dailyTotal + numberOfCookies;
//   // console.log(numberOfCookies)
// };
// let parisList = document.getElementById('parisList')

// function listItem4() {
//   for (let i = 0; i < hours.length; i++) {
//     console.log(`${hours[i]}: ${paris.hourSalesArray[i]} cookies sold`);
//     let listItem4 = document.createElement('li');
//     listItem4.innerText = `${hours[i]}: ${paris.hourSalesArray[i]} cookies sold`;
//     parisData.appendChild(listItem4);
//   }
//   let listItem5 = document.createElement('li');
//     listItem5.innerText = `Total: ${Math.trunc(paris.dailyTotal)}`;
//     parisData.appendChild(listItem5);
// };
// listItem4();

// let lima = {
//   name: 'Lima',
//   max: 16,
//   min:2,
//   avg: 4.6,
//   dailyTotal: 0,
//   hourSalesArray: [],
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// };

// let limaDiv = document.createElement('div');
// limaDiv.setAttribute('id', 'limaDiv');
// document.getElementById('salesLocations').appendChild(limaDiv);
// let limaData = document.createElement('ul');
// limaData.innerText = `${lima.name} Data`;
// limaDiv.appendChild(limaData);

// for (let i = 0; i < hours.length; i++) {
//   let numberOfCookies = lima.getRandomCustomers() * lima.avg;
//   lima.hourSalesArray.push(Math.trunc(numberOfCookies));
//   lima.dailyTotal = lima.dailyTotal + numberOfCookies;
//   // console.log(numberOfCookies)
// };
// let limaList = document.getElementById('limaList')

// function listItem5() {
//   for (let i = 0; i < hours.length; i++) {
//     console.log(`${hours[i]}: ${lima.hourSalesArray[i]} cookies sold`);
//     let listItem5 = document.createElement('li');
//     listItem5.innerText = `${hours[i]}: ${lima.hourSalesArray[i]} cookies sold`;
//     limaData.appendChild(listItem5);
//   }
//   let listItem6 = document.createElement('li');
//     listItem6.innerText = `Total: ${Math.trunc(lima.dailyTotal)}`;
//     limaData.appendChild(listItem6);
// };
// listItem5();

