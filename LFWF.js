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

/*3 Basic functions
i) alert - to alert about like sineboard
ii) confirm - to ask question and asking value in bolean i.e yes or No
iii)prompt - to ask value of any variable.*/

// console.log(alert('be care full'));
// console.log(confirm('do you like JS?'));

// ********************* Get Elements: getElementById()- getElementsByClassName()- getElementsByTagName()- querySelector()- querySelectorAll()

// getElementById
/*document.getElementById('item1').textContent = 'আমি item-1 ছিলাম আর এখন itemOne হইয়া গেছি textContent এর বদৌলতে';*/

// [n.b: = command টার বাংলা হইল, document তো মার ভিতরে item1 নামের যে id আছে তাকে ধর [getElementById], তার ভিতরে যা কিছু লিখা থাকুক না কেন [item-1] তা change করে তুমি বসায়া দাও[textContent/innerText] 'আমি item1 ছিলাম আর এখন itemOne হইয়া গেছি' text হিসেবে। নিচে আরো কিছু example দেয়া হলঃ===]

/*document.getElementById('item2').textContent = 'আমি item-2 ছিলাম আর এখন itemTwo হইয়া গেছি textContent এর বদৌলতে';

document.getElementById('item3').innerText = 'আমি item-3 ছিলাম আর এখন itemThree হইয়া গেছি innerText এর বদৌলতে';*/

// [তবে আমি যদি চাই document তার ভিতরের কোন id এর innerText দিয়ে নতুন একটা text ত বসাবই এবং সেইসাথে কিছু css ও aply করব তাহলে তখন innerHTML use করতে হবে। কিছু example দেয়া হলঃ===]

/*document.getElementById('item5').innerHTML = 'আমি item-5 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemFive</span> হইয়া গেছি innerHTML এর বদৌলতে';

document.getElementById('item6').innerHTML = 'আমি item-6 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemSix</span> হইয়া গেছি innerHTML এর বদৌলতে';*/


// getElementsByClassName

/*document.getElementsByClassName('items')[6].textContent = 'আমি item-7 ছিলাম আর এখন itemSeven হইয়া গেছি ClassName এর বদৌলতে';*/

// [বিঃদ্রঃ command টার বাংলা হইল, document তো মার ভিতরে items নামের যতগুলা class আছে তাদেরকে ধর [getElementsByClassName], তাদের ভিতরে [s/l] সিরিয়াল নাম্বারে যা কিছু লিখা থাকুক না কেন [item-$] তা change করে তুমি বসায়া দাও[textContent/innerText] 'আমি item$ ছিলাম আর এখন item$ হইয়া গেছি' text হিসেবে।আরো একটা example দেয়া হলঃ===]

/*document.getElementsByClassName('items')[7].innerHTML = 'আমি item-8 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemEight</span> হইয়া গেছি ClassName এর বদৌলতে';*/

// getElementsByTagName

/*document.getElementsByTagName('p')[8].innerHTML = 'আমি item-9 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemNine</span> হইয়া গেছি TagName এর বদৌলতে';*/

// querySelector for class name

/*document.querySelector('#queryItem10').innerHTML = 'আমি item-10 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemTen</span> হইয়া গেছি grap id by querySelector এর বদৌলতে';*/

// querySelector for id name

/*ocument.querySelector('.queryItems').innerHTML = 'আমি item-10 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemTen</span> হইয়া গেছি class by querySelector এর বদৌলতে';*/

// [বিঃদ্রঃ  এখানে querySelector কিন্তু item-10 তে #queryItem10 effect থাকার পরও তাকেই over write করেছে কারণ কোন s/l no. না থাকায় querySelector দেখতেছে first .queryItems class এর under এ কে আছে তাকে ধরে ফেলেছে]
// যদি queryselector দিয়ে class এর ভিতরের specific কোন item চেঞ্জ করতে চাই তাহলে তার মাঝে  s/l no. দিতে আর queryselector এর পরিবর্তে querySelectorAll লিখতে হবে।আরো একটা example দেয়া হলঃ===

/*document.querySelectorAll('.queryItems')[1].innerHTML = 'আমি item-11 ছিলাম আর এখন <span style="color: red; font-weight: bold;">itemEleven</span> হইয়া গেছি class by querySelectorAll এর বদৌলতে';*/

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

// ******************* first JS apk
/*let name = prompt('what is your name?','Mr. XXX');
let food = prompt('what is your favourite food?','Beef');

//prompt দিয়ে কোন variable এর value নিলে তা সর্বদা string হিসেবে value assign হয়

console.log('My name is' + ' ' + name + ' and I love to eat' + ' ' + food + ' very very much.'); */


// ****************** JavaScript Live Class 2, Part 1 - Var, Let, and Const in JavaScript in Details

// variables declare করার শর্ত (১) একটা keyword থাকবে let/var/const/nothing ; (2) variables নাম দিতে হবে ; (৩) "=" sign দিয়ে value assign করতে হবে।

