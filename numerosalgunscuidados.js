console.log (7 / 0.00001)
console.log (7 / 0) //js tem o tipo infinito.
console.log("10"/2)  //converte automaticamente, cuidado. 
console.log('3'+2) // não soma, string tem preferencia, concatena.
console.log("show!" * 2) // js n]ao multiplica a palavra, tipo: show! show! (NaN = not a number)
console.log(0.1 + 0.7) // js não suporta, gera imprecisões com ponto flutuante.
//console.log(10.toString()) não funciona com o literal.
console. log((10.345).toFixed(2)) //Aqui funciona.