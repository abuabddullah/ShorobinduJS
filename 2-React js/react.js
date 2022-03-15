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
    document.getElementById('allCountriesHolder').innerHTML = countriesList.join(' ')
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




















