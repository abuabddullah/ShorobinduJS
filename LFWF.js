// ********************* JavaScript Live Class 1, Part 2 Devtols, Alert, Confirm, Prompt, Variable, Statement, Concatenation




/*
javascript 3 প্রকার
১) inline javascript(using onclick)
2) internal javascript
3) external javascript*/

// dir and log helps to print in console
/*
console.dir('we are js learners');
console.log('we are js learners');
*/

/*
3 Basic functions
i) alert - to alert about like sineboard
ii) confirm - to ask question and asking value in bolean i.e yes or No
iii)prompt - to ask value of any variable.
*/

/*
console.log(alert('be care full'));
console.log(confirm('do you like JS?'));
*/




// ********************* Get Elements: getElementById()- getElementsByClassName()- getElementsByTagName()- querySelector()- querySelectorAll()




// getElementById

/*
document.getElementById('item1').textContent = 'আমি item-1 ছিলাম আর এখন itemOne হইয়া গেছি textContent এর বদৌলতে';
*/

// [n.b: = command টার বাংলা হইল, document তো মার ভিতরে item1 নামের যে id আছে তাকে ধর [getElementById], তার ভিতরে যা কিছু লিখা থাকুক না কেন [item-1] তা change করে তুমি বসায়া দাও[textContent/innerText] 'আমি item1 ছিলাম আর এখন itemOne হইয়া গেছি' text হিসেবে। নিচে আরো কিছু example দেয়া হলঃ===]

/*
document.getElementById('item2').textContent = 'আমি item-2 ছিলাম আর এখন itemTwo হইয়া গেছি textContent এর বদৌলতে';

document.getElementById('item3').innerText = 'আমি item-3 ছিলাম আর এখন itemThree হইয়া গেছি innerText এর বদৌলতে';
*/

// [তবে আমি যদি চাই document তার ভিতরের কোন id এর innerText দিয়ে নতুন একটা text ত বসাবই এবং সেইসাথে কিছু css ও aply করব তাহলে তখন innerHTML use করতে হবে। কিছু example দেয়া হলঃ===]

/*
document.getElementById('item5').innerHTML = 'আমি item-5 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemFive</span> হইয়া গেছি innerHTML এর বদৌলতে';

document.getElementById('item6').innerHTML = 'আমি item-6 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemSix</span> হইয়া গেছি innerHTML এর বদৌলতে';
*/


// getElementsByClassName

/*
document.getElementsByClassName('items')[6].textContent = 'আমি item-7 ছিলাম আর এখন itemSeven হইয়া গেছি ClassName এর বদৌলতে';
*/

// [বিঃদ্রঃ command টার বাংলা হইল, document তো মার ভিতরে items নামের যতগুলা class আছে তাদেরকে ধর [getElementsByClassName], তাদের ভিতরে [s/l] সিরিয়াল নাম্বারে যা কিছু লিখা থাকুক না কেন [item-$] তা change করে তুমি বসায়া দাও[textContent/innerText] 'আমি item$ ছিলাম আর এখন item$ হইয়া গেছি' text হিসেবে।আরো একটা example দেয়া হলঃ===]

/*
document.getElementsByClassName('items')[7].innerHTML = 'আমি item-8 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemEight</span> হইয়া গেছি ClassName এর বদৌলতে';
*/

// getElementsByTagName

/*
document.getElementsByTagName('p')[8].innerHTML = 'আমি item-9 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemNine</span> হইয়া গেছি TagName এর বদৌলতে';
*/

// querySelector for id name

/*
document.querySelector('#queryItem10').innerHTML = 'আমি item-10 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemTen</span> হইয়া গেছি grap id by querySelector এর বদৌলতে';
*/

// querySelector for class name

/*
ocument.querySelector('.queryItems').innerHTML = 'আমি item-10 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemTen</span> হইয়া গেছি class by querySelector এর বদৌলতে';
*/

// [বিঃদ্রঃ  এখানে querySelector কিন্তু item-10 তে #queryItem10 effect থাকার পরও তাকেই over write করেছে কারণ কোন s/l no. না থাকায় querySelector দেখতেছে first .queryItems class এর under এ কে আছে তাকে ধরে ফেলেছে]

// যদি queryselector দিয়ে class এর ভিতরের specific কোন item চেঞ্জ করতে চাই তাহলে তার মাঝে  s/l no. দিতে আর queryselector এর পরিবর্তে querySelectorAll লিখতে হবে।আরো একটা example দেয়া হলঃ===

/*
document.querySelectorAll('.queryItems')[1].innerHTML = 'আমি item-11 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemEleven</span> হইয়া গেছি class by querySelectorAll এর বদৌলতে';
*/



//[বিঃদ্রঃ js দিয়ে কোন কিছুকে ধরার জন্য queryselector / querySelectorAll বেস্ট এবং html এর ভিতরে কিছু লিখার জন্য innerHTML বেস্ট]





// ******************** Adding Style with css start




/*
document.querySelector('h1').style.backgroundColor = 'red';
document.querySelector('h1').style.color = 'white';
document.querySelector('h1').style.textAlign = 'center';

document.querySelector('p').style.backgroundColor = 'black';
document.querySelector('p').style.color = 'white';
document.querySelector('p').style.textAlign = 'justify';
*/




// ******************* first JS apk take a name from user and ask his favourite food name




/*
let name = prompt('what is your name?','Mr. XXX');
let food = prompt('what is your favourite food?','Beef');

//prompt দিয়ে কোন variable এর value নিলে তা সর্বদা string হিসেবে value assign হয়

console.log('My name is' + ' ' + name + ' and I love to eat' + ' ' + food + ' very very much.'); 
*/




// ****************** JavaScript Live Class 2, Part 1 - Var, Let, and Const in JavaScript in Details




// variables declare করার শর্ত (১) একটা keyword থাকবে let/var/const/nothing ; (2) variables নাম দিতে হবে ; (৩) "=" sign দিয়ে value assign করতে হবে।

/*
var অনেক বার declare এবং অনেক বার assign করা যায়।যা একটা সমস্যা কারন team work করার সময় এটা সমস্যা করে তাই এটা use করা উচিত না।

let একবারই বার declare এবং অনেক বার assign করা যায়।

const একবারই বার declare এবং একবারই বার assign করা যায়। এবং declare ও assign একলাইনেই করতে হবে।

কোণ keyword ছাড়াই variables declare করা যায় যা nothing এটা সমস্যা করে তাই এটা use করা উচিত না।
*/




// ************************* JavaScript Live Class 2, Part 2 - Statement, Concatenation, Scaping, Template literals, Interpolation in JavaScript




// Statement হচ্ছে JS এর একটি full লাইন যা কোন একটী পুর্নাঙ্গ instruction carry করে এবং এর শেষ হয় (;) চিহ্ন দিয়ে

// Concatenation হচ্ছে কোন রকম arithmatic operation না করে পাশা-পাশি মিলিয়ে বসানো

// Scaping মানে হচ্ছে, আমরা যানি কোড লিখার সময় আমাদের ('')/("") এই symbol এর ভিতরে লিখতে হয় । এখন কোন কারনে যদি symbol এর ভতরেও একই রকম symbol ব্যাবহারের প্রয়োজন হয়( don't,"coating speech") তখন আমাদের কে সেই specific symbol এর আগে একটা (\) use করতে হয় (don\'t,\"coating speech\") একেই scaping বলা হয়।

/*
console.log("he said,\"You are a good boy\".");
console.log('i don\'t have so money that you are asking for.');*/

// Template literals, Interpolation মানে হল, normally concatination এর জন্য আমরা ('' / "") symbol break করে তারপর (+) symbol দিয়ে দিয়ে করতাম যা অনেকটা বিশ্রি ও হিজিবিজি লাগে। এখন এই same কাজ টাই করা যায় (``) এর ভিতরে (`${variableName}`) দিয়ে। এবং আরো সুবিধা হল এই style লিখলে scaping এর কোন ঝামেলা নেই অর্থাঠ যে কোন যায়গায় ('' / "") symbol use করা যাবে। এটা অনেকটা HTML এর 'pre' tag এর মত কারণ এর ভিতরেও যেভাবে space-টিspace দিয়ে লিখা হয় ঠিক সেইভাবেই print output হয়।

/*
let personName = "Abdullah";
let personAge = 2;
let personSkill = "Playing";

console.log("This is concatinated by \"+\" symbol : Hi, My name is " + personName + " I am just " + personAge + " years old & I like to do " + personSkill + " all the time.");

console.log(`This is concatinated by Template literals, Interpolation : Hi, My name is ${personName} I am just ${personAge} years old & I like to do ${personSkill} all the time.`);
*/




// ******************************JavaScript Live Class 2, Part 3 - DadaType ডাটাটাইপ কি?, কিভাবে?, কেমনে বিস্তারিত..




// যেকোন ফর্ম যখন আমরা ফিল করতে যাই সেখানে আমরা মূলত প্রায়৪ ধরনের তথ্য দিয়ে থাকি যা প্রত্যেকেই আলাদা আলাদা DataTypes। example: (1) Whats you name ? -Asif;(2) How old are you ? -25; (3) Are you married ? - Yes ; (5) Your hobbies ? - coding,playing,sleeping.

/*
৫ type  এর data হয়ঃ
১) string: asset of charecters অর্থাৎ একগুচ্ছ বর্নমালা । যা ('' / "") Symbol এর ভিতরে লিখতে হয়। সংখ্যা বাচক data কে ('' / "") Symbol ভিতরে লিখলে তা আবার string হয়ে যায়।
২) Number: সংখ্যা বাচক data যা ('' / "") Symbol ছাড়া লিখতে হয়। সংখ্যা বাচক data কে ('' / "") Symbol ভিতরে লিখলে তা আবার string হয়ে যায়।
৩) Boolean: সত্য / মিথ্যা অথবা হ্যা / না মুলক তথ্য সংগ্রহ করা হয়।
৪) Array: a combo package of multiple data-type in a sigle variable অর্থাৎ একাধিক type এর data যখন একত্রে কোন variable এর value নির্দেশ করে তখন সেই data গুলোর type কে array data type বলে। array data type গুলোকে  অবশ্যই [] ব্র্যাকেটের ভতরে (,) দিয়ে দিয়ে লিখতে হয়।
5) object
*/

// for example:

/*
let varStringWhatsYourName = "Abdullah";
let varNumberHowOldAreYou = 2;
let varBooleanYouAreAKidRight = true;
let varArrayWriteYourAim = ["Alim","imam","mujtahid",10000000000000,true];

console.log(typeof varStringWhatsYourName);
console.log(typeof varNumberHowOldAreYou);
console.log(typeof varBooleanYouAreAKidRight);
console.log(typeof varArrayWriteYourAim);
*/

// take alu , ptol price as varibale and add them in another variable and prit the oreder slip
/*
let আলু = 50;
let পটল = 20;
let মোট = আলু + পটল;

console.log(`

    আলুর দাম = ${আলু} টাকা
    পটলের দাম = ${পটল} টাকা
--------------------------------
    মোট খরচ = ${মোট} টাকা
`);
*/