/*var অনেক বার declare এবং অনেক বার assign করা যায়।যা একটা সমস্যা কারন team work করার সময় এটা সমস্যা করে তাই এটা use করা উচিত না।

let একবারই বার declare এবং অনেক বার assign করা যায়।

const একবারই বার declare এবং একবারই বার assign করা যায়। এবং declare ও assign একলাইনেই করতে হবে।

কোণ keyword ছাড়াই variables declare করা যায় যা nothing এটা সমস্যা করে তাই এটা use করা উচিত না।
*/

// ************************* JavaScript Live Class 2, Part 2 - Statement, Concatenation, Scaping, Template literals, Interpolation in JavaScript

// Statement হচ্ছে JS এর একটি full লাইন যা কোন একটী পুর্নাঙ্গ instruction carry করে এবং এর শেষ হয় (;) চিহ্ন দিয়ে

// Concatenation হচ্ছে কোন রকম arithmatic operation না করে পাশা-পাশি মিলিয়ে বসানো

// Scaping মানে হচ্ছে, আমরা যানি কোড লিখার সময় আমাদের ('')/("") এই symbol এর ভিতরে লিখতে হয় । এখন কোন কারনে যদি symbol এর ভতরেও একই রকম symbol ব্যাবহারের প্রয়োজন হয়( don't,"coating speech") তখন আমাদের কে সেই specific symbol এর আগে একটা (\) use করতে হয় (don\'t,\"coating speech\") একেই scaping বলা হয়।
/*console.log("he said,\"You are a good boy\".");
console.log('i don\'t have so money that you are asking for.');*/

// Template literals, Interpolation মানে হল, normally concatination এর জন্য আমরা ('' / "") symbol break করে তারপর (+) symbol দিয়ে দিয়ে করতাম যা অনেকটা বিশ্রি ও হিজিবিজি লাগে। এখন এই same কাজ টাই করা যায় (``) এর ভিতরে (`${variableName}`) দিয়ে। এবং আরো সুবিধা হল এই style লিখলে scaping এর কোন ঝামেলা নেই অর্থাঠ যে কোন যায়গায় ('' / "") symbol use করা যাবে। এটা অনেকটা HTML এর 'pre' tag এর মত কারণ এর ভিতরেও যেভাবে space-টিspace দিয়ে লিখা হয় ঠিক সেইভাবেই print output হয়।

/*let personName = "Abdullah";
let personAge = 2;
let personSkill = "Playing";

console.log("This is concatinated by \"+\" symbol : Hi, My name is " + personName + " I am just " + personAge + " years old & I like to do " + personSkill + " all the time.");

console.log(`This is concatinated by Template literals, Interpolation : Hi, My name is ${personName} I am just ${personAge} years old & I like to do ${personSkill} all the time.`);*/

/* ******************************JavaScript Live Class 2, Part 3 - DadaType ডাটাটাইপ কি?, কিভাবে?, কেমনে বিস্তারিত..

// যেকোন ফর্ম যখন আমরা ফিল করতে যাই সেখানে আমরা মূলত প্রায়৪ ধরনের তথ্য দিয়ে থাকি যা প্রত্যেকেই আলাদা আলাদা DataTypes। example: (1) Whats you name ? -Asif;(2) How old are you ? -25; (3) Are you married ? - Yes ; (5) Your hobbies ? - coding,playing,sleeping.

৫ type  এর data হয়ঃ
১) string: asset of charecters অর্থাৎ একগুচ্ছ বর্নমালা । যা ('' / "") Symbol এর ভিতরে লিখতে হয়। সংখ্যা বাচক data কে ('' / "") Symbol ভিতরে লিখলে তা আবার string হয়ে যায়।
২) Number: সংখ্যা বাচক data যা ('' / "") Symbol ছাড়া লিখতে হয়। সংখ্যা বাচক data কে ('' / "") Symbol ভিতরে লিখলে তা আবার string হয়ে যায়।
৩) Boolean: সত্য / মিথ্যা অথবা হ্যা / না মুলক তথ্য সংগ্রহ করা হয়।
৪) Array: a combo package of multiple data-type in a sigle variable অর্থাৎ একাধিক type এর data যখন একত্রে কোন variable এর value নির্দেশ করে তখন সেই data গুলোর type কে array data type বলে। array data type গুলোকে  অবশ্যই [] ব্র্যাকেটের ভতরে (,) দিয়ে দিয়ে লিখতে হয়।

for example:*/
/*
let varStringWhatsYourName = "Abdullah";
let varNumberHowOldAreYou = 2;
let varBooleanYouAreAKidRight = true;
let varArrayWriteYourAim = ["Alim","imam","mujtahid",10000000000000,true];

console.log(typeof varStringWhatsYourName);
console.log(typeof varNumberHowOldAreYou);
console.log(typeof varBooleanYouAreAKidRight);
console.log(typeof varArrayWriteYourAim);


let আলু = 50;
let পটল = 20;
let মোট = আলু + পটল;

console.log(`

    আলুর দাম = ${আলু} টাকা
    পটলের দাম = ${পটল} টাকা
--------------------------------
    মোট খরচ = ${মোট} টাকা
`);*/


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

numbersArray.splice(1, 3)

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
console.log(newValue);
console.log(AnotherNewValue);
console.log(ExtraAnotherNewValue);
*/




