console.log(`   starts----------------------- Special Notes on "Rules about React Notes"  `);

/* 

Just note or special speech গুলা এখানে লিখে রাখব in details.
reading style হবে , কোন module revision শুরু করার আগে প্রথমে এই ফাইল খুলে ধারনা নিয়ে নিবে আর code parctice করতে চাইলে এই ফাইলে মেনশন করা ফোল্ডার আর ফাইল খুলে সেখানে গিয়ে রিভিশন দিতে হবে/

*/

console.log(`   finished----------------------- Special Notes on "Rules about React Notes"  `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 44 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 44-1 Module overview and modern application core parts    `);





// thins to remember (watch JavaScript for React video)
/* 
-Arrow function
-Spread operator
-Template String
-Array methods : Map, forEach, filter,find
-Destruturing of object
-Key, value pairs of object
-Optional Chaining
-Ternary operator
-JSON, Fetch, Async-await
-Short cut and Short cut or (i.e Logical and || Logical or)
-Truthy values || Falsy values
-Default parameters
-Local Storage and Session Storage


// need to get ideas about the core parts of a modern application
-Component
-Template
-State
-Routing
 */




console.log(`   // ************************** 44-2 Web component, 4 types of component, identify component  `);




// There are four types of component
/* 
(1) "similar in look but differernt in data" type component [in short 4 me "SLDD"].
 eg: blog-posts in an article
 
(2) "container" type component that holds other "similar in look but differernt in data" type components.
 eg: article that holding blog-posts

(3) not "SLDD" nor "container" type component "No repeating pattern but breakdown for working purpose" [in short 4 me "No Rpeat Component"].
 eg: side bar of a website

 (4) "Stand Alone" type component that is unique for rest components of a website.
 eg: header,footer,sign-in parts of a website
 */




console.log(`   // ************************** 44-3 Template, dynamically create HTML elements based on data  `);



/* 
const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
    console.log(countries[0]);

    //using map function on countries array [as we used forEach before]
    const countriesList = countries.map(country => getHTML4Country(country)) // getHTML4Country is a function that return HTML for a country যদিও আগে আমরা সরাসরি এখানেই HTML এর কাজ গুলা করতাম

    // console.log(countriesList.join(' '));

    // show in the html
    document.getElementById('allCountriesHolder').innerHTML = countriesList.join(' ') // যেহেতু map সর্বদা একটা array return করে আর website এ আমাদের সেগুলোকে আলাদা আলাদা বিভিন্ন div এ দেখাতে হবে তাই join করা হয়েছে 
    
}

const getHTML4Country = ({ name, capital, population, flags }) => {

    return `
    <div class='single-country'>
        <h2 style = " text-align : center;">${name.common}</h2>
        <img src = "${flags.png}" alt = "flag" style = "max-width : 100% ;">
        <p>capital : ${capital}</p>
        <p>population : ${population}</p>
    </div>
    `
}
 */





console.log(`   // ************************** 44-4 Single Page Application (SPA), Performance benefit  `);





console.log(`   starts----------------------- Special Notes on "44-4 Single Page Application (SPA)" || Module : 44-4  `);



/* 
Single Page Application: একটা website এ কিছু জিনিস থাকে যা প্রতিটা পেইজের জন্যে সেইম থাকে । যেমন ঃ Headers, footer, sidebar etc.. 

Multipage app এর ক্ষেত্রে যখন এক পেইজ থেক আরেক পেইজ এ যাওয়া হয় তখন এই common elements গুলা সহই আবার লোড হয় যা কাম্য নয় ।

Single Page Application (SPA) এর ক্ষেত্রে সম্পুর্ন সাইটা এক পেইজে থাকে যার ফলে প্রথম বার একটু সময় লাগলেও পরবর্তিতে এক পেইজ থেক আরেক পেইজ এ যাওয়া হয় তখন এই common elements গুলা আর লোড হয় না । এক্ষেত্রে first loading and SEO একটা problem 

তবে শুরুতে লোড হবার সময়টাও এখন lazy loading এর মাধ্যমে সলভ করা যায় । lazy loading হচ্ছে প্রথমে দ্রুত একটা নির্দিষ্ট লোড হয়ে যাবে তার পর গোপনে গোপনে user এর browse করার সময় বাকি অংশ লোড হইয়ে থাকবে

আর SEO problem টাও এখন আর problem না কারণ এরও কিছু সলিউশন এসে গেছে যা আমরা পরবর্তিতা জানব।



Single Page Application Pros:
Single-page applications are fast as most of the resources, including HTML, CSS, and Scripts, are loaded once, and only data is transmitted back and forth. Here are some of the business benefits of building single-page applications:

1. Quick Loading Time

2. Seamless User Experience

3. Ease in Building Feature-rich Apps

4. Uses Less Bandwidth



Single Page Application Cons:
Single page application architecture is best for developing high-performing SAAS platforms and social networks. However, this approach has some disadvantages that make it unsuitable for developing highly secure, and SEO optimized websites.

1. Doesn’t Perform Well With SEO

2. Uses a Lot of Browser Resources

3. Security Issues




Single Page Application Pros and Cons || https://www.netsolutions.com/insights/single-page-application/
 */


console.log(`   finished----------------------- Special Notes on "44-4 Single Page Application (SPA)" || Module : 44-4  `);





console.log(`   // ************************** 44-5 Routing, Route parameter, Routing in React  `);




console.log(`   starts----------------------- Special Notes on "Routing, Route parameter, Routing in React" || Module : 44-5  `);
/* 
Route মানে হলে website এর main link এর পরে যা থাকে যেমন ঃ path ?(/)  hash (#), search (?) ইত্যাদি

কোন website এর hash বা loction কে react js এর location API অথবা history API দিয়ে change করা যায় । তবে এই APIs গুলার keyword গুলো শুধুমাত্র console এই use করা যায়  যা আমরা আগে থেকেই জানি।

-location
-location.hash
-location.hash = "#HASHname"
 */

console.log(`   finished----------------------- Special Notes on "Routing, Route parameter, Routing in React" || Module : 44-5  `);





console.log(`   // ************************** 44-6 Explore destructuring and send data to html elements using props  `);





console.log(`   finished----------------------- Special Notes on "Explore destructuring and props" || Module : 44-6  `);
/* 
// function Destructuring এর 2 টা way আছে, way number - 1 [destructuring inside the function] ; way number - 2 [destructuring in the parameters]

 const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
    console.log(countries[0]);
    
    const countriesList = countries.map(country => getHTML4Country(country))

    document.getElementById('allCountriesHolder').innerHTML = countriesList.join(' ')
}

// way number - 1 [destructuring inside the function] 

const getHTML4Country = (country) => {
{ name, capital, population, flags } = country
    return `
    <div class='single-country'>
        <h2 style = " text-align : center;">${name.common}</h2>
        <img src = "${flags.png}" alt = "flag" style = "max-width : 100% ;">
        <p>capital : ${capital}</p>
        <p>population : ${population}</p>
    </div>
    `
}

// way number - 2 [destructuring in the parameters]
const getHTML4Country = ({ name, capital, population, flags }) => {

    return `
    <div class='single-country'>
        <h2 style = " text-align : center;">${name.common}</h2>
        <img src = "${flags.png}" alt = "flag" style = "max-width : 100% ;">
        <p>capital : ${capital}</p>
        <p>population : ${population}</p>
    </div>
    `
}


// props: HTML এ যেভাবে আমরা কোন tag এর জন্য "attribute" সেট করতে পারি সরাসরি, basic js এ যেমনি "setAttribute" use করে attribute সেট করতে পারি, ঠিক তেমনি react js এ "props" use করে attribute সেট করতে পারি অর্থাৎ HTML এর "attribute" কেই react js এ "props" বলে
 */

console.log(`   finished----------------------- Special Notes on "Explore destructuring and props" || Module : 44-6  `);





console.log(`   // ************************** 44-7 Website state, state management, purpose of state  `);




console.log(`   starts----------------------- Special Notes on "state, state management, purpose of state" || Module : 44-7  `);
/* 
website এর state বলতে বোঝায় "যখন user website এ browse করার সময় বিভিন্ন জিনিসে interact করে যেমন ঃ button এ ক্লিক করে, ভিডিও দেখে, লাইক কমেন্ট করে, কার্টে কিছু রাখঅ্যা, mail read করে ইত্যাদি  vice-versa.

এই প্রতিটা ক্ষেত্রেই state change হয় যেমনঃ
button এ ক্লিক করে কিছু একটা হয়
ভিডিও দেখে তা watched history তে যায় বা কিছু করা হয়
লাইক দিলে সংখা বারে ইত্যাদি

একজন developer চাইলে এই state গুলোকে দিয়ে কোন কাজ করতে পারে
আবার একজন user চাইলে কোন state চেঞ্জ নাও করতে পারে

this is all about to know about state management in react js form this small video
 */

console.log(`   finished----------------------- Special Notes on "state, state management, purpose of state" || Module : 44-5  `);





console.log(`   // ************************** 44-8 Install React App and explore folder structure and edit  `);



/* 
আজকে থেকে নতুন কোনো react এর প্রজেক্ট ইন্সটল করলে react 18 ইন্সটল হচ্ছে । আর react 18 এর সাথে reachart ইন্সটল হচ্ছে না এরর দিচ্ছে। আপনি react 17 ইন্সটল দিয়ে তারপর reachart install দিন। react17 react18 react-rechart reactrechart
17 install করার জন্যে এই কমান্ড দিন।
new react comman for installing react17 
>npx create-react-app@17.0.2 my-app

to use otherss:
>npm install react@17.0.0 react-dom@17.0.0


// install and assure the wheel is circulating
- press Ctrl+l and type "cmd" then press enter
-type cd folder name then press enter
-type cd . then press enter
-type npm start then press enter

we will mainly work on app.js file

// to close react app
- press Ctrl+C and type "y" then press enter
 */





console.log(`   // ************************** 44-9 Module Summary and concept recap  `);



/* 
- components
- fetch with map
- 2 way of destructuring object
- props
- state
-Single page app
-route
-creat react app
 */





console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 45 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 45-1: Module Introduction, Create React App, 6 core concepts    `);




console.log(`   starts----------------------- Special Notes on "first react gems : "JSX""  `);

/* 

why npx creat-react-app ?
-আমরা চাইলে manually ও এর ভিতরের ফাইল গুলা আলাদাভাবে istall করতে পারি কিন্তু তা time consuming আর এই command দিয়ে করাটা simple and easy.

why react not angular or view js ?
-react is a easy to learn and use library. they are not
-uncompareable job opportunity than those two
-huge support in the community

*/

console.log(`   finished----------------------- Special Notes on "first react gems : "JSX""  `);




console.log(`       // ************************** 45-2 JSX, Dynamic content, Dynamic Style in React    `);




console.log(`   starts----------------------- Special Notes on "first react gems : 'JSX'"  `);

/* 

What is JSX?
-JSX stands for "JavaScript XML". JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. but its not% 100 html rather its a "html like js"

tasks:
(1) VS code এ JSX এর জন্য emmet enable করা হয়েছে
(2) JSX ফাইলের ভিতরের className = "App" tag এর ভিতরে code লিখতে হয়
(3) jsx ফাইলে coding এর সময় আমরা class এর বদলে className use করব
(4) we can add html tag in jsx as same way as html
(4) jsx ফাইলে html এর মতই coding করা যায়
(5) jsx ফাইলে coding এর সময়  variable call করার সময় template literal এর মতই করা যায় তবে এক্ষেত্রে "$" sign দেয়া যায় না শুধু curly braces "{}" এঁর ভিতরে variable লিখতে হয়
(6) we can add css style in jsx in 3 ways
        -[6.a] inline stylewith className : just css এর মত className টাকে ধরে App.css ফাইলে নিয়ে normal css এর মত styling করা যায়
        -[6.b] inline style with the "object variable declared for css" : এই ক্ষেত্রে tag এর মাঝে একটা "style" attribute নিতে হবে তার পর "=" দিয়ে curly braces "{variable}" এর ভিতরে সেই variable টার নাম বসিয়ে দিতে হবে 
        -[6.c] direct inline curly braces "{}" : দুই নাম্বার টার মতই just variable কে না বসিয়ে double curly braces "{{keyes : "values"}}" এর ভিতরে সেই variable টার keyes and values গুলো বসিয়ে দিতে হবে

*/

console.log(`   finished----------------------- Special Notes on "first react gems : 'JSX'"  `);





console.log(`       // ************************** 45-3 Create Component, return HTML from a component    `);




console.log(`   starts----------------------- Special Notes on "second react gems : 'component'"  `);

/* 



tasks:
(1) clear all tags inside className = "App" tag
(2) className = "App" tag এঁর ভিতর আমরা চাইলে একটা component কে তৈরি করে বসাতে পারি আবার direct jsx দিয়ে html এর মতই লিখতে পারি
(3) synatx of writing a component,
        -[3.a] প্রতিটা component এক একটা function হিসেবে লিখতে হয়
        -[3.b] fuction name capital letter দিয়ে শুরু হবে যাতে normal JXML tags আর components গুলা চোখে দেখে আলাদা করা যায় 
        -[3.c] component in detail এ html এঁর মত লিখতে হয়
        -[3.d] fuction return করার সময় অবশ্যই wrap করতে হয় ( <> </> || <div> </div> )
        -[3.e] fuction কে কল করতে হয় className = "App" tag এঁর ভিতর থেকে 
        -[3.f] fuction কে কল করতে হয় html এঁর কোন tag লিখার মত করে

*/

console.log(`   finished----------------------- Special Notes on "second react gems : 'component'"  `);





console.log(`       // ************************** 45-4 Pass dynamic data to components, props in react    `);




console.log(`   starts----------------------- Special Notes on "third react gems : 'props'"  `);

/* 

-props কি? ঃ 
    props হচ্ছে এমন একটা parameter যা যেকোন component এঁর জন্য use করা হয় তাছাড়া className = "App" tag ভিতরের component এ manually যে সব custom attribute তৈরি করা হয় তাদের combinedly একটা object হিসেবে এই props এঁর argument হিসেবে আসে।
    props is a parameter that is passed to a component and where all the custom attributes of that component are stored in a object as it's argument.

tasks:
(1) className = "App" tag ভিতরের component এ manually যেকোন এবং যত খুশি custom attribute তৈরি করা যায়
(২) props থেকে data কে dynamically component এ দেখাতে হলে props.customAttribute দিয়ে দিয়ে অনেকটা object মত করে দেখাতে হয়

*/

console.log(`   finished----------------------- Special Notes on "third react gems : 'props'"  `);





console.log(`       // ************************** 45-5 (advanced) Create multiple components from an array of objects    `);




console.log(`   starts----------------------- Special Notes on "fourth react gems : 'array থেকে dyanmically data props attr এঁর মাঝে set করা'"  `);

/* 


tasks:
(1) props এঁর ভিতরে manually কোন array থেকে data নিয়ে আসা তবে এক্ষেত্রে array এঁর element অনেক বেশি হলে manually করা অসম্ভব তাই নিচের map system use করা হয়
(2) className = "App" tag ভিতরের curly braces "{}" এঁর মাঝে কোন variable না নিয়ে direct map method use করে  props এঁর ভিতরে dynamically attribute নেয়া হয় কিন্তু এক্ষেতে array টা যেই attribute এঁর শুধুমাত্র সেই টাকেই dynamic করা যাবে একাধিক নিলে বাকি গুলা manually বসাতে হবে । যদি সব গুলা attribute কেই dynamically props এঁর জন্য বসাতে চাই তাহলে নিচের মত array of objects নিতে হবে map করার জন্য 
(3) array of objects দিয়েও dyanmically  props attr বসানো যায়


******[[[[[

            --- component এঁর ভিতরে যত গুলা props এঁর key থাকবে তা সেই array এঁর ভিতরের object এঁর keys এঁর সঙ্খ্রার সমান বাঁ কম হবে---

]]]]]******


*/

console.log(`   finished----------------------- Special Notes on "fourth react gems : 'array থেকে dyanmically data props attr এঁর মাঝে set করা'"  `);






console.log(`       // ************************** 45-6 Concept Recap, JSX, components, props, display array of objects   `);






console.log(`   starts----------------------- Special Notes on "45-6 Concept Recap"  `);




/* 

tasks:
(1) new app creat করা
(2) className = "App" tag ভিতরের সব clear করা
(3) new component creat করা without props
(4) new component কে className এঁর সাহায্যে styling করা
(5) className = "App" tag সেই component কে call করা
(6)  component এ props add করা
(7)  className = "App" tag ভিতরের call করা component কে manually custom attribute দেয়া যেমন ঃ product, price
(8)  className = "App" tag ভিতরের call করা component কে dynamically custom attribute দেয়ার জন্য আগের [className = "App" tag ভিতরের করা call ] গুলোকে comment out করে দিয়ে একটা array of object creat করা তারপর map method use করে কাজ শেষ করা


******[[[[[

            --- component এঁর ভিতরে যত গুলা props এঁর key থাকবে তা সেই array এঁর ভিতরের object এঁর keys এঁর সঙ্খ্রার সমান বাঁ কম হবে---

]]]]]******




*/

console.log(`   finished----------------------- Special Notes on "45-6 Concept Recap"  `);






console.log(`       // ************************** 45-7 (advanced) State, component state hook and set state method   `);






console.log(`   starts----------------------- Special Notes on " State, component state hook and set state method"  `);






/* 



-useState(N) কি? ঃ 
    useState হচ্ছে এমন একটা hidden array যার মধ্যে মাত্র ২ টা elemnts আছে যাদের মাঝে first index এঁর value হচ্ছে ব্র্যাকেটের ভিতরের সংখ্যা টা / [] / {} অর্থাৎ (N) আর second index এঁর value হচ্ছে একটা fuction. eg: যদি কোন variabl এর value হয় useState(50) তাহলে তা console করলে দেখা যাবে,

        const useOfState = useState(50);
        console.log(useOfState); // output : [50, function(value){}]

tasks:
(1) একটা component বানাতে হবে তজবি গনার জন্য যেখানে ২ টা বাটন থাকবে
(2) component এর ভিতরেই useState কে arry destructuring করে নিতে হবে সেখান থেকে আমরা ২ টা জিনিস পাব তজবির এর initial count value আর একটা function পাব যা দিয়ে এর গননা control করা যাবে
(3) component বানাতে হবে তজবি গনার জন্য যেখানে ২ টা বাটন থাকবে
(4) component এর ভিতরের button গুলোতে click handler function add করতে হবে । মনে রাখতে হবে,
        - react এ click handler function এর বানান আলাদা হতে পারে,
        - একে curly brace {} এর ভিতরে রাখতে হবে
        - আর এই ফাংশন কে কল করার দরকার নেই।
(5)
(6)
(7)




******[[[[[

            ---  আর অবশ্যই খেয়াল রাখতে হবে useState call করার সময় যাতে import { useState } from 'react'; করা হয় নইলে এরর দেখাবে  ---

]]]]]******





*/

console.log(`   finished----------------------- Special Notes on " State, component state hook and set state method"  `);






console.log(`       // ************************** 45-8 (advanced) Load dynamic data, API call useEffect integrate state   `);







console.log(`   starts----------------------- Special Notes on " Load dynamic data, API call useEffect integrate state  `);






/* 
৩টা function একসাথে কল হচ্ছে,
    (১) className = "App" এর function : এখনেই মূলত main component কে call করা হয়েছে
    (২) main component : এখানে কয়েকটি কাজ হয়েছে
            (i) useState declaration করা হয়েছে
            (ii) useState কে import করা হয়েছে
            (iii) useEffect declaration করা হয়েছে
            (iv) useEffect এর ভিতরে dependency set করার জন্য খালি [] দেয়া হয়েছে
            (v)useEffect ভিতরে একটা function দেয়া হয়েছে যেখানে fetch , then, showdata করা হয়েছে
    (৩) ANOTHER component  : এটার মাধ্যমে UI এ দেখানোর জন্য একটা কাঠামো তৈরি করা হয়েছে যাকে props দেয়া হয়েছে আর call করা হয়েছে main component এর ভিতরের map থেকে

-useEffect(() => {},[]) কি? ঃ 
    useEffect হচ্ছে react এর মাঝে fetch করার জন্য একটা system . এটা কাজ করাতে গেলে useState লাগবেই । এভাবে fetch করা হয়ে গেলে display করার জন্য আমরা আমরা useState এর function কে use করব
    

tasks: api fetchi by react
(1) একটা component বানাতে হবে
(2) component কে className = "App" ভিতরে call করা
(3) component এর ভিতরেই useState কে arry destructuring করে নিতে হবে সেখান থেকে আমরা ২ টা জিনিস পাব  খালি [] এর জন্য একটা VARIABLE আর একটা function পাব যা দিয়ে displayData করা যাবে
(4) useEffect(() => {},[]) এর ভিতরে fetch দিয়ে দিয়ে data টাকে কে useState থেকে পাওয়া displayData function এর parameter হিসেবে নিতে হবে । যার ফলে useState থেকে যে VARIABLE পাইছিলাম তা automatic এই data এর value গুলোকে পেয়ে যাবে
(5) এবার another component বানাবো with props
(6) এবার component এর return এর ভিতরে VARIABLE কে  map করে তার ভিতরে another component কে custom attribute সহ call করতে hobe


******[[[[[

            ---  আর অবশ্যই খেয়াল রাখতে হবে useEffect call করার সময় useState লাগবেই আর পাশাপাশি যাতে import { useEffect, useState } from 'react'; করা হয় নইলে এরর দেখাবে  ---

]]]]]******



*/

console.log(`   finished----------------------- Special Notes on " Load dynamic data, API call useEffect integrate state"  `);







console.log(`       // ************************** 45-9 Module Summary React Core Concepts recap   `);







console.log(`   starts----------------------- Special Notes on " Module Summary & recap"  `);

/* 
-JSX
-COMPONENT
-PROPS
-STATE
-EVENT HANDLER
-LOAD DATA FROM API 
-HOC RELOAD : document save দেবার পর আগের সব পরিবর্তিত হয়ে udate হওয়া

tasks:
(i)creat counter
        (a) creat a component
        (b) call the component
        (c) useState declare
        (d) eventHandler call : use camel case, no first bracket
        (e) eventHandler fuction declare

        
(ii)LOAD comments FROM API 
        (১) className = "App" এর function : এখনেই মূলত main component কে call করা হয়েছে
        (২) main component : এখানে কয়েকটি কাজ হয়েছে
                (i) useState declaration করা হয়েছে
                (ii) useState কে import করা হয়েছে
                (iii) useEffect declaration করা হয়েছে
                (iv) useEffect এর ভিতরে dependency set করার জন্য খালি [] দেয়া হয়েছে
                (v)useEffect ভিতরে একটা function দেয়া হয়েছে যেখানে fetch , then, showdata করা হয়েছে
        (৩) ANOTHER component  : এটার মাধ্যমে UI এ দেখানোর জন্য একটা কাঠামো তৈরি করা হয়েছে যাকে props দেয়া হয়েছে আর call করা হয়েছে main component এর ভিতরের map থেকে
*/

console.log(`   finished----------------------- Special Notes on " Module Summary & recap"  `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 46 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 46-1 Module Introduction, load countries using useEffect ||| 46-2 Display countries in a simple way, Folder Structure     `);







console.log(`   starts----------------------- Special Notes on " Module 45 recap"  `);

/*
last module 45 recap

revise:
-data load from api
-Event handler
-State
-Props  
    -manully set props
    -call from variable
    -call from internal array
    -call from api
-Component
-JSX

tasks:
(i)load rest countries data from api as per module 45 rule
        1. Declaring useState() to save loaded data
        2. Writing useEffect() to load data from API
        3. Writing fetch() inside useEffect() & setting loaded data
        4. useEffect call to set data to state
        5. useEffect call to set data to state
        6. useEffect call to set data to state
*/

console.log(`   finished----------------------- Special Notes on " Module 45 recap"  `);






console.log(`   starts----------------------- Special Notes on "Module 46-2 || creating components in another folder "  `);

/*
এতক্ষন আমরা যতগুলো components বানিয়েছি তা সবি main App.js ফাইলের ভিতরেই ছিল কিন্তু কিন্তু কিন্তু এটা standra practice নয় বরং standart practice হল এই App.js ফাইল যেখানে আছে সেখানে একটা "components" নামের folder creat করতে হবে আর তার ভিতরে যে যে components বানাবো তাদের নামে আরেকটা করে folder creat করতে হবে পাশাপাশি সেই folder এর ভিতরে same components name এর একটা js & css file creat করে করে কাজ করতে হবে।

অর্থাৎ compontents গুলা একটা নির্দিষ্ট folder এর সুসজ্জিত ভাবে বানাতে হবে আর তারপর সেইগুলোকে main App.js file এর ভিতরে প্রয়োজন অনুযায়ী import করে করে call করতে হবে.........
*/

console.log(`   finished----------------------- Special Notes on "Module 46-2 || creating components in another folder "  `);





console.log(`       // ************************** 46-3 React Extension Pack and component with css file     `);







console.log(`   starts----------------------- Special Notes on "Extension Pack and component folder"  `);

/*

tasks:
-install "React Extension Pack" by Rajbir Jawanda
-create folder for components use "Capital letter while naming folders of files"
-use rsc for creat auto function of component
- creat multiple components in one folder
-creat header component
-style component with css file
-link by importing css file in the js file by using "import './fileName.css';"  
-Callilng component in the App.js file with import by " import componentName from './filePath';"


******[[[[[

            ---  খেয়াল রাকতে হবে, js এর সাথে যাতে css file এর লিঙ্ক থাকে এবং main App.js এর সাথে যাতে component file এর লিংক থাকে আর component টা যাতে অবশ্যই call করা হয়  ---

]]]]]******



*/

console.log(`   finished----------------------- Special Notes on " Extension Pack and component folder"  `);





console.log(`       // ************************** 46-4 Components inside the folder structure and connect them  || 46-5 Create child component and pass data via props .. 46-6 (advanced) Pass multiple data to a child component  || 46-7 (advanced) add unique key for mapping components   `);







console.log(`   starts----------------------- Special Notes on " fetch the Components again but inside the folder"  `);

/*

আবার fetching হবে তবে components folder use করে করে

-প্রথমে একটা main component বানাতে হবে যার কাজ হল একসাথে সবগুলা countries কে useState,useEffect,fetch করে করে নিয়ে আসবে
-এর পর main component কে App.js এর ভিতরে call করতে হবে
-তারপর individual country কে load করার জন্য আরেকটা props-component বানাতে হবে আর সেই  props-component কে অবশ্যই অবশ্যই main component এর ভিতরে map method দিয়ে call করতে হবে
-এখন props-component কে call করার সময় দুই ভাবে করতে পারি,
        ** যতগুলা key-value দরকার তাদের সবার জন্য আলাদা আলাদা custom attribute বানায় বানায় props এর জন্য দিয়ে দেয়া
        ** পুরা element টারেই  props এর জন্য দিয়ে দেব তার পর props-component এর function এর ভিতরে destruturing করে করে key-value গুলাকে প্রয়োজন অনুযায়ী filter করে নিইয়ে কাজ করা । মুলত এটাই সব থেকে সুন্দর পদ্ধতি।
-decorating the single countries
-use unique "key" prop for each country এটা দিলে warning টা আর আসবে না । এটার কাজ হোল কোন কারনে API এর কোণ DAta change হল react js এর জন্য এই unique "key" prop ধরে ধরে তাকে update করে ফেলে।

******[[[[[

        ---  মজার একটা জিনিস হল props-component গুলার parent div কিন্তু main component এর যে div এ map টা আছে সেইটা তাই একে decorating করতে হলে map কে wrap করে তার পর করতে হবে  ---

]]]]]******

*/

console.log(`   finished----------------------- Special Notes on " fetch the Components again but inside the folder"  `);





console.log(`       // ************************** 46-8 Build your react app and host your react app in Netlify   `);







console.log(`   starts----------------------- Special Notes on " hosting react app in netlify"  `);

/*

How to host your react app in netlify?
-open new cmd or terminal
-cd to your react app folder
-npm run build
-deploy it in the netlify


How to update you hosted react app in netlify?
-open new cmd or terminal
-cd to your react app folder
-npm run build
-deploy it in the netlify

*/

console.log(`   finished----------------------- Special Notes on " hosting react app in netlify"  `);





console.log(`       // ************************** 46-9 Module Summary and recap use bootstrap in React   `);







console.log(`   starts----------------------- Special Notes on " recap and use of bootstrap in React"  `);

/*
tasks: 
- Header , Footer নামের component add করা লাগবে
- Boootstrap 5 add করা লাগবে
            -- Boootstrap 5 add করতে চাইলে public folder এর index.html এর মধ্যে as usually add করতে হবে


*/

console.log(`   finished----------------------- Special Notes on " recap and use of bootstrap in React"  `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 47 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 47-1 Module Introduction Create React App under the hood    `);






console.log(`   starts----------------------- Special Notes on " npm,npx,creat-react-app,readme"  `);

/*
what is npm?
-Node Package Manager
-কোন একটা rect project এ code করতে গেলে অনেক গুলা জিনিসের (Package অর্থাৎ অনেক ধরনের library) দরকার পরে সেই জিনিস গুলাকে একসাথে ম্যানেজ করার কাজ করে এই npm


what is npx?
-Node Package Execute
-আগে এই কাজ করার যেই package আছে তাকে install and execute করার কাজ টা দুই ধাপে করা লাগত কিন্তু npx সেই কাজটা কে সহজ করে দিয়েছে বাঁ কাজটাকে একবারেই করে redy করে দেয় আমাদের জন্য


what is create-react-app?
-এটা একধরনের Command line interface বাঁ CLI (এটার বিপরিত হল GUI বাঁ Graphical User Interface বলে)
-react app তৈরি করার জন্য একধরনের simple Command Line Interface
-react app এর ভিতরে package.json নামের একটা ফাইল থাকে যেখানে মূলত অনেক অনেক গুলা জিনিস থাকে 
            -version
            -dependencies :  এগুলাই মূলত package
            -scripts : start,build etc থাকে আমরা যে npm এর commands গুলা দেই তা মূলত এই script গুলাকেই execute করে
        
        what is .gitignore?
        -আমরা যখন react app এ কাজ করি তখন কিন্ত্য আমাদের git init বাঁ আরো কিছু code আছে যা run করার দরকার পরে না কারণ gitignore allows us to avoid those
-তাছাড়া app.js , index.js, root element এই গুলা ধরে ধরে বানানো লাগত আর create-react-app এই full package টাকে dynamically automatic ready করে + ঠিক জায়গা মত বসায়ে দেয়ার কাজ করে 
        
        

what is readme file?
-এই ফাইলে আমাদের ফুল package এর বিস্তারিত লিখা থেকে আবার আমরা চিলে এটাকে mardown system এ edit ও করতে পারি

*/

console.log(`   finished----------------------- Special Notes on " npm,npx,creat-react-app,readme"  `);




console.log(`       // ************************** 47-2 What is JSX, React Component, babel transpiler    `);






console.log(`   starts----------------------- Special Notes on " jsx"  `);

/*
        

what is JSX?
-ES6 এর class এর মত JSX ও একধরনের syntactical sugar

        What is syntactical sugar?
        -rect এ যেই html type code লিখা হয় behind the scene সেটা দেখতে খুবই বিদখুটে কিন্তু syntactical sugar JSX সেই জিনিস্টাকে compiled by useing Babel compiler করে একটা beautiful syntax দেয় অর্থাৎ সুন্দর একটা visual appearence দেয়

                What is Babel compiler?
                -JSX এর সাহায্যে react এর জন্য look like html syntax auto geneate করতে পারে।
-from module screen shot,
    -JSX stands for JavaScript XML
    -JSX এর সাহায্যে html code গুলো javascript এর মধ্যে সহজেই লিখা যায় ; আবার html code এর মধ্যেও javascript এর expression গুলো ব্যাবহার করা যায় curley brace {} এর সাহায্যে
    -Markup languaage and logic কে আলাদা file এ না রেখে একই সাথে প্রয়োজনমত একই file এ রাখা যায়, এর জন্য Rect component ব্যাবহার করা যায় 

What are the advantages of JSX?
-JSX has the following advantages:
    -JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
    -According to the React docs, most people find it helpful as a visual aid when working with UI inside the JavaScript code.
    -JSX also allows React to show more useful error and warning messages.
    -If one is familiar with HTML, it is quite easy to use JSX when building React application
    -Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.   
*/

console.log(`   finished----------------------- Special Notes on " jsx"  `);




console.log(`       // ************************** 47-3 Components and how props works, unidirectional data flow    `);





console.log(`   starts----------------------- Special Notes on " component, props , unidirectional flow"  `);

/*


What is component?
-Its a building block of Rect app 
-show more in MDN
-Re useable independent pieces which are Same in look diff in data and can be used repeatedly in a website
-component 2 প্রকার,
    -functional component 
    -class component
-অর্থাৎ component হল UI এর ছোট ছোট পিচ যা Re useable,independent piece্‌Same in look diff in data


What is props?
-react এ component call করার সময় attribute হিসেবে custom attr দেয়া যায় যা যেখানে component যেখানে declare হচ্ছ সেখানে pops obj এর key value হিসেবে বসে
-props unidirectional data flow maintain করে আর এই flow এর সময় এর value  করা যায় না এটাকে তাই read only বলা হয় change করলে error দেয়

        What is unidirectional data flow?
        -react এ props এর সাহায্যে data parent থেকে kid তারপর grant-kid তারপর great-grant-kid এভাবে নিচের দিকে step by step flow করে বাঁ করানো যায় এই flow কেই বলা হয় unidirectional data flow   

*/

console.log(`   finished----------------------- Special Notes on " component, props , unidirectional flow"  `);




console.log(`       // ************************** 47-4 (advanced) How states works, asynchronous, console state`);





console.log(`   starts----------------------- Special Notes on " useState"  `);

/*

-useState থেকে আমরা ২ টা জিনিস পাই ,
    -একটা variable যা state এর initial value hold করে
    -একটা variable যা state এর setter function যেটাই মুলত প্রথম variable এর value define করে
- useState একটা asynchronus function
- useState এর value টাকে যদি sychronouly পেতে চাই তাহলে তা আমরা useEffect use করে করতে পারি।
*/

console.log(`   finished----------------------- Special Notes on " useState"  `);




console.log(`       // ************************** 47-5 How React Hook works, send state via props , props vs state`);





console.log(`   starts----------------------- Special Notes on " react hook"  `);

/*
Hook কি?
-hook হচ্ছে একটা special function যা react এর কিছু কিছু speciality আমাদের জন্য implement করে দেয় যাতে কাজটা আমাদের জন্য সহজ হয় সেই সাথে UI এর সাথে আংটা বাঁ লিংক set করে দেয় . যেমন, 
            -useState : state realted কোন change আসলে সেটাকে simplyfi করে
            -useEffect : side effect realted কোন কাজকে simplyfi করে। যেমন, fetch করা, screen sizse related issue 
-যে component এ state টাকে declare করা হয় তাকে বলা হয় state full component আর এখান থেকে props দিয়ে দিয়ে যেই যেই component এর মাঝে state কে দেখানো হয় তাদের বলা হয় state less বাঁ presentational components

*/

console.log(`   finished----------------------- Special Notes on " react hook"  `);




console.log(`       // ************************** 47-6 What is React, when to use it, react vs angular vs vue   |||   47-7 How react works, Render, virtual dom, diff algorithm, fiber`);





console.log(`   starts----------------------- Special Notes on " react working process, react virtual dom"  `);

/*
what is react? [[[[  Read documents   ]]]]
- react একটা javascript library
- performance huge
- flexible
- declarative and easy to understand
- component based
- same component বিভিন্ন device এ compatible

- [[[ show react vs angular vs vue ]]]

How react works? [[[[  Read documents   ]]]]
-virtual dom এর সাহায্যে 
        -virtual dom : main dom বাঁ html dom কে চেঞ্জ করা খুবি expensieve এবং ক্ষেত্র বিশেষে change টাকে খুজে সেইখানে update করা অনেক ঝামেলার। তাই react নিজের মাঝেই main dom এর একটা copy রেখে দেয় আর যখন কোন change হয় তখন সে diff algorithm এর সাহায্যে এই virtal dom আর last edited virtual dom এর মধ্যে compare করে easily find out করতে পারে তারপর ultimate change টাকে main dom এ update করে দেয়
        - [[[ show react diff algorithm ]]]

*/

console.log(`   finished----------------------- Special Notes on " react working process, react virtual dom"  `);




console.log(`       // ************************** 47-8 React Class Component, Component lifecycle and rerender`);





console.log(`   starts----------------------- Special Notes on " react working process, react virtual dom"  `);

/*

react class compenent কি?
-older version of "react functional component"
-used constructor() against useState()
-used this.setState() in constructor i.o useState()
-used render() for return()
-used componentDidMount() for fetching data or useEffect()
-used componentDidUpdate() for rerendering
-used componentWillUnmount() for unmounting or dependency in the useEffect()
- [[[ show react state and lifecycle ]]]

what is component lifecycle??
-every component ৩ টা stage অতিক্রম করে,
        -1) Mounting : initial stage "mount" মানে হল dom এ দেখানোর জন্য ready করা. যখন কোন component DOM এ প্রবেশ করে তখন এই stage শুরু হয়। এই stage এ 4টা method পর্যায়ক্রমে ঘটে
                    -constructor()
                    -getDerivedStateFromProps()
                    -render()
                    -componentDidMount()

        -2) Updating : যখন কোন props বাঁ state এর কোন পরিবর্তন component এর কোন পরিবর্তন ঘটায় , তখন component টি এই stage এ প্রবেশ করে । এই stage এ 5টা method পর্যায়ক্রমে ঘটে
                    -getDerivedStateFromProps()
                    -shouldComponentUpdate()
                    -render()
                    -getSnapshotBeforeUpdate()
                    -componentDidUpdate()
        -3) Unmounting : যখন DOM থেকে কোণ component টি অপসারণ করা হয় বাঁ প্রয়য়জন হয় তখন component টি এই stage এ প্রবেশ করে । এই stage এ ১টা method পর্যায়ক্রমে ঘটে 
                    -componentWillUnmount()



*/

console.log(`   finished----------------------- Special Notes on " react working process, react virtual dom"  `);




console.log(`       // ************************** 47-9 Module Summary, recap, Properties vs attributes`);





console.log(`   starts----------------------- Special Notes on " summary"  `);

/*

-react 
-npm,npx, build, start
-babel compiler
-props
-

*/

console.log(`   finished----------------------- Special Notes on " summary"  `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 47.5 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 47_5-1 Module Introduction ES6 Modules simple import, export    `);






console.log(`   starts----------------------- Special Notes on " import export and file path and file path symboles "  `);

/*

-যদি কোন file path এর আগে "./" না থাকে তাহলে বুঝতে হয় তা node modules থেকে import হচ্ছে e.g: import React from "react"
-"./anyFolderName" এর মানে হচ্ছে যেই ফোল্ডারে আমরা আছি তারই ভিতরে "anyFolderName" নামে যে ফোল্ডার আছে তাকে open করা লাগবে 
-"./anyFolderName/ফোল্ডার২/এভাবে আরো কিছু ফোল্ডার/file.extnsn" র মানে হচ্ছে যেই ফোল্ডারে আমরা আছি তারই ভিতরে "anyFolderName" নামে যে ফোল্ডার আছে তার ভিতরের "ফোল্ডার২" এর ভিতরের (এভাবে কাংক্ষিত ফাইল পর্যন্ত) "file.extnsn" নামে যে ফাইল আছে তাকে open করা লাগবে
-"../anyFolderName" র মানে হচ্ছে "relative path" অর্থাৎ এক level উপরে উঠা

- উদাহারন rect-storage-and-handler

*/

console.log(`   finished----------------------- Special Notes on " import export and file path and file path symboles "  `);




console.log(`       // ************************** 47_5-2 ES6 Modules, import default, relative path    `);






console.log(`   starts----------------------- Special Notes on " Module export styles "  `);

/*

when we will creat Rect Module?
-when the components are diffn then creat diff module
-creat multipile time repeated codes in sheared module "utilities"

- "utilities" থেকে sheared component পাইতে হলে আগে সেই component কে তার file থেকে export করতে হবে তারপর যেখানে পাইতে চাই সেইখানে import করতে হবে
        -এই exporting ২ প্রকার
                    (1) export default : যখন একটা ফাইল থেকে কেবল একটাই মাত্র code / function export করা লাগবে .just use "export default fuctionName"
                         => for import just use "import fuctionName from "./file Path"
                    (2) obj export  : যখন একটা ফাইল থেকে multiple code / function export করা লাগবে just use "export {name,age,etc}"
                            => for import just use "import {name,age,etc} from "./file Path"
*/

console.log(`   finished----------------------- Special Notes on " Module export styles "  `);




console.log(`       // ************************** 47_5-3 Create and Load Fake data, json generator, online api    `);






console.log(`   starts----------------------- Special Notes on " generating data for UI arry of object, "  `);

/*
generating data for UI by arry of object
    -creat arry of object cosmetics
    -map it and console in the console
    -creat sinleCosmetic component
    -and show sigle cosmetic in the UI
generating data for UI by jsonGenaorator
    -creat jsonGenaorator
    -and load it in the component as an array of object
    -and show sigle cosmetic in the UI
generating data from "data.json" using useState and useEffect hooks[safer]
    -create a data.json file in the public folder
    -write the jason file
    -creat fetchData function using useState and useEffect hooks 
    -and show sigle cosmetic in the UI
mock api load data from online api [[[show youtube how to creat mock api]]]


*/

console.log(`   finished----------------------- Special Notes on " generating data for UI  "  `);




console.log(`       // ************************** 47_5-4 How to Create Event handler with parameters    `);






console.log(`   starts----------------------- Special Notes on " function with parameter  "  `);

/*
-ভ্যানিলা javaScript এ আমরা চাইলেই funtion এর ভিতরে একটা parameter দিতে পারতাম কিন্তু react js এ সেই ভাবে সরাসরি দেয়া সম্ভব না । সেই ভাবে দিলে fuction টা automatic call হয়ে যায়।এর সমাধান ২ টা,
        -wraper function use করা
        -wraper function এর বদলে তার ভিতরের arrow function কে direct call করা [[mostly used]]

*/

console.log(`   finished----------------------- Special Notes on " function with parameter  "  `);




console.log(`       // ************************** 47_5-5 Intro to Local storage to store data just one item   |||   47_5-6 Store multiple data in an Object with local storage    |||   47_5-7 Remove data to the local storage and delete shopping cart   `);






console.log(`   starts----------------------- Special Notes on " add and remove data in local storage "  `);

/*
data in local storage with out any extra component,
    -add2cart funtion এর ভিতরে localStorage.setItem(id,1) দিব
    -each id one key in local storage and multiple click dont changes its value

data in local storage with extra component
    -একটা cmponent বানাব localStorage এ item add করার জন্য 
    -এবার সেই component কে add2cart এর ভিতরে call করব 
    -ফলাফল আগের মতই প্রতিটা id একেক্টা key হবে আর তাদের value হবে 1 multiple click dont changes its value

    -এবার Multiple click এর ফলে value change করাতে হবে,
                -localStorage.setItem(id,value) comment out করে দিব
                -if else condition use করে দেখব আগে এই same key এর জন্য কোন value আছে কিনা থাকলে তার সাথে প্রতি ক্লিকে তার সাথে যোগ করব আর localStorage.getItem(id,value) তারপর localStorage.setItem(id,value) দিব
                -না থাকলে localStorage.setItem(id,value) দিব

                -এবার localStorage কে আরো সাজিয়ে রাখতে হবে অর্থাৎ localStorage এ একটা cart নামের objec বানিয়ে এই id ও তার value গুলা কে সেই cart object এর key-value pairs হিসেবে এমন ভাবে রাখব্ যাতে Multiple click এর ফলে value change হয়ে যায়
                        -আগের code গুলা comment out করব then
                        -add2cart এর ভিতরে cartInLocalStorage নামের একটা variable declare করব এবং localStorage.getItem('cart') করব পাশাপাশি objFormatOfCart নামের একটা variable declare করব
                        -if else দিয়ে চেক করব localStorage এ already "cart" এর জন্য কোন storage আছে কিনা  
                            -যদি থাকে তাহলে তাকে JSON.parse করব এবং প্রাপ্ত value টাকে objFormatOfCart এ assign করব
                            -না থাকলে objFormatOfCart = {} assign করব
                        -এবার if else দিয়ে চেক করব objFormatOfCart এ id এর জন্য আগেই একটা value আছে কিনা
                            -যদি থাকে তাহলে তার সাথে 1 কে যোগ করব
                            -না থাকলে id এর জন্য  value = 1 দিব
                        -তার পর objFormatOfCart কে srtingify করব
                        -এবার সেই srtingified objFormatOfCart কে localStorage.setItem('cart', stringifiedObjOfCart) দিব

remove from local storage with extra component
    -add2cart এর ভিতরে cartInLocalStorage নামের একটা variable declare করব এবং localStorage.getItem('cart') করব পাশাপাশি objFormatOfCart নামের একটা variable declare করব
    -if else দিয়ে চেক করব localStorage এ already "cart" এর জন্য কোন storage আছে কিনা  
        -যদি থাকে তাহলে তাকে JSON.parse করব এবং প্রাপ্ত value টাকে objFormatOfCart এ assign করব
        -না থাকলে objFormatOfCart = {} assign করব
    -এবার if else দিয়ে চেক করব objFormatOfCart এ id এর জন্য আগেই একটা value আছে কিনা
        -যদি থাকে তাহলে তার থেকে 1 বিয়োগ করব
        -না থাকলে id এর জন্য  delete objFormatOfCart[id] করব
    -তার পর objFormatOfCart কে srtingify করব
    -এবার সেই srtingified objFormatOfCart কে localStorage.setItem('cart', stringifiedObjOfCart) দিব

delete item from UI and local storage both
    -home work


*/

console.log(`   finished----------------------- Special Notes on "add  and remove data in local storage  "  `);




console.log(`       // ************************** 47_5-8 Module Summary and simple intro to array reduce   `);






console.log(`   starts----------------------- Special Notes on " 47-5 summary "  `);

/*
-Es6 module
-filepath
-import
    -import default
    -object import 
-export
    -export default
    -object export 
-fake data load
    -json generator
    -data.json
    -mock api
-event handler passing with functin in paramaeter
    -arrow function direct call method
    -functional wraping method
-add & remove data in local storage
-array reduce


*/

console.log(`   finished----------------------- Special Notes on "47-5 summary  "  `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 48 || Videos 10]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 448-1 Module Introduction, site resources, figma ||| 48-2 Header Component, logo position, set nav menu ||| 48-3 Shop Component Layout, load data and set state   |||  48-4 Product Component, component layout, display data  ||| 48-5 Style Product Cart, style debug and button position ||| full module `);






console.log(`   starts----------------------- Special Notes on " create an shoppin website where we can see no. of items selected for cart "  `);

/*
step-1:
-App.js ফাইলের মাঝে
        -একটা "PracHeader" নামের component তৈরি করব
                -PracHeader কে App.js ফাইল এ call করব
        -একটা "Body" নামের component তৈরি করব
                -Body কে App.js ফাইল এ call করব
                -Body component এর ভিতরে আরো ২টা component তৈরি করব
                -প্রথমে একটা "Cards4products" নামের component তৈরি করব
                        -Cards4products কে Body.js ফাইল এ call করব
                        -Cards4products এর ভিতরে useState আর useEffect দিয়ে data load করব
                        -then একটা "PracSingleProduct" নামের component তৈরি করব
                            -PracSingleProduct কে Cards4products.js ফাইল এ call করব
                            -PracSingleProduct কে call করার সময় এর ভিতরে prop হিসেবে কয়েকটা জিনিস দিতে হবে
                                -product = {product}
                                -key = {product.id}
                            -তারপর PracSingleProduct.js ফাইল এ props কে destruturing করে কিছু জিনিস বার করে নিব
                                -const {name,price,img,id,category,ratings,stock} = props.product;
                            -PracSingleProduct.js ফাইল এ জিনিস গুলা প্রয়োজন মত বসাব


                -তারপর একটা "CartLists" নামের component তৈরি করব
                        -CartLists কে Body.js ফাইল এ call করব
                        -CartLists.js file কে প্রয়োজন অনুযায়ী সাজাব

                        

step-2:
-এবার onClick effect activate করব
-যেহেতু "ক্লিক করব PracSingleProduct.js file এ কিন্তু change আসতে হবে CartLists.js file এ" আর এদের মাঝে সরা সরি কোন সম্পর্ক নাই তাই onClick fuction কে lift করে করে এদের common parents or grand parents এ declare করব আরে prop-pros করে করে PracSingleProduct.js এর মাঝে handler দিব same ভাবে change আসার জন্য  CartLists.js file useState পাঠাব
            -Body.js file এ click4addToCart handler বানাব করব onClick এর জন্য
                    -click4addToCart handler কে props এর সাহায্যে সেই PracSingleProduct.js file এর button এর মাঝে set করব
            -পাশাপাশি Body.js file এ useState করব cart এর জন্য
                    -click4addToCart function দিয়ে cart এর value set করব
                    -তারপর cart কে props এর সাহায্যে  CartLists.js file এ প্রয়োজন মত set করব

*/

console.log(`   finished----------------------- Special Notes on " create an shoppin website where we can see no. of items selected for cart "  `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 49 || Videos 9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 49-1 Module Introduction and simple ema-john recap ||| full module `);






console.log(`   starts----------------------- Special Notes on " create an shoppin website where we can see no. of items selected for cart   |||   show all details for cart and assure its saved in local storage and also enbale restoring from local storage from UI "  `);

/*


// *********************************** Module 48 decorative summary


step-1:
-App.js ফাইলের মাঝে
        -একটা "PracHeader" নামের component তৈরি করব
                -PracHeader কে App.js ফাইল এ call করব
        -একটা "Body" নামের component তৈরি করব
                -Body কে App.js ফাইল এ call করব
                -Body component এর ভিতরে আরো ২টা component তৈরি করব
                -প্রথমে একটা "Cards4products" নামের component তৈরি করব
                        -Cards4products কে Body.js ফাইল এ call করব
                        -Cards4products এর ভিতরে useState আর useEffect দিয়ে data load করব
                        -then একটা "PracSingleProduct" নামের component তৈরি করব
                            -PracSingleProduct কে Cards4products.js ফাইল এ call করব
                            -PracSingleProduct কে call করার সময় এর ভিতরে prop হিসেবে কয়েকটা জিনিস দিতে হবে
                                -product = {product}
                                -key = {product.id}
                            -তারপর PracSingleProduct.js ফাইল এ props কে destruturing করে কিছু জিনিস বার করে নিব
                                -const {name,price,img,id,category,ratings,stock} = props.product;
                            -PracSingleProduct.js ফাইল এ জিনিস গুলা প্রয়োজন মত বসাব


                -তারপর একটা "CartLists" নামের component তৈরি করব
                        -CartLists কে Body.js ফাইল এ call করব
                        -CartLists.js file কে প্রয়োজন অনুযায়ী সাজাব



step-2:
-এবার onClick effect activate করব
-যেহেতু "ক্লিক করব PracSingleProduct.js file এ কিন্তু change আসতে হবে CartLists.js file এ" আর এদের মাঝে সরা সরি কোন সম্পর্ক নাই তাই onClick fuction কে lift করে করে এদের common parents or grand parents এ declare করব আরে prop-pros করে করে PracSingleProduct.js এর মাঝে handler দিব same ভাবে change আসার জন্য  CartLists.js file useState পাঠাব
            -Body.js file এ click4addToCart handler বানাব করব onClick এর জন্য
                    -click4addToCart handler কে props এর সাহায্যে সেই PracSingleProduct.js file এর button এর মাঝে set করব
            -পাশাপাশি Body.js file এ useState করব cart এর জন্য
                    -click4addToCart function দিয়ে cart এর value set করব
                    -তারপর cart কে props এর সাহায্যে  CartLists.js file এ প্রয়োজন মত set করব



                    
// *********************************** Module 49 rough summary



// moldulel 49-1:
-breef of mudule 48



// moldulel 49-2-3:
TASKS:
-cartlist এর অন্যান্য data গুলোকেও দেখাতে হবে
        -cartlist এর ভিতরে forOf loop use করে করে প্রয়োজনিয় data গুলোর update value/click বের করে তারপর যায়গা মত বসাব
        -******** to.fixed(digit) মেথড use করলে যা পাই তা একটা strig হিসেবে থাকে তাই তাকে parsefloat() মেথড use করে number এর convert করতে হয়
        


// moldulel 49-4:
TASKS:
-clicked-product কে local storage এর "shopping-cart" নামের যেই storage আছে তাঁর ভিতরে পাঠাতে হবে
        -click4addToCart function এর ভিতরে   addToCart function of fakedb.js use করতে হবে যার parametr হবে clicked product এর Id
        
[[[[[[[[[(addToCart and getStoredCart are totally differrent funtions)]]]]]]]]]

// moldulel 49-5-6:
TASKS: 
-local storage এর "shopping-cart" নামের যেই storage আছে তাঁর ভিতরে থেকে data UI তে visible করতে হবে
        -addToCart এর ভিতরের shopping cart এর value পাবার অংশটুকু কে আলাদা একটা ফাংশনের (getStoredCart) ভিতরে রাখতে হবে কাজের সুবধার্থে এখানে কাজ হল , "localStorage এর ভিতরে যদি shopping-cart নামে কোন storage থাকে তাহলে তাঁর value কে JSON.parse করে shoppingCart variable এ রাখা"
        -local storage এর Data কে Cards4products.js এর ভিতরে load করত হবে by new useEffect
                -getStoredCart কে সেই useEffect for load data of local storage এর ভিতরে পাঠাতে হবে shoppingCart variable টার value হিসেবে 
                -useEffect এর ভিতরে প্রাপ্ত shoppingCart কে for..in loop করে individual key(here key == id) থেকে সেই id এর woner (product) কেই বের করে আনতে হবে
                    -সেই জন্য আমাদের কে আগে যে useEffect এর setProducts দেইয়ে সবগুলো products এর জন্য একটা array পাইছিলাম(products নামের) তাকে find method দিয়ে শর্ত দিতে হবে তারপর প্রাপ্ত results গুলোকে নতুন একটা variable এর(addedProduct নামের )  value হিসেবে assign করতে হবে

                    -************* তবে মজার জিনিস হল আপাতত যা করলাম তাতে যদি page reload দেই তাহলে console এ undefined দেখাবে কারণ
                        -এই loading useEffect এর dependency-injection খালি [] যার কাজ হচ্ছে,
                            -যেই জিনিসটার উপর useEffect depend করতেছে তাঁর value যতবার update হবে এই useEffect টাও তত বার run হবে
                            -আর যদি dependency-injection খালি [] থাকে তহলে একবার মাত্র run হবে

                            -এই ক্ষেত্রে হয়েছে যে,
                                -পূর্বের useEffect এর setProduct function asynchonus হবার কারনে var products = [] ছিল এই দিকে dependency ও [] ছিল তাই find method কোন রেজাল্ট না পেইয়ে undedfined দেখাচ্ছে     


// moldulel 49-6:
TASKS:                    
-এবার dependency-injection খালি [] না রেখে [products] দিতে হবে cause,
        -পূর্বের useEffect এর setProduct function asynchonus হবার কারনে শুরুতে var products = [] থাকলেও যখন products এর value load করে নিয়ে আসবে তখন এই দিকে dependency  [products] থাকার কারনে localstorage এর loading useEffect আবার run হবে find method ও কোন রেজাল্ট পাবে আর তা দেখাবে
        
-এইবার cart এর সাথে local storage এর সম্পর্ক করতে হবে বাঁ link করায় দিতে হবে যাতে page reload দিলে local storage এর information গুলা cart এর সাহায্যে UI তে দেখায়,
        -প্রথমে addedproduct কে একটা condition দিতে হবে আর তা হল যদি addedproduct খালি না থাকে অর্থাৎ true হয় তাহলে,
            -দেখা যাচ্ছে যে addedproduct গুলোর qty deafult ভাবে সেট করা আছে কিন্তু আমরা চাই localstorage এর same same করাতে এবং ,
                    -storedQty4Id variable এর value হিসেবে shoppingCart[storedProductId] নিব
                    -addedProduct.quantity = storedQty4Id সেট করব
        -তারপর cart variable এ কিন্তু এই latest product গুলো পাঠানো হয়নি যার ফলে UI কিন্তু এখণো আমাদের localstorage এর সাথে সম্পর্ক হীন তাই এখন আমাদের কে এই for..in loop এর বাহিরে savedCart নামের একটা খালি array declare করব আর loop এর ভিতরে প্রতিটা addedProduct কে push করব 
        তারপর আবার cart varible  এর value হিসেবে savedCart এর value গুলোকে দিয়ে দেবার জন্য setCart(savedCart) করব 
            - ******* প্রশ্ন হল setCart পাব কোথায়?
                    -Body.js থেকে prop-props দিয়ে দিয়ে নিয়ে আসতে হবে
            -******* আরেকটা সমস্যা আছে তা হল reload দিলে ,
                    -local storage এ accurate inforamtin থাকতেছে কিন্তু UI তে কিছু সমস্যা দেখাচ্ছে,
                        -"selected item qty" প্রতিটা selected product এর জন্য মাত্র একটা করে দেখাচ্ছে যদিও আরো বেশি select করেছেলাম cause,
                            -selected item qty হিসেবে আমরা cart.length use করেছেলাম আসলে এখন তা হবে মোট selected item এর সংখ্যাr সমান এটা solve করার জন্য
                                    -cartlist.js file এ totalSelectedQty = 0 নিইয়ে তাকে looper ভিতরে update করে তারপর  selected item qty হিসেবে totalSelectedQty দিতে হবে             
                        -"Total Price" এবং "Total shipping Charge" এর জন্যও প্রতিটা selected product এর জন্য মাত্র একটা করে দেখাচ্ছে যদিও আরো বেশি select করেছেলাম cause,
                            -totalPrice calculate করার সময় আমরা কোন Qty mention করে দেয় নি যাতে একই product multiple time select হলে তাদের singleProduct.price এর সাথে যত বার select হইছে তাঁর সংখ্যা বাঁ singleProduct.quantity গুন করে দেই

                        -******* আরেকটা সমস্যা আছে এইক্ষেত্রে qty সব (০ ০) আসবে কারণ selected product এর initial qty 0 দেয়া আছে অর্থাৎ specific product ক্লিক করলে যাতে সাথে সাথে quantity এক এক করে বারতে থাকে তাঁর জন্য,
                            -click4addToCart function টাকে হালকা modify করতে হবে কারণ এতক্ষন এই ফাংশন্টার কাজ ছিল যেই specific product টাকে click করা হবে তাকে cart নামক empty array তে add করা  কোণ qty change এর কাজ করা হত না কিন্তু এখন একটা condition এ আনতে হবে, "যদি product টা cart এ আগে থেকেই থাকে তাহলে শুধু তাঁর qty প্রতি ক্লিকে এক এক করে বারবে আর না থাকলে qty শুন্য (০) এর বদলে ১ হয়ে cart এ add হবে।" তাঁর জন্য,
                                -সরাসরি cart এ add না করে আগে একটা variable updatedCart = [] নিব
                                -তারপর আগে থেকেই আছে কিনা চেক  করার জন্য 
                                    -let existsInCart = cart.find(product => product.id === selectedProduct.id) মেথড apply করব
                                -তারপর condition এ আনতে হবে, "যদি product টা cart এ আগে থেকেই থাকে তাহলে শুধু তাঁর qty প্রতি ক্লিকে এক এক করে বারবে আর না থাকলে qty শুন্য (০) এর বদলে ১ হয়ে cart এ add হবে।
                                    -if (!existsInCart) {
                                        selectedProduct.quantity = 1
                                        updatedCart = [...cart, selectedProduct]
                                    } else {
                                        let restsAcceptSelectedProduct = cart.filter(product => product.id !== selectedProduct.id)
                                        existsInCart.quantity += 1
                                        updatedCart = [...restsAcceptSelectedProduct, existsInCart]
                                    }
                                    -তাঁরপরে গিয়ে setCart(updatedCart); দিয়ে selected product টাকে cart add করব
                        


// moldulel 49-7:
TASKS:  
-



*/

console.log(`   finished----------------------- Special Notes on " create an shoppin website where we can see no. of items selected for cart   |||   show all details for cart and assure its saved in local storage and also enbale restoring from local storage from UI "  `);













console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[first Coceptual session || On React ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`   starts----------------------- Special Notes on " array, object destructuruing "  `);



/* 

const personObject = {
  firstName: "Mir",
  lastName: "Hussain",
  address: { country: "Uganda", capital: "Kampala" },
};

const cart = { abc: 1, def: 2, ghi: 1 };

const personArray = ["Mir", "Hussain"];

//* Object Dot Notation and Square Bracket notation

//Dot Notation
//? const firstName = personObject.firstName;

//Square Bracket Notation
//? const lastName = personObject["lastName"];

//* Simple Object Destructuring

// const { firstName } = personObject;

// const { lastName } = personObject;

// const { lastName, firstName } = personObject;

//* Array index

//? const firstName = personArray[0];

//* Array Destructuring

// const [firstName] = ["Mir", "Hussain"];

//const [firstName, lastName] = ["Mir", "Hussain"]

// const [, lastName] = ["Mir", "Hussain"];

//! Object Destructuring Pro tricks

//* Multi-level Destructuring

// const { address: { capital } } = personObject;








//* Default Value

// const { age = "Not Available" } = personObject;

//* re-assigning

// const { firstName: fatherFirstName } = personObject;
*/



console.log(`   finished----------------------- Special Notes on " array, object destructuruing "  `);













console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 8  ||  Module 50_5  ||  On Local Storage basic formulas ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`       // ************************** 50_5-1 When to use Array and when to use Object `);







console.log(`   starts----------------------- Special Notes on " array, object destructuruing "  `);
/* 

কোন required data store করার জন্য দু ধরনের data structure use করা হয় either "array" or "object"

let election = [ 'person1', 'person2', 'person3', 'person2', 'person3', 'person2', 'person3' ];
let election = { person1: 'person1', person2: 'person2', person3: 'person3' };

তবে একই variable এর against এ যদি একাধিক বার value change করার বাঁ update করার প্রয়োজন থাকে তাহলে এই রকম variable কে store করার জন্য efficient way হচ্ছে কোন একটা object এর ভিতরে রাখা


*/
console.log(`   finished----------------------- Special Notes on " array, object destructuruing "  `);



// create a function to add input-parameter  containing value as 1 in an empty object
/* 
let dataBase = {};

const addtoDataBase = item => {
  dataBase[item] = 1;
};

addtoDataBase("Mir");
console.log(dataBase); // output: { Mir: 1 }

addtoDataBase("Hussain");
console.log(dataBase); // output: { Mir: 1, Hussain: 1 }

addtoDataBase("Saalmaan");
console.log(dataBase); // output : { Mir: 1, Hussain: 1, Saalmaan: 1 }

addtoDataBase("Mir");
console.log(dataBase); // output: { Mir: 1, Hussain: 1, Saalmaan: 1 }
 */


// stillNotSolved : তবে এখানে দেখাযাচ্ছে same item multiple time entry দিলেও তাঁর value 1 ই রয়ে যাচ্ছে অর্থাৎ যদি same item already আগে থেকেই object এর ভিতরে থাকে তাহলে শুধুমাত্র তাঁর value 1 বারাতে হয় সেটা কাজ করতেছে না





console.log(`       // ************************** 50_5-1 When to use Array and when to use Object `);





// create a function to add input-parameter where it will set value as 1 for non-existing key and wll increment value 1 for existing key

/* 
let dataBase = {};

const addtoDataBase = item => {

    if (item in dataBase) {
        dataBase[item] += 1;
    } else {
        dataBase[item] = 1;
    }


};

addtoDataBase("Mir");
console.log(dataBase); // output: { Mir: 1 }

addtoDataBase("Hussain");
console.log(dataBase); // output: { Mir: 1, Hussain: 1 }

addtoDataBase("Saalmaan");
console.log(dataBase); // output : { Mir: 1, Hussain: 1, Saalmaan: 1 }

addtoDataBase("Mir");
console.log(dataBase); // output: { Mir: 2, Hussain: 1, Saalmaan: 1 }

addtoDataBase("Saalmaan");
console.log(dataBase); // output : { Mir: 2, Hussain: 1, Saalmaan: 2 }
 */


// stillNotSolved : তবে এখানে দেখাযাচ্ছে same item আগে থেকেই object এর ভিতরে থাকে তাহলে শুধুমাত্র তাঁর value 1 বারাতে হয় সেটা কাজ করতেছে but এই data গুলা প্রতিবার page reload দিলে সবে গায়েবুল হাও্যা হয়ে object টা খালি হয়্যে যাচ্ছে





console.log(`       // ************************** 50_5-3 A very simple way to add or remove key to an object `);







console.log(`   starts----------------------- Special Notes on " simple way to add key to an object and database"  `);
/* 

প্রথম কথা হল, local storage এ কোন data কে store করতে হলে তা নির্দিষ্ট একটা storageName র ভিতরে key-value pair হিসেবে রাখতে হয় 
এবং local storage এ যেকোণ data store করতে হলে তাকে json format এ রাখতে হয় 


২য় কথা হল local storage এর কোন নির্দিষ্ট একটা storageName র ভিতরে data কে store করতে হলে __4__ টা step maintain করতে হয়,

            1) কাংক্ষিত storageName এর আগে থেকেই already কোণ storageName create করা আছে কিনা থাকলে আগে তাকে ধরে এনে কোন একটা variable এর value হিসেবে assign করাতে হবে, 

                            let localStorageName = localStorage.getItem("storageName"); 

                    [বি.দ্রঃ এখানে প্রাপ্ত variable "localStorageName" এর data গুলা কিন্তু json format এ আছে]
                    


            2) প্রাপ্ত json format এর varible টা যদি সত্যিই আগে থেকে থাকে তাহলে তাঁর data কে JSON.parse(localStorageName) method এর সাহায্যে নতুন একটা variable এর মাঝে রাখতে হবে, , 

                            localStorageAsObj = JSON.parse(localStorageName);

            আরযদি না থাকে তাহলে localStorageAsObj varible টার value হিসেবে একটা empty obj declare করতে হবে,

                            localStorageAsObj = {};

                    [বি.দ্রঃ এখানে প্রাপ্ত variable "localStorageAsObj" এর data গুলা কিন্তু normal obj format এ আছে]
                    


            3) তারপর যে item টাকে আমরা loca storage এর সেই কাংক্ষিত storageName এর ভিতরে রাখতে চাই তাকে একটা শর্তের সাহায্যে localStorageAsObj variable এর ভিতরে রাখতে হবে। অর্থাৎ item টা যদি আগে থেকেই থেকে থাকে তাহলে just তাঁর value just ১ বাড়াব, 

                            localStorageAsObj[item] += 1;

            আরযদি না থাকে তাহলে localStorageAsObj varible টার ভিতরে তাঁর value হিসেবে 1 কে সেট করব বাঁ assign করব,

                            localStorageAsObj[item] = 1;
                    
                    [বি.দ্রঃ এখানে প্রাপ্ত variable "localStorageAsObj" এর data গুলা কিন্তু normal obj format এ আছে]
                    


            4) এবার কাংক্ষিত ফলাফল পাবার পালা অর্থাৎ প্রাপ্ত localStorageAsObj variable এর মদ্ধ্যে key-value pair হিসেবে এখন পর্যন্ত যত values গুলা আছে তাদেরকে 
            
            প্রথমে JSON.stringify(localStorageAsObj) method use করে সাধারন object format of data থেকে json format of data তে রূপান্তর করে আরেকটা variable এ রাখতে হবে কারণ আমরা জানি, 
            
            [[["local storage এ কোন data কে store করতে হলে তা নির্দিষ্ট একটা storageName র ভিতরে key-value pair হিসেবে রাখতে হয় "]]] 

                            let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)

                    [বি.দ্রঃ এখানে প্রাপ্ত variable "stringifiedLocalStorageAsObj" এর data গুলা কিন্তু json format এ আছে]

            এবার প্রাপ্ত stringifiedLocalStorageAsObj variable কে সেই কাংক্ষিত local storage এর নির্দিষ্ট একটা storageName র ভিতরে data কে store করতে হবে, 

                            localStorage.setItem('storageName', stringifiedLocalStorageAsObj)
                    
            

[[[[[[[[[[
    ""আমরা চাইলে এই পুরা কাজটাকে addToLocalStorage নামের একটা ফাংশনের মদ্ধে আবদ্ধ করে রাখতে পারি যাত just তাঁর মাঝে item কে parameter হিসেবে পাঠিয়ে দিব আর পুরা কাজটা automatic হয়ে যাবে এবং এতে সুবিধা হচ্ছে React এ এই ফাংশন কে যেকোন জায়গায় থেকে call করতে পারব""
]]]]]]]]]]





// প্রথম function হবে step 1 and step 2 এর জন্য অর্থাৎ local storage থেকে "localStorageName" storage টাকে get করে তার মধ্যে value থাকলে সেই value কে parse করা আর না থাকলে একটা empty obje create করে "localStorageAsObj" generate করা,  


const getSpecificlocalStorageAsObj = (storageName) => {
    let localStorageName = localStorage.getItem(storageName);
    let localStorageAsObj = {};

    if (localStorageName) {
        localStorageAsObj = JSON.parse(localStorageName);
    } else {
        localStorageAsObj = {};
    }
    return localStorageAsObj;
}


// ২য়ত function হবে step 3 and step 4 যার ভিতরেই  step 1 and step 2 এর getSpecificlocalStorageAsObj("storageName") কে call করা হবে তারপর তার মধ্যে value থাকলে সেই value কে just ১ বাড়াব  আরযদি না থাকে তাহলে localStorageAsObj varible টার ভিতরে তাঁর value হিসেবে 1 কে


let dataBase = {};
const addtoDataBase = item => {
    
    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj("storageName");


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        localStorageAsObj[item] += 1;
    } else {
        localStorageAsObj[item] = 1;
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem('storageName', stringifiedLocalStorageAsObj)



    // adding items to database object------------

    dataBase = localStorageAsObj;

};

*/
console.log(`   finished----------------------- Special Notes on " simple way to add key to an object and database "  `);
// ======================><=======================
console.log(`   starts----------------------- Special Notes on " simple way to remove key to an object and database"  `);
/* 

local storage এর কোন নির্দিষ্ট একটা storageName র ভিতরে data কে remove করতে হলে __4__ টা step maintain করতে হয়,

            1) কাংক্ষিত storageName এর আগে থেকেই already কোণ storageName create করা আছে কিনা থাকলে আগে তাকে ধরে এনে কোন একটা variable এর value হিসেবে assign করাতে হবে, 

                            let localStorageName = localStorage.getItem("storageName"); 

                    [বি.দ্রঃ এখানে প্রাপ্ত variable "localStorageName" এর data গুলা কিন্তু json format এ আছে]
                    


            2) প্রাপ্ত json format এর varible টা যদি সত্যিই আগে থেকে থাকে তাহলে তাঁর data কে JSON.parse(localStorageName) method এর সাহায্যে নতুন একটা variable এর মাঝে রাখতে হবে, , 

                            localStorageAsObj = JSON.parse(localStorageName);

            আরযদি না থাকে তাহলে localStorageAsObj varible টার value হিসেবে একটা empty obj declare করতে হবে,

                            localStorageAsObj = {};

                    [বি.দ্রঃ এখানে প্রাপ্ত variable "localStorageAsObj" এর data গুলা কিন্তু normal obj format এ আছে]
                    


            3) তারপর যে item টাকে আমরা loca storage এর সেই কাংক্ষিত storageName এর ভিতরে থেকে remove করতে চাই তাকে একটা শর্তের সাহায্যে localStorageAsObj variable এর ভিতরে রাখতে হবে। অর্থাৎ item টা যদি আগে থেকেই 1 এর বেশি থেকে থাকে তাহলে just তাঁর value just ১ কমবে, 

                            localStorageAsObj[item] -= 1;

            আরযদি 0 থাকে তাহলে localStorageAsObj varible টার ভিতরে থেকে তাকে delete করব,

                          delete localStorageAsObj[item];
                    
                    [বি.দ্রঃ এখানে প্রাপ্ত variable "localStorageAsObj" এর data গুলা কিন্তু normal obj format এ আছে]
                    


            4) এবার কাংক্ষিত ফলাফল পাবার পালা অর্থাৎ প্রাপ্ত localStorageAsObj variable এর মদ্ধ্যে key-value pair হিসেবে এখন পর্যন্ত যত values গুলা আছে তাদেরকে 
            
            প্রথমে JSON.stringify(localStorageAsObj) method use করে সাধারন object format of data থেকে json format of data তে রূপান্তর করে আরেকটা variable এ রাখতে হবে কারণ আমরা জানি, 
            
            [[["local storage এ কোন data কে store করতে হলে তা নির্দিষ্ট একটা storageName র ভিতরে key-value pair হিসেবে রাখতে হয় "]]] 

                            let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)

                    [বি.দ্রঃ এখানে প্রাপ্ত variable "stringifiedLocalStorageAsObj" এর data গুলা কিন্তু json format এ আছে]

            এবার প্রাপ্ত stringifiedLocalStorageAsObj variable কে সেই কাংক্ষিত local storage এর নির্দিষ্ট একটা storageName র ভিতরে data কে store করতে হবে, 

                            localStorage.setItem('storageName', stringifiedLocalStorageAsObj)
                    
            

[[[[[[[[[[
    ""আমরা চাইলে এই পুরা কাজটাকে removeFromDataBase নামের একটা ফাংশনের মদ্ধে আবদ্ধ করে রাখতে পারি যাত just তাঁর মাঝে item কে parameter হিসেবে পাঠিয়ে দিব আর পুরা কাজটা automatic হয়ে যাবে এবং এতে সুবিধা হচ্ছে React এ এই ফাংশন কে যেকোন জায়গায় থেকে call করতে পারব""
]]]]]]]]]]





// প্রথম function হবে step 1 and step 2 এর জন্য অর্থাৎ local storage থেকে "localStorageName" storage টাকে get করে তার মধ্যে value থাকলে সেই value কে parse করা আর না থাকলে একটা empty obje create করে "localStorageAsObj" generate করা,  


const getSpecificlocalStorageAsObj = (storageName) => {
    let localStorageName = localStorage.getItem(storageName);
    let localStorageAsObj = {};

    if (localStorageName) {
        localStorageAsObj = JSON.parse(localStorageName);
    } else {
        localStorageAsObj = {};
    }
    return localStorageAsObj;
}


// ২য়ত function হবে step 3 and step 4 যার ভিতরেই  step 1 and step 2 এর getSpecificlocalStorageAsObj("storageName") কে call করা হবে তারপর তার মধ্যে value থাকলে সেই value থেকে just ১ কমাব আরযদি না থাকে তাহলে localStorageAsObj varible টার ভিতরে কে delete করে দিব


let dataBase = {};
const removeFromDataBase = item => {
    
    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj("storageName");


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        localStorageAsObj[item] -= 1;
        if (localStorageAsObj[item] === 0) {
            delete localStorageAsObj[item]
        }
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem('storageName', stringifiedLocalStorageAsObj)



    // adding items to database object------------

    dataBase = localStorageAsObj;

};

*/
console.log(`   finished----------------------- Special Notes on " simple way to remove key to an object and database "  `);






/* 
// generating step 1 and step 2 of LocalStorage-Handling 
const getSpecificlocalStorageAsObj = (storageName) => {
    let localStorageName = localStorage.getItem(storageName);
    let localStorageAsObj = {};

    if (localStorageName) {
        localStorageAsObj = JSON.parse(localStorageName);
    } else {
        localStorageAsObj = {};
    }
    return localStorageAsObj;
}







let dataBase = {};
const addtoDataBase = item => {

    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj("storageName");


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        localStorageAsObj[item] += 1;
    } else {
        localStorageAsObj[item] = 1;
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem('storageName', stringifiedLocalStorageAsObj)



    // adding items to database object------------

    dataBase = localStorageAsObj;

};

const removeFromDataBase = item => {

    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj("storageName");


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        localStorageAsObj[item] -= 1;
        if (localStorageAsObj[item] === 0) {
            delete localStorageAsObj[item]
        }
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem('storageName', stringifiedLocalStorageAsObj)



    // adding items to database object------------

    dataBase = localStorageAsObj;

};
 */



// add items

// addtoDataBase("Mir");
// console.log(dataBase); // output: { Mir: 1 }

// addtoDataBase("Hussain");
// console.log(dataBase); // output: { Mir: 1, Hussain: 1 }

// addtoDataBase("Saalmaan");
// console.log(dataBase); // output : { Mir: 1, Hussain: 1, Saalmaan: 1 }

// addtoDataBase("Mir");
// console.log(dataBase); // output: { Mir: 2, Hussain: 1, Saalmaan: 1 }

// addtoDataBase("Saalmaan");
// console.log(dataBase); // output : { Mir: 2, Hussain: 1, Saalmaan: 2 }




// remove items

// removeFromDataBase("Mir");
// console.log(dataBase); // output: { Mir: 1 }

// removeFromDataBase("Hussain");
// console.log(dataBase); // output: { Mir: 1, Hussain: 1 }







console.log(`       // ************************** 50_5-4 Event handler with data and set data from Local Storage   |||   50_5-5 Get From local storage and handle quantity property `);






console.log(`   starts----------------------- Special Notes on " create an shoppin website where we can see no. of items selected for cart "  `);

/*
Summary of module 50_4:

solve : clicking each add to item button will show the total lenth in cart section

problemsStillNotSolved: reload দিলে cart এর ভিতরে কোণ record থাকতেছে না অর্থাৎ local storage এর সাথে cart এর কোন সম্পর্ক এখন গড়ে দেয়া হয় নি।


*/

console.log(`   finished----------------------- Special Notes on " create an shoppin website where we can see no. of items selected for cart "  `);









console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 8  ||  Module 51  ||  10 videos ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`       // ************************** 51-1: Module Introduction Use Bootstrap CDN in React  `);







console.log(`   starts----------------------- Special Notes on " using vanilla Bootstrap in React  "  `);
/* 
> go to getbootstrap website
> copy the css and bundle js links
> paste the links in the public/index.html file as like before
            -but here some error occured cause of the vanilla bootstrap used "class=" i.o "className=" so need to replace it
            -and some tags like img, input have no closing slash "/" so need to add it
            -and also in vanilla bs5 "same in look diff in data" components are mutiple time repeated so creat a function component for "SLDD" components to handle it
*/
console.log(`   finished----------------------- Special Notes on " using vanilla Bootstrap in React  "  `);





console.log(`       // ************************** 51-2 Install React Bootstrap in your react application  `);







console.log(`   starts----------------------- Special Notes on " using react Bootstrap in React  "  `);
/* 
> open required folder in terminal or cmd
> apply : ""
> in the index.js file add the following code : "import 'bootstrap/dist/css/bootstrap.min.css';"
> paste requiere components from react bootstrap website and import them from react bootstrap by this code : "import { Button,elem2,elem3,elemN } from 'react-bootstrap';"
*/
console.log(`   finished----------------------- Special Notes on " using react Bootstrap in React  "  `);





console.log(`       // ************************** 51-3 Setup tailwind css with Create React App  `);







console.log(`   starts----------------------- Special Notes on " using react-tailwind in React  "  `);

/* 
> go to tailwindcss website
> open documentation > create react app
> open projects folder in terminal 
> apply : "npx create-react-app my-project"
> apply : "cd my-project"
> apply : "npm install -D tailwindcss postcss autoprefixer"
> apply : "npx tailwindcss init -p"

> two file will generate "tailwind.config.js and postcss.config.js"
>open tailwind.config.js and replace the "content : []" following code :
        -use changing # with * : content: [
                    "./src/##/#.{js,jsx,ts,tsx}",
                ],
>open index.css and paste following codes : 
        -use :  @tailwind base;
                @tailwind components;
                @tailwind utilities;

> apply : "npm run start"
*/

console.log(`   finished----------------------- Special Notes on " using react-tailwind in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " create a nav bar part 1  "  `);

/* 
task:
create some components for nav bar show it in UI
        
*/

console.log(`   finished----------------------- Special Notes on " create a nav bar part 1 "  `);





console.log(`       // ************************** 51-4 Responsive Navbar using react and tailwind   |||   51-5 Simple Pricing Option using React and Tailwind   |||   51-6 Responsive pricing card with Tailwind and Hero icons  `);







console.log(`   starts----------------------- Special Notes on " using react-icon in React  "  `);

/* 
> go to reacticons website
> open documentation > heroicons for react app
> open projects folder in terminal
> apply : "npm install react-icons --save"
> go to fontawesome / heroicons or any from side bar. for example for fontawesome go to "Font Awesome"
> apply : "import { IconName } from "react-icons/fa";" in the using file
> use the icon in using file as a component like, 
        <IconName />
>

*/

console.log(`   finished----------------------- Special Notes on "using react-heroicon in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " using react-heroicon in React  "  `);

/* 
> go to heroicons website
> open documentation > heroicons for react app
> open projects folder in terminal
> apply : "npm install @heroicons/react"
> apply : "import { BeakerIcon } from '@heroicons/react/solid'" in the using file
> use the icon in using file as a component like, 
        <BeakerIcon className="h-5 w-5 text-blue-500"/>
>

*/

console.log(`   finished----------------------- Special Notes on "using react-heroicon in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " create a nav bar part 1  "  `);

/* 
task:
enable hide show effect in navbar by js within a bar
complete "pricing club" section
        
*/

console.log(`   finished----------------------- Special Notes on " create a nav bar part 1 "  `);





console.log(`       // ************************** 51-7 Use reachart to draw any type of chart using React  `);







console.log(`   starts----------------------- Special Notes on " using rechart-leaflet  "  `);

/* 
step 1: [[install react-leaflet and leaflet packager]]
> go to termnal and apply : "npm install react-leaflet leaflet --save"
> go to maptiler website and signup ( for first time use only)

<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>



*/

console.log(`   finished----------------------- Special Notes on "using rechart in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " using rechart in React  "  `);

/* 
> go to rechart website
> open documentation > create react app
> open projects folder in terminal 
> apply : "npm install recharts"
> apply : "
import {  XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend, } from 'recharts';" in the using file
> copy required components from rechart website and paste them in the using file




*/

console.log(`   finished----------------------- Special Notes on "using rechart in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " create a nav bar part 1  "  `);

/* 
task:
add chart from rechart website to the project
        
*/

console.log(`   finished----------------------- Special Notes on " create a nav bar part 1 "  `);





console.log(`       // ************************** 51-8 Axios, data extraction and data processing bar chart  `);







console.log(`   starts----------------------- Special Notes on " using axios in React  "  `);

/* 

normally fetch() অতবা async await করলে আমরা যে data পাই তা fetching এর সাথে সাথে edit করা যায় না এবং এই পুরা code 3 liner 
সেইখানে আমরা axios.get() use করে খুব সহজেই data কে editable করতে পারি এমনকি প্রাপ্ত data থেকে নতুন data ই generate করা যায় আর মাত্র ২ লাইন code এই আমরা data টাকে পেয়ে যাই,


> go to axios githube website
> open documentation > create react app
> open projects folder in terminal 
> apply : "npm install axios"
> apply : "import axios from 'axios';"  in the using file
> copy required components from rechart website and paste them in the using file



*/

console.log(`   finished----------------------- Special Notes on "using axios in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " create a nav bar part 1  "  `);

/* 
task:
>load data throught axios 
>edit the data found from api and change it as per requirements 
>and generate bar chart

        
*/

console.log(`   finished----------------------- Special Notes on " create a nav bar part 1 "  `);





console.log(`       // ************************** 52-9 Module Summary and Recap React Route for Rest Countries  `);







console.log(`   starts----------------------- Special Notes on " using spring-animation in React  "  `);

/* 


> go to reacts-spring website
> open documentation > create react app
> open projects folder in terminal 
> apply : "npm install react-spring"
> apply : "import { useSpring, animated } from 'react-spring'"  in the using file
> apply : "const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });"  in the using file
> apply : "<animated.div style={props}>I will fade in</animated.div>"  in the using file inside the return function



*/

console.log(`   finished----------------------- Special Notes on "using spring-animation in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " create a nav bar part 1  "  `);

/* 
task:
>load data throught axios 
>edit the data found from api and change it as per requirements 
>and generate bar chart

        
*/

console.log(`   finished----------------------- Special Notes on " create a nav bar part 1 "  `);







console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 8  ||  Module 52  ||  9 videos ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`       // ************************** 52-1 Module Introduction, install React Router, Project Setup   |||   52-2 Create Simple Route and simple router setup  `);







