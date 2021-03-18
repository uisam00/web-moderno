// função importante da função object

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //retorna o objeto em formato de array



Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, // se a propriedade pode ser listada
    writable: false, // se a propriedade pode ser sobrescrita
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'

Object.entries(pessoa).forEach( ([chave, valor]) => { // usando operador destructuring
    console.log(`${chave}: ${valor}`)  //percorre todos as chaves e valores do objeto como se fosse um array
  })
  console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const a1 = { b: 2}
const a2 = {c: 3, a: 4}
const obj = Object.assign(dest, a1, a2) // concatena varios atributos de objetos em um outro objeto
console.log(obj)