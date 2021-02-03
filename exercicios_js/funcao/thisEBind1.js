 /** 
  * A funcao bind é responsável por amarrar um objeto para ele ser o dono da execução sempre que o método for chamado
  */
 
 const pessoa = {
     saudacao: 'Bom dia!',
     falar(){
         console.log(this.saudacao)
     }
 }

 pessoa.falar()
 const falar = pessoa.falar

 falar() // conflito entre paradigmas: funcional e OO

 const falarDePessoa = pessoa.falar.bind(pessoa)
 falarDePessoa()