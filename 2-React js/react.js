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










