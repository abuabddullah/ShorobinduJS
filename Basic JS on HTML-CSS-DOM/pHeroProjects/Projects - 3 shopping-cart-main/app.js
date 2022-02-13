let caseQtyPlusBtn = document.querySelector('#caseQtyPlus');
let caseQtyMinusBtn = document.querySelector('#caseQtyMinus');
let mobileQtyPlusBtn = document.querySelector('#mobileQtyPlus');
let mobileQtyMinusBtn = document.querySelector('#mobileQtyMinus');



// personal practice

function updateQyNPrice(product, price, isPlusQty) {
    let productQtyTag = document.querySelector(`#${product}Qty`);
    let productQty = parseInt(productQtyTag.value);

    // increase or decrease Qty
    if (isPlusQty == true) {
        productQtyTag.value = productQty + 1;
    } else {
        if (productQty > 0) {

            productQtyTag.value = productQty - 1;
        }
    }


    // update each product price
    let productPriceTag = document.querySelector(`#${product}PriceTotal`);
    let productPrice = parseInt(productPriceTag.innerHTML);
    productPriceTag.innerHTML = productQtyTag.value * price;


    // get reciept total
    calcTotalAmmount()
}


// get product by id
function getProduct(product) {
    let productQtyTag = document.querySelector(`#${product}Qty`);
    let productQty = parseInt(productQtyTag.value);
    return productQty;
}

// function for reciept
function calcTotalAmmount() {
    let totalCasePrice = getProduct('case') * 59;
    let totalMobilePrice = getProduct('mobile') * 1219;
    let totalPrice = totalCasePrice + totalMobilePrice;
    let totalTax = totalPrice / 10;
    let totalPayment = totalPrice + totalTax;

    let totalAmmountTag = document.querySelector('#totalAmmount');
    totalAmmountTag.innerHTML = totalPrice;
    let totalTaxTag = document.querySelector('#totalTax');
    totalTaxTag.innerHTML = totalTax;
    let totalPaymentTag = document.querySelector('#totalPayment');
    totalPaymentTag.innerHTML = totalPayment;
}


caseQtyPlusBtn.addEventListener('click', function () {
    updateQyNPrice('case', 59, true)
});

caseQtyMinusBtn.addEventListener('click', function () {
    updateQyNPrice('case', 59, false)
});

mobileQtyPlusBtn.addEventListener('click', function () {
    updateQyNPrice('mobile', 1219, true)
});

mobileQtyMinusBtn.addEventListener('click', function () {
    updateQyNPrice('mobile', 1219, false)
});