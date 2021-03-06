/*
// console.log("---------------------------separator---------------------------");
notes rules:
1.module starting design must like : // [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 24  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]
2.module video design must like : // ************************** 24-4 Get different HTML elements in JS by using tag name
3.comments design must like : // এখানে allH2 উপর array method apply করলাম
4. special note design must like : 
// console.log("---------------------------special note---------------------------");
special note special note special note special note special note 
// console.log("---------------------------special note---------------------------");
*/



// ****************************** break up with "var" maximum use "const" if gives error use "let"

/* (i) const dosen't allow re assign value
const balance = 1240;
balance = 1340; */

/* (ii) const allows only re use of variable 
const userName = 'janpahi potas potas';
const weTogether = 'ami ' + userName;
console.log(weTogether); */
// userName = 'moyna pakhi';

/* (iii) in case of array declared by const will allow push / pop, value edit etc but no re assign
const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
} */


/* (iv) in case of object const will allow the modification of values not re assign
const student = {
    roll: 101,
    name: 'mofij',
    job: 'intern'
};
student.name = 'MOfazzol';
// student = { name: 'mofazzol' }; */





// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 24  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]
/*
topics:
    1) getElementsByTagName, getElementById, getElementsByClassName, querySelector, querySelectorAll
2).innerHTML, .innerText, .style
3).setAttribute, .getAttribute, .childNodes, .parentNode, .children
4).classList.add, .appendChild, .removeChild,
*/



// ************************** 24-4 Get different HTML elements in JS by using tag name



/*

// console.log("---------------------------special note---------------------------");
// DOM = Document Object Model; আমরা একটা object variable কে যেমন বিভিন্ন method apply করে করে তার property গুলো তাদের value গুলোকে access করতে পারি / তাদেরকে পরিবর্তন করতে পারি ইত্যাদি। ঠিক তেমনি console এ শুধুমাত্র document.differerntFunctions() লিখে পুরা HTML কেই ধরে নাড়াচাড়া দিয়ে যা খুশি করতে পারি। যেমনঃ
// console.log("---------------------------special note---------------------------");


document.getElementsByTagName("h2"); // document ভিতরের সবগুলো h2 tag কে ধরলাম।
let allH2 = document.getElementsByTagName("h2"); // document ভিতরের সবগুলো h2 tag কে ধরে একটা variable এ রাখলাম।
console.log(allH2); // এখানে allH2 কে print করলাম যা console array এর মত দেখালেও এটা array না বরং Object

// এখানে allH2 উপর array method apply করলাম
console.log(allH2[0]); // to ask first element of array
for (const h2 of allH2) {
    console.log(h2); // to print all element of array
    console.log(h2.innerHTML); // to print all element of array
    console.log(h2.innerText); // to print all text of element of array
}

// console.log("---------------------------special note---------------------------");
// "innerHTML" helps to get child Element with tag name but as text  |||   but "innerText" helps to get text of child Element without tag name but with css style   ||| on the othe hand "textContent" get text of child Element without tag name and css style 
// console.log("---------------------------special note---------------------------");


console.log("---------------------------separator---------------------------");


let allP = document.getElementsByTagName("p"); // document ভিতরের সবগুলো p tag কে ধরে একটা variable এ রাখলাম like an array but not।

for (const p of allP) {
    console.log(p.innerText);
}
*/



// ************************** 24-5 || 24-6 || Capture and change Element css by using getElementById || getElementsByClassName || querySelector || querySelectorAll


/*
// JS দিয়ে কোন id কে ধরে CSS ও apply করা যায় by using getElementById 

// styling mainTitle
document.getElementById('mainTitle').style.background = "black"
document.getElementById('mainTitle').style.color = "yellow"



// JS দিয়ে কোন id কে ধরে CSS ও apply করা যায় by using getElementsByClassName 

// styling blogTitle
let titleOfBlog = document.getElementsByClassName("blogTitle");
for (const blog of titleOfBlog) {
    blog.style.background = "indianred";
    blog.style.color = "white";
    blog.style.padding = "20px";
    blog.style.textAlign = "center";
    blog.style.borderRadius = "10px";
}



// JS দিয়ে কোন id/class/tag কে ধরে একদম CSS মতন করে CSS ও apply করা যায় by using querySelector || querySelectorAll

// console.log("---------------------------special note---------------------------");
//যদি same class/tag এর একাধিক element এর মধ্যে কেবল মাত্র প্রথমটাকেই stylilng করতে চাই use querySelector   |||   যদি সব গুলোকে styling করতে চাই use querySelectorAll   |||   যদি specific কোন একটা কে styling করতে চাই use querySelectorAll[indexNo]
// console.log("---------------------------special note---------------------------");

// style applied only on firs item  using querySelector
document.querySelector('.lists1 ul li').style.color = "red";

// style applied only on midleItems classes  using querySelectorAll
let midItems = document.querySelectorAll(".midleItems");
for (const item of midItems) {
    item.style.color = "yellow";
    item.style.background = "rgba(0,0,0,1)";
}

// style applied only on second mid item using querySelectorAll[indexNo]
document.querySelectorAll(".midleItems")[1].style.background = "rgba(0,0,0,0.5)";
*/




// *************************************24-7 NodeList, htmlcollection, setAttribute, parentNode, childnodes


/*
// console.log("---------------------------special note---------------------------");
//HTML এর প্রতিটা জিনিসই একেক্টা Node অর্থাৎ অনেকটা members in document-family। এদের একেক রকম নাম আছে যেমন comment গুলো হচ্ছে comment-node ||| text গুলো text-node ||| attribute গুলো attribute-node ||| document গুলো document-node ||| doctype গুলো doctype-node etc | যার ফলে JS দিইয়ে select করলে NodeList, htmlcollection ইত্যাদি show করে এবং array এর মতন দেখায় কিন্তু এগুলো array না বরং array type object তাই এদের উপরে array এর অনেক method apply করা যায় যেমনঃ forOf(),length,indexOf() কিন্তু সব methodই না যেমন push() apply হবে না।
// console.log("---------------------------special note---------------------------");


let listItem2 = document.querySelector("#list2");
console.log(listItem2);
console.log(listItem2.getAttribute("class"));
listItem2.setAttribute("title", "This is a list item-2");

// to know the father grandFather grandGrandFather so above use parentNode
console.log(listItem2.parentNode);
console.log(listItem2.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);


// to know the Child grandChild grandGrandChild so bellow use childnodes
console.log(listItem2.childNodes);
*/





// ****************************** 24-8  ||  24-9  ||  Create HTML elements using Javascript and appendChild classList.add   ||   Module Remove HTML element by JavaScript and remove child summary and DOM Review



/*
// console.log("---------------------------special note---------------------------");
// এখানে style দিলে নতুন যেগুলো JS দিয়ে বানানো হয়েছে তারা পাবে না তাই এটাকে নিচে নিয়ে যেতে হবে
// console.log("---------------------------special note---------------------------");


// একটা নতুন but same style এর article add করতে হবে blog section এর ভিতরে

// convetional way to add "My Blog_3 : This is a new article added by JavaScript in Conventional way"
// step-1: creat a article tag

let aNewArticle = document.createElement("article"); // article tag created
aNewArticle.classList.add("blogItem"); // "blogItem" class added


// step-2: creat a h3 and p tag

// add h3 tag
let h3OfANewArticle = document.createElement("h3"); // h3 tag created
h3OfANewArticle.innerText = "My Blog_3 : This is a new article added by JavaScript"; // text content added

// add p tag
let pOfANewArticle = document.createElement("p"); // p tag created
pOfANewArticle.innerText = "This is a new PARAGRAPH added by JavaScript This is a new PARAGRAPH added by JavaScript This is a new PARAGRAPH added by JavaScript "; // text content added



// step-3: append h3 and p tag inside article tag

aNewArticle.appendChild(h3OfANewArticle); // h3 tag added inside article tag
aNewArticle.appendChild(pOfANewArticle); // p tag added inside article tag



// step-3: append article tag inside section.blogSection tag of HTML

let blogSection = document.querySelector(".blogSection"); // section.blog tag selected
// console.log(blogSection);
blogSection.appendChild(aNewArticle); // article tag added inside section.blogSection tag 




// modern way with BackTik method
// step - 1  creat a new article tag
let anotherNewArticle = document.createElement("article"); // anotherNewArticle tag created
anotherNewArticle.classList.add("blogItem"); // "blogItem" class added

// step - 2  creat a new h3 and p tag inside anotherNewArticle tag
anotherNewArticle.innerHTML = `
    <h3>My Blog_4 : This is a new article added by JavaScript modern way with BackTik method</h3>
    <p>This is a new PARAGRAPH added by JavaScript modern way with BackTik method This is a new PARAGRAPH added by JavaScript modern way with BackTik method This is a new PARAGRAPH added by JavaScript modern way with BackTik method </p>`;

// step - 3  append article tag inside section.blogSection tag of HTML
blogSection.appendChild(anotherNewArticle); // anotherNewArticle tag added inside section.blogSection tag



// console.log("---------------------------special note---------------------------");
// নতুন blog টা add হবার পরেও তাতে কোন style পরেনি কারন javaScript এ যদি style add করার পরে নিচে কোন নতুন same class add করা হয়ও তাতে style add হবে না । style add করার জন্য style গুলোকে same class add করা নতুন element এর নিচে নিয়ে আসতে হবে
// console.log("---------------------------special note---------------------------");

let blogItem = document.querySelectorAll(".blogItem");
// console.log(blogItem);
for (const blog of blogItem) {
    blog.style.border = "1px solid orange";
    blog.style.margin = "10px";
    blog.style.padding = "10px 20px";
    blog.style.borderRadius = "10px";
}




// remove HTML element by javaScript

// lets remove My Blog_2
console.log(blogSection);
console.log(blogSection.childNodes); // childNodes shows all nodes icluding comments,text etc inside section.blogSection tag
let itemBlogINBlogSection = blogSection.children;
console.log(itemBlogINBlogSection); // children shows only the child tags inside section.blogSection tag
blogSection.removeChild(itemBlogINBlogSection[2]); // remove the second child tag inside section.blogSection tag
*/






// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 25  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]




// ******************************** 25-1 What is Event, different types of event in web


// useing inline css Button এ ক্লিক করলে কনসলে ক্লিকড  লিখা আসবে আর h tag এও ক্লিকে লিখা আসবে [[[  plz visit index.html line-128-129  ]]]




// ******************************** 25-2 differernt methods to declare a function aproximately 10+ methods Add onclick handler directly or via javascript



/* 
// button এ ক্লিক করলে body tag এর background color টাই change হয়ে যাবে

// system - ১ : "onclick" attribute এর মধ্যেই inline js দিয়ে define করে দেয়া [[সাধারনত এই পদ্ধতি use করা হয় না]]



// system - ২ : "onclick" attribute in the html tag and external javascript file
function onclickBody2Green() {
    document.body.style.backgroundColor = "green";
}



// system - ৩ : html tag এ "onclick" attribute না দিয়ে external javascript file এ getElementById দিয়ে ধরে ধরে ".onclick" use করে + normal function add করে 
let btn4Body2Blue = document.getElementById('changeBodyColor2BLUE'); // (1)gettint the button by id

btn4Body2Blue.onclick = changeBodyColor2BLUE; /// 2)add onclick handler to the button but dont call here

// (3)declare the function in details bellow 
function changeBodyColor2BLUE() {
    document.body.style.backgroundColor = "blue";
}



// system - 4 : html tag এ "onclick" attribute না দিয়ে external javascript file এ queryselector দিয়ে ধরে ধরে ".onclick" use করে + Anonymous function add করে 

let btn4Body2YELLOW = document.getElementById('changeBodyColor2YELLOW'); // (1)gettint the button by id


// (2)declare the anonymous function in details bellow
btn4Body2YELLOW.onclick = function () {
    document.body.style.backgroundColor = "yellow";
}



// system - 5 : external javascript file এ getElementById দিয়ে ধরে ধরে ".addevenlistener" use করে + normal function add করে 

let btn4Body2GOLDENROD = document.getElementById('changeBodyColor2GOLDENROD'); // (1)gettint the button by id

// (2)declare the  function in details bellow using ".addevenlistener"
btn4Body2GOLDENROD.addEventListener('click', changeBodyColor2GOLDENROD);

function changeBodyColor2GOLDENROD() {
    document.body.style.backgroundColor = "goldenrod";
}



// system - 6 : external javascript file এ getElementById দিয়ে ধরে ধরে ".addevenlistener" use করে + Anonymous function add করে 

let btn4Body2HOTPINK = document.getElementById('changeBodyColor2HOTPINK'); // (1)gettint the button by id

// (2)declare the Anonymous function in details bellow using ".addevenlistener"
btn4Body2HOTPINK.addEventListener('click', function () {
    document.body.style.backgroundColor = "hotpink";
});


// system - 7 [[  mostly used system to apply js  ]]: external javascript file এ কোন variable delcaration ছাড়াই getElementById দিয়ে ধরে ধরে ".addevenlistener" use করে + Anonymous function add করে

document.getElementById('changeBodyColor2ORANGE').addEventListener('click', function () {
    document.body.style.background = 'orange';
});
 



// system - 8 : কোন function কে variable এর value হিসেবে define করা হলে তাকে কল করার সময়  "variable(params)" এভাবেও কল করা যায়। 
const funcVAr = function (a, b) {
    return a + b;
}
console.log(funcVAr(10, 20));
*/




