function inDicreaseValue(inputValue, Boolean, priceId, perItemPrice){
    const inputValue2 = document.getElementById(inputValue);
    let inpoValue = parseInt(inputValue2.value);
    // if(Boolean){
    //     inpoValue = inpoValue + 1;
    // }else if(inpoValue > 0){
    //     inpoValue = inpoValue - 1;
    // }
    // inputValue2.value = inpoValue;

    const priceNumber = document.getElementById(priceId);
    priceNumber.innerText = inpoValue * perItemPrice;

    calculate();
}
function prices(priceNumberInner){
    const priceNo1 = document.getElementById(priceNumberInner);
    const priceInner = parseInt(priceNo1.innerText);
    return priceInner;
}

function calculate(){
    const v1 = prices('price1') ;
    const v2 = prices('price2') ;
    const total = v1 + v2;

    document.getElementById('subTotal').innerText = total;
    document.getElementById('tax').innerText = total / 10;
    document.getElementById('total-price').innerText = total + (total / 10);
}

document.getElementById('dicrease-btn').addEventListener('click', function(){
    inDicreaseValue('inputValue', false,'price1', 120);
})
document.getElementById('increase-btn').addEventListener('click', function(){
    inDicreaseValue('inputValue', true,'price1', 120)
})
document.getElementById('dicrease-btn2').addEventListener('click', function(){
    inDicreaseValue('inputValue2', false,'price2', 60);
})
document.getElementById('increase-btn2').addEventListener('click', function(){
    inDicreaseValue('inputValue2', true,'price2', 60)
})











//function numberOfItem(input, isIncrease, itemPrice, totalPrice){
//     const inputNumber = document.getElementById(input);
//     let inputValue1 = inputNumber.value;
//     if(isIncrease){
//         inputValue1 = parseInt(inputValue1) + 1;
//     }else if(inputValue1 > 0){
//         inputValue1 = parseInt(inputValue1) - 1;
//     }
//     inputNumber.value = inputValue1;

//     const price = document.getElementById(totalPrice);
//     price.innerText = inputValue1 * itemPrice;
//     calculatePrice();
// }
// function inputItem(inputProductValue){
//     const inputV = document.getElementById(inputProductValue);
//     const inputValue2 = parseInt(inputV.value);
//     return inputValue2;
// }
// function calculatePrice(){
//     const v1 = inputItem('inputValue') * 120;
//     const v2 = inputItem('inputValue2') * 60;
//     const subTotal2 = v1 + v2;

//     document.getElementById('subTotal').innerText = subTotal2;
//     document.getElementById('tax').innerText = subTotal2 / 10;
//     document.getElementById('total-price').innerText = subTotal2 + (subTotal2 / 10);
// }

// document.getElementById('increase-btn').addEventListener('click', function(){
//     numberOfItem('inputValue', true, 120, 'price1');
    
// })
// document.getElementById('dicrease-btn').addEventListener('click', function(){
//     numberOfItem('inputValue', false, 120, 'price1');
// })
// document.getElementById('increase-btn2').addEventListener('click', function(){
//     numberOfItem('inputValue2', true, 60, 'price2');
// })
// document.getElementById('dicrease-btn2').addEventListener('click', function(){
//     numberOfItem('inputValue2', false, 60, 'price2');
// })

