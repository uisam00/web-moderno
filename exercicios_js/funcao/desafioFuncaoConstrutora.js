/**
 * esse exemplo foi pego do arquivo classeVsFactory.js
 * a diferencia entre uma funcao contrutora e uma classe é pouca, praticamente apenas a escrita
*/
 function Pessoa (nome){
    this.nome = nome
    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()