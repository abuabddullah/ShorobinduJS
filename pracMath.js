const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['a', 'c', 'd'];

// Function definition with passing two arrays
function findCommonElement(array1, array2) {

    // Loop for array1
    for (let i = 0; i < array1.length; i++) {

        // Loop for array2
        for (let j = 0; j < array2.length; j++) {

            // Compare the element of each and
            // every element from both of the
            // arrays
            if (array1[i] === array2[j]) {

                // Return if common element found
                console.log(true);
            }
        }
    }

    // Return if no common element exist
    console.log(false);
}

console.log(findCommonElement(array1, array2));