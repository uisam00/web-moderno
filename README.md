# Curso de desenvolvimento Web
Esse repositório serve para armazenar os conhecimentos sobre desenvolvimento web

A cada commit atualizarei esse documento adicionando os conceitos que aprendi.


#PRIMEIRO COMMIT:
  organizacao.js
  -- Sentenca de código
  -- Bloco de código

  comentarios.js
  -- Comentário de uma linha
  -- Comentário de múltiplas linhas
  -- Comentário de múltiplas linhas organizaco com *

  variaveisEConstantes.js
  -- Criacao de variáveis, tipo var e tipo let
  -- Criacao de constantes

  tipagemFraca.js
  -- Uma variável em javascript pode assumir diferentes tipos de dados
  -- Evitar nome genéricos e siglas

  numeros.js
  -- Funcao Number(''), converte string em number
  -- Number.isInteger(), funcao para saber se o valor é um inteiro ou não
  -- toFixed(), funcao para retornar o valor com quantas casas decimais for necessária
  -- toString(), funcao para retornar o valor como string
  -- toString(2), funcao para retornar o valor como string convertido em binário
  -- typeof, mostrar o tipo da viriável ou constante

  numerosAlgunsCuidados.js
  -- Operacao de divisao com divisor 0 não gera um erro, gera um infinito
  -- console.log("10" / 2), da para fazer algumas operações com string, porém deve sempre ter cuidado
  -- O operador + irá concatenar os se ouver uma String e um número, exemplo: '3' + 2
  -- console.log("Show!" / 2), retorna (NaN) Not a Number
  -- console.log(0.1 + 0.7), gera uma imprecisao
  -- console.log((10.345).toFixed(2)), funcao que quebra as casa decimais do numero literal

  math.js
  -- Math.PI é uma constante dentro da classe Math
  -- Math.pow() é uma funcao dentro da classe Math que calcula potencia

  strings.js
  -- charAt(1), pega um determinado caracter dentro da string 
  -- indexOf('d'), pega o indice do caracter dentro da string
  -- substring(1), pega um recorte da string a partir do indice passado como parametro
  -- substring(0, 3), pega um recorte da string a partir do indice inicial e do indice final passados como parametros
  -- replace(3, 'e') e replace( /\d/,  'e'), as duas sentenças abaixo geram o mesmo resultado, a primeira substitui o caracter que está na posição 3 e a segunda substitui todos os dígitos
  -- replace( /\w/g,  'e')), substitui todos os caracteres da string

  templateString.js
  -- o template string deixa o código mais limpo e mais maleável 
  -- é possível realizar operacoes dentro do template string de uma forma mais simples
  -- é possivel chamar uma funcao dentro de um template string
