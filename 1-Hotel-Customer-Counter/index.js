let counterNumber = document.getElementById('counterNumber');
let previousCustomer = document.getElementById('previousCustomer');
let totalCustomer = document.getElementById('totalCustomer');

let counter = 0;
let TotalCustomerCounter = 0;
counterNumber.innerText = counter;
totalCustomer.innerText += TotalCustomerCounter;

function increment() {
    counter += 1;
    counterNumber.innerText = counter;
}

function save(){
    previousCustomer.textContent += counter + ' - ';

    TotalCustomerCounter = parseInt(TotalCustomerCounter+counter);
    totalCustomer.innerText = "Total Customers: "+TotalCustomerCounter;

    counter = 0;
    counterNumber.innerText = counter;    
}