/* 
কোন varible এর value শুধুমাত্র নিচের কারন গুলোর জন্য undifined হবে,

1. variable value not assigned
2. function but didn't write return 
3. just wrote return but didn't return anything
4. argument for parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined


কোন varible এর value শুধুমাত্র নিচের কারন গুলোর জন্য null হবে,
9. null হবে তখনি যখন value explicitly set value to null

*/

// 1. variable value not assigned
let first; // value not assigned
console.log(first);


// 2. function but didn't write return 
function second(x, y) {
    document.getElementById('sum'); // didn't write return in the function
}
const result = second(3, 91);
console.log(result);


// 3. just wrote return but didn't return anything
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return; // wrote return but didn't return anything
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
console.log(fourth)



// 4. argument for parameter that isn't passed
function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result;
}
double(81); // argument for parameter b  that isn't passed



// 5. property that doesn't exist in an object
const fifth = {
    name: 'sogir',
    age: 15,
    location: 'bandarbon'
};
console.log(fifth.phone); // phone property doesnt exist in the object fifth



// 6. accessing array element out of range
const sixth = [54, 12, 41, 31];
console.log(sixth[4]) // here index 4 is out of range cause maximum index is 3

// 7.accessing deleted array element
delete sixth[2]; // index 2 is deleted
console.log(sixth[2]); // here index 2 is deleted so it will be undefined

// 8. explicitly set value to undefined
const seventh = undefined;
console.log(seventh);


// 9. null হবে তখনি যখন value explicitly set value to null
const myObj = {
    name: 'samad',
    profession: null
}