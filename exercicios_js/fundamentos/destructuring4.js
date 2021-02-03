/**
 * mesmo exemplo da passada com array 
 */

function rand([min = 0, max = 1000]){

   if(min>max) [min, max] = [max, min]
   const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 60]))
console.log(rand([588]))
console.log(rand([, 588]))
console.log(rand([]))
console.log(rand([1010]))

