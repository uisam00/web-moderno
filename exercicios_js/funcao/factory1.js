/* 
    Factory é uma função que retorna um objeto, tem o objetivo de fabricar uma instância de um objeto, usando factory o this não varia
*/

// Factory simples 

function criarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome
    }
}

const pessoa1 = criarPessoa('Ui Sam', 'dos Santos')

console.log(pessoa1);