const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brands = products.map(product => product.brand);
console.log(brands); // কোন array of object থেকে কোন নির্দিষ্ট item কে নিয়ে আরেকটা array বানানোর জন্য map use করা হয়
const prices = products.map(product => product.price);
console.log(prices);


products.forEach(product => console.log(product)) // কোন array of object থেকে কোন নির্দিষ্ট item কে নিয়ে কোন কিছু করতে চাইলে forEach use করা হয় এক্ষেত্রে কোন return কাজ করে না return লিখলে undefined দেখাবে
products.forEach(product => console.log(product.color))


// 3. filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap); // কোন array of object থেকে কোন শর্তসাপেক্ষে নির্দিষ্ট item কে নিয়ে আরেকটা array বানানোর জন্য filter use করা হয়

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);


//4. find
const special = products.find(p => p.name.includes('n'));
console.log(special); // কোন array of object থেকে কোন শর্তসাপেক্ষে নির্দিষ্ট item নিয়ে কোন কিছু করতে চাইলে find use করা হয় এটা শুধুমাত্র শর্ত পুরন করা প্রথম জিনিস্কে দিবে