// *************************** arrow function declareing methods starts



/* 
// system - 9 [[  mostly used system to apply js  ]]: external javascript file এ কোন variable এর ভিতরে একটা full function কে declare করা


// function expression (normal)
const add1 = function add2(num1, num2) {
    return num1 + num2;
}
const result1 = add1(10, 20);
console.log(result1);


// function expression (anonymous)
const add2 = function (num1, num2) {
    return num1 + num2;
}
const result2 = add2(10, 20);
console.log(result2);


//arrow function structure -1: 
// structure -1 : (if just single line code to return from multiple parameters)
// keyWord variableName = (parameter1,parameter2) => {return statement}

const add3 = (num1, num2) => num1 + num2;
const result3 = add3(10, 20);
console.log(result3);


//arrow function structure -2: 
// structure -2 : (if just single line code to return from single parameter)
// keyWord variableName = parameter1 => {return statement}

const add4 = num1 => num1 * 10;
const result4Is10TimesOfArguments = add4(10);
console.log(result4Is10TimesOfArguments);


//arrow function structure -3: 
// structure -3 : (if just single line code to return from no parameter)
// keyWord variableName = () => {return statement}

const getStatement5 = () => `return statement`;
const result5 = getStatement5();
console.log(result5);


//arrow function structure -4: 
// structure -4 : (if just multi line code to return from multiple parameters)
// keyWord variableName = (parameter1,parameter2) => {return statement}

const add6 = (num1, num2) => {
    let sum = num1 + num2;
    let diff = num1 - num2;
    let output = sum / diff;
    return output;
}
const result6 = add6(10, 20);
console.log(result6);


//arrow function structure -5:
// structure -5 : (use of arrow function with addEventListener )
document.getElementById('changeBodyColor2ORANGE').addEventListener('click', () => {
    return `return statement`;
});
 */




// console.log("---------------------------special note---------------------------");
/*
system 1 + 2 প্রায় same same : inline js system by onclick method
system 3 + 4 প্রায় same same : external js system by onclick method
system 5 + 6 প্রায় same same : external js system by addEventListener method
system 7 : external js system by addEventListener method

mostly used method is system 7 and system 3
*/
// console.log("---------------------------special note---------------------------");





// ******************************** 25-4 Most common ways to set Event Handlers



// button এ ক্লিক করলে h1 tag এর ভিতরের text change হয়ে যাবে

/*
// Click2ChangeBySystem3Method
let btn4ChangeBySystem3Method = document.getElementById("system3Method2ApplyJS");
let h1TAGToChangeBySystem3_7 = document.getElementById('h1ToChangeBySystem3_7')

function system3Method() {
    h1TAGToChangeBySystem3_7.innerHTML = 'The primary text by System3 method'
}



// Click2ChangeBySystem7Method   ||   The direct method
document.getElementById('system7Method2ApplyJS').addEventListener('click', function () {
    h1TAGToChangeBySystem3_7.innerHTML = 'The primary text by System7 method'
});
*/


// button এ ক্লিক করলে input tag এর ভিতরের text change হয়ে খালি হয়ে h1 tag এর ভিতরে চলে যাবে 

/*
// getting all required tags in a variable
let btn4UploadInput2H1 = document.getElementById("input2h1Btn");
let input4UploadInput2H1 = document.getElementById("input4Upload2H1");
let h1Tag4ShowingUploads = document.getElementById("h1forShowingUploads");

// direct sytem 7 method
btn4UploadInput2H1.addEventListener("click", function () {
    h1Tag4ShowingUploads.innerHTML = input4UploadInput2H1.value;
    input4UploadInput2H1.value = "";
});
*/




// ******************************** 25-5 Create a comment box and display comment




// comment box এর comment Upload হবার সাথে সাথে facebook এর মত উপরে new comment হিসেবে add হবে

/*
// gett all required tags in variable
let btn4CommentUpload = document.getElementById('btn4Comment');
let newComment = document.getElementById('commentBox');
let comment2AppendIn = document.getElementById('commentsHolder');

// start functioning of comment box
btn4CommentUpload.addEventListener('click', function () {
    // step 1 : creat a new li tag and insert text in it
    let newCommentHolder = document.createElement('li');
    newCommentHolder.innerHTML = newComment.value;

    // step 2 : append new li tag in comment box
    comment2AppendIn.appendChild(newCommentHolder);

    // step 3 : clear comment box
    newComment.value = '';
});
*/




// ******************************** 25-6 Simple github like delete confirmation button




//  button এ ক্লিক করলে ul থেকে li কে delete করতে হবে display-none / remove child use করে

/*
let btn4Delete = document.querySelector('#btn4deleteChils');
let btn4Add = document.querySelector('#btn4AddChils');
let ol4Delete = document.querySelector('ol');


// li কে delete করতে
btn4Delete.addEventListener('click', function () {
    ol4Delete.removeChild(ol4Delete.lastElementChild);
});

// li কে Add করতে
btn4Add.addEventListener('click', function () {
    let li4Add = document.createElement('li');
    li4Add.textContent = 'item-new';
    ol4Delete.appendChild(li4Add);
});
*/


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[input field এর উপরে বিভিন্ন addlistener effect]]]]]]]]]]]]]]]]]]]]]]]]]]]]


/*
let btn4delete = document.getElementById('deleteBtn');
let item4delete = document.getElementById('item4delete');
let inputField = document.getElementById('inputField');



// effect of focus 
inputField.addEventListener('focus', function () {
    item4delete.style.background = 'lightblue';
    item4delete.innerHTML = 'yap input field now focused';
});

// effect of  blur
inputField.addEventListener('blur', function () {
    item4delete.style.background = 'lightgreen';
    item4delete.innerHTML = 'yap input field now out of  focused and blured';
});

// effect of  keyup
inputField.addEventListener('keyup', function () {
    item4delete.style.background = 'red';
    item4delete.innerHTML = inputField.value;
});

// effect of  change
inputField.addEventListener('change', function () {
    item4delete.style.background = 'blue';
    item4delete.innerHTML = inputField.value;
});
*/


/*

// console.log("---------------------------special note---------------------------");

// keydown and keypress are very less in use

// console.log("---------------------------special note---------------------------");

        // effect of  keydown
        inputField.addEventListener('keydown', function () {
            item4delete.style.background = 'blue';

                });

        // effect of  keypress
        inputField.addEventListener('keypress', function () {
            item4delete.style.background = 'orange';            
            item4delete.innerHTML = inputField.value;      
                });
        */


// [[[[[[[[[[[[// project :  input field এ delete লিখলে paragraph এর delete me টা মুছে যাবে]]]]]]]]]]]]

/*
// step - 1 : button এ disable attribute লাগাতে হবে
btn4delete.setAttribute('disabled', true);


// step - 2 : inpu এর ভিতরে 'delete' লিখলে button এr disable attribute উঠারে হবে
inputField.addEventListener('keyup', function (event) {

    // item4delete.innerHTML = event.target.value;
    if (event.target.value == "delete") {
        btn4delete.removeAttribute('disabled');
    } else {
        btn4delete.setAttribute('disabled', true);
    }
});


// step - 3 :  button এ চাপ দিয়ে paragraph কে delete করতে হবে
btn4delete.addEventListener('click', function () {
    item4delete.remove();
});
*/







// ******************************** 25-7 (semi-advanced) Event bubble and Stop propagating









// console.log("---------------------------special note---------------------------");
/*
* event parameter হচ্ছে যাকে কোণ event-handller দেয়া হয়েছে

* event bubble হচ্ছে ধরি কোন একটা document এর structur হল নিম্নরূপ যার প্রতিটা stage এ addlistener হিসেবে same effect "click" দেয়া আছে আর output effect দেয়া আছে console(tagName),

            "html>body>main>section>div>ul>li"

browser এর কাছে li ঘরের মত যার ফ্ল্যাট ul যার বাড়ি div যার মহল্লা section যার গ্রাম main যার থানা body আর ডিস্ট্রিক্ট html.

এখন যদি li এ ক্লিক পরে তাহলে browser সব গুলার effect কেই cocsole এ print করবে কারণ 

li ক্লিক মানে ত li এ ক্লিকই তাই effect show করাবে

li ক্লিক মানে কি ul এর কোথাও ক্লিক ? - হ্যা[তাহলে ul effect show করাবে]

li ক্লিক মানে কি div এর কোথাও ক্লিক ? - হ্যা[তাহলে div effect show করাবে]

li ক্লিক মানে কি section এর কোথাও ক্লিক ? - হ্যা[তাহলে section effect show করাবে]

li ক্লিক মানে কি main এর কোথাও ক্লিক ? - হ্যা[তাহলে main effect show করাবে]

li ক্লিক মানে কি body এর কোথাও ক্লিক ? - হ্যা[তাহলে body effect show করাবে]

li ক্লিক মানে কি html এর কোথাও ক্লিক ? - হ্যা[তাহলে html effect show করাবে]


আর এই event bubble off করার way হচ্ছে যেই stage থেকে আর উপরের দিকে effect কে continue করতে চাই না তার মাঝে ".addlistener('click', function(event){event.stopPropagation();})" add করতে হবে
*/
// console.log("---------------------------special note---------------------------");



/*
let grandFather = document.querySelector('.grandFather');
let father = document.querySelector('.father');
let SpecialChild3 = document.querySelector('#SpecialChildNo3');

SpecialChild3.addEventListener('click', function (event) {
    console.log('Special Child 3 clicked');

    // stop propagation added যার ফলে special child কে ক্লিক করলে আর তার parent এর event handler activate হব না
    event.stopPropagation();
});

father.addEventListener('click', function () {
    console.log('father.ul clicked');
});


grandFather.addEventListener('click', function () {
    console.log('grandFather.div clicked');
});
*/







// ******************************** 25-8 (advanced) Event delegate and benefit of Event bubble





// console.log("---------------------------special note---------------------------");
/*
যেহেতু আমরা জানি যে event bubble এর কারনে parent এর মাঝে দেয়া event handler effect child এর মধ্ যেও পরে তাই কো ন কারনে কখনো যদি এমন হয় যে child এ effect দিয়ে কো ন লাভ হচ্ ছে না তাহলে সেই effect event bubble এর সাহায্ যে parent থেকে child কে manupulate করা যায় এতাই event bubble
*/
// console.log("---------------------------special note---------------------------");

// <!-- // event delegation দিয়ে ক্লিক target কে "even.target.removeChild()" করা -->


/*
let itemCoverer = document.getElementById('itemHolder');
let itemAdder = document.getElementById('btn2addItem');
let items = document.querySelectorAll(".listItem");



// to enble item adding power in btn
itemAdder.addEventListener('click', function () {
    let itemInli = document.createElement("li");
    itemInli.innerHTML = "brand new item";
    itemInli.classList.add("listItem");
    itemCoverer.appendChild(itemInli);
})



// conventional way to enable removing powe in target it has lacking of not being able to remove elment creat by js which was not in raw html


// for (const singleListItem of items) {

//     // by using "even.target.parentNode.removeChild()"
//     singleListItem.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     });
// }



// modern way to enable removing powe in target  by event bubble method
itemCoverer.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})
*/




// ************************************************************ Session -Play With Dom and Event Listener


