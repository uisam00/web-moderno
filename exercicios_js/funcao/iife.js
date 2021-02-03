// IIFE -> Immediately invoked function expression. É uma function expression
// ajuda a fugir do escopo global, pode definir dentro dela constantes, variáveis funções, sem estar tocando o escopo global
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()