// Armazenando uma funcao em uma variável
const imprimirSoma = function (a , b) {
    console.log( a + b )
}

imprimirSoma( 2,3 )

// Armazenando uma funcao arrow em uma variável
const soma = ( a , b ) => {
    return a + b 
}

console.log( soma( 2 , 4 ) )

//retorno implícito
const subtracao = ( a, b ) => a - b

console.log( subtracao( 4 , 2 ) )

const imprimir2 = a => console.log( a )

imprimir2("Show!")