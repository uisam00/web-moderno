/**
 * classe vs funcao factory, a vantagem de criar um objeto usando função factory é que não precisa usar o 
 * this o objeto tem consciênciasobre o contexto léxico que ele foi criado
 */

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return{
        nome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Ui Sam")
p2.falar()
// document.getElementsByTagName('body')[0].onclick = p2.falar
console.log(p2)