const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}: ${nome}`);
}

fabricantes.forEach(imprimir)
// fabricantes.forEach(function (nomeFabricante){console.log(nomeFabricante)})
fabricantes.forEach( nomeFabricante => console.log(nomeFabricante))