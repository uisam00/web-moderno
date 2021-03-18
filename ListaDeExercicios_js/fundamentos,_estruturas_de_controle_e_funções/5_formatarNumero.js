function formatarNumeroDecimal(decimal){
    reais = `R$ ${decimal.toFixed(2).toString().replace(".", ",")}`
    console.log(reais)
}


formatarNumeroDecimal(0.1 + 0.2)