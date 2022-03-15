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