/*
DOM: হচ্ ছে website এর সাদা যে অংশ একে আমরা document.দিয়ে access করতে পারি আবার document কেও আমরা window দিয়ে access করতে পারি আর window হল কো ন link এর under এ জা আছে সব

    --class name দিয়ে কো ন element কে console log করলে ঐ same class name এর সবগুলা element এর একটা html collection নামের arrayTypeObject দেখাবে এখন মনে তাখার বিষয় হল এই html collection নামের arrayTypeObject এর উপরে.style.cssProperties apply হয়ে না এদের উপরে css apply করতে হলে forof loop দিয়ে প্ রতিটা individual element কে access এ নিয়ে তাদের উপরে.style.cssProperties apply করতে হবে।

    --তবে id access এ নিয়ে তাদের উপরে.style.cssProperties apply হয়
    */




// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 26  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]




// *************************** 26-1 Project overview, Tailwind review text align text color

/*
let btn = document.getElementById("basic-addon2");
btn.setAttribute("disabled", true);
let userInput = document.getElementById("userInput");
console.log(userInput);

userInput.addEventListener("keyup", function () {
    if (userInput.value == "username@1234") {
        btn.removeAttribute("disabled");
        btn.style.color = "green";
    } else {
        btn.setAttribute("disabled", true);
    }
    btn.addEventListener("click", function () {
        window.location.href = "bankerHisabNikash.html";
    })
});
*/




// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 32  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]




// *************************** 32-1 Module Introduction and Basic ES6 Recap




/* 
// -reject "var" use "let" and "const"
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';
// 2. default parameter-VALUE AND SPREAD OPERATOR or three dots (...) 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`
console.log(myNotes);

// 4. arrow function
const square = x => x * x;
console.log(square(9));
 */





// ************************************ spread operator for merging arrays or objects




/* 
let animal = {
    name: "dog",
    color: "brown",
    age: 7,
};

const numList1 = [1, 2, 3];
const numList2 = {
    name: "hero",
    Age: 18,
};
let numLists = [...numList1, numList2];
console.log(numLists);

let animalWithBreed = {
    ...animal,
    breed: "",
};


console.log(animalWithBreed);
 */






// ***************************** 32-2 Destructuring Object to extract values to variables




/* let pc1 = {
    name: "Asus",
    processors: "intel core i3 10 gen",
    ram: "8 gb",
    rom: "120gb ssd + 500 hdd"
}; */

// storing prorperty value of a object in a variable
/* let processors = pc1.processors;
let ram = pc1.ram;
let rom = pc1.rom;
console.log(processors, ram, rom); */


// we can store prorperty value of a object in a variable by using destructuring
/* const {name,processors,ram,rom} = pc1;
console.log(name,processors,ram,rom); */



// console.log("---------------------------special note---------------------------");

// এখানে শর্টকাটে সবগুলা property এর same নামে একসাথে অনেক গুলা variable নেয়া হয়েছে ।

// console.log("---------------------------special note---------------------------");





// *******************************  example of object inside object destructuring



/* 
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        technology: {
            firstTech: 'html',
            secondTech: 'css',
            thirdTech: 'js'
        }
    },
};


// taking employee and framework property of web object and store in a variable

const { employee, framework } = company.web;
console.log(employee, framework);

const { secondTech, thirdTech } = company.web.technology;
console.log(secondTech, thirdTech);


// another way to do it
// const {web: {employee: emp, framework: frm}} = company;
// console.log(emp, frm);

// const {web: {employee}} = company;
// console.log(employee);

// const { web: { technology: { firstTech, secondTech, thirdTech } } } = company;
// console.log(firstTech, secondTech, thirdTech);



// IF THE OBJECT PROPERTY IS NOT PRESENT IN THE OBJECT THEN we can use default value {}

const {departments: {ItDept} = {}} = company; // departments is not present in the object
console.log(ItDept);


// IF THE childre of OBJECT PROPERTY IS NOT PRESENT IN THE OBJECT THEN we can use default value of any type of data

const {web: {languages = ['js','php']}} = company; // languages is not present in the web props of object
console.log(languages);
 */


// ********************************** 32-3 (advanced) Array Destructuring, nested object Optional chaining



//recap object destructuring declare variable based on the name of an object property
/* const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
};
const {
    x,
    b
} = myObject;
console.log(x, b);


// direct object destructuring
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };
console.log(sky, color, money); */


// destructuring array
/* const colors = ['red', 'green', 'blue', 'yellow']; // at first arra declacred
const [color1, color2, color3, color4] = colors; // then destructuring array use করে পর্যাক্রমে নতুন কিছু variable declare করা হয়েছে ।
console.log(color1, color2, color3, color4);

// direct specific position er element এর array destructuring,
const [, , colorThree, colorThree] = colors;
console.log(colorThree, colorThree); // যে পজিশনের element দরকার সেই position এ শুধু variable এর নাম দেয়া হবে বাদ বাকি সব জায়গায় কমা (,) দিয়ে দিতে হবে   


// direct array destructuring
const [p, q] = [45, 37, 91, 86];
console.log(p, q); */




//chaining
/*
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// printing third tech of company
// console.log(company.web.tech.third);



// error handling "Cannot read properties of undefined"

// console.log(company.backend.tech.third); // এখানে "backend" নামের কোন variable declare করা হয় নি  তাই এরর "Cannot read properties of undefined" দিচ্ছে

// handling "Cannot read properties of undefined" by chaining
console.log(company?.backend?.tech?.third); */




// ************************************ use of rest operator in js object or array



/* 
let animal = {
    name: "dog",
    color: "brown",
    age: 7,
};
let { age, ...rest } = animal;

// let { age, ...rest } = animal || {};
console.log(rest);

// destructuring as rest operator in function
function sum({ name, ...rest }) {
    console.log(name);
    console.log(rest);
}
sum(animal);


let arrayis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, ...restOfArray] = arrayis;
console.log(restOfArray);


// structure of rest opt in function accepts any number of arguments
function sumAll(...params) {
    console.log(params);
}
sumAll(1, 2, 3, 4);
 */


// ************************************ 32-4 Array map to do one line loop magic



/*
// console.log("---------------------------special note---------------------------");

// map use করা হয় শুধুমাত্র array এর উপরে , ধরুন কোন array এর সবগুলা উপাদান কে কোন নির্দিষ্ট কাজ করবেন হতে পারে সবগুলাকে ২গুন করবেন, সবগুলার length জানবেন ইত্যাদে অতঃপর সেগুলো নিয়ে নতুন একটা array তৈরি করবেন ।


// ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

// console.log("---------------------------special note---------------------------");

// কোন array এর সবগুলা উপাদানকে দ্বীগুন করে তাদের নিয়ে নত্যন একটা variable এ ্র রাখব

// style : 1  conventional way "loop+push"
const numbers = [4, 6, 8, 10];
let outPut = []
for (const number of numbers) {
    result = number * 2;
    outPut.push(result);
}
console.log(outPut);


// style : 2  conventional way "arrayFunction+loop+push"
let doubleIt = param => param * 2;
const numbers2 = [40, 60, 80, 100];
let outPut2 = []
for (const number of numbers2) {
    result = doubleIt(number);
    outPut2.push(result);
}
console.log(outPut2);

// style : 3  mdertn way "callingFunction+map"

let numbers3 = [45, 65, 85, 105];
let outPut3 = numbers3.map(doubleIt);
console.log(outPut3);




// style : 4  mdertn way "arrayFunction+map"
// example for doubling value
let numbers4 = [450, 650, 850, 1050];
let outPut4 = numbers4.map(x => x * 2);
console.log(outPut4);

// example for squiring value
let numbers5 = [405, 605, 805, 1005];
let output5 = numbers5.map(x => x * x);
console.log(output5);

 */

// console.log("---------------------------special note---------------------------");


/* let numbers5 = [405, 605, 805, 1005];
let output5 = numbers5.map(element => element * element);
console.log(output5);

বাংলা তর্জমাঃ console তুমি output5 রে পাইতে চাও? তাইলে এক কাজ কর numbers5 এর তল্লাশি চালাও তার map দেখ তার element রে ধর তাদের কে ধইরা ধইরা স্কয়ার কর element * element  তারপর তাদের কে নিজের array এর ভিতরে ভইরা নাও অর্থাৎ output হবে array */

// console.log("---------------------------special note---------------------------");




// ****************************** 32-5 Map string array, array of objects map, foreach



/* 
// project; use map and get an array of lentgh of each string
let anArrayIs = ['a', 'b2', 'c33', 'd444', 'e5555'];
let lengthArray = anArrayIs.map(param => param.length);
console.log(lengthArray);


// map on array of objects

const products = [{
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'black'
    },
    {
        name: 'sticky note',
        price: 30,
        color: 'pink'
    },
    {
        name: 'water glass',
        price: 3,
        color: 'white'
    }
];

// spread method
let newProduct = [...products]
console.log(newProduct);

// destructuring
const [waterBottle, mobilePhone, smartWatch] = products;
console.log(waterBottle, mobilePhone, smartWatch);

// project : get an array of price of each product using map
// conventional
let productsPrice = []
for (const product of products) {
    let price = product.price;
    productsPrice.push(price);
}
console.log(productsPrice);

// using map
let productPrice = products.map(p => p.price);
console.log(productPrice);
let productName = products.map(n => n.name);
console.log(productName);


// project : printing all element of an array using map
let allProducts = products.map(p => console.log(p));
 */


// ************************************** map with three arguments default parameter in map element, index, arr


/* 
const numbers2 = [1, 2, 3, 4, 5];
const result2 = numbers2.map(function (element, index, arr) {
  console.log(`index of ${element} is "${index}"`);
  console.log(arr);
    return element * 2;
});
console.log(result2);
 */



// ************************************** foreach foreach foreach foreach
/* 
// printing all element of an array using foreach
let allProducts2 = products.forEach(p => console.log(p));
 */

// console.log("---------------------------special note---------------------------");

// forEach is used insted of map when no need of return
// forEach হল map এর আপন ছোট ভাই তাই এটা return করতে পারেনা বাকি সব পারে

// console.log("---------------------------special note---------------------------");






// ********************************* 32-6 (advanced) Implement filter, find on an array of objects




// console.log("---------------------------special note---------------------------");

//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |


/* const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);

বাংলা তর্জমাঃ console তুমি bigNumbers রে পাইতে চাও? তাইলে এক কাজ কর numbers5 এর তল্লাশি চালাও তারে filter কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নিজের array এর  মধ্যে ঢুকায়া নাও নইলে ignore  কর অর্থাৎ output হবে array*/

// console.log("---------------------------special note---------------------------");

// filter on array of objects
/* 
 const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(elem => elem.price > 100);
// console.log(expensive);
const blacks = products.filter(elem => elem.color == 'pink');
// console.log(blacks);
 */




// ************************************** filter with three arguments default parameter in filter element, index, arr


/* 
const numbers2 = [1, 2, 3, 4, 5];
const result2 = numbers2.filter(function (element, index, arr) {
  console.log(`index of ${element} is "${index}"`);
  console.log(arr);
  return element > 2;
});
console.log(result2);
 */



// ************************************** find method in array


/* 
const whiteItem = products.find(elem => elem.color == 'black');
console.log(whiteItem);
 */

// console.log("---------------------------special note---------------------------");

// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে

// find is used insted of filter when no need of return array
// forEach হল map এর আপন ছোট ভাই তাই এটা return করতে পারেনা বাকি সব পারে তবে এটা্র কিন্তু একটা প্রব্লেম আছে, কোন array মধ্যে যদি একাধিক element শর্ত পুরন করলেও এটা শুধু প্রথম টাকেই দেখাবে

// console.log("---------------------------special note---------------------------");



// ********************************** js advance array method ||  reduce or reducer method ***************************



/* 
const numbers3 = [1, 2, 3, 4, 5];

let adder = (previousValue , element) => previousValue + element;
const resultz = numbers3.reduce(adder,0); // after comma(,) 0 is the initial value
console.log(`resultz by reducer method is ${resultz}`);

// in short
const resultz2 = numbers3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(resultz2);

// example:

const cosmetics = [
            { id: 1, name: 'Shampoo', price: 10 },
            { id: 2, name: 'Soap', price: 5 },
            { id: 3, name: 'Lotion', price: 1 },
            { id: 4, name: 'Shaving cream', price: 20 },
            { id: 5, name: 'Hair gel', price: 10 }
        ];

        let addPrices = (previousValue, element) => previousValue + element.price;
        let totalPrices = cosmetics.reduce(addPrices, 0);
        console.log(totalPrices);

 */
