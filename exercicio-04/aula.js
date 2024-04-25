// Booleans >>> Usamos para verificar alguma condição dentro do código (Se é verdadeiro ou falso)

//Booleans - True, False
//console.log(true, false)

//Como retornar Booleans
const email = 'brucewayne@gmail.com'
const includes = email.includes('@')
//console.log(includes)

const names = ['Lucas', 'Levi', 'Robert']
const arrayIncludes = names.includes('Lucas')
//console.log(arrayIncludes)

//Operadores de comparação >>> Servem para comparar um valor com outro, e essa comparação vai retornar um Boolean
const age = 31 // Age é igual a 31

//console.log(age == 31) // Age é igual a 31 (true)
//console.log(age == 35) // Age é igual a 35 (false)
//console.log(age != 35) // Age não é igual a 35 (true)
//console.log(age > 31) // Age é maior que 31 (Falso)
//console.log(age >= 31) // Age é maior OU IGUAL A 31 (true)

const name = 'Roger'
//console.log(name =='Roger') // é igual a Roger
//console.log(name > 'Belinha') // Segue a ordem do alfabeto, ou seja, B vem antes de R

//Carcateres minusculos são maiores que caracteres maiusculos

// Igualdade Escrita >>> Vamos sempre usar === (Três sinais de Igual, pois dessa forma, estamos verificando o valor e o tipo).
// Dessa forma não ocorre a conversão de tipo (Ocorre quando usamos o "Igual a" e o "Não Igual a") por de baixo dos panos.

//console.log(age === 31)
//console.log(age === '31')

//console.log(age !== 31)
//console.log(age !=='31')

// Conversão de Tipos 
//Exemplo de conversão de String para numero: 
let score = '100'

//Vamos usar o Number()
score = Number(score)

//console.log(score + 1) // Estamos somando o valor 100 que foi convertido, mais o 1

// Para saber qual o tipo de um elemento, vamos usar o Typeof (Forma explicita)

//console.log(typeof score)