console.log(`   starts----------------------- Special Notes on " using React-router in React  "  `);
/* 
> go to reacts-router website
> open documentation > create react app
> open projects folder in terminal 
> apply : "npm install react-router-dom@6"
> open index.js file and import the required components
                >import { BrowserRouter } from "react-router-dom"; in the index.js file
                > replacce   "<App />" with <BrowserRouter><App /></BrowserRouter> in the index.js file
> Now we need to declare all required "<Route />" components in the App.js file inside "<Routes></Routes>" component reminder
        [[Others elements outside the Routes component will be sticked to the page]]
>inside the <Route/> component we need to declare the path and element "prop-attribute"
            `   > declare the "/path" which will show in the "url" as the vlue of "path" prop-attribute 
                        like : <Route path="/path" component={} />

                > the component(like: <Home/>) as value of "element" prop-attribute 
                        like : <Route path="/" element={<Home/>} /> 
                    
                    [[for Home component the file path will be path="/"]]

                > declare a default NotFound component as the last "Rout" component 
                        like : <Route path="*" element={<NotFound/>} />
*/
console.log(`   finished----------------------- Special Notes on " using React-router in React  "  `);
// =======================><===================
console.log(`   starts----------------------- Special Notes on " create react-router project part 1  "  `);

/* 
task:
> install react-router-dom
> create a react-router project without navigation bar
            >rout গুলা declare করব
            > just rout-component গুলা বানাবেন

        
*/

