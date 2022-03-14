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
let x = {};
console.log('value of x is', x)
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is Falsy');
}