function potencia(base, expoente){
    let potencia = 1
    for(let index = 0; index < expoente; index++){
        potencia *= base
    }
    return potencia
}
console.log(potencia(4,3))

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))