// ******************************* JavaScript Class Concept by Rokibul Hasan Rokib



/*
Class: JavaScript Classes are templatesfor JavaScript Objects.ক্ লাস হলো একটা কাঠামো যেমন ভাপা পিঠা বানানো র সেই ছো ট বাটি টার কথা মনে আছে ? অথবা যখন বিল্ ডিং বানায় তার আগে যে নকশা বা ব্ লু প্ রিন্ ট ডিজাইন করা হয় তেমনি ক্ লাস হলো একটা অবজেক্ ট বানানো র জন্ য একটা কাঠামো বা টেমপ্ লেট। তো এই কাঠামো যদি JavaScript দিয়ে লিখতে হয় তাহলে যে সিনট্ যাক্ স লিখতে হবে তাইনা ?

    এখানে প্ রথম ছবিটা হল ক্ লাস এর সিনট্ যাক্ স, ক্ লাস লিখতে হলে অবশ্ যই ছো ট হাতের class ব্ যাবহার করতে হবে এবং তার একটা নাম দিতে হবে, নাম বড় হাতের লেটার দিয়ে শুরু করা ভাল JavaScript শুধু ক্ লাস এর নাম বড় হাতের দিয়ে শুরু করা গুড প্ রাক্ টিস মনে করে। এবং এখানে অবশ্ যই constructor নামের(একদম সেম নামে লিখতে হবে) স্ পেশাল মেথড দিতে হবে, যেহেতু ক্ লাস একটা অবজেক্ ট এর কাঠামো মাত্ র, অবজেক্ ট টা কে তো বানাতে হবে এই বানানো র কাজটাই করে এই constructor মেথড আমরা যে অবজেক্ ট বানাইতে চাইতেছি তার property গুলো initialize করার কাজটা constructor মেথড করে থাকে।

class Car {
    constructor(carName,carPrice){
        this.name = carName
        this.price = carPrice
    }
}

এখানে স্ ক্ রিনশট খেয়াল করেন এইটা কিন্ তু একটা কাঠামো মাত্ র। আমি Car নামে একটা ক্ লাস কাঠামো বানিয়েছি, এখানে constructor স্ পেশাল মেথড এখানে তার name এবং price নামের২ টা initial properties আছে.এবং তার২ টা parameter আছে, এখনে একাধিক প্ যারামিটারএবং নাম যেভাবে ভেরিয়েবলে দিয়ে থাকি সেভাবেই দেয়া যাবে, এখনে this keyword টা আসলে যে অবজেক্ ট আমরা বানাবো সেটাইকেই বুজাইছে। যখন আমরা বাইরে থেকে কিছু ডাটা(argument value) সহ Car কাঠামো কে কল করবো তখন JavaScript constructor function কে automatic ভাবে কল করে দিবে। কাঠামো টা তখন একটা অবজেক্ ট হবে, কল না করলে অনেকটা ফাংশনের মত উপরের ছবিটার কো ড execute হবেনা। পরের স্ ক্ রিণশট এ যাই......

class Car {
    constructor(carName,carPrice){
        this.name = carName
        this.price = carPrice
    }
}
const bmw = new Car('Tesla', '$3000')

এবার দেখেন আমরা কি করছি, আমরা যে ক্ লাস কাঠামো টা বানিয়েছি সেটা কল করে দিছি, নতুন Object create তাই JavaScript এর new keyword ইউজ করছি এবং new keyword user defined object বানানো র জন্ য ব্ যাবহার করা হয়। last লাইন মেইনলি অবজেক্ ট টা বানায়, এর আগে একটা নকশা বা কাঠামো ছিল, এটা কল করার পর যখন নতুন অবজেক্ ট হয়ে গেল constructor method তখন automatically execute হয় এবং "Tesla" and "$3000" ভ্ যালু গুলো রিসিভ করে name এবং price properties এ এসাইন করে দেয়, this keyword এর মাধ্ যমে, এখনে this মেইনলি bmw নামের যে অবজেক্ ট টা হইছে তাকেই বুজায় আমরা যদি এখন console.log(bmw.name) করি তাহলে output আসবে Tesla.এখন চাইলে এই ক্ লাস কাঠামো ব্ যাবহার করে আর ও অনেক Object create করা যায়।

যেহেতু অব্ জেক্ ট create করতেছি আমরা জানি, অবজেক্ ট এর মধ্ যে বিভিন্ ন method থাকে, তাই আমরা চাইলে সেই কাঠামো তে / নকশায় method ও দিয়ে দিতে পারি।এখন পরের স্ কিনশট টা দেখেন....
 */
/*
class Car {
    constructor(carName, carPrice) {
        this.name = carName
        this.price = carPrice
    }
    run() {
        console.log(`${this.name} is an amazing car and it costs ${this.price}`);
    }
}
const bmw = new Car('BMW', '$3000')
const audi = new Car('Audi', '$35000')
bmw.run()
audi.run()
 */

/*
এখানে আমরা run() নামের একটা মেথড কাঠামো তে দিয়ে দিছি। আমরা যে নামে অবজেক্ ট টা বানাইছি, সেই নামের সাথে ডট দিয়ে আমরা তার property and method access করতে পারবো তাইনা ? এখানেও তাই করতেছি bmw.run() কল করলে সে এখন নিচের স্ কিনশটের মত আউটপুট দিবে..আপনে চাইলে এই run() মেথড এ প্ যারামিটার পাস করেও সেটা অন্ য কাজে লাগাতে পারেন।।।

এখানে templete string e যে this.name and this.price সেটা আপনে যে Object এর নাম ডট দিয়ে কল করবেন তার যে argument value দিয়েছিলাম সেটা acccess করবে, সেজন্ য আগেই বলেছিলাম যে this কিন্ তু যে object create করতেছি সেটাকেই বুজায়। তো বুজেই গেছেন যে ক্ লাস কিন্ তু Powerfull and Nice একটা জিনিস javaScript এ ঠিক ভাবে বুজতে পারলে... Output  দেখুন নিচে... */








// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 32_5-1  ||| 1 videos]]]]]]]]]]]]]]]]]]]]]]]]]]




// ********************************************** 32_5-1 ES6 Recap and practice with checklist



/*
// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const amarBou = 'Samiya Satu'
let amarSele = 'Abdullah'
amarSele = "Abdur Rahman"


// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।


const products = [{
    name: 'water bottle',
    price: 50,
    color: 'yellow'
},
{
    name: 'mobile phone',
    price: 15000,
    color: 'black'
},
{
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
];
console.log(`amar bou ${amarBou} amar sele ${amarSele} tar ekta ${products[2].name} ase dam ${products[2].price}`);


// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
const singleParam = param => param * 5;
console.log(`five times of 10 is ${singleParam(10)}`);

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
const dblParam = (param1,param2) => (param1+2) * (param2+2)
console.log(`the result is ${dblParam(1,1)}`);

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

const tripleParam = (param1,param2,param3) => param1 * param2 * param3
console.log(`the result is ${tripleParam(2,2,2)}`);

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
const getResult = (param1,param2) => {
    let x = param1 + 2;
    let y = param2 + 2;
    return  x * y;
}
console.log(`the result is ${getResult(1,1)}`);





// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const arrayMulti5 = numbers.map(element => element * 5)
console.log(arrayMulti5);


// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
const numbers2 = [50, 103, 70, 401, 300, 50, 25, 195];
const oddNums = numbers2.filter(element => element % 2 != 0)
console.log(oddNums);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

const products2 = [{
    name: 'water bottle',
    price: 50,
    color: 'yellow'
},
{
    name: 'mobile phone',
    price: 5000,
    color: 'black'
},
{
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
];
const price5000 = products2.find(element => element.price == 5000)
console.log(price5000);


// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

        // MAP এর বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তার map দেখ তার element রে ধর তাদের কে ধইরা ধইরা operation কর ,  তারপর তাদের কে নিজের array এর ভিতরে return নাও অর্থাৎ output হবে array

        // forEach এর বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তার forEach and every element দেখ তার element রে ধর তাদের কে ধইরা ধইরা operation কর ,  তারপর তাদের কে return না করিয়ে console.log / অন্য কিছু কর

        // বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তারে filter কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নিজের array এর  মধ্যে ঢুকায়া নাও নইলে ignore  কর অর্থাৎ output হবে array


        // বাংলা তর্জমাঃ console তুমি output রে পাইতে চাও? তাইলে এক কাজ কর variable এর তল্লাশি চালাও তারে find কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নগদে নেক্সট স্টেপে প্রসেসিং কর অর্থাৎ output array হবে না


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const gadgets = {
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
const {name} = gadgets
console.log(name);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
const products3 = [{
    name: 'water bottle',
    price: 50,
    color: 'yellow'
},
{
    name: 'mobile phone',
    price: 5000,
    color: 'black'
},
{
    name: 'smart watch',
    price: 3000,
    color: 'black'
}
];
const [one,two,three] = products3
console.log(three);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।

// conventional function
function doSolve(params1,params2,params3 = 7) {
    return params1 + params2 + params3;
}
console.log(`conventional function ${doSolve(1,2,3)}`);
console.log(`conventional function one argument missed ${doSolve(4,5)}`);

// arrow function
const doSolv = (params1,params2,params3 = 7) => params1 + params2 + params3

console.log(`arrow function ${doSolv(10,20,30)}`);
console.log(`arrow function one argument missed ${doSolv(40,50)}`);

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
var data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};
const {code,items} = data;
console.log(code,items);
const [id,names] = data.items
console.log(id,names);


 */
// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।






// [[[[[[[[[[[[[[[[[[[[[[[[[[conceptual session on ES6  ||| 1 videos]]]]]]]]]]]]]]]]]]]]]]]]]]






// ******************************************* conceptual session on ES6 new JS properties

/*
1. What is Es6 & why we should use it ?

2.
let
--Redeclare kora jabena.
    --Declare korar age define kora jabena
    --Block scope feature

let x = 10 {
    let x = 2
    console.log('Inside block', x)
}
console.log('Outside block', x)

3.
const
--cannot reassign
--has other features of
    let

const age = 45
age = 56
console.log(age) // will show error

4. Template Literal
let name = 'Nazrul'
let message = 'How are you?'

Old way
let fullMessage = 'Hello ' + name + ', ' + message
let fullMessage = `Hi, ${9 + 9}, ${message}`
console.log(fullMessage)


5. Arrow Function

function sum(a, b) {
    let result = a + b
    return result
}
const result = sum(10, 15)
console.log(result)

const sum = (a, b, c) => {
    let sum1 = a + b
    let sum2 = a + c

    return sum2
}
const result = sum(10, 21, 34)
console.log(result)

6. Array Destructuring
let myVehicles = ['Toyota', 'Yamaha bike']

const [bike, car] = myVehicles

console.log(bike)

7. Spread Operator

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(...arr1, ...arr2)

8. The For / Of Loop
const numbers = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (let number of numbers) {
    console.log(number)
}

9. Default Parameter Values

function welcomeMessage(name = 'Hero') {
    let message = `Hi ${name}, welcome to this session!`
    console.log(message)
}
welcomeMessage('Khalil')

10. Map, filter, find
const myArr = ['Naymur', 'Alamin', 'Niloy']
let myNewArr = []
for (let number of myArr) {
    let tripled = number * 3
    myNewArr.push(tripled)
}

console.log(myNewArr)

const tripledArr = myArr.map(name => `Hello ${name}, How are you?`)
console.log(tripledArr)

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 82, 63, 98]
let filteredArr = []

for (number of newArr) {
    if (number % 2 == 0) {
        filteredArr.push(number)
    }
}
console.log(filteredArr)

const filteredArr = newArr.filter(number => number % 2 != 0)

console.log(filteredArr)

const newArr = ['Faysal', 'Arfan', 'Meraj', 'Tanim']

const found = newArr.filter(name => name.length % 2 != 0)
console.log(...found)

Spread operator with objects

const phone = {
    brand: 'Walton',
    color: 'Red',
}

const phoneExtra = {
    Camera: '500 mp',
    battery: '20000mah',
}

const fullPhoneDetails = {
    ...phone,
    ...phoneExtra
}
console.log(fullPhoneDetails)
let x = 20 {
    // Area 51
    let x = 5
    console.log(x)
}

const numbers = {}

console.log(numbers.second.new)

5. Arrow Function

function sum(a, b) {
    let result = a + b
    return result
}
const result = sum(10, 15)
console.log(result)

const myArrowFunc = (a, b) => a + b
const newResult = myArrowFunc(34, 90)
console.log(newResult) */







// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 33  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]







// ********************************** 33-1 Module Introduction and What is an API




// console.log("---------------------------special note---------------------------");

// API হচ্ছে browser and server এর middleman যা browser থেকে user এর দেয়া information কে নিয়ে গিয়ে server এর কাছে দেয় আবার server থেকে requirement কে নিয়ে গিয়ে browser এর কাছে দেয়

// console.log("---------------------------special note---------------------------");





// ********************************** 33-2 Intro to JSON, JSON Structure, parse, stringify




// console.log("---------------------------special note---------------------------");

// JSON stands for "JavaScript Object Notation."
// JSON এর ভিতরে সব কিছুই string format এ হয় যায় কিন্তু কেবল মাত্র number and Boolean type data গুলো string হয় না।

// console.log("---------------------------special note---------------------------");

/*
// example : 1
const user = {
    id: 11,
    name: 'Gorib Amir',
    job: 'actor'
};
console.log(user);

// convert js object to jsonformat
const stringified = JSON.stringify(user);
console.log(stringified); // its a object type string



// example : 2
const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
console.log(shop);

// convert js object to jsonformat
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
console.log(shopStringified.owner); // now we can not access the property of converted object


// convert Stringified format  to js
const Stringified2JsObj = JSON.parse(shopStringified);
console.log(Stringified2JsObj);
console.log(Stringified2JsObj.owner); // now we can access the property of converted object
 */




// ********************************** 33-3 JSON placeholder, GET data, display data on UI




// console.log("---------------------------special note---------------------------");

// fetch('https://jsonplaceholder.typicode.com/todos/1') /  file from json placeholer site
//     .then(response => response.json())
//     .then(json => console.log(json))


// console.log("---------------------------special note---------------------------");

/*
// function loadJSONData linking with html
function loadJSONData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}
*/





// ********************************** 33-4 Load more data, more APIs, send data to function + 33-5 Dynamically display loaded data on your website


/*
// function loadJSONData linking with html
function loadJSONData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

// function loadJSONUsers linking with html
function loadJSONUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resposnse => resposnse.json())
        .then(data => console.log(data))
}



// function loadJSONUsersOnly linking with html
function loadJSONUsersOnly() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resposnse => resposnse.json())
        .then(data => usersNameOnly(data))
}

function usersNameOnly(params) {
    // console.log(params);
    let ul = document.querySelector('#userList');
    for (const param of params) {
        // console.log(param);
        // console.log(param.name);
        let li = document.createElement('li');
        li.innerHTML = `userName : ${param.name} ||| userId : ${param.id}`;
        ul.appendChild(li);
    }
}
 */





// ********************************** 33-6 Load posts and display on the website with CSS




/*
// function loadJSONPosts linking with html
function loadJSONPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resposnse => resposnse.json())
        .then(data => loadInHtml(data))
}
loadJSONPosts()

function loadInHtml(params) {
    // console.log(params);
    let postsSections = document.querySelector('#postsSections');
    for (const param of params) {
        // console.log(param);
        let article = document.createElement('article');
        // style article
        article.style.border = '1px solid black';
        article.style.margin = '10px';
        article.style.padding = '10px';
        article.style.background = '#f5f5f5';
        article.innerHTML = `
        <small> postSL : ${param.id} </small>
        <h4>postTitle : ${param.title}</h4>
        <p>postBody : ${param.body}</p>`;
        postsSections.appendChild(article);
    }
} */






// ********************************** 33-7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST + 33-8 Debug API, Network tab,Status code, headers, bad API

/*
let sample = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(sample),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then(data => console.log(data))



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then(data => console.log(data))


// SAme of patch and delete */






// ********************************** 33-9 Module Summary and two homeworks albums+comments+photos



/*
let blogSection = document.querySelector("#blogSection");
let blogArticle = document.querySelector("article");
let imgHolder = document.querySelector("#imgHolder");



// display comments
function loadcomments4mComments(params) {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => commentsdisplayOnHtml(data))
}
loadcomments4mComments()

function commentsdisplayOnHtml(params) {
    for (const param of params) {
        let small = document.createElement("small");
        small.innerText = param.body;
        blogArticle.appendChild(small);
    }
}


// display title of album
function loadTitles4mAlbum(params) {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => titledisplayOnHtml(data))
}
loadTitles4mAlbum()

function titledisplayOnHtml(params) {
    for (const param of params) {
        let h3 = document.createElement("h3");
        h3.innerText = param.title;
        blogArticle.appendChild(h3);
    }
}


// display photos
function loadphotos4mPhotos(params) {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => photosdisplayOnHtml(data))
}
loadphotos4mPhotos()

function photosdisplayOnHtml(params) {
    // console.log(params);
    for (const param of params) {
        let img = document.createElement("img");
        img.classList.add("imgFluid");
        img.setAttribute("src", `${param.thumbnailUrl}`);
        blogArticle.appendChild(img);
    }
}






// function displayOnHtml(params) {
//     for (const param of params) {
//         console.log(param);
//     }
// } */





// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 35  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]







// ********************************** 35-1 Module Overview, Dynamic data types



// JavaScript একটা dynamic data types supported language. এর মানে হল কোন specific variable এর value এর data type যদি dynamically change হতে থাকে তবুও JavaScript এ কোন সমস্যা হয় না সে নিজে নিজেই তা বুঝে নিতে পারে।

/* let a = 19;
console.log(`now typeof variable a is, "${typeof a}"`);
a = 'Jamal Uddin Shahen Shah';
console.log(`now typeof variable a is, "${typeof a}"`);
a = false;
console.log(`now typeof variable a is, "${typeof a}"`); */





// ********************************** 35-2 Primitive data type and non-primitive data type




/* in a broadsense dataType 2 প্ রকার(i) primitive, (ii) non - primitive Data types

primitive data types  এরা আবার ৬ প্রকার ,
1. number
2. string
3. boolean
4. undefined
5. null
6. symbol

(১) যাদের একসাথে মাত্র একটা value ই থাকতে পারে
(২) এরা memory  storage এর reference ধরে রাখে যেমন, */

/* let a = 'hello';
let b = a; // এখানে b এর value হিসেবে a এর value কে assign হয়েছে
console.log(`a = ${a} and b = ${b}`);
a = 'gello'; // a এর value chenge হয়েছে হিসেবে তাহলে b এর value ও চেঞ্জ হবার কথা কারণ এরা memory  storage এর reference ধরে রাখে
console.log(`a = ${a} and b = ${b}`); */


/*
non - primitive এরা আবার 2 প্রকার ,
1. object
2. ARRAY

(১) যাদের একসাথে মাত্র একটা value ই থাকতে পারে
(২) এরা memory  storage এর reference ধরে রাখে যেমন, */



/* const x = {
    job: 'web developer'
}
const y = x;
console.log(`x = ${x}, y = ${y}`);

x.job = 'front end developer'; // যেকোন variable এর value change করলেই দুটারই value change  হয়ে যাছে
console.log(`x = ${x}, y = ${y}`);
y.job = 'backend end developer'; // যেকোন variable এর value change করলেই দুটারই value change  হয়ে যাছে
console.log(`x = ${x}, y = ${y}`); */





// ********************************** 35-3 Different Truthy and Falsy values in JavaScript




/*
Truthy:
boolean true is truthy
any number (positive or negative ) is truthy
any string including single whitespace(" ") / '0' / 'false' is truthy
empty array ([])  is truthy
empty object ({})  is truthy
anything else that is not falsy will be truthy অর্থাৎ "দুনিয়ার সব কিছুই thruthy শুধুমাত্র falsy গুলা বাদে।"

-------------------

Falsy:
boolean false is falsy
as a number only 0 (zero)  is falsy elses are truthy
empty string ("") is falsy
undefined is falsy
null is falsy
NaN is falsy
*/



// example
/* let x = {};
console.log('value of x is', x)
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is Falsy');
} */






// ********************************** 35-4 Null Vs Undefined, different ways you will get undefined




/*
কোন varible এর value শুধুমাত্র নিচের কারন গুলোর জন্য undifined হবে,

1. variable value not assigned
2. function but didn't write return
3. just wrote return but didn't return anything
4. argument for parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined


কোন varible এর value শুধুমাত্র নিচের কারন গুলোর জন্য null হবে,
9. null হবে তখনি যখন value explicitly set value to null

*/

/*
// 1. variable value not assigned
let first; // value not assigned
console.log(first);


// 2. function but didn't write return
function second(x, y) {
    document.getElementById('sum'); // didn't write return in the function
}
const result = second(3, 91);
console.log(result);


// 3. just wrote return but didn't return anything
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return; // wrote return but didn't return anything
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
console.log(fourth)



// 4. argument for parameter that isn't passed
function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result;
}
double(81); // argument for parameter b  that isn't passed



// 5. property that doesn't exist in an object
const fifth = {
    name: 'sogir',
    age: 15,
    location: 'bandarbon'
};
console.log(fifth.phone); // phone property doesnt exist in the object fifth



// 6. accessing array element out of range
const sixth = [54, 12, 41, 31];
console.log(sixth[4]) // here index 4 is out of range cause maximum index is 3

// 7.accessing deleted array element
delete sixth[2]; // index 2 is deleted
console.log(sixth[2]); // here index 2 is deleted so it will be undefined

// 8. explicitly set value to undefined
const seventh = undefined;
console.log(seventh);


// 9. null হবে তখনি যখন value explicitly set value to null
const myObj = {
    name: 'samad',
    profession: null
} */







// ********************************** 35-5 double equal (==) vs triple equal (===), implicit conversion






/*
// 1. same digits in number vs string format double equal checks the value only but triple equal checks value and data type both
let first = '2';
let second = 2;
console.log(first == second);; // true
console.log(first === second);; // false




// 2. for digits in string vs boolean false and true , for boolean true js takes the value 1 in number and for false takes 1
first = false; // js takes 0 as boolean format
second = '10'; // js takes 10 as number format
console.log(first == second);; // false
console.log(first === second);; // false

first = true; // js takes 1 as boolean format
second = '10'; // js takes 10 as number format
console.log(first == second);; // false
console.log(first === second);; // false

first = false; // js takes 0 as boolean format
second = '0'; // js takes 0 as number format
console.log(first == second);; // true
console.log(first === second);; // false

first = true; // js takes 1 as boolean format
second = '1'; // js takes 1 as number format
console.log(first == second);; // true
console.log(first === second);; // false




//3. for boject and array data type each and every comparision will be false cause of its nature. it keeps the referece from store.
let a = {
    name: 'ali'
};
let b = {
    name: 'ali'
};
console.log(first == second);; // false
console.log(first === second);; // false

a = [];
b = [];
console.log(first == second);; // false
console.log(first === second);; // false */






// ********************************** 35-6 Block scope, global scope, Hoisting






/* global:  js এর open field অর্থাৎ কোন ব্রাকেট এর বাইরের জায়গাকে gobal space বলে .
-nonKeyWord / var  দিয়ে declare করা varible গুলো block space
-এদেরকে hoisting করা যায় অর্থাৎ delcare এর আগে console.log করা যায়

block : js এর ভিতরের কোন ব্রাকেট থাকলে ঐ ব্রাকেটের ভিতরের জায়গাকে block space বলে।
-let / const  দিয়ে declare করা varible গুলো block space
-এদেরকে hoisting করা যায় না অর্থাৎ delcare এর আগে console.log করা যায় না */



/*
// examplesssz:
const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;

    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);  */



/* // incase of object by using function property value can be changed which is a problem
function scope4Obj(params) {
    return params.age = 5050
 }
 let anObj = {personName : "Hajil", age : 20, height : `5'6"`}
 console.log(anObj); // here age is 20

 console.log(anObj); // here age is 5050


 // this problem can be solved by using clone and etc advance methodsss
 */






// ********************************** 35-7 (advanced) Closure, encapsulation, private variable





/*
function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1()); */





// ********************************** 35-8 (advanced) Callback function and pass different functions



/*
What is a callback function ?
-A function passed as a argument of another function.
What is a highOrder function ?
-The function accepts another function as a parameter. */