// ************************************** 22-3 string methods



/*
myString = "Hello ! How are you?"

console.log(myString.length); // to know the total no of char including white-space
console.log(myString[9]); // to know the char at specific position
console.log(myString.indexOf("w")); // to know the position of a specific char

console.log(`---------------------seperator------------------------`);

// to print all the char as a list manner in console
for (let letter of myString) {
    console.log(letter);
}

console.log(`---------------------seperator------------------------`);

// push and pop don't work for string.

// console.log(myString.push("w")); // Uncaught TypeError: myString.push is not a function
// console.log(myString.pop()); // Uncaught TypeError: myString.pop is not a function
*/

// project: একটা string কে উল্টা করে print করতে হবে
/*
let theStringIs = "Hi ! Yes, I am the string to be reversed."


function reverseYourString(string2Breversed) {
    let theNewStringis = "";
    for (const letter of string2Breversed) {
        theNewStringis = letter + theNewStringis;
    }
    return theNewStringis;
}

reverseYourString(theStringIs);
let resultOfRevisedStringIs = reverseYourString(theStringIs);
console.log(resultOfRevisedStringIs);

*/







// ****************************************** Array example:



/*
let array1 = [0, 1, 2, 3, 4, 5, 6];
let array2 = ["a", "e", "i", "o", "u"];

console.log(array1); // arry কে concole এ দেখার জন্য
console.log(array1.length); // arry তে কয়টা উপাদান আছে জানার জন্য
console.log(array1.indexOf(5)); // array1 variable এর  উপাদান 5 এর position  জানতে চাই 
console.log(array1.indexOf(45)); //যদি এমন কোন উপাদানের  বা  indexof জানতে চাওয়া হয় যা আসলে সেই variable এ নাই তখন indexof দেখায় -1
console.log(array1[5]); // arry এর 5 no index এর উপাদান জানার জন্য
console.log(array1[5] = "five"); // numbers variable এর 5th index এর উপাদান  change করে five করার জন্য
console.log(array1); // arry এর recent update কে concole এ দেখার জন্য
console.log(array1.push("six")); // arry তে শেষ উপাদান হিসেবে six কে add করতে
console.log(array1);


console.log(array1.unshift("- one")); // arry তে প্রথম উপাদান হিসেবে - one কে add করতে
console.log(array1);
console.log(array1.push("seven")); // arry তে শেষ উপাদান হিসেবে seven কে add করতে
console.log(array1);
console.log(array1.unshift("-two")); // arry তে প্রথম উপাদান হিসেবে - two কে add করতে
console.log(array1);
console.log(array1.pop()); // arry এর শেষ উপাদানকে  কে remove করতে
console.log(array1);
console.log(array1.shift()); // arry এর প্রথম উপাদানকে remove করতে
console.log(array1);
let array3 = array1.concat(array2); // দুইটা array এর উপাদান গুলোকে concatenate করে নতুন একটা array এর value হিসেবে declare করতে
console.log(array3); // array3 কে concole এ দেখার জন্য


// special example

const numbersArray = [22, 200, 34, 56, 41, 77];
const numbersArray2 = new Array(25, 36, 48, 59);
const stringArray = ["red", "yellow", "green", "orange"];
const mixedArray = [26, "hello", true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];

let value = Array.isArray(numbersArray); // variable টা আসলে arry কিনা জানার জন্য
let lastRemovedItem = numbersArray.pop(); // আবার pop করা item টাকে অন্য একটা variable এ declare ও করা যায় এখানে pop করা item 77 টাকে lastRemovedItem এ assigned হয়ে গেছে

let spliced = numbersArray.splice(1, 3); // numbersArray এর index no-1 থেকে index no-3  পর্যন্ত element গুলোকে splice করে নতুন variable splicedএ রাখার জন্য


numbersArray.reverse(); // array এর উপাদান গুলোকে  উলটো ক্রমানুসারে সাজাতে

let newValue = numbersArray.sort(function (x, y) {
    return y - x;
}); // array এর উপাদান গুলোকে বড় থেকে ছোট ক্রমানুসারে সাজাতে

AnotherNewValue = numbersArray.sort(function (x, y) {
    return x - y;
}); // array এর উপাদান গুলোকে ছোট থেকে বড় ক্রমানুসারে সাজাতে

function over50(num) {
    return num > 20;
}
let ExtraAnotherNewValue = numbersArray.find(over50);


// Output
console.log(numbersArray);
console.log(spliced);
console.log(newValue);
console.log(AnotherNewValue);
console.log(ExtraAnotherNewValue);
*/


/*
let array = [10, 2, 3, 40, 5, 6, 70, 8, 9, 102]

console.log(array); // to see the array on cnsl
array[array.length] = 100; // to push 100 as element at the last of the array 
console.log(array);// to see the updated array on cnsl
*/


// Experiment
/*
let array1 = [0, 1, 2, 3, 4, 5, 6];
console.log(array1);
let newiee = array1.push("Hundred");
console.log(array1);
console.log(array1.indexOf("Hundred"));
console.log(newiee); // length of array1
console.log(array1.length)
console.log(newiee == array1.length);
*/


// arrayProject : একটা array এর ভিতরের সব elemnt গুলোকে একটা list আকারে console এ print করতে

/*
let anArrayIs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(anArrayIs);

// first way

for (let i = 0; i < anArrayIs.length; i++) {
    const element = anArrayIs[i];
    console.log(element);
}


// second way

for (let elements of anArrayIs) {
    console.log(elements);
}
*/





// ********************* 19-5 Declare objects with multiple properties and value




// object হচ্ছে এমন type data যার একাধিক property ও তার against এ value আছে। example
/*
let student1 = {
    name: "asif",
    age: 25,
    height: "5ft 9inch",
    marritualStatus: "married"
};

let pc1 = {
    name: "Asus",
    processors: "intel core i3 10 gen",
    ram: "8 gb",
    rom: "120gb ssd + 500 hdd"
};

*/



// ******************** 19-6 multiple ways to get and set object property , object method



/*
let pc1 = {
    name: "Asus",
    processors: "intel core i3 10 gen",
    ram: "8 gb",
    rom: "120gb ssd + 500 hdd"
};


console.log(pc1); // pc1 কে concole এ দেখার জন্য
console.log(pc1.processors); // pc1 এর processors property এর value কে concole এ দেখার জন্য

let pcProcessor = pc1.processors; // pc1 এর processors property এর value কে pcProcessor variable এ assign করার জন্য
console.log(pcProcessor); // pcProcessor কে concole এ দেখার জন্য

// set object value

pc1.processors = "asus 3200g"; // (1) pc1 এর processors property এর value কে change করে "asus 3200g" করার জন্য
console.log(pc1); // pc1 এর recent updated value কে concole এ দেখার জন্য
pc1["processors"] = "MSI 3400g"; // (2) pc1 এর processors property এর value কে change করে "MSI 3400g" করার জন্য
console.log(pc1); // pc1 এর recent updated value কে concole এ দেখার জন্য

let propertyNameProcessor = "processors"; // (৩-১) pc1 এর processors property কে propertyNameProcessor variable এর value হিসেবে assign করতে হবে
pc1[propertyNameProcessor] = "GigaByte 3000g"; // (৩-২) propertyNameProcessor variable এর সাহায্যে pc1 processors property এর value কে change করে "MSI 3400g" করার জন্য
console.log(pc1); // pc1 এর recent updated value কে concole এ দেখার জন্য

// [[[[[[[[[[[No-(1) is preferable for set obj value]]]]]]]]]]]]


let dress1 = {
    item: "pant",
    pcsPrice: 2000,
    qty: 20,
    pcPrice: 2000,
    qty: 20,
    pcsPric: 2000,
    ty: 20,
}


console.log(dress1); // to see the dress1 obj on cnsl
delete(dress1.item) // to delete item prop from dress1
console.log(dress1); // to see the updated dress1 obj on cnsl
*/




// Module 19 ||  ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা:const pizza = {toppings: ['cheese', 'sauce', 'pepperoni']crust: 'deep dish', serves: 2} এবং pepperoni print করবা।
/*
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

console.log(pizza.toppings[2]);
*/



// ******************************** JavaScript Live Class 2, Part 4 - Operators অপারেটরস কি?




/*
Operators হচ্ছে programming language এ ব্যবহৃত সকল সাঙ্কেতিক চিহ্ন ব্যবহৃত হয়। javascript এ ৭ প্রকার operators আছে।
[ better to learn also from SATT academy]

১) Arith matical opt: +, -, *, /, %, ++, --
২) Assignment opt: =
৩) Comparison opt: ==(সমান বা একই), ===(একই এবং যময), <, > ,<=, >=, !=, !== ?
৪) logical opt: AND (&&), OR (||)
৫) string opt: +, += 
৬) bitwise opt: &, -, ^, |, <<, >>, >>>, <<<
৭) special opt: delete, in, instanceof, typeof, new, void, yield
*/


/*
// use of Assignment opt
let value1 = 20;
let value2 = 10;
let value3 = "10";

// use of Arith matical opt
console.log(value1+value2);
console.log(value1-value2);
console.log(value1*value2);
console.log(value1/value2);

// value1++;
// console.log(value1);
// console.log(value1%value2);

// value2--;
// console.log(value1);
// console.log(value1%value2);

//  use of Comparison opt
console.log(value2 == value3);
console.log(value2 === value3);
console.log(value2 < value3);
console.log(value2 > value3);
console.log(value2 <= value3);
console.log(value2 >= value3);
console.log(value2 != value3);
console.log(value2 !== value3);

//  use of স্ট্রিং opt
let txt1 = "আজিজুর";
let txt2 = "রহমান ";
console.log(txt1 + " " + txt2);

txt1 += " হক ";
console.log(txt1);
console.log(txt1 + " " + txt2);
*/




// ***************************** Action with Event Listener- click- dblclick- mouseenter- mouseleav




//project -1 :  আমি চাচ্ছি button টাতে click পরলে তারপর start লিখাটা মুছে নতুন কিছু আসবে
/*
// targeting
let h1Tag = document.querySelector('h1');

// styling
h1Tag.style.width = "50%";
h1Tag.style.height = "20vh";
h1Tag.style.border = "3px solid red";

// eventing project -1
document.querySelector('button').addEventListener('click', function () {
    h1Tag.innerHTML = 'ধরছি';
});
*/

//project -2: তজবি apk 

/*
// targeting
let h1Tag = document.querySelector('h1');

// styling
h1Tag.style.width = "50%";
h1Tag.style.height = "20vh";
h1Tag.style.border = "3px solid red";

h1Tag.innerHTML = 'তজবি apk';

let count = 1;
let tajbiDana = document.querySelector('button');
tajbiDana.addEventListener('click', function () {
    h1Tag.innerHTML = count;
    count++;
})
tajbiDana.addEventListener('dblclick', function () {
    count = 0;
});
tajbiDana.addEventListener('mouseenter', function () {
    h1Tag.innerHTML = "clicking required not only mouseenter";
});
tajbiDana.addEventListener('mouseleave', function () {
    h1Tag.innerHTML = "keep clicking why do you mouseleave";
});
*/