console.log(`   finished----------------------- Special Notes on " create react-router project part 1 "  `);





console.log(`       // ************************** 52-3 Load Users, display users, dynamic link, use Navigate  `);







console.log(`   starts----------------------- Special Notes on " create react-router project part 2  "  `);

/* 
task:
> load usres data from jason.placeholder.com in the Friends component
>creat SingleFriend component and display in the Friends component

        [[[[[[[[ এখানে কিন্তু individual persondetails clickable নেই]]]]]]]]

> যেকোন SingleFriend এর button এ click করলে তার সাথে একটা নতুন পেজ তৈরি করব যাতে click করলে সেই পেইজে নিয়ে যায় ,
            > SingleFriend file এ একটা variable const "navitage = useNavigate()" Hook নিতে হবে 
            > then একটা click handler function এর সাহায্যে navigate(`/friend/${requiredValue}`) set করতে হবে এক্ষেত্রে "requiredValue === id"

    [[এখানে "/friend/${requiredValue}" হচ্ছে একটা urlParameter accepting Route যা আমরা একতু পরে create করব]]

            > কোণ button এ click handler function কে call করতে হবে

        [[[[[[[[ এখানে কিন্তু individual persondetails clickable করার হয়েছে কিন্তু details এর জন্য আলাদা route create করা হয় নি তাই Notfound দেখাবে + কোণ navigation bar নেই]]]]]]]]




[[[[[ আর মজার ব্যাপার হল এই পুরা কাজটা কে আরো সহজে করা যাবে একটা মাত্র (Link to / CustomLink to) use করে তখন just to=`/friend/${requiredValue}` দিলেই individual persondetails clickable হয় যাবে]]]]]

        
*/

