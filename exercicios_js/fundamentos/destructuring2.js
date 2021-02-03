/**
 * destructuring em arrays
 */

const [a] = [10]

console.log(a)
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);


//---------------------------//
//Jeito mais fácil para entender
const array1 = [9, 2, 3, 4]

const [a1, , a3, ,] = array1

console.log(a1, a3);