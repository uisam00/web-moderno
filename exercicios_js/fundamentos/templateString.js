const nome = 'Rafaela'
const concatenacao = 'Olá ' + nome +'!' //contetacao feia

const template = ` 
    Olá
    ${nome} !` // concatenacao com template string

console.log(concatenacao, template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`) // é possível realizar operacoes dentro do template string


/* funcao que recebe uma string
 * e converte todas as letras em maiúsculas
 */
const up = texto => texto.toUpperCase() 

/* abaixo mostra como é possivel chamar 
 *uma funcao dentro de um template string
 */
console.log(`Ei... ${up('cuidado')}!`)