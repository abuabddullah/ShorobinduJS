// ====================== string + loop related maths ==============



// take a string and print all of their letters in a list manner
/*
let aStringIs = "Hello World";

// first way
for (const letter of aStringIs) {
    console.log(letter);
}
console.log(`---------------------seperator------------------------`);
// second way
for (let i = 0; i < aStringIs.length; i++) {
    const element = aStringIs[i];
    console.log(element);
}
*/




// ====================== string+loop+function related maths ==============



// creat a function where to print a string in opposite direction
/*
let oppString = "Plz reverse me!"

// first way

function reverseString(string2reverse) {
    let getRevesedString = "";
    for (const letter of string2reverse) {
        getRevesedString = letter + getRevesedString
    }
    return getRevesedString
}
reverseString(oppString);
let checkOppString = reverseString(oppString);
console.log(checkOppString);

console.log(`---------------------seperator------------------------`);

// second way 

function reverseString(string2reverse) {
    let getRevesedString = "";
    for (let i = (string2reverse.length - 1); i >= 0; i--) {
        const element = string2reverse[i];
        getRevesedString = getRevesedString + element;
    }
    return getRevesedString;
}
reverseString(oppString);
let checkOppString2 = reverseString(oppString);
console.log(checkOppString2);
*/