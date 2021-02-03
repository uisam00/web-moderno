/* 
    Factory é uma função que retorna um objeto, tem o objetivo de fabricar uma instância de um objeto
*/

// Factory simples 

function criarProduto(nome, preco){
    return{
        nome,
        preco, 
        desconto: 0.1
    }
}

const produto1 = criarProduto('Vassora', 15.97)
const produto2 = criarProduto('Notebook', 5899,60)

console.log(produto1)
console.log(produto2)