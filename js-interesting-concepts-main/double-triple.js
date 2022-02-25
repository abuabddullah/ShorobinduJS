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
console.log(first === second);; // false