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
// innerHTML helps to get child Element with tag name   |||   but innerText helps to get text of child Element without tag name
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