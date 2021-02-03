let dobro = function (a){
    return a * 2
}

dobro = (a) =>{
    return a * 2
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI));

let ola = function(){
    return 'Olá'
}

ola = () => {
    return 'olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parâmetro

console.log(ola());