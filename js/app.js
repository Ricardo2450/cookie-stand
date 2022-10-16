'use strict'


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
  th2.textContent = 'Total';
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
  
}

// function elementMaker(){
//   let trName = document.createElement()
// }


// total per hour for all locations
function renderTableFooter () {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);

  
  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < locationsArray.length; j++) {
      hourTotal += locationsArray[j].hourSalesArray[i];
    }
    let hourTotalFooter = document.createElement('td');
    hourTotalFooter.textContent = hourTotal ;
    tr.appendChild(hourTotalFooter);
    
    
    // console.log(hours[i] + '; ' + hourTotal);
  }
  let footerDailyTotal = document.createElement('td');
  let totalFooterSales = 0;
  for (let i = 0; i < locationsArray.length; i++) {
    totalFooterSales += locationsArray[i].dailyTotal;
  }
  footerDailyTotal.textContent = totalFooterSales;
  tr.appendChild(footerDailyTotal);
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

renderTableFooter();


// Working with form


// 1. window into the dom
let form = document.querySelector(`form`);
// console.log(form);


//3 Declare and event handler (a function)

let handleSubmit = function(event) {
  event.preventDefault();
  // console.log('the form submitted');
  // console.log(event.target.newStoreName.value);

  let name = event.target.newStoreName.value;
  let min = parseInt(event.target.mincookiesale.value);
  let max = parseInt(event.target.maxcookiesale.value);
  let avg = parseInt(event.target.avgcookiesale.value);
  // console.log(event.target.avgcookiesale);



  // function Locations(name, max, min, avg);
let newStore = new Locations(name, max, min, avg);
// console.log(newStore);
  let salesLocations = document.getElementById('salesLocations');
  salesLocations.removeChild(salesLocations.lastChild);
newStore.renderTableBody();
renderTableFooter();
event.target.name.value = null;
event.target.mincookiesale.value = null;
event.target.maxcookiesale.value = null;
event.target.avgcookiesale.value = null;
}



// 2. add event listener
// what type of event? submit

form.addEventListener( `submit`, handleSubmit)

