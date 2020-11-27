const escola = "Cod3r"

console.log(escola.charAt(0)) // pega um determinado caracter dentro da string 

console.log(escola.charCodeAt(3)) // pega o código do caracter dentro da string

console.log(escola.indexOf('d')) // pega o indice do caracter dentro da string

console.log(escola.substring(1)) // pega um recorte da string apartir do indice passado como parametro

/* pega um recorte da string apartir do indice inicial 
 * e do indice final passados como parametros
 */
console.log(escola.substring(0, 3)) 
/*
 * As duas sentenças abaixo servem para concatenar strings
 */
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola +"!")

/* As duas sentenças abaixo geram o mesmo resultado 
 * a primeira substitui o caracter que está na posição 3
 * a segunda substitui todos os dígitos
 */
console.log(escola.replace(3, 'e'))
console.log(escola.replace( /\d/,  'e'))


console.log(escola.replace( /\w/g,  'e')) //substitui todos os caracteres da string

/* As duas sentenças abaixo geram um array a partir de um
 * uma string, passando como parametro o delimitador para a função split() 
 */
console.log('Ana, Maria, Predo'.split(','))
console.log('Ana, Maria, Predo'.split(/,/))