let caseQtyPlusBtn = document.querySelector('#caseQtyPlus');
let caseQtyMinusBtn = document.querySelector('#caseQtyMinus');

function updateQtyNPrice() {

    let caseQtyTag = document.querySelector('#caseQty');
    let caseQty = Number(caseQtyTag.value);
    caseQtyTag.value = Number(caseQty + 1);

    // update case price
    let casePriceTag = document.querySelector('#casePriceTotal');
    let casePrice = Number(casePriceTag.innerHTML);
    casePriceTag.innerHTML = Number(59 * caseQtyTag.value);
}

caseQtyPlusBtn.addEventListener('click', function () {
    updateQtyNPrice()
});

caseQtyMinusBtn.addEventListener('click', function () {
    updateQtyNPrice()
});