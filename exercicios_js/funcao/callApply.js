// Call e applay são maneiras duas de executar funções
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc=0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}
// call
console.log(getPreco.call(carro, 0.17, '$')) //parametros diretamente dentro da função
//apply
console.log(getPreco.apply(global,[0.17, '$'])) //parametros dentro de um array