console.log(`   finished----------------------- Special Notes on " create react-router project part 2 "  `);





console.log(`       // **************************52-4 Set Header, Nav, Create Link, display active route  `);







console.log(`   starts----------------------- Special Notes on " create react-router project part 3  "  `);

/* 
task:

        [[[[[[[[ এখানে কিন্তু individual persondetails clickable করার হয়েছে কিন্তু details এর জন্য আলাদা route create করা হয় নি তাই Notfound দেখাবে + কোণ navigation bar নেই]]]]]]]]

> solve "navigation bar নেই"
> get a navbar from tailwind templates
>create navbar component and call it in the App.js file
> and add, 
        [<a href ="/">Home</a>] for "Home" component, 
        [<a href ="/friends">Friends</a>]  for "Friends" component, 
        [<a href ="/about">About</a>]  for "About" component

            [[[[[[[[এখন কিন্তু navbar কাজ করবে কিন্তু বার বার reload নিবে যেটা react এর জন্য একধরনের error অর্থাৎ এখণো আমরা react router enable করি নি]]]]]]]]
        
> to solve reload problem replace "a" with "Link" and "href" with "to" like 
        [<Link to ="/">Home</Link>] for "Home" component, 
        [<Link to ="/friends">Friends</Link>]  for "Friends" component, 
        [<Link to ="/about">About</Link>]  for "About" component

            [[[[[[[[again আরেকটা খুচরা optional কাজ বাকি রয়ে গেছে আর তা হল যেটা active থাকবে সেটা দেখতে আলাদা হবে  ]]]]]]]]

> to solve active link problem,
            > creat a "CustomLink" component copping from "Custom Active Link" option of router website
            > replace "Link" with "CustomLink" like 
                    [<CustomLink to ="/">Home</CustomLink>] for "Home" component, 
                    [<CustomLink to ="/friends">Friends</CustomLink>]  for "Friends" component, 
                    [<CustomLink to ="/about">About</CustomLink>]  for "About" component
        
        [[[[[[[[ এখন যদিও navigation menubar create করা হয়েছে +  individual persondetails clickable করার হয়েছে কিন্তু details এর জন্য আলাদা route create করা হয় নি ]]]]]]]]
*/