// project -3:  button এ click করলে তা input এ যা লিখব তা h1 tag এ দেখাবে

/*
let buttonTAg = document.querySelector('button');
let h1Tag = document.querySelector('h1');

buttonTAg.addEventListener('click', function () {

    let textInsideInput = document.querySelector('input').value;
    h1Tag.innerHTML = textInsideInput;
});
*/

//project -4: সাইন আপ ফর্ম ফিল করার পর তার ডাটা দিয়ে একটা স্লিপ তৈরী করব,

/*
let notificationInH1Tag = document.querySelector('h1');

let submit = document.querySelectorAll('p input')[5];
submit.addEventListener('click', function () {

    let name = document.querySelectorAll('p input')[0].value;
    let number = document.querySelectorAll('p input')[1].value;
    let age = document.querySelectorAll('p input')[2].value;
    let email = document.querySelectorAll('p input')[3].value;
    let password = document.querySelectorAll('p input')[4].value;

    notificationInH1Tag.innerHTML = `hi! Mr. ${name}, <br> you phone no: ${number} <br> you are ${age} year old <br> your email is ${email} <br> your password is ${password} <br>`
});
*/




// ***************************** JavaScript Live Class 2, Part 5 - conditional statement কন্ডিশনাল সেন্টেন্স কি?




// example 1
/*
let age = prompt('how old are you?', '18');

if (age >= 18) {
    console.log("you are eligible for marriage as per bd rule.");
} else {
    console.log(`you are not eligible for marriage as per bd rule.doya kore ${18 - age} bosor wait korun.`);
    
}
*/

// example 12

/*
let firstName = prompt('First Name Plz', 'Mr.');
let lastName = prompt('Last Name Plz', 'XXX');

if (lastName == "Haq") {
    console.log(`
    reciptionist: Assalamu Alaikum, ${firstName} ${lastName} Sir.
    
    manager: আরে ${lastName} ভাই কেমন আছেন?`);
} else {
    console.log(`
    reciptionist: Assalamu Alaikum, ${firstName} ${lastName} Sir.
    
    manager: ${firstName} ${lastName} ভাই কেমন আছেন?`);    
}*/


/*
let marks = prompt('Put your SSC Marks', '50');

if (marks >= 0 && marks <= 49) {
    let grade = "F";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
} else if(marks >= 50 && marks <= 54){    
    let grade = "D";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
}else if(marks >= 55 && marks <= 64){    
    let grade = "C";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
}else if(marks >= 65 && marks <= 79){    
    let grade = "B";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
}else {    
    let grade = "A";
    console.log(`
    Your got only ${marks} mark.
    Your grade is ${grade}`);
}
*/


//project -5: বিয়ের বয়স calculate করব,

/*
let submit = document.querySelector('#submit');
let marriageCapability = document.querySelector('textarea');

submit.addEventListener('click', function () {

    let name = document.querySelector('#name').value;
    let gender = document.querySelector('#Gender').value;
    let age = document.querySelector('#age').value;


    if (gender == "") {
        marriageCapability.innerHTML = `all fills must filled`;
    } else if (gender == 'male' || gender == 'Male' || gender == 'm' || gender == 'M') {
        if (age >= 21) {
            marriageCapability.innerHTML = `hi! Mr. ${name}, You are a ${gender} and you are eligible for marry since ${age-21} year`;
        } else {
            marriageCapability.innerHTML = `hi! Mr. ${name}, You are a ${gender} and you are not eligible for marry. Try ${21-age} year later`;
        }
    } else if (gender == 'female' || gender == 'Female' || gender == 'f' || gender == 'F') {
        if (age >= 18) {
            marriageCapability.innerHTML = `hi! Ms. ${name}, You are a ${gender} and you are eligible for marry since ${age-18} year`;
        } else {
            marriageCapability.innerHTML = `hi! Ms. ${name}, You are a ${gender} and you are not eligible for marry. Try ${18-age} year later`;
        }
    } else {
        marriageCapability.innerHTML = `hi! Mr. ${name}, Who are you?`;
    }
});
*/


//project -6: name নিব আর বয়স চেক করব যদি ২০ এর ু উপরে হয় তাহলে allow করব,

/*
let btn = document.querySelector('#submit');

btn.addEventListener('click', function () {
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let gender = document.querySelector('#Gender').value;

    let entranceCirtificate = document.querySelector('textarea');

    if (age > 20) {
        if (gender == 'male' || gender == 'Male' || gender == 'm' || gender == 'M') {
            entranceCirtificate.innerHTML = `Assalamu Alaikum,
            Mr. ${name},
            You are a Male,
            You are ${age} years old,
            Welcome plz join our party.`;
        } else {
            entranceCirtificate.innerHTML = `Assalamu Alaikum,
            Ms. ${name},
            You are a Female,
            You are ${age} years old,
            Welcome plz join our party.`;
        }
    } else {
        entranceCirtificate.innerHTML = `You are not allowed`;
    }

});
*/

// project 7 || বন্ধুদের নাম জানা আছে তাদের মার্ক বসিয়ে বসিয়ে রেজালতের গ্রেড বের করতে হবে।
/*
let markSheet = document.querySelector('h1');
let BTN = document.querySelector('button');

BTN.addEventListener('click', function () {
    let Name = Array.from(document.querySelectorAll('[name="studentNames"] option:checked')).map(option => option.value);
    let mark = document.querySelector('#Mark').value;

    if (mark < 50) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         You are failed `;
    } else if (mark >= 50 && mark < 60) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         Your Grade is D `;
    } else if (mark >= 60 && mark < 70) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         Your Grade is C `;
    } else if (mark >= 70 && mark < 80) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         Your Grade is B `;
    } else if (mark >= 80 && mark < 90) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         Your Grade is A `;
    } else if (mark >= 80 && mark < 90) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         Your Grade is A `;
    } else if (mark >= 90 && mark <= 100) {
        markSheet.innerHTML = `hi! Mr. ${Name},
         You got ${mark}, 
         Your Grade is A+ `;
    } else {
        markSheet.innerHTML = 'getout';
    }
});
*/

//project ৮: user তার নাম ও জন্ম সাল লিখবে এবং automatic age calculate হবে

/*
let Name = prompt("name");
let DoB = prompt("DoB");

console.log(`hi! ${Name}, you are ${2022-DoB} years old`);
*/


// project 9 || বন্ধুদের নাম+mark জানা আছে তাদের নাম বসিয়ে দিলে মার্ক + রেজালতের গ্রেড বের  হবে।


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
let converter = document.querySelector('button');

converter.addEventListener('click', function () {

    let ammount = document.querySelector('#ammount').value;

    let currency = Array.from(document.querySelectorAll('[name="CurrencyName"] option:checked')).map(option => option.value);

    if (currency == 'Dollar') {
        document.querySelector('h1').innerHTML = `${ammount} ${currency} = ${ammount * 80} TK.`
    } else if (currency == 'Euros') {
        document.querySelector('h1').innerHTML = `${ammount} ${currency} = ${ammount * 120} TK.`
    } else if (currency == 'Rupees') {
        document.querySelector('h1').innerHTML = `${ammount} ${currency} = ${ammount * 1.25} TK.`
    } else if (currency == 'Yen') {
        document.querySelector('h1').innerHTML = `${ammount} ${currency} = ${ammount * 11} TK.`
    } else if (currency == 'Real') {
        document.querySelector('h1').innerHTML = `${ammount} ${currency} = ${ammount * 25} TK.`
    } else if (currency == 'Dinar') {
        document.querySelector('h1').innerHTML = `${ammount} ${currency} = ${ammount * 560} TK.`
    } else {
        document.querySelector('h1').innerHTML = `Search google`
    }
});
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

/*
let budget = prompt("What's your tour budget?") ;

if (budget > 5000){
alert(`Get ready for tour`);


let hotelCost = 4000;
let pocketMoney = budget - hotelCost;
console.log(pocketMoney);
if (pocketMoney > 2000){
console.log(`Get ready for BBQ`);
}
else{
console.log(`Get ready for tiny shopping`);
}

}
else{
alert(`Sleep mode on cause budget is low`);
}
*/



// project - 14 || একটা array থাকবে। এমন একটা condition লিখতে হবে যেখানে যদি value টা array তে exist করে তবে একটা message দিবে আর exist না করলে অন্য একটা message দিবে

/*
let colors = ["Red", "Green", "Yellow", "Blue"];
let askiiElement = prompt("Write the color?");


if (colors.indexOf(askiiElement) == -1) {

    alert(`Opps! you are not colors in the array. `)

} else if (colors.indexOf(askiiElement) != -1) {

    console.log(colors.indexOf(askiiElement));
} else {

}
*/


// second way

/*
for (let i = 0; i < colors.length; i++) {

    const element = colors[i];

    if (askiiElement == element) {

        console.log(colors.indexOf(element));

    } else {

        console.log(`Opps! you are not colors in the array.`);

    }

}
*/

// 1. কোনো একটা লেটার vowel কিনা তা নির্ণয় করা যায় কিভাবে ?

/*
var input = prompt("Write the letter?");
var letter = input.toLowerCase();
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log(letter, "is vowel");
} else {
    console.log(letter, "is not vowel");
}
*/

// 2. তিনটি সংখ্যার মধ্যে বড়ো সংখ্যাটি বের কর 

/*
var number1 = 1000;
var number2 = 6000;
var number3 = 7000;

if(number1 > number2){
    if(number1 > number3){
        console.log("Number1 is big");
    }
}
else if(number2 > number3){
    if(number2 > number1){
        console.log("Number2 is big");
    }
}
else{
    console.log("Number3 is big");
}
*/


// 2. তিনটি সংখ্যার মধ্যে বড়ো-ছোট ও মাঝারি সংখ্যাটি বের কর showing sequence wise
/*
let n1 = 20 // Number(prompt("num1"));
let n2 = 200 // Number(prompt("num2"));
let n3 = 2000 // Number(prompt("num3"));

let creatArr = [n1, n2, n3];

let B2LnoArr = creatArr.sort(function (x, y) {
    return y - x;
}); // array এর উপাদান গুলোকে বড় থেকে ছোট ক্রমানুসারে সাজাতে+

console.log(B2LnoArr);

console.log(`the biggest no is ${B2LnoArr[0]}`);
console.log(`the 2nd biggest no is ${B2LnoArr[1]}`);
console.log(`the smallest no is ${B2LnoArr[B2LnoArr.length-1]}`);
*/




// **************************** JavaScript Live Class 3, Part 1 - Currency Converter logic by if else statement




