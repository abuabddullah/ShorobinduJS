// ************************** 24-4 Get different HTML elements in JS by using tag name



/*
// DOM = Document Object Model; আমরা একটা object variable কে যেমন বিভিন্ন method apply করে করে তার property গুলো তাদের value গুলোকে access করতে পারি / তাদেরকে পরিবর্তন করতে পারি ইত্যাদি। ঠিক তেমনি console এ শুধুমাত্র document.differerntFunctions() লিখে পুরা HTML কেই ধরে নাড়াচাড়া দিয়ে যা খুশি করতে পারি। যেমনঃ


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

// [[[[[innerHTML helps to get child Element with tag name   |||   but innerText helps to get text of child Element without tag name]]]]]

console.log("---------------------------separator---------------------------");

let allP = document.getElementsByTagName("p"); // document ভিতরের সবগুলো p tag কে ধরে একটা variable এ রাখলাম like an array but not।

for (const p of allP) {
    console.log(p.innerText);
}
*/



// ************************** 24-5 || 24-6 Capture and change Element css by using getElementById || getElementsByClassName || querySelector || querySelectorAll


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

//যদি same class/tag এর একাধিক element এর মধ্যে কেবল মাত্র প্রথমটাকেই stylilng করতে চাই use querySelector   |||   যদি সব গুলোকে styling করতে চাই use querySelectorAll   |||   যদি specific কোন একটা কে styling করতে চাই use querySelectorAll[indexNo]

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



//HTML এর প্রতিটা জিনিসই একেক্টা Node অর্থাৎ অনেকটা members in document-family। এদের একেক রকম নাম আছে যেমন comment গুলো হচ্ছে comment-node ||| text গুলো text-node ||| attribute গুলো attribute-node ||| document গুলো document-node ||| doctype গুলো doctype-node etc | যার ফলে JS দিইয়ে select করলে NodeList, htmlcollection ইত্যাদি show করে এবং array এর মতন দেখায় কিন্তু এগুলো array না বরং array type object তাই এদের উপরে array এর অনেক method apply করা যায় যেমনঃ forOf(),length,indexOf() কিন্তু সব methodই না যেমন push() apply হবে না।


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