console.log(`   finished----------------------- Special Notes on " create react-router project part 3 "  `);





console.log(`       // ************************** 52-5 Recap Router, route, path, component, not found, link |||  52-6 Create route with some fixed and some dynamic part |||  52-7 React route parameter and load data based on dynamic route   |||   52-8 (advanced) Nested route with useEffect dependency Injection`);







console.log(`   starts----------------------- Special Notes on " create react-router project part 3+4+5  "  `);

/* 
task:

        [[[[[[[[ এখন যদিও navigation menubar create করা হয়েছে +  individual persondetails clickable করার হয়েছে কিন্তু details এর জন্য আলাদা route create করা হয় নি ]]]]]]]]

>solve : individual persondetails  এর জন্য আলাদা details route create করা or enabling dynamic routes from a single route

> add a new route containing "SingleFriendDetails" as element and "path="/friend/:friendId""
>opent SingleFriendDetails.js file and apply : "let {id} = useParams();" 
>then decorate this file with "useState,useEffect and fetch"



>Working-Process: "SingleFriend" component এর individual card এর button এ click পরলে তা "getIndividualFriend" function কে call করে

যার ভিতরে আছে "path = `/friend/${id}`" তাই ফাংশন টা খুজতে থাকে "/friend" route টা কোথায় আছে তখন সে দেখে App.js file এ আছে

তখন সে ওই "id" variable কে App.js file এর route যেটার "path="/friend/:friendId"" আছে তাঁর urlParameter অর্থাৎ friendId এর argument হিসেবে set করে "id" কে 

এরপর অই route টার element (এই ক্ষেত্রে "SingleFriendDetails" component) এর ভিতরে গিয়ে "let {id} = useParams();" hook এর সাহায্যে id variable টা উন্মুক্ত হয় তারপর তাকে আমরা useState,useEffect and fetch করে dynamic  individual SingleFriendDetails পাই




[[[[[
    **** এইখানে আমরা যে dynamic path create করলাম প্রতিটা SingleFriendDetails দেখার জন্য সেটা মূলত উলটা ছিল main process flow টা হওয়া উচিত,

            [#] first step: decalre and create a route
                (১) প্রথমে App.js file এর ভিতরে element={<SingleFriendDetails/>} এবং path='/friend/:urlParameter'  attribute এর একটা Route component declare করব
                (২) এর পর SingleFriendDetails.js file create করে তাঁর ভিতরে functional component বানাব যার ভিতরে প্রথমত শুধু <div>this is SingleFriendDetails</div> tag return করবে

            [#] second step: decalre a link in navbar
                (১) এরপর navbar এর জন্য সেখানে যদি এই লিঙ্কগ না থেকে তাহলে new create করব

            [#] third step: call the route from any other component
                (১) এক্ষেত্রে এবার singleFriend component থেকে একটা Link component এর সাহায্যে to='/friend/{argumetn-4-UrlParameter}' create করে তাঁর সাহায্যে SingleFriendDetails এর route কে call করতে হবে

                (২) এইবার SingleFriendDetails.js এর ভিতরে আগের সেই urlParameter কে destructuring করে 'let {id} = useParams()' Hook এর সাহায্যে বের করে আনতে হবে
                
                (৩) তারপর useState,useEffect and fetch করে করে কাংক্ষিত জিনিস কে return করে নিয়ে আসলে তা UI তে show করাতে হবে

]]]]]


> এখন সব ঠিক আছে শুধু আরেকটা dynamic route create করব যা হবে nested route sytem এ সব আগের মতই পার্থক্য শুধু,
                (I) Posts এর Route এর পেটের ভিতরে SinglePostDetails এর Route টা বানাতে হবে
                (II) Posts.js file এর যেখানে posts variable কে map করা হচ্ছে তা ঠিক নিচে <Outlet/> component কে call করতে হবে কারণ এখানেই Data ্গুলো UI তে show করা হবে
                (III) Posts.js file অথবা SinglePost.js file যেখান থেকে ই SinglePostDetails এর Route টা কে call করা হবে সেখানে Link component এর সাহায্যে argument কেউ পাঠাতে হবে যেটা SinglePostDetails এর Route টার urlParameter এর value হিসেবে গন্য হবে
                (IV) SinglePostDetails.js file এর ভিতরে আগের সেই urlParameter কে destructuring করে 'let {id} = useParams()' Hook এর সাহায্যে বের করে আনতে হবে
                (V) SinglePostDetails.js file এর ভিতরে useState,useEffect and fetch করে করে কাংক্ষিত জিনিস কে return করে নিয়ে আসলে তা UI তে show করাতে হবে তবে এই ক্ষেত্রে useEffect এর dependecy হিসেবে urlParameter কে দিতে হবে

*/