/*
function highOrderFunction(param, callbackFunction) {
    callbackFunction(param);
}



function greetMorning(name) {
    console.log('Good morning', name);
}
highOrderFunction('Tom Hanks', greetMorning);



function greetEvening(name) {
    console.log('Good Evening', name);
}
highOrderFunction('Bappa Raj', greetEvening);



function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
highOrderFunction('Sakib Hanks', greetAfternoon); */





// ********************************** 35-9 Module summary pass by reference pass by value


/*
// function type data
let triple = x =>{}
console.log(triple.length); // we can access lenth method to function

triple = (x,y,z) =>{}
console.log(triple.length);



// null data type
console.log(typeof null); // though null is a datatype bun in console it will show obj */







// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 36  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]







// ********************************** 36-1 Module introduction Different way to Create Object



/*
// 1. using object literal
const student = {
    name: 'Sakib AL Hasan',
    job: 'cricketer'
};
console.log(`student =`, student);



// 2. constructor
const person = new Object();
console.log(`person =`, person); // output : {}

// adding key and values as property
person.name = 'Ford';
person.age = '30';
person.dob = 1997;
console.log(`person =`, person); // output : {name: 'Ford', age: '30', dob: 1997}




// 3. অন্যকোন object কে নিজের বাপ বানিয়ে তাদের সমত্তিএর অংশিদার হওয়া
const human = Object.create(student); // এখানে human Object এর বাপ হিসেবে student Object কে বসানো হয়েছে তাই এখন human Object তার বাপের student Object সব property এর excess পাবে
console.log(`human.name =`, human.name); // output : Sakib AL Hasan
console.log(`human.job =`, human.job); // output : cricketer

// আর যদি বাপ বানানোর কোন সুযোগ না থাকে তাহলে null বসাতে হবে নইলে Error আসবে
const human2 = Object.create(null);
console.log(`human2 =`, human2); // output : {}





// 4. object creating with class : class দিয়ে একটা নির্দিষ্ট object এর "mould বা ছাচ বা নকশা" তৈরি করে সেই class কে বিভিন্ন নতুন object তৈরি করা অনেকটা ৩ নাম্বার এর বাপ বেটার মতই
class People {
    constructor(name, age) {
        this.name = name; // এখানে this == People object নিজেই
        this.age = age;
    }
}
const insaan = new People('Abdullah', 2); // এখানে inssan নামের ্নতুন একটা obj বানানো হচ্ছে People object এর ্নকশা ব্যবহার করে
console.log(insaan); // output : People {name: 'Abdullah', age: 2}




// 5. object creating with function : এটা পুরা টাই object creating with class এর পেটের ভিতরের constructor এর format টাই এটা দিইয়েও obj বানান যায়
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man); // output : Manus {name: 'kader'} */






// ********************************** 36-2 Object method property review



// console.log("---------------------------special note---------------------------");

/* // আমরা জানি function calling system - 8 module : 25-2  অনুযায়ী কোন function কে variable এর value হিসেবে define করা হলে তাকে কল করার সময়  "variable(params)" এভাবেও কল করা যায়।
const funcVAr = function (a, b) {
    return a + b;
}
console.log(funcVAr(10, 20)); */

// console.log("---------------------------special note---------------------------");

/*
const student1 = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log('taking exam by', this.name);
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student1.takeExam(); // like function calling system - 8
const remaining1 = student1.treatDey(900, 100);
console.log(remaining1);
const remaining2 = student1.treatDey(500, 50);
console.log(remaining2); */





// ********************************** 36-3 Keys, values, entries, delete, seal, freeze




/*
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true,
    height: 10
};
console.log(bottle);


bottle.nickName = 'kolos';
console.log(bottle); // nickName is added

// getting all properties names in an array
const keys = Object.keys(bottle);
console.log(keys);


// get all values names in an array
const values = Object.values(bottle);
console.log(values);


// get all properties+values couple as an array in an array (2 dimensional array)
const pairs = Object.entries(bottle);
console.log(pairs);


// to delete an property from an object
delete bottle.isCleaned;
console.log(bottle); // isCleaned is deleted


// to prevent deleting + adding properties ta an object but you can change them
Object.seal(bottle);
delete bottle.price;
console.log(bottle); // price not is deleted

bottle.price = 100;
console.log(bottle); // price value is changed

bottle.shape = 'round';
console.log(bottle); // shape is not added



// to prevent deleting + adding + changeing properties from an object
Object.freeze(bottle);
delete bottle.height;
console.log(bottle); // height is not deleted

bottle.height = 16;
console.log(bottle); // height value is not changed

bottle.shape = 'round';
console.log(bottle); // shape is not added */





// ********************************** 36-4 Loop through an object using for in, for of, object entries



// console.log("---------------------------special note---------------------------");

/*
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/

/* // array destructuring example
const [index0, index1, index2, index3] = entries;
console.log(index0, index1, index2, index3);
*/

// console.log("---------------------------special note---------------------------");

/*
const bottle2 = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// getting access to the properties of an object by using for...in loop
for (const prop in bottle2) {
    // console.log(prop); // only property name
    // console.log(bottle2[prop]); // only property value using method "set object value (iii)"
    console.log(`${prop} : ${bottle2[prop]}`); // property name and property value
}

// getting access to the properties of an object by using for...of loop
const keys = Object.keys(bottle2);
console.log(keys);
for (const prop of keys) {
    console.log(`${prop} : ${bottle2[prop]}`);
}



// advanced : getting access to the properties of an object by using for...of loop and entries
const twoDimensionalArray = Object.entries(bottle2);
console.log(twoDimensionalArray);

// for (const array of twoDimensionalArray) {
    //     console.log(array);

    //     // array disructureing
    //     [key, value] = array;
    //     console.log(`${key} : ${value}`);
    // }

    // inshort of the above for of loop in array
    for (const [key, value] of Object.entries(bottle2)) {
        console.log(`${key} : ${value}`);
    }

    */





// ********************************** 36-5 (advanced) Compare objects, referential integrity






/*
const first = {
    a: 1,
    b: 2
};
const second = {
    a: 1,
    b: 2
};

// normal comparing with obj to obj
console.log(`first == second ? - ${first == second}`);
console.log(`first === second ? - ${first === second}`);


const third = first;
console.log(`first == third ? - ${first == third}`);
console.log(`first === third ? - ${first === third}`);


// using stringify method for comparing
let firstStringified = JSON.stringify(first);
let secondtringified = JSON.stringify(second);
console.log(`firstStringified = ${firstStringified}`);
console.log(`secondtringified = ${secondtringified}`);


console.log(`firstStringified == secondtringified ? - ${firstStringified == secondtringified}`);
console.log(`firstStringified === secondtringified ? - ${firstStringified === secondtringified}`);




// problem in stringify comparision : এটা compare করে string এর index ধরে ধরে তাই sequence same না হলে false দেখাবে
const first2 = {
    a: 1,
    b: 2
};
const second2 = {
    b: 2,
    a: 1
};
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));

console.log(`stringifyfirst2 == stringifysecond2 ? - ${JSON.stringify(first2) == JSON.stringify(second2)}`);
console.log(`stringifyfirst2 === stringifysecond2 ? - ${JSON.stringify(first2) === JSON.stringify(second2)}`);



// using conditions and loops to compare objects
let first3 = {
    a: 1,
    b: 2
};
let second3 = {
    a: 1,
    b: 2
};

let objFirst3KeysArray = Object.keys(first3);
let objSecond3KeysArray = Object.keys(second3);

if (objFirst3KeysArray.length !== objSecond3KeysArray.length) {
    console.log(`first3 and second3 are not same in count of properties`);
} else {
    for (const prop in first3) {
        if (first3[prop] !== second3[prop]) {
            console.log(`first3 and second3 are not same in value of properties`);
            break;
        }
    }

    console.log(`first3 and second3 are same`);
}



// using function and loops to compare objects
const first4 = {
    a: 1,
    b: 2,
    c: 2
};
const second4 = {
    b: 2,
    a: 1
};


function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first4, second4);
console.log(isEqual); */





// ********************************** 36-6 (advanced) Use bind to borrow method from another object



/*
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
    }
}
kibria.treatDey(100);



// we can use this treatDey function for other object also. the structure will be  [[[ functionHolderObj.function.bind(funcUsing4ObjAsThis) ]]]

//example 1
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const heroTreatDey = kibria.treatDey.bind(heroBalam); // এখানে this = heroBalam
heroTreatDey(500);
heroTreatDey(300);



//example 2
const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}
const normalTreatDey = kibria.treatDey.bind(normalGolam); // এখানে this = heroBalam
normalTreatDey(200);


// এখানে function গুলো নিজেদের জন্য্ আলাদা আলাদ closoure তইরি করবে তাই আবার যখন কল করবে আগের কলের পরের থেকে কাজ হবে
kibria.treatDey(1000);
heroTreatDey(3000);
normalTreatDey(2000); */





// ********************************** 36-7 (advanced) Difference between bind, call and apply





/*

const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}


//call
kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 50, 30);

// apply
kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(normalGolam, [700, 100, 70]) */





// console.log("---------------------------special note---------------------------");
/*

Why do we use the bind method?
-To borrow method from another object

bind কে use করতে হয় আগে একটা function declare করে তারপর তার ভিতরে arugments গুলা pass করে করে


const heroTreatDey = kibria.treatDey.bind(heroBalam); // এখানে this = heroBalam
heroTreatDey(500);
heroTreatDey(300);


আর call and apply use করতে হয় direct


kibria.treatDey.call(heroBalam, 300, 50, 30);
kibria.treatDey.apply(heroBalam, [500, 100, 50]); */

// console.log("---------------------------special note---------------------------");





// ********************************** 36-8 ( super advanced) Understand this keyword in JavaScript





/*
-this মানে হচ্ছে execution context
-in the global scope this === window
-normally this === এর বাম পাশে যে আছে সেটাকে তার execution context হিসেবে নেয়
-arrow function এর ক্ষেত্রে this === তার just immidiate উপরের level এর টাকে তার execution context হিসেবে নেয়
-কোনো DOM এর elelment এ click করলে, this === event অর্থাৎ  সেই event টাই this বুঝাবে
*/

/*
console.log(this); // here this === window

const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this); // here this === kibria
        return this.money;
    },
    treatDeyArrow: () => {
        console.log(this); // here this === window
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this); // here this === kibria
        myArrow();
    }
}
kibria.treatDey()
kibria.treatDeyArrow()
kibria.treatDeyInside()

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}


heroBalam.treatDey = kibria.treatDey
console.log(heroBalam.treatDey(1000)); // here this === heroBalam

kibria.treatDey() // here this === kibria


let myTreatDey = kibria.treatDey
console.log(myTreatDey);
console.log(myTreatDey()); // here this === window

function log4this() {
    console.log(this); // here this === window
} */







// ********************************** 36-8 ( super advanced) Understand this keyword in JavaScript






/*
-different ways to create object
-method or function in the object as object element
-getting an array of all the keys in an object by using Object.keys()
-getting an array of all the values in an object by using Object.values()
-get value or keys in obje using for in loop
-comparing two objects by using
-binding a function to an object using .bind()
-call and apply
-what the heck is this
*/


/*
const pen = {
    brand: 'econo',
    price: 10,



    writePoem: function (food) {
        console.log(food);
    }
}




const keys = Object.keys(pen);
const values = Object.values(pen);



for (const key in pen) {
    console.log(pen[key]);
}



const a = {
    a: 1
};
const b = {
    a: 1
};
const c = a;

if (a === b) {

}
// optional
const aBounded = pen.writePoem.bind(a);
aBounded();

 */




// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 37.5  ||| 5 videos]]]]]]]]]]]]]]]]]]]]]]]]]]












// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 38  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]






// *************************** 38-1 Module Introduction and how internet works

// show video




// *************************** 38-2 How Browser works, DOM tree, Render Tree



/*
Browser কী?
-Browser হল এক ধরনের desktop software যা pc তে install করে ব্যবহার করতে হয়।


কোন একটা browser এ static website দেখানোর steps:

-browser আমাদের html file কে একটা tree তে পরিবর্তন করে যা DOM tree
-html file এর উপর style দেওয়ার জন্য browser একটা style tree তৈরী করে
-DOM tree এবং style tree মিলে তৈরি হয় reder tree যা website এর layout কে নির্দেশ করে। DOM tree / render tree তে কোন কিছু update হলে সেই অনুযায়ী re-rendering হয়
-Render tree পাওয়ার পর সেটার উপর paint করা হয়। Re-rendering হলে re-paint (reflow) হয়
-সবশেষে user Interface(UI) এ output টা display করা হয়
 */