/*
alert(`
Attention Please!
Dear,
Our application is under development. So you can just have the convertion of currencies as listed bellow,

                dollar
                pound
                euro
                bdt

And spelling must be same as written here or some error can occur.

Thank You.
`);

let ammount = prompt('Type Your Ammount');
let currency = prompt('Which currency do you want?');

if (ammount == '' || currency == '') {
    alert('Must fill all the requirements!')
} else {

    if (currency == 'dollar') {
        console.log(`
    ${ammount} ${currency} = ${ammount * 80} BDT
`);
    } else if (currency == 'pound') {
        console.log(`
        ${ammount} ${currency} = ${ammount * 120} BDT
    `);
    } else if (currency == 'euro') {
        console.log(`
    ${ammount} ${currency} = ${ammount * 99} BDT
`);
    } else if (currency == 'bdt') {
        console.log(`
        ${ammount} ${currency} = ${ammount * 1} BDT
    `);
    } else {

        alert(`
        This currency not available for now. 
        Try later.
        Thank You`);

    }

}*/



// Personal project 1

/*
let gender = prompt('Are you male or female?','Male');
if (gender == '') {
    alert('All the fills need to be filled !!!')
} else {
    
    if (gender == "male" || gender == "Male" || gender == "MALE" || gender == "m" || gender == "M"){
        let age = prompt('How old are you?','10');
        if (age <= 21) {
        console.log(`You are too young. You can't marry now. Plz come after ${22 - age} years later`);        
        }
        else{
            console.log(`You can marry now. Congrates!`);
        }
    } else if (gender == "female" || gender == "Female" || gender == "FEMALE" || gender == "f" || gender == "F") {
        let age = prompt('How old are you?','10');
        if (age <= 18) {
        console.log(`You are too young. You can't marry now. Plz come after ${19 - age} years later`);        
        }
        else{
            console.log(`You can marry now. Congrates!`);
        }
    } else {
        console.log(`What are you Mr.stranger?`);
    }
}
*/




// ********************************************* js data convertion 




// আমরা আগে যেনেছি যে prompt use করে কোন variable এর value নেয়া হলে তার typeof হচ্ছে string যদিও আমরা কোন number কে value হিসেবে assign করাই নে কেন।আর এ সমস্যা কে সমাধান করার জন্য আমরা parseInt function use করি যা prompt এ assign কৃত number কে typeof number ই দেয়। তবে এক্ষেত্রে মনে রাখতে হবে যে parseInt function use করে string value assign করলে তারও typeof number ই হয় যায়।

/*
let onlyPrompt = prompt('Type Your Number');
console.log(typeof onlyPrompt);

let parsePrompt = parseInt(prompt('Type Your Number'));
console.log(typeof parsePrompt);

let numberAlsoLikeParseInt = Number(prompt('Type a value'));
console.log(typeof numberAlsoLikeParseInt);

let parseFloatPrompt = parseInt(prompt('Type Your Number'));
console.log(typeof parseFloatPrompt);
*/

// problem of parseInt parseFloat 

/*
let parsePrompt1 = parseInt(prompt('Type Your Number parsePrompt1'));
let parsePrompt2 = parseInt(prompt('Type Your Number parsePrompt2'));
console.log(`
note: parseInt দশমিকের পরের digits count এ নেয় না।

${parsePrompt1} + ${parsePrompt2} = ${parsePrompt1 + parsePrompt2}`);


let parseFloatPrompt1 = parseFloat(prompt('Type Your Number parseFloatPrompt1'));
let parseFloatPrompt2 = parseFloat(prompt('Type Your Number parseFloatPrompt2'));
console.log(`
note: parseFloat দশমিকের পরের digits count এ নেয়।

${parseFloatPrompt1} + ${parseFloatPrompt2} = ${parseFloatPrompt1 + parseFloatPrompt2}`);
*/





// ************************** JavaScript Live Class 3, Part 2 - Basic CGPA Calculator in javaScript by Prompt with student id and roll




/*
let stdnName = prompt('Whats your name?');
let stdnI = prompt('Type your ID');

let mrkBl = parseFloat(prompt('Marks in Bangla'));
let mrkEl = parseFloat(prompt('Marks in English'));
let mrkMth = parseFloat(prompt('Marks in Math'));
let mrkPs = parseFloat(prompt('Marks in Physics'));
let mrkCh = parseFloat(prompt('Marks in chemestry'));
let mrkBi = parseFloat(prompt('Marks in Biology'));

let ttlGpa = mrkBl + mrkEl + mrkMth + mrkPs + mrkCh + mrkBi;
let cgpa = (ttlGpa / 6);

console.log(`
Assalamu Alaikum,
Dear ${stdnName},
Hope you well. Your Id no: ${stdnI} and you got CGPA: ${cgpa.toFixed(2)} in your final exam.
Bellow is you marksheet,

        Bangla     =    ${mrkBl} 
        English    =    ${mrkEl}  
        Math       =    ${mrkMth}  
        Physics    =    ${mrkPs}  
        chemestry  =    ${mrkCh}     
        Biology    =    ${mrkBi}  
    ----------------------------------
        Total GPA  =    ${ttlGpa}     
        Total CGPA =    ${cgpa}     
        Total CGPA =    ${cgpa.toFixed(2)}   [NB: this is with "tofixed" operators]  

`);
*/




// ****************************** JavaScript Live Class 3, Part 3 - Switch Statement in JavaScript




// swithch, casw, default মূলত এক ধরনের conditional statement just if-else condition এর short form কিন্তু এক্ষেত্রে কোন রকম range define করা যায় না এটা অর্থাৎ এখানে case কাজ করে if == value হিসেবে আর default কাজ করে else হিসেবে কোন range নেয়া যায় না

/*
// this function will not work if you just use prompt only cause switch may work on only number typeof data type. !!!???

let height = parseInt(prompt('Type Your Height', '6'));
switch (height) {
    case 5:
        console.log('you are short');
        break;
    case 4:
        console.log('you are very short');
        break;
    
    case 3:
        console.log('you are too short');
        break;

    default:
        console.log('You are eligible');
        break;
}
*/


/*
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
*/




// ***************************** 19-8 (advanced) while and for loop break and continue




// use of break

/*
for (let i = 1; i < 20; i++) {
    console.log(i + ` i love u satu `);
    if (i > 5) {
        break;
    }
}
*/

// use of continue

/*
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i + ` i love u satu `);
}
*/


// use of continue on array

/*
let anArray = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
for (let i = 0; i < anArray.length; i++) {
    const element = anArray[i];
    console.log(element); // সবগুলো উপাদানকে দেখতে
}
*/



/*
let anArray = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
for (let i = 0; i < anArray.length; i++) {
    const element = anArray[i];
    if (element > 40 && element < 70) {
        continue
    }
    console.log(element); // continue এর effect দেখতে
}
*/


/*
let anArray = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111];
for (let i = 0; i < anArray.length; i++) {
    const element = anArray[i];
    if (element > 90) {
        break
    }
    console.log(element); // break এর effect দেখতে
}
*/


// 5. একটা লুপ এর সাহায্যে ৭ ঘরের নামতা লিখো 
/*
let namta = 7;
for (let i = 1; i <= 10; i++) {
    let gunFol = 7 * i;
    console.log(`${namta} X ${i} = ${gunFol}`);

}
*/




// ********************************** JavaScript Live Class 3, Part 4 - undefined, NULL, empty value in JavaScript




// undefined, NULL, empty এই তিনটা জিনিসই অর্থগত/বাহ্যিক দিক থেকে একই মনে হলেও এরা ৩ টি আলাদা আলাদা data type . specially they are different from the angle of typeof.

/*
let aUndefinedData;
console.log(aUndefinedData);
console.log(typeof aUndifinedData); //in case of undifined typeof data is undifined অর্থাৎ আমি একটা data নিয়েছি কিন্তু ইচ্ছাকৃত ভাবে এর কোন value এখনো assign করিনি তাই এর value দেখাচ্ছে undifined

let aEpmtyData = '';
console.log(aEpmtyData);
console.log(typeof aEpmtyData); //empty is a string type data অর্থাৎ আমি একটা data নিয়েছি কিন্তু ইচ্ছাকৃত ভাবে value খালি রেখে দিয়েছি তাই এর value দেখাচ্ছে না বা empty দেখাচ্ছে

let aNullData = null;
console.log(aNullData);
console.log(typeof aNullData); //null is a object type data অর্থাৎ আমি একটা data নিয়েছি কিন্তু ইচ্ছাকৃত ভাবে এর value হিসেবে null কে বা শূন্য assign করেছে তাই এর value দেখাচ্ছে null
*/




// *************************** JavaScript Live Class 3, Part 5 - Ternary Operator & Null Coalescing Operator in JavaScript




// Ternary Operator হচ্ছে ifelse condition এর short form এখানে কিন্তু else if condition কাজ করবে না অর্থাৎ সংক্ষিপ্ত বা ছোট condition run করার জন্য ব্যবহৃত হয়। বড় condition এর ক্ষেত্রে তখন ifelse elseif use করাই উত্তম।

// ifelse condition:

/*
let age = prompt('How old are you?','20');

if (age >= 21) {
    console.log('Boy! You can marry. (If)');
} else {
    console.log('Boy! You can\'t marry. (Else)');    
}
*/


// উপরের এই condition টার short form বা ternary operator form:
/*
(age >= 21) ? console.log('Boy! You can marry. (Ternary)') : console.log('Boy! You can\'t marry. (Ternary)');  
*/

/*
let marritualStatus = (age >= 21) ? 'Boy! চলে চলে দৌড়ায়। (Ternary)' : 'Boy! আস্তে, থামো যারা, সাবার কারো। (Ternary)';  
console.log(`Your maritual status = ${marritualStatus}`);
*/

// ternary operator structure:
/*
let ternaryOperator;
ternaryOperator = (condition) ? true rejults : false rejults;
console.log(ternaryOperator);
*/


// Null Coalescing Operator: অনেক সময় undefined অথবা null value ওয়ালা data এর ক্ষেত্রে output এ undefined অথবা null না যাতে দেখায় সেই প্রয়োজন পরতে পারে হতে পারে আগে undefined অথবা null value এর aginst এ কোন condition দেয়া হয়েছে এখন আবার value undefined অথবা nullদেখালে পুরা function টাই error দেখাবে তখন আমরা Null Coalescing Operator দিয়ে undefined অথবা null value ওয়ালা data এর output হিসেবে undefined অথবা null না দেখিয়ে অন্য যা চাই দেখাতে পারি। তবে মনে রাখতে হবে Null Coalescing Operator দিয়ে কেবল undefined অথবা null value ওয়ালা data কেই controll করা যায়।

/*
let anUndifinedValuedData;
console.log(anUndifinedValuedData); //এটার value undefined দেখাচ্ছে

let aNulledValuedData = null;
console.log(aNulledValuedData); //এটার value null দেখাচ্ছে

console.log(anUndifinedValuedData ?? 'it shouldn\'t be undifined'); //anUndifinedValuedData এটার value undefined না দেখিয়ে পুরা লাইন দেখাবে

console.log(aNulledValuedData ?? 1300000); //aNulledValuedData এটার value null না দেখিয়ে 1300000 numberটা দেখাবে

let moja = (aNulledValuedData ?? '1300000-vugi-chugi');
console.log(moja);//aNulledValuedData এটার value null না দেখিয়ে 1300000-vugi-chugi stringটা দেখাবে

// Null Coalescing Operator structure:
// varibaleName ?? what to show instead of;
*/




