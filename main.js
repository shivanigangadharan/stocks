const oldPrice = document.getElementById('oldPrice');
const noOfStocks = document.getElementById('noOfStocks');
const newPrice = document.getElementById('newPrice');


const submitBtn = document.getElementById('submitBtn');


function showStatus() {
    var status;
    if (oldPrice.value > newPrice.value) {
        status = 'loss';
    }
    else if (oldPrice.value < newPrice.value) {
        status = 'profit';
    }
    else {
        status = 'same';
    }
    console.log('You made a', status, 'of Rs.', Math.abs((oldPrice.value * noOfStocks.value) - (newPrice.value * noOfStocks.value)));

}


submitBtn.addEventListener('click', showStatus);