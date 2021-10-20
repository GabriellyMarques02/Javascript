const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = ` 
    Olá
    ${nome}!` //quebra a linha, usa mais variaveis em templates.

console.log(concatenacao, template)

//expressoes/metodos... Com template
console.log(`1 + 1 = ${1 + 1}`) // interpreta o que ta dentro do {}

//Criando uma função pequenina.
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up ('cuidado')}!`) //chamando a função, resultado cuidado com letra maiuscula.

