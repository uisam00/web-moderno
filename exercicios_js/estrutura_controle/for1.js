let contador = 1
/* while(contador <=10){
    console.log(`Contador = ${contador++}`);
}

for (let index = 1; index <= 10; index++) {
    console.log(`Index = ${index}`);
}*/

const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10: case 9:
            console.log('Qaudro de Honra, nota: ' + nota)
            break
        case 8: case 7:
            console.log('Aprovado com nota: ' + nota);
            break
        case 6: case 5: case 4:
            console.log('Recuperação com nota: ' + nota);
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado com nota: ' + nota);
            break
        default:
            console.log('Nota inválida: ' + nota);
    }
    console.log('Fim!');
}


const notas = [3, 4, 5, 6, 8, 3, 9, 3, 10]

for (let index = 0; index < notas.length; index++) {
    imprimirResultado(notas[index])
    
}