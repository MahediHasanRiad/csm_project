

function addItem(itemID, price){
    
    const subTotal = document.getElementById('subtotal')
    const fastDelivaryPrice = document.getElementById(itemID);

    fastDelivaryPrice.innerText = price;

    totalPrice();
}

function totalPrice(){
    const subTotal = document.getElementById('subtotal').innerText;
    const FastDelivery = document.getElementById('Fast_Delivery').innerText;
    const additionalPage = document.getElementById('additional_page').innerText;
    const PremiumImage = document.getElementById('Premium_image').innerText;
    const ConvertHtml = document.getElementById('Convert_html').innerText;
    const serviceFee = document.getElementById('service_fee').innerText;

    document.getElementById('total_price').innerText =
      parseFloat (subTotal) + parseFloat(FastDelivery) + parseFloat(additionalPage) + 
      parseFloat(PremiumImage) + parseFloat(ConvertHtml) + parseFloat(serviceFee);

}


document.getElementById('fast_delivary').addEventListener('click', function(){
    addItem('Fast_Delivery', 100);
})
document.getElementById('no_fast_delivary').addEventListener('click', function(){
    addItem('Fast_Delivery', 0);
})

document.getElementById('additional').addEventListener('click', function(){
    addItem('additional_page', 150);
})
document.getElementById('no_additional').addEventListener('click', function(){
    addItem('additional_page', 0);
})

document.getElementById('add_img').addEventListener('click', function(){
    addItem('Premium_image', 10);
})
document.getElementById('no_add_img').addEventListener('click', function(){
    addItem('Premium_image', 0);
})


document.getElementById('convert').addEventListener('click', function(){
    addItem('Convert_html', 100);
})
document.getElementById('no_convert').addEventListener('click', function(){
    addItem('Convert_html', 0);
})
