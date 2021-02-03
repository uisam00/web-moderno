const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a, b));
}

imprimirResultado(10, 6 , (a, b) => a - b)
imprimirResultado(10, 6 , (a, b) => a * b)