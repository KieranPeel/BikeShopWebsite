function getDiscountedRent() {
    var discount = 0.8; // temp
    var date = new Date();
    var month = date.getMonth();
    var season = 1;
    switch (month) {
        case 11:
        case 0:
        case 1:
            season = 0.85;
            break;
        case 2:
        case 3:
        case 4:
            season = 1.15;
            break;
        case 5:
        case 6:
        case 7:
            season = 1.5;
            break;
        case 8:
        case 9:
        case 10:
            season = 1.25;
            break;
    }
    console.log(season);
    setTimeout(function () {
        var discountCode = document.getElementById('disCode').value
        var noDiscount = document.getElementById('nodiscountprice').innerHTML; // Get price without discount
        if (discountCode == 'lol') { // all valid discount codes
            document.getElementById('price').innerHTML = "£" + ((noDiscount * discount) * season).toFixed(2);
        } else {
            document.getElementById('price').innerHTML = "£" + (noDiscount * season).toFixed(2);
        }
    }, 10);
}

function calculate_rent(price) {
    var quantity = parseInt(document.getElementById("q").value);
    var duration = parseInt(document.getElementById("d").value);
    var discount = 1.05 - (duration * 0.01)
    var total = ((quantity * price * duration) * discount).toFixed(2);
    console.log("Quantity: " + quantity);
    console.log("Duration: " + duration);
    console.log("Price: " + price);
    console.log("Discount: " + discount);
    console.log("Total: " + total);
    console.log("");
    document.getElementById('price').innerHTML = '£' + total;
}
