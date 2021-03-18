// cosntante aponta pra um endereco de memoria, e dentro desse endereço está o objeto, por isso pode mexer no objeto dentro de uma constante
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa =  {nome: 'Ana'} // nessa linha estou tentando fazer com que pessoa aponte para outro endereço de memoria, por isso da erro

Object.freeze(pessoa) // congela o objeto, em outras palavras faz com que o objeto também seja constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua do Perada'
delete pessoa.nome

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'}) //cria a referencia e o objeto constantes
pessoa.pessoaConstante = 'Maria'
console.log(pessoaConstante)