// ********************************* JavaScript Live Class 3, Part 6 Loop - For, While, Do-While loop in JavaScript




// for loop examfa:


// 100 times runable loop
/*
for (let startingValue = 0; startingValue < 100; startingValue++) {
    console.log(` i love you satu ${1 + startingValue}`);    
}
*/


// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
/*
for (let index = 1; index <= 100; index++) {
    console.log(index);
}
*/

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

/*
for (let index = 50; index <= 80; index++) {
    if (index % 2 != 0) {
        console.log(index);
    }
}
*/


// 500 times runable loop where inital value is 1000
/*
for (let i = 1000; i >= 0; i -= 2) {
    console.log(`${i}. ${i}th value = ${i}`);    
}
*/


// 20 times runable loop where inital value is 7000
/*

for (let i = 7000; i < 7020; i++) {
    console.log(`${i}`);    
}
*/


//100 times runable loop 
/*
for (let i = 1; i <= 100; i++) {
    console.log(i);    
}
*/


//100 times runable loop with decrement operator
/*

for (let i = 100; i >= 0; i--) {
    console.log(i);    
}
*/


//1000 to 300 runable loop with decrement operator
/*
for (let i = 1000; i >= 300; i--) {
    console.log(i);    
}
*/


//100 to 500 runable loop with all even number
/*
let count = 1;
for (let i = 100; i <= 500; i++) {
    if (i % 2 == 0) {
        console.log(`${count}.  ${i} `);
        count++;
    }
}
*/


//100 to 500 runable loop with all even number
/*
let countOdd = 1;
for (let i = 100; i <= 500; i++) {
    if (i % 2 != 0) {
        console.log(`${countOdd}.  ${i} `);
        countOdd++;
    }
}
*/


//1 to 500 runable loop with all divided by 5
/*
let countSerial = 1;
for (let i = 100; i <= 500; i++) {
    if (i % 5 == 0) {
        console.log(`${countSerial}.  ${i} `);
        countSerial++;
    }
}
*/


//1 to 100 runable loop with all divided by 3 and > 70
/*
let countSerial = 1;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i >= 70) {
        console.log(`${countSerial}.  ${i} `);
        countSerial++;
    }
}
*/


// 1 to 100 পর্যন্ত loop যাবে তারপর আবার ১০০ থেকে ১ এ নেমে আসবে
/*
let countSerial = 1;
for (let i = 1; i <= 100; i++) {
    console.log(`${countSerial}.  ${i} `);
    countSerial++;
    if (i == 100) {
        for (let revi = 100; revi >= 1; revi--) {
            console.log(`${countSerial}.  ${revi} `);
            countSerial++;            
        }
    }
}
*/


// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
/*
for (let index = 1; index <= 100; index++) {
    console.log(index);
}
*/

// project:প্রতিদিন তোমার কাজ কি? ১) রাত ৮ টা বাজে মডিউল আনলক করো  ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো ৩) ভিডিও দেখতে দেখতে নোটস নাও ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো .এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 

/*
let myDailyTask = ["১) রাত ৮ টা বাজে মডিউল আনলক করো", "২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "৩) ভিডিও দেখতে দেখতে নোটস নাও", "৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", "৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো"];


// to see all the element in console as a list

console.log(myDailyTask);

for (let index = 0; index < myDailyTask.length; index++) {
    const element = myDailyTask[index];
    console.log(element);

}
*/

// solve of the math

/*
for (let i = 0; i < myDailyTask.length; i++) {

    for (let j = 1; j <= 10; j++) {
        console.log(myDailyTask[i]);
        // console.log(j);

    }

}
*/

// while loop: সব same just structure টা ভিন্ন

// to print 1 to 10 by both for and while

/*
for (i = 1; i <= 10; i++){
    console.log(i);
}
// assignment,conditin & increment or decrement সব এক লাইনেই হবে‌
*/

/*
let initial = 1;
while (initial <= 10 ) {
    console.log(initial);
    


    initial++;
}
// assignment টা  উপরে চলে এসেছে condition টা মাঝে increment or decrement টা সবার নিচে হবে
*/


// do while loop condition true or false whatever first time programm will do run.
/*
let do_i = 100;
do {
    console.log(do_i);

    do_i++; 
}while (do_i <= 10)
*/



// ***************************** JavaScript Live Class 4, JavaScript Function Part-1



// same code যাতে বার বার লিখতে না হয় সেই জন্যে function use করা হয়

// ************************** f1. basic function structure: Declare a Function

/*
function functionName() {
    console.log(`second bracket এর ভিতরে দিতে হয় function এর features বা কর্ম`); 
}
functionName();

// Function keyword টা use করার পর function এর একটা নাম দিতে হবে। তারপর Function টাকে call করাতে হবে second bracket এর বাহিরে।second bracket পর্যন্ত অংশকে বলা হয় function declaration এবং second bracket এর বাহিরের অংশকে বলা হয় invock of functi0n or calling function.
*/

//  আর function invocking function declaration এর আগেও করা যায় বা পরেও করা যায়।

/*
function function1() {
    console.log(`this is a function invock after declaration`);
}
function1();

function2();
function function2() {
    console.log(`this is a function invock before declaration`);
}
*/



// ***************************** f2.  making a simply dinamic dyStage1 type Function: Function with parameter




//  dynamic করার জন্য আমাদেরকে function declaration এর সময় এর মধ্যে parameter দিয়ে দিতে হবে যা অনেকটা variable এর মত কাজ করবে আর function invocking এর সময় এর মধ্যে arguments দিয়ে দিতে হবে যা অনেকটা variable এর valueর মত কাজ করবে। আর arguments খালি রাখলে parameter undefined অথবা default value দেখাবে।

/*
function nameFunction(nameParameter) {
    console.log(`hi my name is ${nameParameter} i am 25 years old and i love js`);
}
nameFunction(); // parameter undefined দেখাবে। কারণ nameParameter খালি

nameFunction('RahimArguments');
*/

// project f1 : 100 টাকা নিয়ে গিয়ে দোকানদার মামার কাছে পটেটো চাওয়ার function লিখতে হবে
/*
let taka = 100;

function takaAse(taka) {
    console.log(`ami  : ei nen mama ${taka} tk, ar potato den?`);
}
takaAse(taka);
*/





// ************************* default valued parameter 



// example with multiple  parameter: multiple  parameter এর ক্ষেত্রে parameterগুলো কমা দিয়ে দিয়ে লিখতে হবে এবং argumentsগুলো parameter অনু

/*
function nameFunction(nameParameter = 'defaultNazrul', ageParameter = 20, skillParameter = 'skillDefault') {
    console.log(`hi my name is ${nameParameter} i am ${ageParameter} years old and i love ${skillParameter}`);
}

nameFunction();
nameFunction('RahimArguments', 30, 'Ghum');
*/



// project f2 : টাকা নিয়ে গিয়ে দোকানদার মামার কাছে পটেটো চাওয়ার function লিখতে হবে আর কয়টা পটেটো দিবে তাও জানতে হবে একপিচ ৫ টাকা
/*
let taka = prompt("ammount of money");

function takaAse(taka) {
    console.log(`ami  : ei nen mama ${taka} tk, ar potato den?`);
    let potatoPiecePrice = 5;
    let potatoQty = taka / potatoPiecePrice;
    return potatoQty;
}
let potatoPieceQty = takaAse(taka);
console.log(`ddokandar  : ei nen mama ${potatoPieceQty} ta potato nen`);
*/

// explaining project f2 : ১) taka prompt থেকে value নিচ্ছে line-1108; 2) taka prompt থেকে পাওয়া value পাঠিয়ে দিচ্ছে  takaAse এর আর্গুমেন্ট হিসিবে line-1108;  ৩) takaAse তার আর্গুমেন্ট কে পাঠিয়ে দিচ্ছে function এর takaAse এর value হিসিবে line-1110;  ৪) সেই value console এ প্রিন্ট হচ্ছে line-1111; ৫) আবার সেই value চলে গেছে potatoQty এর মান বের করতে line-1113; ৬) এখন return potatoQty লিখার মাধ্যমে পুরা function এর output হিসেবে potatoQty তার value return করে বসে আছে আর তা পাঠিয়ে দিয়েছে line-1116 তে ivoke function takaAse(taka) এর কাছে; ৭) আর তারপর সেই return value console এ প্রিন্ট হচ্ছে line-1117;




// ****************** 19-4 (advanced) Multiple parameter add, multiplication, et




// বিঃ দ্রঃ : (১) variable হল যা function এর বাহিয়ে declared ।। আর parameter হল এমন variable যা শুধু function এর জন্য নির্ধারিত ও কেবল মাত্র function ভিতরেই কাজ করে। (২) যাকে return করা হবে সে মুলত full function এর value কে hold করে

// project f3 : দুটা parameter কে যোগ করতে হবে

/*
let numberOne = 50;
let numberTwo = 150;

function addTwoNumbers(number1, number2) {

    console.log(`in the function number1 = ${number1} number2 = ${number2}`);

    let resultOfAddition = number1 + number2;
    return resultOfAddition;
}
let resultOfAddition = addTwoNumbers(numberOne, numberTwo);
console.log(`out of the function: ${numberOne} + ${numberTwo} = ${resultOfAddition}`);
*/

// project f3 : দুটা parameter 50,155 কে গুণ করতে হবে
/*
// multipliedFunction(50,155); // function call আগেও করা যায়
function multipliedFunction(params1, params2) {
    // return params1 * params2; // এভাবেও same result দিবে
    let resultOfMultiplication = params1 * params2;
    return resultOfMultiplication;
}

multipliedFunction(50, 155);
console.log(multipliedFunction(50, 155));
*/

// project f3 : দুটা parameter prompt দিয়ে নিয়ে তাদের বিয়োগ কর
/*
let num1 = prompt("type first number");
let num2 = prompt("type second number");

function SubstractedFunction(params1, params2) {

    let resultOfSubstractio = params1 - params2;
    return resultOfSubstractio;
}

SubstractedFunction(num1, num2);
console.log(SubstractedFunction(num1, num2));
*/

// project f4 : দুটা parameter prompt দিয়ে নিয়ে তাদের ভাগ কর আর details ouput দেখাও
/*
let numOne = prompt("type first number");
let numTwo = prompt("type second number");

function DevidedFunction(params1, params2) {

    let resultOfdividation = params1 / params2;
    return resultOfdividation;
}

let result = DevidedFunction(numOne, numTwo);
console.log(`number one = ${numOne},
number two = ${numTwo},
------------------------------
result     = ${result}`);
*/

// project f5 : দুদুটা parameter 12,5 কে modulus করতে হবে যার একটা string থাকবে
/*
function getReminder(number1, number2) {
    return number1 % number2;
}


console.log(getReminder(12, "5"));
console.log(typeof (getReminder(12, "5")));

*/
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
/*
let count = 1;
for (let i = 1; i <= 130; i++) {

    if (i % 13 == 0) {
        console.log(`13 X ${count} = ${i}`);
        count++
    }

}
*/

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
/*
let userName = prompt("type your name");
let userNameLowerCase = userName.toLowerCase();

alert(`Hi! Mr. ${userNameLowerCase}`);
*/




