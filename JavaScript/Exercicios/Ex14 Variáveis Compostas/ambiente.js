//para definir um array
let num = [5,8,4]
//Para acrescentar um valor ao array podemos fazer de 2 formas:
//Criando um elemento que antes não existia e adicionando um valor
num[3] = 6
//Ou com o comando "array.push(valor)" ele automaticamente criará um novo elemento com  o valor que foi colocado entre ()
num.push(9)
//Para saber o tamanho do array utilizamos o comando "array.length"
console.log(num.length)
//Aqui estamos mostrando os números dos nossos vetores
console.log(`Nosso vetor é o ${num}`)
//Para classificar (em ordem crescente) os valores do nosso array utilizamos o "array.sort()"
console.log(num.sort())

for(let c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

//Para facilitar o comando de cima utilizamos "for(let variavel in array" Ex:
for (c in num) {
    console.log(`A posição ${c} tem o valor de ${num[c]}`)
}

//Para buscar o valor dentro de um array utilizamos o comando "array.indexOf(valor)" e nos sera retornado a chave "[]" em que o valor está. Caso o valor buscado não seja encontrado será retornado o valor de -1.
console.log(`O valor 9 está na posição ${num.indexOf(9)}`)

if (num.indexOf() == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${num.indexOf(9)}`)
}