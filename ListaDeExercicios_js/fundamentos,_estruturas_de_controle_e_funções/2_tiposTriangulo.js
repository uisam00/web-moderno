function tipoTriangulo(lado1, lado2, lado3){
    if( (lado1 === lado2) && (lado2 === lado3) ){
        tipo = 'Equilátero'
    }else if((lado1 !== lado2) && (lado2 !== lado3) && (lado3 !== lado1)){
        tipo = 'Escaleno'
    }else{
        tipo = 'Isósceles'
    }
    return tipo
}
console.log(tipoTriangulo(3,3,3))
console.log(tipoTriangulo(3.3,3,3))
console.log(tipoTriangulo(3.3,3.2,3))