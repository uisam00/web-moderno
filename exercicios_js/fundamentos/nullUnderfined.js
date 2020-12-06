let valor // não inicializada
console.log(valor) // underfined

valor = null
console.log(valor)

// console.log(valor.toString()) //Erro!

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evitar atribuir underfined
// delete produto.preco forma de tirar um atributo de um objeto
console.log(produto)

produto.preco = 0 //free
produto.preco = null //sem preco

console.log(!!produto.preco) // útil teste para saber se o preco está setado

console.log(produto)