console.log(`   finished----------------------- Special Notes on " create react-router project part 3+4+5 "  `);









console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 8  ||  Module 53  ||  9 videos ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`       // ************************** 53-1 Install React router and implement simple router setup  `);







console.log(`   starts----------------------- Special Notes on " editing module 48+49 using react-router  "  `);
/* 
- install react router
- install tailwind
- install heroicons

*/
console.log(`   finished----------------------- Special Notes on " editing module 48+49 using react-router  "  `);






console.log(`       // ************************** 53-2 Recap React Router setup and intro to order review page  `);







console.log(`   starts----------------------- Special Notes on " editing module 48+49 using react-router  "  `);
/* 

tasks:

> creating "useProduct" Custom Hooks for Api call
> creating "useCarts" Custom Hooks for localStorage call
> use this hooks in Shop.js file
> React Props-Children that helps to use same component with extra Elements

*/
console.log(`   finished----------------------- Special Notes on " editing module 48+49 using react-router  "  `);







console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 8  ||  Module 54  ||  9 videos ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`       // ************************** 54-1 - 54-9 ||| conditional rendaring and Context Api  `);







console.log(`   starts----------------------- Special Notes on " Conditional rendaring  "  `);
/* 

useCase : UI তে loading effect অথবা অন্য কোন effect দেখানোর জন্য react project এ conditional rendaring করা হয়
4 ভাবে conditional rendaring করা যায় ,
        > (১) return এর উপরে একটা varibale declare করে তাঁর উপুরে if-else-else if use করে তাঁর value হিসেবে কিছু JSX assign করে তারপর ternary opt এর সাহায্যে return এর ভিতরে সেই varriable কে use করা
        > (২) সরাসরি ternary opt  এর সাহায্যে return এর ভিতরে সেই তাঁর ভিতরে কিছু JSX কে use করা

        > ternary opt এর সংক্ষিপ্ত রুপ && opt অথবা || opt এর use করা 

        > (৩) সরাসরি && opt  এর সাহায্যে return এর ভিতরে সেই তাঁর ভিতরে কিছু JSX কে use করা ঃ (condition === true) && JSX
        > (৪) সরাসরি || opt  এর সাহায্যে return এর ভিতরে সেই তাঁর ভিতরে কিছু JSX কে use করা ঃ (condition === false) && JSX


*/
console.log(`   finished----------------------- Special Notes on "  Conditional rendaring  "  `);
// ===================================== >< =========================================
console.log(`   starts----------------------- Special Notes on " Contex API  "  `);
/* 

useCase : parents or grand-parents or grand-grand-parents থেকে কোন কিছুকে আমরা child or grand-child or grand-grand-child এ পাঠাতে এতদিন আমরা prop-props sytem use করেছি যেটা unidirectional way তে message pass করে কিন্তু অনেক ক্ষেত্রে আমাদের কিছু জিনিস কে one by one pass না করে direct pass করতে হতে পারে অর্থাৎ parents থেকে সরাসরি grand-child or grand-grand-child কে সেই ক্ষেত্রে আমরা contex API use করে থাকি,

rules: 


step 1:
> প্রথমে component এর globa এ একটা "ContextName" variable এর value হিসেবে `createContext("initValue")` Hook কে set করতে হবে ।
        **"ContextName" variable এর প্রথম letter(C) অবশ্যই Capital letter হতে হবে ।**
        **"`createContext("initValue")` Hook এর অবশ্যই একটা initial value দিতে হবে ।**
> "ContextName" variable কে export করতে হবে


step 2:
> এবার functional component টার ভিতরের return করার সময় পুরা জিনিস্টাকে নিচের মত করে  wrap করে দিতে হবে,

        <ContextName.Provider value={value}>
        {children}
        </ContextName.Provider>

    যেখানে "value" attribute এর value হিসেবে যেই জিনিস্টাকে পাঠাতে চাই তাদের কে পাঠিয়ে দিতে হবে । একাধিক জিনিস পাঠাতে চাইলে তাদের কে 3rd bracket "[ ]" এর মাঝে মুড়িয়ে পাঠাতে হবে ।
    
    
step 3:
> সর্বশেষে Context API এর value কে কাঙ্খিত child or grand-child or grand-grand-child এ পেতে চাইলে 
     - useContext() Hook এর সাহায্যে সেই "value" attribute এর value কে variable হিসেবে declare করে দিতে হবে ।




*/
console.log(`   finished----------------------- Special Notes on "  Conditional rendaring  "  `);