// ৩.fullName নামে একটা ফাংশন তৈরী কর যেটা তো মার নামের প্ রথম অংশ এবং তো মার নামের শেষের অংশ প্ যারামিটার হিসেবে নিবে। আর তো মার নামের দুই অংশ জো ড়া দিয়ে আউটপুট হিসেবে তো মার পূর্ ন নাম রিটার্ ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্ যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ ন করবে।
/*
let firstName = prompt("type your firstName name");
let lastName = prompt("type your lastName name");

fullName(firstName, lastName);

function fullName(startName, endName) {
    let finalName = startName + " " + endName;
    return finalName;
}

let userNameIs = fullName(firstName, lastName);
console.log(`hi! mr. ${userNameIs}`);
*/

// ৪-1. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
/*
let num1 = Number(prompt(`type number 1 `));
let num2 = Number(prompt(`type number 2 `));
let num3 = Number(prompt(`type number 3 `));

sumOFThree(num1, num2, num3);

function sumOFThree(n1, n2, n3) {
    let sum = n1 + n2 + n3;
    return sum;
}

let resulOfThreeSome = sumOFThree(num1, num2, num3);
console.log(`result Of Three Some = ${resulOfThreeSome}`);
*/

// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
/*
let tempInCel = Number(prompt(`type temparature in celcious`));

convertTemp(tempInCel);

function convertTemp(tempValue) {
    let fahrenheit = (tempValue * (9 / 5)) + 32;
    return fahrenheit;
}

let tempfahrenheit = convertTemp(tempInCel);
console.log(`${tempInCel}°C = ${tempfahrenheit}°F`);
*/



// ৪-2. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

/*
let inputNumber = prompt("type Number");

squareFunction(inputNumber);

function squareFunction(no2Bsquared) {

    // let resultOfSquare = no2Bsquared * no2Bsquared;
    let resultOfSquare = Math.pow(no2Bsquared, 2); // by using Math method

    return resultOfSquare;
}

let finalResultOfSquare = squareFunction(inputNumber);
console.log(`The result is ${finalResultOfSquare}`);
*/




// ******************************** 20-2 Unit Convert Inch to Feet, miles to kilometer




// Convert Inch to Feet
/*
let inches = 120;

inches2feets(inches);

function inches2feets(valueInInch) {
    let valueInFeet = valueInInch / 12;
    return valueInFeet;
}

let resultInFeet = inches2feets(inches);
console.log(`${inches}" = ${resultInFeet}'`);



// same function বিভিন্ন জায়গায় থেকে বিভিন্ন ভাবে ডাকা যায়

let naniInches = 1200;

resultInFeet = inches2feets(naniInches);
console.log(`${inches}" = ${resultInFeet}'`);

let nanaInches = 12000;

resultInFeet = inches2feets(nanaInches);
console.log(`${inches}" = ${resultInFeet}'`);

let dadiInches = 120000;

resultInFeet = inches2feets(dadiInches);
console.log(`${inches}" = ${resultInFeet}'`);

let dadaInches = 12;

resultInFeet = inches2feets(dadaInches);
console.log(`${inches}" = ${resultInFeet}'`);
*/


// Convert miles to kilometer
/*
let miles = Number(prompt("Type value in miles"));
// console.log("typeof miles is " + "'" + typeof (miles) + "'");
miles2Km(miles);

function miles2Km(valueInMiles) {
    let valueInKm = valueInMiles * 1.6;
    return valueInKm;
}

let resultInKm = miles2Km(miles);
console.log(`${miles} miles = ${resultInKm} Km`);
*/




// *********************** 20-3 Check even and odd number using function




/*
let inputNumber = prompt(`Type The Number You Want To Check`);

checkOddEven(inputNumber);

function checkOddEven(number2Check) {

    let reminder = number2Check % 2;
    if (reminder == 0) {
        return "This is an Even number";
    } else {
        return "This is an Odd number";
    }
}

let outPutResult = checkOddEven(inputNumber);
console.log(`${inputNumber} |||   ${outPutResult}`);
*/




// ***************************	20-4 Check whether a year is a Leap Year or not




/*
let year = prompt(`Type The year You Want To Check`);

isYearLeapYear(year);

function isYearLeapYear(year2Check) {
    if ((year2Check % 4 == 0 && year2Check % 10 != 0) || year2Check % 400 == 0) {

        return "This is a Leap Year"

    } else {

        return "This is not a Leap Year"
    }

}

let resultOfChecking = isYearLeapYear(year);
console.log(`${year} -  ${resultOfChecking}`);


// same function বিভিন্ন জায়গায় থেকে  ডাকা 

let mammasYear = 1987;

resultOfChecking = isYearLeapYear(mammasYear);
console.log(`${mammasYear} -  ${resultOfChecking}`);
*/



// ************************************ 20-5 Calculate Factorial of a number using for loop // ********************************* 20-6 Recalculate factorial multiple times using a function





// Factorial of 7 by loop
/*
let Factorial = 1;
for (let i = 1; i <= 7; i++) {

    Factorial = Factorial * i;
    console.log(Factorial);

}
*/




// Factorial of a askii Number by functio and loop [Cautions: don't set value more than 10 for factorial calculation]


/*
let factorialOf = 9; // value is setting here
getFactorial(factorialOf); // function declared and defining bellow

function getFactorial(valu2GetFactorialOf) {

    let factorial = 1;
    for (let i = 1; i <= valu2GetFactorialOf; i++) {
        factorial = factorial * i;
    }
    return factorial;

}

let resulOfFactorial = getFactorial(factorialOf);
console.log(`Factorial of ${factorialOf} is, ${resulOfFactorial}`);

*/

// explanation: (১) requirement টা লাইন নাম্বার 1535 এ factorialOf এ feed দেয়া হল; (২) তারপর লাইন নাম্বার 1536 এ একটা function declared করা হল;; (৩) তারপর লাইন নাম্বার 1538 function টা defining শুরু করা হল; (৪) function এর ভিতরে একটা foreign variable নেইয়া হল factorial নামে যাতে ফ্যক্টরিয়ালের নিয়ম অনুযায়ী গুন চালানো যায়; (৫) for loop চালানো হল  (৬) এখন loop অনুযায়ী যখন i = ১ তখন factorial এর value update হয়ে হল ১ X ১ = ১ ; যখন i = ২ তখন factorial এর value update হয়ে হল ১ X ২ = ২; যখন i = ৩ তখন factorial এর value update হয়ে হল ২ X ৩ = ৬;  যখন i = ৪ তখন factorial এর value update হয়ে হল ৬ X ৪ = ২৪; এভাবে চলতে চলতে যখন শর্ত শেষ হবে বের হয়ে রেজাল্ট দেখাবে




// *****************************●	20-7 Factorial using a while loop or a decrementing loop




/*
let needFactorialOf = 7;

calcFactorial(needFactorialOf);

function calcFactorial(value2BFactorised) {

    let factorial4Two = 1;
    let i = 1;
    while (i <= needFactorialOf) {
        factorial4Two = factorial4Two * i;
        i++;
    }

    return factorial4Two;

}

let resultOfFactorial4Two = calcFactorial(needFactorialOf);
console.log(`Factorial of ${needFactorialOf} = ${resultOfFactorial4Two}`);
*/


// example of reverse factorial
/*
let factorial2revised = 10;
reviseFactorial(factorial2revised);

function reviseFactorial(revisedValue) {

    let factorial4Revised = 1;
    for (let i = factorial2revised; i > 0; i--) {
        factorial4Revised = factorial4Revised * i;
    }
    return factorial4Revised;
}

let resultOfRevisedFactorial = reviseFactorial(factorial2revised);
console.log(`Revisedfactorial of ${factorial2revised} = ${resultOfRevisedFactorial}`);
*/

// PROJECT : এক্তা FUNCtion লিখতে হবে যেখানে কোন value input দিল তা উল্টোক্রমে ১ পর্যন্ত গিন ফলএর যোগফল দেখাবে
/*
let n = 12;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
}
console.log("Output = " + sum);
*/



// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
/*
let year2check = 2023;
checkLpYear(year2check);

function checkLpYear(ValueOfYear) {

    if ((ValueOfYear % 4 == 0 && ValueOfYear % 100 != 0) || ValueOfYear % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultOfChecking = checkLpYear(year2check);
console.log(`Your year ${year2check} is a leapyear : ${resultOfChecking}`);
*/


// ২.তো মার বয়স কি odd নাকি even সংখ্ যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কো ন সংখ্ যা প্ যারামিটার হিসেবে দিলে, সেই সংখ্ যা Even হলে ফাংশন true রিটার্ ন করবে আর Odd হলে false রিটার্ ন করবে।
/*
let myAge = 25;
OddEvenCheck(myAge);

function OddEvenCheck(valueInDigit) {
    if (valueInDigit % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultOfMyAge = OddEvenCheck(myAge);
console.log(`I am ${myAge} years old. and its an odd number : ${resultOfMyAge}`);

let yourAge = prompt("Type Your Age");

let resultOfYourAge = OddEvenCheck(yourAge);
console.log(`I am ${yourAge} years old. prit true for even and false for odd : ${resultOfYourAge}`);
*/


// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

/*
let hours = prompt("Type Hours");
hrs2min(hours);

function hrs2min(valueInHrs) {
    let valuInMin = valueInHrs * 60;
    return valuInMin;
}
let resultInMin = hrs2min(hours);
console.log(`${hours} hrs  =  ${resultInMin} mins`);
*/


// একটা ফাংশন যেটা একটা নাম নিবে আরা একটা মেসেজ আলার্ট দিবে
/*
let inputName = "Rahim";
alertName(inputName)

function alertName(params) {
    let sms = `hi mr ${params}`
    return sms
}

console.log(alertName(inputName));
*/

// একটা ফাংশন যেখানে কোন পিজা কোম্পানি অর্ডার নিবে পিচ হিসেবে আর মেসেজ দিবে কয়টা পিজা অর্দার হইল, অন্যকোন খাবার এর অর্ডার নিতে পারবে না
/*
let item = "pizza";
let foodName = item.toLowerCase();
let qty = 10;
let price = 500;

orderSlep(foodName, qty, price);

function orderSlep(foodItem, ammount, mrpRate) {
    if (foodItem != "pizza") {
        return `Sorry sir we don have ${foodItem}.
        We only sell Pizza.`
    }
    let totalPrice = ammount * mrpRate;
    let sms = `Dear Consumer,
    Your ${foodItem} order successful!
    quantity = ${ammount}
    total cost = ${totalPrice}`
    return sms;
}

let printedOrderSlip = orderSlep(foodName, qty, price);
console.log(printedOrderSlip);
*/





// ****************************** 21-1 Module Introduction, Math and Random number



