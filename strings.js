const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o indice 4 no caso r

console.log(escola.charAt(5)) //retorna vazio, mas não gera erro.

console.log(escola.charCodeAt(3)) //retorna o valor do 3 na tabela asc.

console.log(escola.indexOf('3')) //fazendo o inverso, mostra o que está no indice 3.

console.log(escola.substring(1)) //vai exibir a partir do indice 1
console.log(escola.substring(0, 3)) //passando o primeiro indice e o ultimo para exibir, sem incluir o ultimo indice

console.log('Escola '.concat(escola).concat("!")) //junta tudo (literal + escola), concatena.
console.log('Escola '+ escola + "!") // mesmo resultado como o de cima, concatena.

console.log(escola.replace(3, 'e')) //substitui 3 em cod3r por e.

console.log(escola.replace(/\d/, 'e')) // essa expressão em vermelho vai mudar 3 por e. 

console.log('Ana, Maria, Pedro'.split(','))//converte em array. Com . fica tudo nulo.

/* Strings são uma cadeia de caracteres que são delimitada por ' ', " ",
ou ` `.*/