console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Milestone 10  ||  Module 56  ||  8 videos ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);





console.log(`       // ************************** 56-1 Module Introduction, authentication vs Authorization`);







console.log(`   starts----------------------- Special Notes on " authentiacation and authorization  "  `);
/* 

>authorization : ক্ষমতায়ন
>authentiacation : নিশ্চায়ন
        -authentiacation 2 ভাবে করা যায় 
                        (১) website কে সরাসরি email/pass/phoneNo etc দিয়ে দিয়ে
                        (২)  website কে সরাসরি email/pass/phoneNo etc না দিয়ে বরং third pary site যেমন login with fb/g+/github/ms etc দিয়ে । এক্ষেত্রে website এর কাছে সরাসরি আমার email/pass/phoneNo etc থাকে না বরং ওইসব third party site আমার জন্য একটা gurranty দেয় যে আমাকে তারা চিনে। বিভিন্ন third party site আছে যারা এই কাজ করে যেমন, firebase(of google), octa, microsoft etc



*/
console.log(`   finished----------------------- Special Notes on " authentiacation and authorization  "  `);





console.log(`       // ************************** 56-2 Create firebase project and Install Firebase SDK  `);







console.log(`   starts----------------------- Special Notes on " creating firebase projects  "  `);
/* 
tasks: 


********[[[[[creat a project]]]]]
1) go to :  " https://console.firebase.google.com/u/0/?pli=1 "
2) click : " Create new project "   
3) give a name (" simple-firebase-intro ") and  click : " Continue "   
4) Enable or Disable : " Goole Analytics for this projects "
5) click : " Create project "   
6) click : " Continue "   
7) A new page will open for the project " simple-firebase-intro "


[[[[
    Note to open project: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name "
]]]]


***********[[[[[install the firebase in react project]]]]]
8) click : " go to docs "
9) click : " Build "
10) click : " Authentication "
11) Here we will see many options of projects category in the sidebar to apply Firebase authentication 
but click : " Web "
12) here we will see multiple third party sites, get started etc 
but click : " Get started "
13) click : " install Firebase SDK(Software Development Kit) "
14) mutilple steps chart will come infron 
but just click : " Step 2: Install the SDK and initialize Firebase "
            - go to terminal and Open the project folder( " simple-firebase-intro ")
            -apply : " npm install firebase "

15) goto to website and click : "  Firebase project configuration " it will bring you to the configuration page stay here and opent a new tab


**********[[[[register the app project]]]]
16) in the new tab follow :  " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name "
17)  for registration app click : " (</>) "  icon for web developer
18) give the name "simple-firebase-intro" and click : " Register App " it will give us our configuration [[[metioned in step 15]]]


[[[[
    Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " setting icon " in sidebar > click : " project setting "

    here we can see the configuration of the project 
    *****remember the configuration should not shared pabllically or keep open
]]]]




**********[[[[[open project in chrome]]]]]
19) now again goto terminal if firebase installation completed
            - go to terminal 
            - Open the project folder in vs code (by code .)
            - apply : " npm start "


**********[[[[[ link the configuration to the project]]]]]
20) copy the configuration link from step 18's Note
21) open the project folder(simple-firebase-intro) in vs code and 
            - open the src folder and create a file named : " firebase.init.js "
            - paste the copied configuration link of step 20's
            -export the "app" variable from last line of the file write : " export default app " 
22) import the exported-app in the App.js file by,
            - import app from './firebase.init';
            

**********[[[[[[ initialize auth ]]]]]]
23) import the firebase-auth from the firebase-auth.js file by,
            - import { getAuth } from "firebase/auth";

24) Initialize Firebase Authentication and get a reference to the service by taking a global "auth" variable and calling getAuth() on it.
            -const auth = getAuth(app);



***********[[[[[[ Sign up new users ]]]]]]
***********[[[[[[ Sign in existing users ]]]]]]


***********[[[[[[ Sign up by third pary (google account) ]]]]]]

25) turn on third party authentication system by,
            - Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " Build " from sidebar > click : " authentication icon " in sidebar > click : " get started " of enabling authentication
            - select the desired third party site (google)
            - Enable the authentication system for the selected third party site
            - give the project name in the box 
            - give the email address in the box
            - click : "save"
26) disable multiple account from a single email address


*********[[[[[[[ provide google auth provider in the project]]]]]]]

28) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "google" as third pary site

29) import GoogleAuthProvider and provider variable in the project App.js
            - import { GoogleAuthProvider } from "firebase/auth";
            - const provider = new GoogleAuthProvider();


*************[[[[[[[[ apply third party sign up with a button]]]]]]]]
30)  creat a button with a onclick function
31) inside the onclick function write bellow code,
            - signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });





***********[[[[[[ Sign up by third pary (github account) ]]]]]]

32) turn on third party authentication system by,
            - Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " Build " from sidebar > click : " authentication icon " in sidebar > click : " get started " of enabling authentication
            - select the desired third party site (github)
            - Enable the authentication system for the selected third party site
            -we will get 3 boxes options :
                    - client ID
                    - client secret
                    - the call-Back url 
                        - get copied the call-Back url 

33) open a new tab and goto github account
            - open setting
            - click : " developer setting "
            - click : " oAuth App "
            - give application name (simple-firebase-intro)
            - give Homepage url of your website (for now localhost:3000)
            - give a short discription
            - paste the copied call-back url of step 32's
            - click : " Register Application "
            - we will get into a new page where we will get the client ID and client secret
            - copy the client ID and client secret

34) move to firebase github authentication tab and 
            - paste the client ID and client secret
            - click : " save "

            


*********[[[[[[[ provide github auth provider in the project]]]]]]]

35) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "github" as third pary site

35) import GoogleAuthProvider and provider variable in the project App.js
            import { GithubAuthProvider } from "firebase/auth";
            const githubProvider = new GithubAuthProvider();


*************[[[[[[[[ apply third party sign up with a button]]]]]]]]
36)  creat a button with a onclick function
36) inside the onclick function write bellow code,
            - signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });


*/
console.log(`   finished----------------------- Special Notes on " creating firebase projects  "  `);


// *********************************************************************************************************************************************************************************************
console.log(`   finished----------------------- Special Notes on " Summary of the Module 56  "  `);

/**
 * Steps to use firebase:
 * * open project folder in terminal
 * * npx create-react-app "react-firebase-template"
 * * cd "react-firebase-template"
 * * apply : " npm install firebase " 
 * * npm start
 * * open "react-firebase-template" in vs code .
 * * 
 * * *
 * 
 * 
**********[[[[[creat a project in firebase]]]]]
  1) go to :  " https://console.firebase.google.com/u/0/?pli=1 "
  2) click : " Create new project "   
  3) give a name (" react-firebase-template ") and  click : " Continue "   
  4) Enable or Disable : " Goole Analytics for this projects "
  5) click : " Create project "   
  6) click : " Continue "   
  7) A new page will open for the project " react-firebase-template "
  

**********[[[[register the app project]]]]
8) in the new tab follow :  " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name "
9)  for registration app click : " (</>) "  icon for web developer
10) give the name " react-firebase-template " and click : " Register App " it will give us our configuration  
11) get the configuration copied


[[[[
    Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " setting icon " in sidebar > click : " project setting "

    here we can see the configuration of the project 
    *****remember the configuration should not shared pabllically or keep open
]]]]






**********[[[[[ link the configuration to the project]]]]]
12) open the project folder(react-firebase-template) in vs code and 
            - open the src folder and create a file named : " firebase.init.js "
            - paste the copied configuration link 
            -export the "app" variable from last line of the file write : " export default app " 
13) import the exported-app in the App.js file by,
            - import app from './firebase.init';
   



***********[[[[[[ turn on third party authentication (google account) ]]]]]]

14) turn on third party authentication system by,
            - Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " Build " from sidebar > click : " authentication icon " in sidebar > click : " get started " of enabling authentication
            - select the desired third party site (google)
            - Enable the authentication system for the selected third party site
            - give the project name in the box " react-firebase-template " 
            - give the email address in the box
            - click : "save"
15) disable multiple account from a single email address





*********[[[[[[[ provide google auth provider in the project]]]]]]]

16) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "google" as third pary site

17) import GoogleAuthProvider and provider variable in the project App.js
            - import { GoogleAuthProvider } from "firebase/auth";
            - const googleProvider = new GoogleAuthProvider();


*************[[[[[[[[ apply third party sign up with a button]]]]]]]]
18)  creat a button with a onclick function and in App.js import ,
            - import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
            
            - const auth = getAuth();

19) use useState to show the effect
20) inside the onclick function write bellow code,


                - signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });







***********[[[[[[ Sign up by third pary (github account) ]]]]]]

32) turn on third party authentication system by,
            - Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " Build " from sidebar > click : " authentication icon " in sidebar > click : " get started " of enabling authentication
            - select the desired third party site (github)
            - Enable the authentication system for the selected third party site
            -we will get 3 boxes options :
                    - client ID
                    - client secret
                    - the call-Back url 
                        - get copied the call-Back url 

33) open a new tab and goto github account
            - open setting
            - click : " developer setting "
            - click : " oAuth App "
            - give application name (simple-firebase-intro)
            - give Homepage url of your website (for now localhost:3000)
            - give a short discription
            - paste the copied call-back url of step 32's
            - click : " Register Application "
            - we will get into a new page where we will get the client ID and client secret
            - copy the client ID and client secret

34) move to firebase github authentication tab and 
            - paste the client ID and client secret
            - click : " save "

            


*********[[[[[[[ provide github auth provider in the project]]]]]]]

35) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "github" as third pary site

35) import GoogleAuthProvider and provider variable in the project App.js
            import { GithubAuthProvider } from "firebase/auth";
            const githubProvider = new GithubAuthProvider();


*************[[[[[[[[ apply third party sign up with a button]]]]]]]]
36)  creat a button with a onclick function
36) inside the onclick function write bellow code,
            - signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });




                



***********[[[[[[ Sign up by third pary (Facebook account) ]]]]]]

32) turn on third party authentication system by,
            - Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " Build " from sidebar > click : " authentication icon " in sidebar > click : " get started " of enabling authentication
            - select the desired third party site (Facebook)
            - Enable the authentication system for the selected third party site
            -we will get 3 boxes options :
                    - App ID
                    - App secret
                    - the call-Back url 
                        - get copied the call-Back url 

33) open a new tab and goto " https://developers.facebook.com/apps/ "
            - click : " My app "
            - click : " create new app "
            - click : " Business "
            - click : " next "
            - give an application name (simple-firebase-intro)
            - give email address
            - give fb password
            - another page will open click : left-top dropdown menu > click : " create test app " > give an application name (simple-firebase-intro) > click : " create " > give password > click : "submit"
            -another page will open find " Facebook Login " > click : " setup "
            -another page will open find  click : " settngs " from side bar 
            - find the "Valid OAuth Redirect URIs" box
            - paste the copied call-back url in the box
            - click : " save "
            -click : " settings gear icon " from sidebar > click : " basic "
            -get the app ID and app secret and paste them in the firebase console

            

34) move to firebase github authentication tab and 
            - paste the client ID and client secret
            - click : " save " 

            


*********[[[[[[[ provide github auth provider in the project]]]]]]]

35) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "github" as third pary site

35) import GoogleAuthProvider and provider variable in the project App.js
            import { GithubAuthProvider } from "firebase/auth";
            const githubProvider = new GithubAuthProvider();


*************[[[[[[[[ apply third party sign up with a button]]]]]]]]
36)  creat a button with a onclick function
37) inside the onclick function write bellow code,
            - signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });








***********[[[[[[ Sign up by NEW EMAIL AND PASSWORD ]]]]]]

38) turn on third party authentication system by,
            - Note to open project over view: " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " Build " from sidebar > click : " authentication icon " in sidebar > click : " SIGN-IN-METHOD " of enabling authentication > click : " ADD NEW PROVIDER "
            - select the desired third party site (Email/Password)
            - Enable the authentication system for the selected third party site
            - Enable or Disable " Email link(passwordless sign-in) " [[[needs additional activities]]]
            - click : " save "
            

            


*********[[[[[[[ provide email/password auth provider in the project]]]]]]]

39) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "get started" and copy,

            - import { getAuth } from "firebase/auth";
            - const auth = getAuth(app);

40) goto vs code and open the " firebase.init.js " file and paste as bellow 
            - import { getAuth } from "firebase/auth"; [[at top]]
            - export const auth = getAuth(app); [[ at bottom just before "export default"]]

41) Now again go to : " https://console.firebase.google.com/u/0/?pli=1 " > click : " project Name " > click : " go to docs "  > click : " Build "  > click : " Authentication "  > click : " web " from sidebar > click ; "Password Authenticaation" 


it has 3 steps to solve the problem with Email/Password Authentication,
                        1) createUserWithEmailAndPassword(auth, email, password)
                                1.a) verify email with code
                                1.b) verify password strength

                        2) signInWithEmailAndPassword(auth, email, password)
                                2.a) forgot password reset
                        3) signOut(auth)




 [[[[[[[[
                        now follow module 57
    ]]]]]]]]







    

 */



