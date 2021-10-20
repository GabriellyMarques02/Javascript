const peso1 = 1.0 //number, mas é um ponto flutuante.
const peso2 = Number('2.0') //outra forma

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //testa se é inteiro, e é mesmo sendo ponto flutuante.
//Number server tanto para inteiro quanto para flutuante.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // a função toFixed limita as casas decimais

console.log(media.toString(2)) //converte em binario. 
console.log(typeof Number) // com n minusculo é um tipo de dado.
