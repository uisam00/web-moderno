const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // funcao para saber se o valor é um inteiro ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // funcao oara retornar o valor com quantas casas decimais for necessária
console.log(media.toString()) // funcao para retornar o valor como string
console.log(media.toString(2)) // funcao para retornar o valor como string convertido em binário
console.log(typeof media) // mostrar o tipo da viriável ou constante
console.log(typeof Number)