/*
let myNum = -5;
let absOfMyNum = Math.abs(myNum); // যেকোন সঙ্খ্যাকে তার পরমমানে অর্থাৎ + / - value ছাড়া বানাতে 
console.log(absOfMyNum); // to see output


let myCelingNum = 5.8755;
let ceilOfMCN = Math.ceil(myCelingNum); // দশমিকে পরে কোন কিছুই থাকলে তা পরবর্তি পুর্ন সংখ্যাকে দেখাবে
console.log(ceilOfMCN); // to see output


let myFloorNum = 465.8755;
let ceilOfMFN = Math.floor(myFloorNum); // দশমিকে পরে যা কিছুই থাক তা পুর্ববর্তি পুর্ন সংখ্যাকে দেখাবে
console.log(ceilOfMFN); // to see output


let myRoundNum = 50.5;
let ceilOfMRN = Math.round(myRoundNum); // দশমিকে পরে 0.4 এর উপরে থাকলে পরবর্তি পুর্ন সংখ্যাকে দেখাবে নইলে পুর্ববর্তি পুর্ন সংখ্যাকে দেখাবে
console.log(ceilOfMRN); // to see output


let mathRandomNum = Math.random(); // এটা ০ - ১ পর্যন্ত continously random কিচু number দেখাতে থাকে
console.log(mathRandomNum); // to see output 0 - 1
console.log(mathRandomNum * 10); // to see output 0 - 10
console.log(mathRandomNum * 100); // to see output 1 - 100

let roundedRandomNum = Math.round(mathRandomNum * 100); // to see output 1 - 100 in rounded form
console.log(roundedRandomNum); // to see output
*/


/*
let anotherArray = [10, 20, 30, 40]

const min = Math.min(...anotherArray) // আররে তে কোনটা বড় এলেইমিন্ট
console.log(min) // to see output

const max = Math.max(...anotherArray) // আররে তে কোনটা ছোট এলেইমিন্ট
console.log(max) // to see output
*/



// একটা ফাংশন লিখ যেটা টানা ১০ টা random number দিবে
/*
for (let index = 1; index <= 10; index++) {
    let output = Math.random();
    console.log(index, output * 100);
    output++;
}
*/




// *************************** 21-2 Swap variable, swap without temp, destructing একটার value আরেকটায় রাখা বা Swap 



/*
let value1 = 10;
let value2 = 20;
console.log(value1, value2);

// conventional method swaping these variables value interchange between them
let thidParty = value1;
value1 = value2;
value2 = thidParty;
console.log(value1, value2);

// Distructring method swaping these variables value interchange between them

let v1 = 100;
let v2 = 200;
console.log(v1, v2);
[v1, v2] = [v2, v1];
console.log(v1, v2);
*/




// ************************ 21-3 Find max of two values, find max of three values




// ৩টা সংখ্যার মাঝে বড় কন্টা এবং ছোট কোনটা বের করার ফানশন using math method
/*
let n1 = Number(prompt("num1"));
let n2 = Number(prompt("num2"));
let n3 = Number(prompt("num3"));


findLargestNLowest(n1, n2, n3);

function findLargestNLowest(v1, v2, v3) {
    let largestNum = Math.max(v1, v2, v3);
    let lowestNum = Math.min(v1, v2, v3);
    return `largestNum is ${largestNum} and lowestNum is ${lowestNum}`;
}
let outputOfOpt = findLargestNLowest(n1, n2, n3);
console.log(outputOfOpt);
*/



// ********************************* 21-4 Sum of all numbers in an array




/*
// without function
let anArray = [10, 20, 30, 40];

let sum = 0;
for (let i = 0; i < anArray.length; i++) {
    sum += anArray[i]
}
console.log(sum);


// with function

let anArray1 = [100, 200, 300, 400];
sumOfArray(anArray1);

function sumOfArray(arr1) {
    let finalSum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        finalSum += element;
    }
    return finalSum;
}
let resultOfArraySum = sumOfArray(anArray1);
console.log(resultOfArraySum);
*/





// **************************** 21-5 Find the largest and lowest element of an array



// largest  element of an array


/*
let forPickArray = [10, 520, 5, 54, 556];

function checkThePick(arr) {
    let pick = Math.max(...arr);
    return pick;
}
let resultPick = checkThePick(forPickArray);
console.log(resultPick);



// lowest  element of an array

let forBottomArray = [100, 520, 50, 54, 5560];

function checkTheBottom(arr) {
    let bottom = Math.min(...arr);
    return bottom;
}
let resultBottom = checkTheBottom(forBottomArray);
console.log(resultBottom);
*/

// Second method by jhankar sir


// largest no in an array
/*
let arr = [10, 20, 50, 560, 240];

findLargest(arr);

function findLargest(params) {
    largeNo = params[0];
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element > largeNo) {
            largeNo = element
        }
    }
    return largeNo;
}

let theLargestNoIs = findLargest(arr);
console.log(theLargestNoIs);


// lowest no in an array

let arr2 = [10, 20, 50, 560, 240];

findLowest(arr2);

function findLowest(params) {
    lowestNo = params[0];
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element < lowestNo) {
            lowestNo = element
        }
    }
    return lowestNo;
}

let theLowestNoIs = findLowest(arr2);
console.log(theLowestNoIs);
*/





// ************************************** 21-6 Create a Fibonacci Series using a for loop


/*
fibonacci series:  0,1,1,2,3,5,8,13,21,34,55,89....

explain:
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th

so we can formulate,
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th

so we can write,
(i)fibo = (i-1)fibo + (i-2)fibo
fibo[i] = fibo[i-1] + fibo[i-2]

*/

// first method : 
/*
let fiboLimit = 10;

getFiboSeries(fiboLimit);

function getFiboSeries(limit) {
    let fiboSeries = [0, 1];
    for (let i = 2; i < limit; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fiboSeries;
}

let theSeries = getFiboSeries(fiboLimit);
console.log(theSeries);
*/


// alternative easy way
/*
let fiboLimit = 10;

getFiboSeries(fiboLimit);

function getFiboSeries(limit) {
    let fiboSeries = [0, 1];
    for (let i = 2; i < limit; i++) {
        fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }
    return fiboSeries;
}

let theSeries = getFiboSeries(fiboLimit);
console.log(theSeries);
*/

// fibonacci series লিখ যা কোন wrong iput দিলে alert করবে

/*
let fiboLimit = prompt("type the limit");

getFiboSeries(fiboLimit);

function getFiboSeries(limit) {
    if (typeof limit != Number && limit < 2) {
        return `plz give input a number type data and must be above 2`
    }
    let fiboSeries = [0, 1];
    for (let i = 2; i < limit; i++) {
        fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }
    return fiboSeries;
}

let theSeries = getFiboSeries(fiboLimit);
console.log(theSeries);
*/





// ************************************** 22-1 recap js

// largest no in an array
// lowest no in an array





// ************************************** 22-2 Remove duplicate items from an array




/*
let names = ['asif', 'basif', 'casif', 'dasif', 'fasif', 'gasif', 'hasif', 'jasif', 'asif', 'basif', 'casif', 'dasif']
console.log(names);



// my solution 

function removeDuplicates(arrOfName) {
    let uniqueNames = [];
    for (let i = 0; i < arrOfName.length; i++) {
        const element = arrOfName[i];
        if (uniqueNames.indexOf(element) == -1) {
            uniqueNames.push(element); // first way of solve
            // uniqueNames[i] = element; // second way of solve
        }
    }
    return uniqueNames;
}

removeDuplicates(names);
let arrOfUniqueNames = removeDuplicates(names);
console.log(arrOfUniqueNames);



// and vai solution by forOf loop

function exfailDups(mixNames) {
    let unqNames = [];
    for (let elements of mixNames) {
        if (unqNames.indexOf(elements) == -1) {
            unqNames.push(elements);
        }
    }
    return unqNames

}

exfailDups(names);
let resultArrOfUniqueNames = exfailDups(names);
console.log(resultArrOfUniqueNames);
*/





// ************************************** 22-5 Creat a order slip of buying wooden products 





// একটা ফাংশন বানাও যেখানে চেয়ারে লাগে ৫ cfp, টেবিলে লাগে ১৫ cfp, খাটে  লাগে ৫০ cfp করে কাঠ । প্রতিটা আইটেম এর ভিন্ন ভিন্ন qty এর জন্য বানাও
/*
let rqdWood4Chair = 10;
let rqdWood4table = 10;
let rqdWood4bBed = 10;
let customerName = prompt("Write name?", "Asif");

// totalRQDwoodFunc(rqdWood4Chair, rqdWood4table, rqdWood4bBed, customerName);

function totalRQDwoodFunc(chairCFP, tableCFP, bedCFP, customer) {
    let rqdChairQTY = Number(prompt("chair qty"));
    let rqdTableQTY = Number(prompt("table qty"));
    let rqdBedQTY = Number(prompt("wood qty"));

    // wood calculation

    let totalWood4chair = chairCFP * rqdChairQTY;
    let totalWood4table = tableCFP * rqdTableQTY;
    let totalWood4bed = bedCFP * rqdBedQTY;

    let inTotalWoodRQD = totalWood4chair + totalWood4table + totalWood4bed;

    return `hi! ${customer},
    thanks for ordering us.
    
    Your invoice is bellow,
    ordered chair qty = ${rqdChairQTY}
    ordered table qty = ${rqdTableQTY}
    ordered bed qty = ${rqdBedQTY}
    --------------------------------
    total wood rqd = ${inTotalWoodRQD}`;
}

// for writen function

// totalRQDwoodFunc(rqdWood4Chair, rqdWood4table, rqdWood4bBed, customerName);
// let resulOfWoodCalc = totalRQDwoodFunc(rqdWood4Chair, rqdWood4table, rqdWood4bBed, customerName);
// console.log(resulOfWoodCalc);



// for a new requiremetns

let myWood = totalRQDwoodFunc(10, 10, 10, customerName);
console.log(myWood);
*/





// ************************************** 22-6 print foo and bar if divisible by n1 & n2





// একটা ফাংশন বানাও যেখানে একটা নির্দিষ্ট range এর ভিতর যদি কোন সংখ্যা ৫ দিয়ে ভাগ যায় তাহলে foo print হবে, যদি কোন সংখ্যা ৩ দিয়ে ভাগ যায় তাহলে bar print হবেযদি কোন সংখ্যা ৫ ও ৩ দুটা দিয়ে ভাগ যায় তাহলে foobar print হবে
/*
let lowerRange = 0;
let upperRange = 90;

printAsRqd(lowerRange, upperRange);

function printAsRqd(lowValue, upValue) {
    for (let i = lowValue; i <= upValue; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`foobar`);
        } else if (i % 3 == 0) {
            console.log(`bar`);
        } else if (i % 5 == 0) {
            console.log(`foo`);
        } else {

            console.log(i);
        }

    }
}

// learning: (1) complex condition first এ রাখতে হয়ে লাইন-২৬৪০; (২) সবসময় function এ return এর দরকার পরে না। 
*/



// ************************************** 22-7 find the cheapest phone from an array where object is inside  