// ******************************** JavaScript Live Class 2, Part 4 - Operators অপারেটরস কি?

/*Operators হচ্ছে programming language এ ব্যবহৃত সকল সাঙ্কেতিক চিহ্ন ব্যবহৃত হয়। javascript এ ৭ প্রকার operators আছে।
[ better to learn also from SATT academy]

১) Arith matical opt: +, -, *, /, %, ++, --
২) Assignment opt: =
৩) Comparison opt: ==(সমান বা একই), ===(একই এবং যময), <, > ,<=, >=, !=, !== ?
৪) logical opt: AND (&&), OR (||)
৫) string opt: +, += 
৬) bitwise opt: &, -, ^, |, <<, >>, >>>, <<<
৭) special opt: delete, in, instanceof, typeof, new, void, yield*/

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
console.log(txt1 + " " + txt2);*/

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
/*-
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
    
}*/

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
}*/


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


// switch, case, default মূলত এক ধরনের conditional statement কিন্তু এক্ষেত্রে কোন রকম range define করা যায় না
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


/*
// Personal project 1
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

// swithch, casw, default মূলত এক ধরনের conditional statement কিন্তু এক্ষেত্রে কোন রকম range define করা যায় না
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
/*
// ifelse condition:
let age = prompt('How old are you?','20');

if (age >= 21) {
    console.log('Boy! You can marry. (If)');
} else {
    console.log('Boy! You can\'t marry. (Else)');    
}

// উপরের এই condition টার short form বা ternary operator form:

(age >= 21) ? console.log('Boy! You can marry. (Ternary)') : console.log('Boy! You can\'t marry. (Ternary)');  

let marritualStatus = (age >= 21) ? 'Boy! চলে চলে দৌড়ায়। (Ternary)' : 'Boy! আস্তে, থামো যারা, সাবার কারো। (Ternary)';  
console.log(`Your maritual status = ${marritualStatus}`);


// ternary operator structure:
// (condition) ? true rejults : false rejults;
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

/*
// 100 times runable loop
for (let startingValue = 0; startingValue < 100; startingValue++) {
    console.log(` i love you satu ${1 + startingValue}`);    
}
*/

/*
// 500 times runable loop where inital value is 1000

for (let i = 1000; i >= 0; i -= 2) {
    console.log(`${i}. ${i}th value = ${i}`);    
}
*/
/*
// 20 times runable loop where inital value is 7000

for (let i = 7000; i < 7020; i++) {
    console.log(`${i}`);    
}
*/
/*
//100 times runable loop 

for (let i = 1; i <= 100; i++) {
    console.log(i);    
}
*/
/*
//100 times runable loop with decrement operator

for (let i = 100; i >= 0; i--) {
    console.log(i);    
}
*/
/*
//1000 to 300 runable loop with decrement operator
for (let i = 1000; i >= 300; i--) {
    console.log(i);    
}
*/
/*
//100 to 500 runable loop with all even number
let count = 1;
for (let i = 100; i <= 500; i++) {
    if (i % 2 == 0) {
        console.log(`${count}.  ${i} `);
        count++;
    }
}
*/
/*
//100 to 500 runable loop with all even number
let countOdd = 1;
for (let i = 100; i <= 500; i++) {
    if (i % 2 != 0) {
        console.log(`${countOdd}.  ${i} `);
        countOdd++;
    }
}
*/
/*
//1 to 500 runable loop with all divided by 5
let countSerial = 1;
for (let i = 100; i <= 500; i++) {
    if (i % 5 == 0) {
        console.log(`${countSerial}.  ${i} `);
        countSerial++;
    }
}
*/

/*
//1 to 100 runable loop with all divided by 3 and > 70
let countSerial = 1;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i >= 70) {
        console.log(`${countSerial}.  ${i} `);
        countSerial++;
    }
}
*/
/*
// 1 to 100 পর্যন্ত loop যাবে তারপর আবার ১০০ থেকে ১ এ নেমে আসবে
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

// project:প্রতিদিন তোমার কাজ কি? ১) রাত ৮ টা বাজে মডিউল আনলক করো  ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো ৩) ভিডিও দেখতে দেখতে নোটস নাও ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো .এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 
/*
let myDailyTask = ["১) রাত ৮ টা বাজে মডিউল আনলক করো", "২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "৩) ভিডিও দেখতে দেখতে নোটস নাও", "৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", "৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো", ];

console.log(myDailyTask);

for (let index = 0; index < myDailyTask.length; index++) {
    const element = myDailyTask[index];
    console.log(element);

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


// default valued parameter example with multiple  parameter: multiple  parameter এর ক্ষেত্রে parameterগুলো কমা দিয়ে দিয়ে লিখতে হবে এবং argumentsগুলো parameter অনু

/*
function nameFunction(nameParameter = 'defaultNazrul', ageParameter = 20, skillParameter = 'skillDefault') {
    console.log(`hi my name is ${nameParameter} i am ${ageParameter} years old and i love ${skillParameter}`);
}

nameFunction();
nameFunction('RahimArguments', 30, 'Ghum');
*/