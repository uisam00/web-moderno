const notas = [3, 4, 5, 6, 8, 3, 9, 3, 10]

for( let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}