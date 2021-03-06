var oldPrice;
var noOfStocks = document.getElementById('noOfStocks');
var newPrice;
const submitBtn = document.getElementById('submitBtn');
var result = document.getElementById('result');
var percentage = document.getElementById('percentage');

function handleChangeO(e) {
    oldPrice = parseInt(e);
}

function handleChangeN(p) {
    newPrice = parseInt(p);
}

function showStatus(event) {
    event.preventDefault();
    if (oldPrice == undefined || newPrice == undefined || noOfStocks == undefined) {
        alert('Please enter values for all 3 inputs.');
        return 0;
    }
    if (oldPrice < 0 || newPrice < 0 || parseInt(noOfStocks.value) < 0) {
        alert('Please enter valid inputs.');
        return 0;
    }
    console.log('noofsts = ', typeof (parseInt(noOfStocks.value)));
    console.log('You made a', oldPrice > newPrice ? 'loss' : 'profit', 'of Rs.', Math.abs((oldPrice * parseInt(noOfStocks.value)) - (newPrice * parseInt(noOfStocks.value))));
    result.innerText = ("You made a ") + (oldPrice > newPrice ? ' loss ' : 'profit ') + (' of Rs. ') + (Math.abs((oldPrice * parseInt(noOfStocks.value)) - (newPrice * parseInt(noOfStocks.value))));
    percentage.innerText = ("The ") + (oldPrice > newPrice ? ' loss ' : 'profit ') + ("percentage is ") + parseFloat(((Math.abs((oldPrice * parseInt(noOfStocks.value)) - (newPrice * parseInt(noOfStocks.value)))) / oldPrice) * 100).toFixed(2) + ("%");
}

submitBtn.addEventListener('click', showStatus);