var oldPrice;
var noOfStocks = document.getElementById('noOfStocks');
var newPrice;
const submitBtn = document.getElementById('submitBtn');

function handleChangeO(e) {
    oldPrice = parseInt(e);
}

function handleChangeN(p) {
    newPrice = parseInt(p);
}

function showStatus() {
    console.log('You made a', oldPrice > newPrice ? 'loss' : 'profit', 'of Rs.', Math.abs((oldPrice * noOfStocks.value) - (newPrice * noOfStocks.value)));
}

submitBtn.addEventListener('click', showStatus);