// *************************** 38-3 JavaScript Engine V8 Internal mechanism




// show video
// -it interprete js code as JIT interpreter




// *************************** 38-4 setTimeout simple Asynchronous JS using




// synchronous: উপরথেকে নিচের দিকে দিকে sequence অনুযায়ি পড়ে পড়ে + execute করতে করতে ্কাজ করা

// Asynchronous: উপরথেকে নিচের দিকে দিকে sequence অনুযায়ি পড়ে পড়ে + execute করতে করতে ্কাজ না করে বরং সাইডে চলে যায় (queue) তারপর দের setTimeout অনুযায়ী কাজ করা আর যদি setTimeout না থাকে তাহলে সবার last এ কাজ করা . example:
/*
//synchronous execute
console.log(`one`);
console.log(`two`);
console.log(`three`);


//Asynchronous execute
console.log(`a`);
console.log(`b`);

// will execute afet 5s of all stack load
setTimeout(() => {
    console.log(`c) setTimeout = 5000`);
}, 5000);

// will execute afet 3s of all stack load thats mean befor setTimeout 5000
setTimeout(() => {
    console.log(`d) setTimeout = 3000`);
}, 3000);

console.log(`e`);
console.log(`f`); */




// *************************** 38-5 Recognize fetch as an Asynchronous activity




// show video




// *************************** 38-6 setInterval and clearInterval with x++ and ++x




// যখন কোন একটা কজ কে একটা নির্দিষ্ট সময় পর পর বার বার repeat করা লাগে তখন setInterval use হয় আর সেই repeated কাজ কে বন্ধ করার জন্য কোন শর্ত দিয়ে তার পর clearInterval use করতে হয় . setInterval without clearInterval এটাকে ভুলেও browser এ রান করা যাবে না নইলে কম্পিউটার বাতিল হয় যাবে

/*
// examle for setInterval without clearInterval:
console.log(1);
console.log(2);

// আর terminal এ রান করলেও যদি repeatation off করতে চাই তাহলে Ctrl + C করলেও বন্ধ হয়

setInterval(() => {
    console.log(3);
}, 3000)

console.log(4);
console.log(5);


// examle for setInterval with clearInterval:
console.log(`one`);
console.log(`two`);

let counter = 0
const setIntervalToggler = setInterval(() => {
    counter++;
    if (counter === 5) {
        clearInterval(setIntervalToggler);
    }
    console.log(`three- ${counter}`);
}, 2000)

console.log(`four`);
console.log(`five`); */




// *************************** 38-7 (advanced) JavaScript event loop and concurrency




// stack : stack হচ্ছে js code এর মধ্যের থাকা regular expression
// qeue : qeue হচ্ছে js code এর মধ্যের থাকা setinterval or settimeout or fetche etc relaeate expression যা  stack গুলা run comlete হবার পরে interval অনুযায়ী run হয়


// show video




// *************************** 38-8 Integrate chrome devtool console with VS Code





// console.log("---------------------------special note---------------------------");

/*
-fetch বা এরকম অনেক ফাংশান আছে যারা terminal এ কাজ করেনা
-vs code এর ভিতরের run and debug option এর ভিতরে ঢুকলে debugg console নামের যে option আছে সেটা হুবহু browser এর console panel এর মত
 */

// console.log("---------------------------special note---------------------------");



// *************************** 38-9 Module summary and HTTP layers







// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 39  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]






// *************************** 39-1 Module Overview, BOM vs DOM, Browser API






// console.log("---------------------------special note---------------------------");
/*
1) javascript এর মাঝে কিছু কিছু জিনিস এটা direct access able but কিছু জিনিস আছে যা সরাসরি html এর সাথে সম্পর্কিত অর্থাৎ html + js file linked না থাকলে কাজ করবে না বা error দেখাবে। এদের মাঝে,

-fetch
-document. -------- দিয়ে যে কোন কিছুই
ইত্যাদে।


2) third party API এর মত (placeholder,randomuser etc) browser এর মাঝেও কিছু API (session / local storage etc.) থাকে
*/
// console.log("---------------------------special note---------------------------");

/*
const name = 15;
const student = {
    name: 'Jolil',
    friend: 'borsha',
    job: 'Business',
    makeMovie: function (name) {
        console.log(name);
    }
};

student.makeMovie('Din raat'); // as a fresh not related to dom

// document.getElementById('name'); // related to dom
 */





// *************************** 39-2 Browser alert, confirm, prompt with examples



// liked with DOM



// console.log("---------------------------special note---------------------------");
/*
-alert() dont take any Boolean value as return from users just show a banner
-confirm() take Boolean value as return from users and show a banner
-prompt() take string value as return from users and set it in any variable
 */
// console.log("---------------------------special note---------------------------");

/*
console.log('i am here');

alert('Ma is coming!!'); // to creat an illusion like modal

const maComing = () => {
    alert('Ammu is coming. Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    } else {
        console.log('DGM !!! Door e giya mor!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name)
    }
}
*/





// *************************** 39-3 Location , Url Parts, Query String, Href, Hash, Assign, Reload-3.mp4





// console.log("---------------------------special note---------------------------");


// study source: https://developer.mozilla.org/en-US/docs/Web/API/History_API



/*
// visit : `https: //www.examples.org:8080/foo/bar?q=baz#bang`

here,
-address bar(where website address is writen in the browser)
-`https: //` : protocol
-`www` : subdomain
-`examples.org` : domain name
-`8080` : prot or রাস্তা বা দরজা
-`https: //www.examples.org` : origin
-`https: //www.examples.org:8080/foo/bar` : path name
-`q=baz` : search
-`#bang` : hash

নিচের command গুলার সাহায্যে আমরা চাইলে browser এর console এ লিখে লিখে অনেক কাজ করা যায়,


// visit : `https: //www.examples.org:8080/foo/bar?q=baz#bang`

`
location // to see the link details in console
location.ancestorOrigins

location.assign(`www.programming-hero.com`) // to change location by assigning new location

location.hash // to change the section id of a DOM

location.href // to have the full url in console
location.href = `www.programming-hero.com` // to change location by setting new href

location.origin
location.pathname
location.port
location.reload() // to reload the link
location.replace()

visit: `'https://www.youtube.com/watch?v=BJG3RdnyFYo&t=120s'`
location.search // open any youtube video "location.search" will give u the search key if multiple search key available the they will be attached with "&"

location.toString()
location.valueOf()
location.host
location.hostname
`
*/
// console.log("---------------------------special note---------------------------");




/*
const refreshPage = () => {
    location.reload();
}
const visitPH = () => {
    location.assign('https://web.programming-hero.com/');
} */






// *************************** 39-4 History api to navigate back, forward, go, history length






// যদি একাধিক tab or webpage এ visit করা হয়  নিচের command গুলার সাহায্যে আমরা চাইলে browser এর console এ লিখে লিখে সেই page গুলাকে access করতে পারি

/*
history.back() // to move to the previous page
history.forward() // to move to the previous backed page

history.go() || history.go(0) // to reload current page
history.go(-1) // To move back one page (the equivalent of calling back()):
window.history.go(1) // To move forward a page, just like calling forward():

history.length // to see the total page visited


// console.log("---------------------------special note---------------------------");

যখন আমরা কোন website এ লগিন করি তখন ২ ধরনের কাজ হয়।
-sign in for new user এ click করলে আমাদের নতুন একটা web page এ নিয়ে যায় আর যেখানে থেকে এই sign in page এ আসলাম সেটার একটা record browser রেখে দেয় (mostly used)

-location change করে দেয়

// console.log("---------------------------special note---------------------------");


*/





// *************************** 39-5 (advanced) Cookies, dev tool application tab, get cookie value





/*
source for study : browser API cockies

যখন আমরা কোন website visit করি তখন সেই site আমাদের সম্পর্কে কিছু ডাটা নির্দিষ্ট সময় বা সারাজীবনের জন্য নিজেদের কাছে রেখে দেয় যাকে cockies বলে। নিচের command গুলার সাহায্যে আমরা চাইলে browser এর console এ লিখে লিখে সেই গুলাকে access করতে পারি


// সব গুলা Cookies এর নাম আর তাদের ভেলুকে পাবার জন্য
const allCookies = document.cookie
console.log(allCookies)

const arrayOfCookies = allCookies.split(';')
console.log(arrayOfCookies)

arrayOfCookies.forEach(attachedPairOfCookie => {
    console.log(attachedPairOfCookie)

    const splitedPairOfCookie = attachedPairOfCookie.split('=')
    console.log(splitedPairOfCookie)

    const cookieName = splitedPairOfCookie[0]
    const cookieValue = splitedPairOfCookie[1]
    console.log(`${cookieName} : ${cookieValue}`)


    // inshort way to access cookie value
    // const cookieName = attachedPairOfCookie.split('=')[0]
    // const cookieValue = attachedPairOfCookie.split('=')[1]
    // console.log(`${cookieName} : ${cookieValue}`)
})




// কোন নির্দিষ্ট Cookies এর ভেলু পাবার জন্য ফাংশন হবে,

const getCookie = (cookieName) => {
    const cookie = document.cookie
    const arrayOfCookies = allCookies.split('; ')
    arrayOfCookies.forEach(attachedPairOfCookie => {
        const splitedPairOfCookie = attachedPairOfCookie.split('=')

        const searchedCookieName = splitedPairOfCookie.includes(cookieName);
        if(searchedCookieName){
            const cookieValue = splitedPairOfCookie[1]
            return cookieValue
        }
    })
}
*/






// *************************** 39-6 local storage, session storage, storage info in browser storage






// console.log("---------------------------special note---------------------------");
/*
যখন আমরা কোন website visit করি তখন সেই site আমাদের সম্পর্কে কিছু ডাটা cockies এর মত করে নির্দিষ্ট সময় বা সারাজীবনের জন্য নিজেদের কাছে রেখে দেয়

local storage : permanent কিছু information store করে রাখে দেয়
session storage : temporary কিছু information store করে রাখে দেয়

নিচের command গুলার সাহায্যে আমরা চাইলে browser এর console এ লিখে লিখে সেই গুলাকে access করতে পারি

sessionStorage // to see session storage
sessionStorage.setItem('amarItem','amarItemএরValue') // to set storage item applicalbel for local storage also
sessionStorage.getItem('amarItem') // to see a specific storage item applicalbel for local storage also
sessionStorage.amarItem // to see a specific storage item applicalbel for local storage also


// for any github to edit or add any information in local storage
localStorage // to see local storage
localStorage.getItem('anyStorageNameInLocalStorage') // to see details of any specific storage
let jsonData = localStorage.getItem('anyStorageNameInLocalStorage') // to fix a variable for that specific storage
jsonData // to see the variable of storage
parseJsonData = JSON.parse(jsonData) // to parse the variable of storage
parseJsonData // to see the variable of storage in js object format
parseJsonData.newProp1 = 'newValue1' // to add new property in storage
parseJsonData.newProp2 = 'newValue2' // to add new property in storage
parseJsonData  // to see update of the variable of storage in js object format
const stringifyparseJsonData = JSON.stringify(parseJsonData) // to stringify the variable of storage in JSON format
stringifyparseJsonData  // to see the variable of storage in JSON format
localStorage.setItem('feature-callout:codespaces_code_tab',stringifyparseJsonData) // to set stringifyparseJsonData as value storage item in JSON format
localStorage.getItem('feature-callout:codespaces_code_tab') // to see the value of storage item in JSON format




*/







// *************************** 39-7 Dynamically set and read from local, session storage






/*
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}


const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}



const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    // display in the ui
    displayProduct(name);

    // add to local storage
    addProductToCart(name);

    //clear
    nameField.value = '';
}


const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCart(); */