/*
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
// console.log(cheapestPhone);

for (let i = 0; i < phones.length; i++){
    const mobile = phones[i];
    if (mobile.price < cheapestPhone.price) {
        cheapestPhone = mobile;
        console.log(cheapestPhone);
    }

}
*/


// 22-7 find the cheapest phone from an array where object is inside 
/*
let phones = [{
        brand: "a",
        price: 10000,
        ram: "6GB",
        camera: "100mp"
    },
    {
        brand: "b",
        price: 20000000,
        ram: "60GB",
        camera: "1000mp"
    },
    {
        brand: "c",
        price: 30000,
        ram: ".6GB",
        camera: "10mp"
    },
    {
        brand: "d",
        price: 40,
        ram: ".65GB",
        camera: "1mp"
    },
    {
        brand: "e",
        price: 500000000,
        ram: ".650GB",
        camera: "1mp"
    }
]

let cheapestPhone = phones[0];
for (const mobile of phones) {
    if (mobile.price < cheapestPhone.price) {
        cheapestPhone = mobile;
    }
}
console.log(cheapestPhone);
*/



// ************************************** 22-8 total cost of a shopping cart



/*
let cart = [{
        item: "shirt",
        pcsPrice: 200,
        qty: 2
    },
    {
        item: "pant",
        pcsPrice: 2000,
        qty: 20
    },
    {
        item: "tShirt",
        pcsPrice: 100,
        qty: 200
    },
    {
        item: "shorts",
        pcsPrice: 300,
        qty: 2000
    }
]

let totalShoppingCost = 0;
// for (const product of cart)
for (let i = 0; i < cart.length; i++) {

    const product = cart[i];
    let OneItemAllQtyPrice = product.pcsPrice * product.qty;
    totalShoppingCost = totalShoppingCost + OneItemAllQtyPrice;
}
console.log(totalShoppingCost);
*/






// ************************************** 22-9 animal desity in sundarban upto a fixed miles




// একটা ফাংশন বানাও যেখানে একটা নির্দিষ্ট দুরত্ব পর্যন্ত animal density কত হবে তা বের করবে যেখানে 1st 10 miles animal density = 10/mile; 2nd 10 miles animal density = 100/mile; rest miles animal density = 1000/mile;
/*
let visitedMiles = 30;

findAnimalDensity(visitedMiles);

function findAnimalDensity(distance) {
    let lowLevelAnimalDensity = 10;
    let midLevelAnimalDensity = 100;
    let deepLevelAnimalDensity = 1000;
    if (distance <= 10) {
        let firstLevelTotalAnimalFound = distance * lowLevelAnimalDensity;
        return firstLevelTotalAnimalFound;
    } else if (distance <= 20) {
        let firstLevelAnimalFound = lowLevelAnimalDensity * 10;
        let restMiles = distance - 10;
        let secondLevelAnimalFound = restMiles * midLevelAnimalDensity;
        let secondLevelTotalAnimalFound = firstLevelAnimalFound + secondLevelAnimalFound;
        return secondLevelTotalAnimalFound


    } else {
        let firstLevelAnimalFound = lowLevelAnimalDensity * 10;
        let secondLevelAnimalFound = midLevelAnimalDensity * 10;
        let restMilesIntoDeep = distance - 20;
        let deepLevelAnimalFound = restMilesIntoDeep * 1000;
        let deepLevelTotalAnimalFound = firstLevelAnimalFound + secondLevelAnimalFound + deepLevelAnimalFound;
        return deepLevelTotalAnimalFound

    }
}

let animalFound = findAnimalDensity(visitedMiles);
console.log(animalFound);
*/





// ************************************** 22-5-1 Basic  JavaScript concept checklist



// ======================================== test one: ================================
/*
let theStringVarIs = "I am the string typr variable";
let amIaBooleanVar = true;
let theNoVarIs = 2000;

console.log(`theStringVar is = ${theStringVarIs}
theNoVarIs = ${theNoVarIs}
amIaBooleanVar = ${amIaBooleanVar}`);
*/


// ======================================== test two: ================================
/*
let changeAbleVarIs = "Me. I am change able";
const mobileNo = "+88-019-3903-2974";

console.log(`changeAbleVarIs = ${changeAbleVarIs}
theConstantVarIs = ${mobileNo}`);

changeAbleVarIs = "look, i told you that i am changeable now i am changed";


console.log(`changeAbleVarIs = ${changeAbleVarIs}
theConstantVarIs = '${mobileNo}' and i am unchangeable`);
*/


// ======================================== test three ================================
/*
let var1 = 10;
let var2 = 20;

let sumOfVar = var1 + var2;
console.log(`sumOfVar is = ${sumOfVar}`);

let subsOfVar = var1 - var2;
console.log(`subsOfVar is = ${subsOfVar}`);

let dividesOfVar = var1 / var2;
console.log(`dividesOfVar is = ${dividesOfVar}`);

let multiOfVar = var1 * var2;
console.log(`multiOfVar is = ${multiOfVar}`);

let moduOfVar = var2 % var1;
console.log(`moduOfVar is = ${moduOfVar}`);
*/



// ======================================== test four: ================================
/*
let compVar1 = 250;
let compVar2 = 150;

console.log(`${compVar1} > ${compVar2} = ${compVar1 > compVar2}`);
console.log(`${compVar1} < ${compVar2} = ${compVar1 < compVar2}`);
console.log(`${compVar1} == ${compVar2} = ${compVar1 == compVar2}`);
console.log(`${compVar1} != ${compVar2} = ${compVar1 != compVar2}`);
console.log(`${compVar1} <= ${compVar2} = ${compVar1 <= compVar2}`);
console.log(`${compVar1} >= ${compVar2} = ${compVar1 >= compVar2}`);
*/



// ======================================== test five + six: ================================
/*
let varOne = 100;
let varTwo = "100";

if (varOne == varTwo && typeof varOne == typeof varTwo) {
    console.log(`Both are equal in the manner of value and type`);
} else if (varOne == varTwo || typeof varOne == typeof varTwo) {
    console.log(`Both are equal in the manner of either value or type`);
} else {
    console.log(`Both not equal in the manner of neither value nor type`);
}
*/



// ======================================== test seven: ================================
/*
let i = 7;
while (i <= 19) {
    if (i % 2 != 0) {
        console.log(i, "id odd no.");
    } else {
        console.log(i);
    }
    i++
}
*/


// ======================================== test eight: ================================
/*
let anArrayIs = [5240, 564564, 65465, 565456, 655456, 4, 5, 5465, 5, 45]

console.log(anArrayIs);
console.log(anArrayIs.length);

anArrayIs[3] = "five lacs sixty five thousand fou hundred fifty six";
console.log(anArrayIs);

anArrayIs.push("first Item added")
console.log(anArrayIs);
anArrayIs.push("second Item added")
console.log(anArrayIs);

anArrayIs.shift()
console.log(anArrayIs);
*/



// ======================================== test nine: ================================
/*
let getAnArr = ["first item", "second item", "third item", "fourth item", "fifth item", ]

console.log(getAnArr);
for (let i = 0; i < getAnArr.length; i++) {
    const element = getAnArr[i];
    console.log(element);
}
console.log(`--------------------------seperator-----------------------------`);
for (const element of getAnArr) {
    console.log(element);
}
*/



// ======================================== test ten: ================================
/*
let getanotherArr = [5535, 356, 50, 20, 564, 2, 56, 1, 20, 30, 50, 600]

console.log(getanotherArr);
for (const element of getanotherArr) {
    if (element > 80) {
        console.log(element);
    }
}
*/



// ======================================== test elaven: ================================
/*
function getMultiplicatin(n1, n2, n3) {
    let resulOfMulti = n1 * n2 * n3;
    return resulOfMulti;
}

getMultiplicatin(10, 20, 30);
let resultOfMultiplication = getMultiplicatin(10, 20, 30);
console.log(resultOfMultiplication);
*/




// ======================================== test twelve: ================================
/*
let anObj = {
    item: "comber",
    noOftheeth: 50,
    TPI: 50,
    color: "blue"
}
let anObj2 = {
    item: "pc",
    ram: "8gb",
    HDD: "1tb",
    color: "black"
}

console.log(anObj, anObj2);
anObj.noOftheeth = 30;
console.log(anObj);
*/










// ************************************** 22-5-1 Basic  JavaScript problem solving checklist



// ======================================== test one: ================================
/*
function feetToInch(getFeet) {
    let inch = getFeet * 12;
    return inch
}

feetToInch(5);
console.log(feetToInch(5));
*/



// ======================================== test two: ================================
/*
function centimeteToMeter(getCenti) {
    let meter = getCenti / 100;
    return meter
}

centimeteToMeter(500);
console.log(centimeteToMeter(500));
*/



// ======================================== test three: ================================
/*
function paperRequirements(book1NoOfCopy, book2NoOfCopy, book3NoOfCopy) {
    let paperRequiredforBook1 = 100;
    let paperRequiredforBook2 = 200;
    let paperRequiredforBook3 = 300;

    let totalpaperRequiredforBook1 = paperRequiredforBook1 * book1NoOfCopy;
    let totalpaperRequiredforBook2 = paperRequiredforBook2 * book2NoOfCopy;
    let totalpaperRequiredforBook3 = paperRequiredforBook3 * book3NoOfCopy;

    let totalpaperRequiredforAllBooks = totalpaperRequiredforBook1 + totalpaperRequiredforBook2 + totalpaperRequiredforBook3;
    return totalpaperRequiredforAllBooks;
}
paperRequirements(100, 100, 100);
console.log(paperRequirements(100, 100, 100));
*/




// ======================================== test four: ================================
/*
let bestFriends = ["asif", "samiya sultana", "abdullah", "sayma", "mubashshira", "sohan"]

function bestFriend(friendArr) {

    let bigFriend = "";
    for (const friend of friendArr) {
        if (friend.length > bigFriend.length) {
            bigFriend = friend;
        }
    }
    return bigFriend;
}
bestFriend(bestFriends);
let myBestiIs = bestFriend(bestFriends);
console.log(`i love you . you ar my myBestiIs ${myBestiIs}`);
*/





// ======================================== test four: ================================
/*
let anArrOfNum = [10, 20, 652, 10, 540, 45, 454, 2120, -1, 50, 45464, 5645654654674, 654];

function funcForPosNum(theArrIs) {
    let anotherArrOfPosNum = [];
    for (const element of theArrIs) {
        if (element >= 0) {
            anotherArrOfPosNum.push(element);
        } else{
            break;
        }
    }
    return anotherArrOfPosNum;
}
funcForPosNum(anArrOfNum);
let theNewArrOfPosNumIs = funcForPosNum(anArrOfNum);
console.log(theNewArrOfPosNumIs);
*/









// ******************************* unsolved problems of curses



// project 9 || বন্ধুদের নাম+mark জানা আছে তাদের নাম বসিয়ে দিলে মার্ক + রেজালতের গ্রেড বের  হবে। 

// Q15: What code you have to write to know the number of “a” in a string
/*
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)
*/

// how to know the length of an object and how to change any property with value in ab obj
// recursion of function