/* global:  js এর open field অর্থাৎ কোন ব্রাকেট এর বাইরের জায়গাকে gobal space বলে . 
-nonKeyWord / var  দিয়ে declare করা varible গুলো block space
-এদেরকে hoisting করা যায় অর্থাৎ delcare এর আগে console.log করা যায়

block : js এর ভিতরের কোন ব্রাকেট থাকলে ঐ ব্রাকেটের ভিতরের জায়গাকে block space বলে। 
-let / const  দিয়ে declare করা varible গুলো block space
-এদেরকে hoisting করা যায় না অর্থাৎ delcare এর আগে console.log করা যায় না */




// examplesssz:
const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;

    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);