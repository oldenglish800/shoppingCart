//function hideShippingForm() {
   // $('#shipping-form').hide();
//}
//hideShippingForm();

$('.btn').click(function() {
    let productName = $(this).parent().siblings('p').first().text();
    let itemPrice = $(this).parent().siblings('p').eq(1).text();

    $('.cart').append('<p><div>');
    $('.cart').append(productName);;
    $('.cart').append('<div style="float:right;">');
    $('.cart').append(itemPrice);

    calculate(itemPrice);
});

let subTotal = 0;
let tax = 0;
let total = 0;

function calculate(itemPrice) {
    priceInDecimal = itemPrice.slice(1);
    $('#calculator').empty();
    $('#calculator').append('<p><div>');
    subTotal += parseFloat(priceInDecimal);
    $('#calculator').append("sub total: $" + subTotal.toFixed(2));
    $('#calculator').append('<p><div>');
    tax = subTotal*10/100;
    $('#calculator').append("tax: $" + tax.toFixed(2));
    $('#calculator').append('<p><div>');
    total = subTotal + tax;
    $('#calculator').append("Total: $" + total.toFixed(2));

    $('#calculator').append('<p><input type=button value="Next" id="next" class="test" />');

    $('.test').click(function() {
        console.log("Order successfully processed");
        $('#shipping-form').show();
    });
}

$('#finish').click(function() {
    window.alert('Thank you for your order!');
});
