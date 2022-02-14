let buyerDtlsTag = document.getElementById("buyer-details-input");
let buyerDtlSubBtn = document.getElementById("detail-submit-btn");

let buyerInfoTag = document.getElementById("buyer-info");



// show buyer detail in "invoice-to" section
buyerDtlSubBtn.addEventListener("click", function () {
    buyerInfoTag.innerText = buyerDtlsTag.value;
    buyerDtlsTag.value = "";
});


// add product details in "product-details-table" section
let itemNameTag = document.getElementById("item-name-input");
let itemPriceTag = document.getElementById("item-price-input");
let itemQuantityTag = document.getElementById("item-quantity-input");
let addProductBtn = document.getElementById("add-details-btn");

let tableBodyTag = document.getElementById("info-table");
let count = 1;

let subTotalTag = document.getElementById("sub-total");
let taxTag = document.getElementById("tax");
let grandTotalTag = document.getElementById("grand-total");
let grandTotalTag2 = document.getElementById("grand-total-2");


addProductBtn.addEventListener("click", function () {
    let itemTotalPrice = parseFloat(itemPriceTag.value) * parseFloat(itemQuantityTag.value);
    let tr = document.createElement("tr");

    tr.innerHTML = `
    <th >${count++}. ${itemNameTag.value}</th>
    <td>${itemPriceTag.value}</td>
    <td>${itemQuantityTag.value}</td>
    <td class ="itemTotalPrice">${itemTotalPrice}</td>`;

    tableBodyTag.appendChild(tr);

    // calculate sub-total price
    let subTotal = 0;
    let itemTotalPricessss = document.getElementsByClassName("itemTotalPrice");
    for (const itemTotalPrice of itemTotalPricessss) {
        iTPAmmount = parseFloat(itemTotalPrice.innerText);
        subTotal += iTPAmmount;
    }

    subTotalTag.innerText = subTotal.toFixed(2);
    taxTag.innerText = (subTotal * 0.1).toFixed(2);
    grandTotalTag.innerText = parseFloat(subTotalTag.innerText) + parseFloat(taxTag.innerText);
    grandTotalTag2.innerText = grandTotalTag.innerText;

})