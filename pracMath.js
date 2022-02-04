let phones = [{
        brand: "symphony",
        price: 10000,
        ram: "6GB",
        camera: "100mp"
    },
    {
        brand: "samsung",
        price: 100000,
        ram: "60GB",
        camera: "1000mp"
    },
    {
        brand: "nokia",
        price: 1000,
        ram: ".6GB",
        camera: "10mp"
    }
]

let cheapestPhone = phones[0];
for (const mobile of phones) {
    if (mobile.price < cheapestPhone.price) {
        cheapestPhone = mobile;
    }
}
console.log(cheapestPhone);