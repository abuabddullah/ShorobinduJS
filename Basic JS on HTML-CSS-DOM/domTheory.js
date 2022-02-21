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
 */



// *************************** arrow function declareing methods starts



/* 
// system - 8 [[  mostly used system to apply js  ]]: external javascript file এ কোন variable এর ভিতরে একটা full function কে declare করা


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


// example of object inside object 

/* const company = {
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
}; */


// taking employee and framework property of web object and store in a variable
/* const {
    employee,
    framework
} = company.web;
console.log(employee, framework);

const {
    secondTech,
    thirdTech
} = company.web.technology;
console.log(secondTech, thirdTech); */





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





// ************************************ 32-4 Array map to do one line loop magic



/* 
// console.log("---------------------------special note---------------------------");

// map use করা হয় শুধুমাত্র array এর উপরে , ধরুন কোন array এর সবগুলা উপাদান কে কোন নির্দিষ্ট কাজ করবেন হতে পারে সবগুলাকে ২গুন করবেন, সবগুলার length জানবেন ইত্যাদে অতঃপর সেগুলো নিয়ে নতুন একটা array তৈরি করবেন ।


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



// ************************************** foreach foreach foreach foreach 

// printing all element of an array using foreach
let allProducts2 = products.forEach(p => console.log(p));


// console.log("---------------------------special note---------------------------");

// forEach is used insted of map when no need of return 
// forEach হল map এর আপন ছোট ভাই তাই এটা return করতে পারেনা বাকি সব পারে

// console.log("---------------------------special note---------------------------");
 */





// ********************************* 32-6 (advanced) Implement filter, find on an array of objects




// console.log("---------------------------special note---------------------------");



/* const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);

বাংলা তর্জমাঃ console তুমি bigNumbers রে পাইতে চাও? তাইলে এক কাজ কর numbers5 এর তল্লাশি চালাও তারে filter কইরা দেখ তার element রে ধর তাদের কে ধইরা ধইরা চেক কর শর্ত মানলে নিজের array এর  মধ্যে ঢুকায়া নাও নইলে ignore  কর অর্থাৎ output হবে array*/

// console.log("---------------------------special note---------------------------");

// filter on array of objects
/* const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = elem.filter(elem => elem.price > 100);
// console.log(expensive);
const blacks = elem.filter(elem => elem.color == 'pink');
// console.log(blacks);

const whiteItem = elem.find(elem => elem.color == 'black');
console.log(whiteItem); */





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