/*
//MY STRUCTURE
const addItem = () => {


    // step-1 : get the product name from user
    let productNameInputTag = document.getElementById('product-name')
    let productName = productNameInputTag.value
    productNameInputTag.value = ''


    // step-2 : error handleing of product name from user
    if (!isNaN(productName)) {
        alert(`plz enter valid product name`)
        return
    }


    // step-3 : get the product name in the ul
    let ulOfProducts = document.getElementById('products')
    let liOfProduct = document.createElement('li')
    liOfProduct.innerHTML = productName
    ulOfProducts.appendChild(liOfProduct)


    // step-4 : check or creat does the side have any cartStore earlied.
    let cartInLocalStorage = localStorage.getItem("cart")
    let objFormatOFCart;

    cartInLocalStorage ? objFormatOFCart = JSON.parse(cartInLocalStorage) : objFormatOFCart = {}

    // inbroad
    // if (cartInLocalStorage) {
    //     objFormatOFCart = JSON.parse(cartInLocalStorage)
    // } else {
    //     objFormatOFCart = {}
    // }


    // step-5 : add item in the cart of the same name inserted by user
    if (objFormatOFCart[productName]) {
        objFormatOFCart[productName] += 1
    } else {
        objFormatOFCart[productName] = 1
    }

    let stringifiedObjOfCart = JSON.stringify(objFormatOFCart)
    localStorage.setItem('cart', stringifiedObjOfCart)
    console.log(localStorage.getItem("cart"));
}


// step-6 : get the product name in the ul while reload
const getProductInUI = () => {
    let cartInLocalStorage = localStorage.getItem("cart")
    let objFormatOFCart;
    objFormatOFCart = JSON.parse(cartInLocalStorage)

    for (const productName in objFormatOFCart) {

        let ulOfProducts = document.getElementById('products')
        let liOfProduct = document.createElement('li')
        liOfProduct.innerHTML = productName
        ulOfProducts.appendChild(liOfProduct)
    }
}
getProductInUI()


// step-7 : clear ui and local storage during ordering
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
 */



// *************************** 39-9 Module Summary, ContentEditable, chrome restart


// document.body.contentEditable = true;
//console.table
//console.table(data, ['name', 'age'])







// [[[[[[[[[[[[[[[[[[[[[[[[[[Module 41  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]






// ******************************************* 41-8 Simple Introduction to Regular expression





/*
// JavaScript regex matching word in sentences
var text = "I like cats. I really like cats. I also like dogs. Dogs and cats are pets. Approx. half of pets are cats. Approx. half of pets are dogs. Some cats are v. expensive.";

var keyword = "cats";

let ifFoundItsTrue = /\. +([A-Z]([^.]|.(?! +[A-Z]))*?" + keyword + "([^.]|.(?! +[A-Z]))*?\.(?= +[A-Z]))/.test(text)
// // console.log(ifFoundItsTrue); // huge time consuming


// Regular expression to match at least two special characters in any order
let spChar = '6564dg$#%564'
let ifSpCharTrue = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test(spChar)
// console.log(ifSpCharTrue);



// Regex to validate password strength
let passIs = 'ga5sdg2g2$$#'
let ifStrongPass = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(passIs)
// console.log(ifStrongPass); // huge time consuming



// function for Validate email address using JavaScript regular expression
function validateEmail(elementValue){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

const myEmail = 'asifaowadud@gmail.com'
console.log(validateEmail(myEmail));
*/







// [[[[[[[[[[[[[[[[[[[[[[[[[[Module 42  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]





/*
console.log(`// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[42 Practice JavaScript You need to know for React]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]`)








console.log(`// ******************************************* প্রোগ্রামিংয়ের ছয়রত্ন কি তুমি কি জানো:`)







console.log(`===============task one // ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ? (plz check console)===============`);
const myFatherIsConstant = 'He is Afzal, my father'
console.log(myFatherIsConstant); // output: He is Afzal, my father
let mySonIs = 'abdullah'
console.log(mySonIs); // output: abdullah
mySonIs = 'Abdur Rahman'
console.log(mySonIs); // output: Abdur Rahman





console.log(`===============task TWO // ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <,===, !==,>=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে ||||  ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো (plz check console)===============`);
let task1Of2 = 2500;

if (task1Of2 > 100 || task1Of2 < 5000 || task1Of2 >= 1000 || task1Of2 <= 5000) {
    console.log('task 1 of 2 is true');
} else if (typeof (task1Of2) === "number" && q) {
    console.log('task 1 of 2 is true');
} else {
    console.log('task 1 of 2 is false');
}




console.log(`===============task three // ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? (plz check console)===============`);
let task3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(task3.length); // output: 10
console.log(task3[0]); // output: 1
console.log(task3.indexOf(5)); // output: 4
task3.push(11);
console.log(task3); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
task3.pop();
console.log(task3); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




console.log(`===============task4 // ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। (plz check console) ===============`);
console.log(`===============task4[for loop] ===============`);
let task4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < task4.length; i++) {
    console.log(task4[i]);
}

console.log(`===============task4[while loop]===============`);
let i = 0;
while (i < task4.length) {
    console.log(task4[i]);
    i++;
}




console.log(`===============task five // ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। (plz check console)===============`);

function myFunction(a, b) {
    return a + b;
}
console.log(myFunction(2, 3)); // output: 5




console.log(`===============task six // ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।(plz check console)===============`);
let myObject = {
    name: 'Abdur Rahman',
    age: 24,
    nicknames: ['Abdur Rahman', 'Abdullah', 'Abdur Rahim'],
    sister: {
        name: 'Sakina',
        age: 24,
        nicknames: ['Sakina', 'Sakina', 'Sakina']
    },
}

console.log(myObject);
console.log(myObject.name); // output: Abdur Rahman
console.log(myObject.sister.name); // output: Sakina


console.log(`===============task six // from module ===============`);
// object এর ভিতরের property এর value কে ধরার ৩টা সূত্র আছে
const myVariable = 'age';

console.log(myObject.age); // direct by property
console.log(myObject['age']); // access via property name string
console.log(myObject[myVariable]); // access via property name in a variable








console.log(`// ******************************************* ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে`)







console.log(`===============task one // ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।(plz check console)===============`);
let myES6Object = {
    name: 'Abdur Rahman',
    age: 24,
    nicknames: ['Abdur Rahman', 'Abdullah', 'Abdur Rahim'],
    sister: {
        name: 'Sakina',
        age: 24,
        nicknames: ['Sakina1', 'Sakina2', 'Sakina3']
    },
}
let myES6Task1 = `hi i am ${myES6Object.name}. i have some others name too ${myES6Object.nicknames} but i like the name of my sister ${(myES6Object.sister.nicknames[1])}`;
console.log(myES6Task1);




console.log(`===============task TWO // ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)(plz check console)===============`);
const ES6task2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyOfES6task2Adding50 = [...ES6task2, 50]
console.log(copyOfES6task2Adding50);
let filteredArray = copyOfES6task2Adding50.filter(elem => elem > 5)
console.log(filteredArray);

// next example
const numbers = [89, 35, 98, 12];
// spread operator
const newNumbers = [...numbers]; // array যেহেতু একটা non-primitive data তাই এভাবে ... নাদিয়ে করলে ভবিষয়তে যদি কোন কারনে numbers এর ভিতরে কোন পরিবর্তন আনা হয় তাহলে তা newNumbers কেউ পরিবর্তিত করে ফেলে।


// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers); // pushed 99 3 times
console.log(newNumbers); // ducplicate of initial numbers by spread opt
console.log(currentNumbers); // copy of newNumbers but 55 added at the last





console.log(`===============task three // ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে। ||| ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। ||| ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। ||| ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।(plz check console)===============`);
let zeroPara = () => 9
console.log(zeroPara());

let onePara = para1 => para1 * 12
console.log(onePara(2));

let twoPara = (para1, para2) => (para1 + para2) / 4
console.log(twoPara(2, 6));


// common function
const add5 = num => num + 5;
const multiPly2 = (num1, num2) => num1 * num2;


let multiLine = (param1, param2) => {
    let param1Added5 = add5(param1);
    let param2Added5 = add5(param2);
    return multiPly2(param1Added5, param2Added5);
}
console.log(multiLine(2, 6));




console.log(`===============task four ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
(plz check console)===============`);
console.log(`===============task four array destructuring===============`);
// 1. array destructuring
const numbers2 = [42, 65];

var [x, y] = [42, 65]
[x, y] = numbers2;

// array destructuring by function
function boxifyArrayMaker(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxifyArrayMaker(90, 34)); // array made
const [first, second] = boxifyArrayMaker(90, 34);

// Destructuring ARRAY INSIDE OBJ
const student = { name: 'Salib Khan', age: 32, movies: ['king khan', 'Dhakar Mastan'] }
const [firstMovie, secondMovie] = student.movies;





console.log(`===============task four object destructuring===============`);
// object destructuring
var { name, age } = { name: 'alu', age: 14 };
var { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code', designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;






console.log(`===============task five // ৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে। (plz check console)===============`);
let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = { cat, dog, bird }
console.log(someObject);






console.log(`===============task six and seven  // ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে(plz check console) ||| ৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও(plz check console)===============`);
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer.dog?.name;
console.log(dogName);         // expected output: undefined
console.log(adventurer.someNonExistentMethod?.()); // expected output: undefined







console.log(`// ******************************************* ব্রাউজার API সম্পর্কে চারটা জিনিস`)






console.log(`===============task one // ১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে `);
var LocalStorage = `keeps data for long time as brosing record, size is arround 100mb, can get info from the storage after many many days`
var SessionStorage = `vice versa`
console.log(`LocalStorage : ${LocalStorage}`);
console.log(`SessionStorage : ${SessionStorage}`);




console.log(`===============task two and three ২. location API কিভাবে ইউজ করবে ব্রাউজারে |||৩. history API কিভাবে ইউজ করে`);
var locationApiLink = `https://developer.mozilla.org/en-US/docs/Web/API/Location`
var historyApiLink = `https://developer.mozilla.org/en-US/docs/Web/API/History_API`
console.log(`locationApiLink : ${locationApiLink}`);
console.log(`historyApiLink : ${historyApiLink}`);





console.log(`===============task ৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। `);

console.log(`plz check "42 Practice JavaScript You need to know for React"`);






console.log(`// ******************************************* আরো পাঁচটা জিনিস জানতে হবে।`)






console.log(`===============task one // ১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। ||| ১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো।`);
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



console.log(`==========================vaey very special with obj "copy products array and then add newProduct" and " &"`);
// add or remove from an array
const products100 = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };


// copy products array and then add newProduct
const newProducts = [...products100, newProduct];
console.log(newProducts);


// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products100.filter(p => p.name !== 'phone');
console.log(remaining);




console.log(`===============task two,three and five // ২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে ||| ৩. লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা ||| ৫. ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি।(plz check console)`);

// ternary
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();


// logical and (&&) আর logical or (।।)
let Active = false;
// use && if the left side is true then right side will be executed
Active && showUser();
// use || if the left side is false then right side will be executed
Active || hideUser();


// ++, --, +, +'', +=, -= এইগুলা কি জিনিস
// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);





console.log(`===============task four,six // ৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে  ||| ৬. Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো(plz check console)`);

// JSON এর stringify এবং parse
const student100 = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student100);
console.log(student100);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// Object.keys, Object.values
// keys, values
const keys = Object.keys(student100);
const values = Object.values(student100);
console.log("keys",keys);
console.log("values",values);
*/






// console.log(`// ******************************************* summary with beautiful ending`)






/* 
Fundamentals
1.1 variable (let, const) three types variable
1.2 condition (<. >, ===, !==. <=, >=) && ||, if-else if-else
1.3 array: declare, length, index, push, pop, indexOf, includes
1.4 for loop, while
1.5 function return parameter
1.6 Object property, including array, object

------------------
ES6
1. template string ${}
2. spread (...) 
2.1 copy an array then add a new element to an array 
2.1 use filter to remove an element from an array
3. Arrow function
3.1 no parameter ()
3.2 single parameter 
3.3 multiple parameters ()
3.4 multi line 
4 destructuring : object destructuring array destructuring 
5. object declaration shorthand
6. function parameter default value
7. Optional chaining (?.)
--------------------------
Browser API
1. local storage session stoage
2. location API
3. History API
4. fetch
--------------------
Others
1. array: map, forEach, filter, find
2. ternary operator 
3. logical and logical or && ||
4. JOSN (stringify, parse)
5. +, 

*/


/*
var  x = 50;
var  y = 100;
var obj = {
    x: x,
    y: y
};

// shortchut
var  obj1 = { x, y }
console.log(obj1);

var name = 'Solimullah';
var area = 'Dhaka';

var nobab = {
    name: name,
    area: area
}
console.log(nobab);

var nobab2 = { name, area };
console.log(nobab2);
*/