console.log(`   finished----------------------- Special Notes on " Summary of the Module 56  "  `);








console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 57 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 57-1,2,3,4,5,6,7,8 Login, Registration, Sign up, Sign in, project setup    `);






console.log(`   finished----------------------- Special Notes on " email password auth  "  `);


/* 
tasks: [[[ creating an user who visits for first time ]]]
- install react-bootstrap
- get the form from react bootstrap
- creat useState for email and password
- setEmail and setPassword by handleEmailOnBlur and handlePassOnBlur functions
- now create "handleFormSubmit" functions during submit of form and use "createUserWithEmailAndPassword(auth, email, password)" inside it



tasks : [[[ users validation ]]]
- set "required" for password and email Form.control component
- set valid alert in the Form.group component
- declare const [validated, setValidated] = useState(false);
- apply bellow code in handleFormSubmit
            - const form = event.currentTarget;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                setValidated(true);
- add regex fro strong password by and error for week pass
            - 




*/

console.log(`   finished----------------------- Special Notes on " email password auth  "  `);








console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 58 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 58-3,4,5,6,7,8 Login and take access to visite site like facebook or twitter    `);






console.log(`   finished----------------------- Special Notes on " first login then accecess to wesite using PrivateRoute-RestrictAuth "  `);


/* 
// ------------ [[[[Module 58-3 ]]]]
tasks: [[[ enabling log in with google ]]]


// ------------ [[[[Module 58-4 ]]]]
tasks: [[[ showing user name in the navbar from a sibling component although after sign out and reload also ]]]
- enable signInWithPopup(auth, provider) in the custome hook "useFirebase()" and export it in the "LogInComponent"
- use "Log In-Log Out" toogle in the "Navbar" component using custome hook "useFirebase()" also.
- use 'onAuthStateChange()' hooks and "setUser(user)" inside in the "useFirebase()" to assure userName exists in the navbar after logout and reload also



[[[[
    simple funda : user কে দখাতে চাইলে "useAuthState()" কে লাগবে


    শুধু LogIn না বরং যেই component এর মাঝেই user এর information দেখাতে চাই সেই component এ গিয়ে "useFirebase()" থেকে user কে নিতে হবে তারপর conditional rendering এর সাহায্যে just render করতে হবে
]]]]


// ------------ [[[[Module 58-5 , 6]]]]
tasks: [[[ do all the those things using React Firebase Hooks i.o "useFirebase()" customHook ]]]


step-1 :
- clear " useFirebase() " from all the components useing " useFirebase() " customHook


step-2 :
- goto : " https://github.com/CSFrequency/react-firebase-hooks "
- open terminal continig the folder and apply : " npm install --save react-firebase-hooks "
- apply : ' npm start '


step-3 :
- goto to browser again click : " Authentication Hooks " in the Documentation paragraph
- goto : " Social Login Example "


step-4 : [[ enablign login with "reactFirebaseHook"]]
- goto " LogInComponent.js "
            - import { useSignInWithXXX } from 'react-firebase-hooks/auth';
            - call contextAPI : const [signInWithXXX, user, loading, error] = useSignInWithXXX(auth);
            - apply : "  onClick={() => signInWithXXX()} " in the button or trigger elememt

    [[[
        here XXX === Google/Github/Facebook/Yahoo
    ]]]



step-5 : [[ enablign signOut with "reactFirebaseHook"]]
- goto " LogInComponent.js "
            - import { signOut } from 'firebase/auth';

            - call contextAPI : const [user, loading, error] = useAuthState(auth);

            - apply : "   onClick={logout} " in the button or trigger elememt



step-6 : [[ enablign existance of user in any components with "reactFirebaseHook"]]
- goto " LogInComponent.js "
            - import { useAuthState } from 'react-firebase-hooks/auth';

            - creat a function : 
                        - const logout = () => {
                        signOut(auth);
                        };

            - conditional rendering এর সাহায্যে just user কে render করতে হবে



            

// ------------ [[[[Module 58-7 ]]]]
tasks: [[[ Restrict Auth by Private Router ]]]


step 7 :
- create " RequireAuth " component with,

            - const RequireAuth = ({children}) => {
                    const [user] = useAuthState(auth);
                    const location = useLocation();
                    if(!user){
                        return <Navigate to="/login" state={{ from: location }} replace />;
                    }
                    return children;
                };


step 8 :
- wrap all the components needs to be accessed after login only  with " RequireAuth " like,
    - <Route path='/orders' element={
                                        <RequireAuth>
                                            <Orders></Orders>
                                        </RequireAuth>
                                    }>
        </Route>


step 9 :  [[[ edit "LogIn" component for redirecting to "/orders" after login ]]]
- goto " LogInComponent.js "
            - import { useHistory } from 'react-router-dom';
            - create : const navigate = useNavigate();
            - create : const location = useLocation();
            - create : const from = location?.state?.from?.pathName || '/';
            -create a function : const handleXXXSignIn = () => {    signINWithXXX()
                    .then( () => {
                        navigate(from, {replace : true});
                    })  };
            - change step-4 last point's element and apply : "  onClick={handleXXXSignIn} " in the button or trigger elememt 



        [[[[

            এখানে ব্যাপারটা হল,  " RequireAuth " component এর children component " Orders " টা যখনি কোন না কোন ভাবে render হবার জন্য navigate হল তখনি "RequireAuth" তাঁর সামনে তাঁর মাঝে define করা to="/login" path এর component এর কাছে নিয়ে যায় । যখন সেই path এর কাজ শেষ হয় তারপর তাকে children component " Orders " এর কাছে যেতে দেয়

        ]]]]




step - 10 :
- const [user] = useAuthStateChange() and coditional rendering use করে login এর পরই কেবল কিছু compoent এর access দেয়া সেটাও করা যায় [MOdule 58-8 : after 11:00 minutes]

[[[[
    
]]]]



*/

console.log(`   finished----------------------- Special Notes on "  first login then accecess to wesite "  `);









console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 58 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // **************************   59-1 Module Introduction firebase setup and git clone   `);






console.log(`   finished----------------------- Special Notes on " এক repo এর code আরেক repo তে নেবার নিয়ম change-repo transfer-repo set-url  "  `);


/* 
- create a new repo in Github
- open the project in your m/c 
- goto terminal
- check repo's origin : "git remote -v"
- change repo's origin : "git remote set-url origin-link"


*/

console.log(`   finished----------------------- Special Notes on "  এক repo এর code আরেক repo তে নেবার নিয়ম "  `);




console.log(`       // **************************   59-2,3,4,5,6,7,8 Module Summary and list to implement auth    `);






console.log(`   finished----------------------- Special Notes on " create Login and SignUp components and so on "  `);



/**
 * 1. create a new firebase project in console.firebase.google.com 
 * 2. npm install firebase
 * 3. create firebase.init.js and import getAuth to export auth
 * 4. Firebase settings > Authentication > enable Email and password auth
 * 5. Create Login, Signup component, setup route
 * 6. Attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9. if user is created redirect to the expected page
 * 10. useSignInWithEmailAndPassword for Login
 * 11. Create RequireAuth component ==> check user exists also tract user location
 * 12. In route wrap Protected Component by using Require Auth Component
*/
console.log(`   finished----------------------- Special Notes on "  create Login and SignUp components and so on "  `);






console.log(`       // **************************   59-9 (bonus video) Host your react app to firebase    `);






console.log(`   finished----------------------- Special Notes on " hosting in firebase || firebase hosting || firebase-hosting "  `);




/**
 * Firebase hosting steps
 * 1. goto terminal and apply : " npm install -g firebase-tools "" (one time for your computer)
 
 * 2. apply : " firebase login " (one time for your computer)
        * ? Allow Firebase to collect CLI usage and error reporting information? - Yes
     

 * 3. firebase init (one time for each project )
        * select "  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys "
        * select "  Use an existing project "
        * select " PROJECT'S Name "
        * ? What do you want to use as your public directory? - 
 build
        * ? Configure as a single-page app (rewrite all urls
to /index.html)? - Yes
        * ? Set up automatic builds and deploys with GitHub?
- No


 * 4. apply : " npm run build " (every time you want to deploy after any changes)
 * 5. apply : " firebase deploy " (every time you want to deploy after any changes)
 * 
*/
console.log(`   finished----------------------- Special Notes on "  hosting in firebase || firebase hosting || firebase-hosting "  `);










console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 60 || Videos 8 || revise react ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);






console.log(`       // ************************** 60-1 Module Overview and simple review of React    `);






console.log(`   started----------------------- Special Notes on "  60-1 Module Overview and simple review of React    `);


/* 
?- Difference between Framework and Library
        => Framework : its huge in volume, fixed in fasicily of router, state management, etc

        => Library : its small in volume, flexible in nature, can be used in any project any router, state management, etc

?- Components in react?
        => Component : a small piece of code that is used to render a view. it hase some properties. If we analysis Ema-jhon project we see,
                - Shop.js is a "container" component
                - SingleProduct.js is a "Same in Look diffn in data" type component
                - cart.js is a "indivudual" component
                - header.js or footer.js is a "presentational" component

?- What is JSX?
        =>  Its stands for " jasvaScript XML ". It is a syntax extension to JavaScript that allows us to write HTML inside of JavaScript.

?- What is props?
        =>  Its stands for " properties ". But It carries some data from parent to child unidirictionally. which are needed to unwrap by object destructuring.

?- What is Contex API?
        =>  It helps to ignore prop's drilling and carries some data from parent to any child or grand-child and so on which are needed to unwrap by specific way.

?- What is State(useState)?
        =>  Any intentional required changes in a react project is done by using state.

?- What is useEffect?
        =>  its a hook to load any external data 

?- How many kinds of eventHandler in react?
        =>  Upto now 2 type. 
                    1) EventHandler without parameter
                    2) EventHandler with parameter [must be wraped by arrow function]

?- What is react Router ?
        =>  It is a library to handle routing in react. iT allows to create SPA and switch between different views withou loading the whole page by useing,
                - Routes
                - Route
                - BrowserRouter
                - NavLink
                - Link
                - Custom Active Link
                - useNavigate()
                - useLocation()
                - useParams()
                - RequireAuth

?- What is Firebase Authentication ?
        =>  It is third party authentication service. It is used to create user accounts and login, Hosting and Deploying in firebase.

?- What is custom Hook ?
        =>  custom hooks are the hooks created by us for easying our work.


*/


console.log(`   finished----------------------- Special Notes on "  60-1 Module Overview and simple review of React    `);






console.log(`       // ************************** 60-2,3,4,5,6,7,8 react recap zinus car services   `);






console.log(`   started----------------------- Special Notes on " react recap zinus car services   `);


/* 



*/


console.log(`   finished----------------------- Special Notes on " react recap zinus car services   `);






console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 61 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 61-1,2,3,4,5 react recap zinus car services    `);






/* 
[X] useRef(initialValue) hook:
        =>  useRef() hook মুলোত use করা হয় handle###OnBlur function টা অনেক বেশি use না করার জন্য. for example,
                password এর জন্য,
                - create a variable : " const passwordRef = useRef('') "
                - set "ref" attribute in the required input field : " ref={passwordRef} "
                - get the value of the input field in the "handleSubmit" function by : " passwordRef.current.value "


[X] event.target.name.value:
        =>  এটাও use করা হয়  handle###OnBlur function টা অনেক বেশি use না করার জন্য for example,
                password এর জন্য,
                - give the input field a name attribute : " name='password' "
                - get the value of the input field in the "handleSubmit" function by : " event.target.password.value "
                - 
*/




console.log(`   // ************************** 61-1,2,3,4,5 react recap zinus car services  `);





console.log(`       // ************************** 61-6 (optional) Environment variable for Firebase in Create React App    `);





/* 

[X] Hiding firebase.init.js codes:
        =>  এই code গুলা একটা website এর জন্য খুবই secret তাই এদের কে git hub বাঁ অন্য কারো সাথে share করা যাবে না।
                - প্রথমে src folder এর বাহিরে package.json যেখানে আছে সেখানে যেতে হবে
                - then " .env.local " নামের একটা file বানাতে হবে
                - সেখানে firebase.config থেকে পাওয়া সব গুলা apiKey এর জন্য একটা করে variable create করতে হবে তবে সেটা js এর মত হবে না বরং " REACT_APP_apiKeyName=321dfg543fdf3g2gd3g " এর মত হবে কোন ('') দিয়ে wrap করা যাবে না
                - then firebase.config file এর ভিতরে প্রতিটা apiKey এর value হিসেবে process.env.variableName টা বসিয়ে শেষে (,) কমা দিয়ে দিতে হবে

*/







console.log(`   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[Module 61 || Videos 8]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    `);




console.log(`       // ************************** 62-1,2,3,4,5 react recap zinus car services    `);






/* 
[X] conditional rendering:
        => conditional rendering দুই ধরনের 
                ১) direct jsx rendering, format :

                        {condition ? true : false}

                ২) templatestring, format :

                        { `commonCSS ${condition ? 'trueCSS' : 'falseCSS'}` }

[X] disble button with conditional formatings:
        normally attribut disable={true} লিখলেই button disable হয়  যায় কিন্তু কোন আরেকটা element এর সাপেক্ষে conditional rendering দিয়ে করতে গেলে কএকটা কাজ করে নিতে হয়,
                ১) declaare : " const [disable, setDisable] = useState(false) "
                ২) add a click handle to toggle this state in the required element : " onClick={() => setDisable(!disable)} "
                ৩) add a conditional rendering in button element : " disabled={!disable} "
        => conditional attribut is : disabled={condition}

[X] send verify email during register:
        - get element from react-firebase-hook with optional :               
                const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
                ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


        [[[[ this optional part  ({sendEmailVerification: true}) assures that user will get a verification email after register ]]]]

[X] update profile:
        - get element from react-firebase-hook with optional :                           
                const [updateProfile, updating, error4UpdateProfile] = useUpdateProfile(auth);

        - conver the "handleSubmit" function to  asynct-await function
        - send the name or other infos as the value of the user object's property
                await updateProfile({ displayName : name });
                alert('Updated profile');

        [[[[ this optional part  ({sendEmailVerification: true}) assures that user will get a verification email after register ]]]]

[X] react-toast react toast reacttoast instead of alert:
        - goto terminal of the project and apply : 
                " npm install --save react-toastify "

        - in login page  import these css and element : 
                "  import { ToastContainer, toast } from 'react-toastify';
                import 'react-toastify/dist/ReactToastify.css'; "
        - put  <ToastContainer /> component in any position of the page under return statement

*/










































