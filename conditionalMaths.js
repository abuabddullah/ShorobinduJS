// ======================== only conditon======


// if age is 18 or over print he is a voter
/*
let age = 10;
if (age >= 18) {
    console.log(`you are voter`);
} else {
    console.log(`you are not a voter try ${18 - age} years later`);
}
*/


// if last name contains haq print haq vai else full name sir

/*
let firstName = "Mehidi";
let lastName = "hUq";
let lastNameInLowerCase = lastName.toLowerCase();

if (lastNameInLowerCase == "huq") {
    console.log(`Welcome Huq vai.`);
} else {
    console.log(`Welcome ${firstName} ${lastName} Sir`);
}
*/

// grade according to marks and define grade inside conditions as variable
/*
let marks = 65 //prompt('Put your SSC Marks', '50');

if (marks >= 0 && marks <= 49) {
    let grade = "F";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
} else if (marks >= 50 && marks <= 54) {
    let grade = "D";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
} else if (marks >= 55 && marks <= 64) {
    let grade = "C";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
} else if (marks >= 65 && marks <= 79) {
    let grade = "B";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
} else {
    let grade = "A";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
}
*/

/*
let name = "asif" // document.querySelector('#name').value;
let gender = "male" //document.querySelector('#Gender').value;
let age = 26 // document.querySelector('#age').value;


if (gender == "") {
    console.log(`all fills must filled`);
} else if (gender == 'male' || gender == 'Male' || gender == 'm' || gender == 'M') {
    if (age >= 21) {
        console.log(`hi! Mr. ${name}, You are a ${gender} and you are eligible for marry since ${age-21} year`);
    } else {
        console.log(`hi! Mr. ${name}, You are a ${gender} and you are not eligible for marry. Try ${21-age} year later`);
    }
} else if (gender == 'female' || gender == 'Female' || gender == 'f' || gender == 'F') {
    if (age >= 18) {
        console.log(`hi! Ms. ${name}, You are a ${gender} and you are eligible for marry since ${age-18} year`);
    } else {
        console.log(`hi! Ms. ${name}, You are a ${gender} and you are not eligible for marry. Try ${18-age} year later`);
    }
} else {
    console.log(`hi! Mr. ${name}, Who are you?`);
};
*/

// project - 10 || traffic signal select করলে সেই অনুযায়ী instruction দেখাবে এবং রঙ চেঞ্জ হবে
/*
let signal = prompt("Traffic signal");

if (signal == "Red") {
    console.log(`Stop`);
} else if (signal == "Yellow") {
    console.log(`Dont move`);
} else if (signal == "Green") {
    console.log(`Go Ahead`);
} else {
    console.log(`Wrong signal`);
}
*/


// project - 11 || select option থেকে currency select করে তাদেরকে বাংলাদেশি টাকায় convert করতে হবে
/*
let ammount = 500;
let currency = "Dollar";

if (currency == 'Dollar') {
    console.log(`${ammount} ${currency} = ${ammount * 80} TK.`)
} else if (currency == 'Euros') {
    console.log(`${ammount} ${currency} = ${ammount * 120} TK.`)
} else if (currency == 'Rupees') {
    console.log(`${ammount} ${currency} = ${ammount * 1.25} TK.`)
} else if (currency == 'Yen') {
    console.log(`${ammount} ${currency} = ${ammount * 11} TK.`)
} else if (currency == 'Real') {
    console.log(`${ammount} ${currency} = ${ammount * 25} TK.`)
} else if (currency == 'Dinar') {
    console.log(`${ammount} ${currency} = ${ammount * 560} TK.`)
} else {
    console.log(`Search google`)
};
*/


// project - 12 || আপনাকে ৩ টা ডাটা দেয়া আছে।যেখানে একজন মানুষের  বয়স , ভ্যাকসিন গ্রহণের  সংখ্যা এবং সব গুলো ভ্যাকসিন গ্রহণের স্ট্যাটাস দেয়া আছে। ভ্যারিয়েবল গুলোর ডাটার প্যাটার্ন নিচে দেয়া হলো। age = 23 ; vaccineCount = 1 ; isVaccinated = false || আপনাকে নিচে কয়েকটি শর্ত দেয়া হলো। শর্ত গুলো আপনাকে চিন্তা ভাবনা করে সমাধান করতে হবে। আপনি  প্রয়োজন অনুসারে ভ্যারিয়েবল গুলোর  মান পরিবর্তন করতে পারেন ।যাদের বয়স ২০ এর উপরে এবং যারা ২ ডোজ ভ্যাকসিন গ্রহণ করেছে তারা বিদেশ গমন করতে  পারবে।যাদের বয়স ১৫-২০ এর মধ্যে এবং যারা একবারও ভ্যাকসিন গ্রহণ করেনি তাদের কাছে একটি মেসেজ যাবে ভ্যাকসিন দেয়ার জন্য।যাদের বয়স ১৫-২০ এর মধ্যে এবং ২ ডোজ ভ্যাকসিন গ্রহণ করেছে  তাদের isVaccinated আপডেট হয়ে true হয়ে যাবে এবং তাদের কাছে একটি মেসেজ যাবে -“ আপনার ২ ডোজ  ভ্যাকসিন সম্পন্ন হয়েছে। ” ।

/*
let age = prompt("How old are you?");
let vaccineCount = prompt("How many times are you vaccinated?");
let isVaccinated = false;

if (age > 20 && vaccineCount >= 2) {
    vaccineCount = true;
    console.log(`বিদেশ গমন করতে  পারবে।`);
} else if ((age > 15 && age < 20 && vaccineCount == 0) || vaccineCount == 0) {

    alert(`plz vaccine নিন`);
} else if (age > 15 && age < 20 && vaccineCount == 2) {
    vaccineCount = true;
    alert(`আপনার ২ ডোজ  ভ্যাকসিন সম্পন্ন হয়েছে।`);
} else {
    vaccineCount = true;
    alert(`vaccine নেয়ার জন্য ধন্যবাদ`);
}
*/


// project - 13 || তোমার কাছে বর্তমানে একটা নির্দিষ্ট বাজেট রয়েছে ফ্যামিলি ট্যুর দেয়ার জন্য। যেটা budget নামক একটা ভেরিএবলে থাকবে।  নিচের প্রবলেম গুলো পড়  এবং তোমার সিদ্ধান্ত নাও  ।যদি তোমার বাজেট  ৫০০০ এর বেশি হয় তাহলে তুমি ফ্যামিলি কে নিয়ে ট্যুর দিবে । অন্যথায় ৫০০০ এর কম হয় তাহলে ট্যুর না দিয়ে ঘুম দিবে।  যদি তুমি ট্যুর দিতে পারো তার মানে তোমার কাছে ৫০০০ এর বেশি টাকা আছে।  এখন ধরো হোটেল ভাড়া ৪০০০। তাহলে তুমি হিসেবে করো তাহলে হাতে আর কত টাকা এক্সট্রা আছে।  যদি ২০০০এর বেশি টাকা হাতে থাকে তাহলে তুমি বারবিকিউ পার্টি করবে , না হলে ট্যুরে গিয়ে অল্প শপিং করবে।


let budget = prompt("What's your tour budget?");

if (budget > 5000) {
    alert(`Get ready for tour`);


    let hotelCost = 4000;
    let pocketMoney = budget - hotelCost;
    console.log(pocketMoney);
    if (pocketMoney > 2000) {
        console.log(`Get ready for BBQ`);
    } else {
        console.log(`Get ready for tiny shopping`);
    }

} else {
    alert(`Sleep mode on cause budget is low`);
}