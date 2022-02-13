let caseQtyPlusBtn = document.querySelector('#caseQtyPlus');
let caseQtyMinusBtn = document.querySelector('#caseQtyMinus');
let mobileQtyPlusBtn = document.querySelector('#mobileQtyPlus');
let mobileQtyMinusBtn = document.querySelector('#mobileQtyMinus');


function updateQtyNPrice(product, price, isPlusQty) {

    let QtyTag = document.querySelector(`#${product}Qty`);
    let Qty = Number(QtyTag.value);

    if (isPlusQty == true) {
        QtyTag.value = Number(Qty + 1);
    } else if (Qty > 0) {
        QtyTag.value = Number(Qty - 1);
    }

    // update case price
    let PriceTag = document.querySelector('#' + product + 'PriceTotal');
    // let casePrice = Number(PriceTag.innerHTML);
    PriceTag.innerHTML = Number(price * QtyTag.value);
}
// for mobile qty n price update
mobileQtyPlusBtn.addEventListener('click', function () {
    updateQtyNPrice("mobile", 1219, true)
});

mobileQtyMinusBtn.addEventListener('click', function () {
    updateQtyNPrice("mobile", 1219, false)
});



// for case qty n price update
caseQtyPlusBtn.addEventListener('click', function () {
    updateQtyNPrice("case", 59, true)
});

caseQtyMinusBtn.addEventListener('click', function () {
    updateQtyNPrice("case", 59, false)
});


// null valueing btn
/* function zeroQtyNPrice(product) {
    document.getElementById(`#${product}Qty`).value = 0;
} */