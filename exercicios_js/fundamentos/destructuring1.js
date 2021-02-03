/**
 * operador destructuring é uma forma de tirar dados de dentro de uma estrutura
 */

// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Mauy Peixoto',
        numero: 998
    }
}

const { nome, idade } = pessoa

console.log(nome, idade);

const { nome: n, idade: i } = pessoa

console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro: log, numero: num, cep} } = pessoa
console.log(log, num,cep);
