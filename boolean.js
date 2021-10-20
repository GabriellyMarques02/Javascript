// testando valores booleanos no js.

isAtivo =  true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // nega o positivo e dois nega o negativo, voltando a ser positivo.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) // não é um numero
console.log(!!undefined) //significa que uma variável foi declarada, mas ainda não foi atribuída um valor (desconhecido)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(('' || null || 0 || 'epa')) // retorna o primeiro valor verddeiro que ele encontrou.
console.log(!!('' || null || 0 || ' ')) // converte para verdadeiro ou falso.

//exemplo prático:

let nome = ''

console.log(nome || 'Desconhecido') // imprime o nome ou desconhecido se não tiver nada(falso).
//Ou ajuda a ter um valor padrão.








