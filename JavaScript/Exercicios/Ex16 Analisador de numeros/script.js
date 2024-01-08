let pegarnumero = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
    return true
    } else {
    return false
}
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement(`option`)
        lista.appendChild(item)
        item.text = `Seu número é ${numero.value}`
        res.innerHTML =''
    } else {
        alert('Valor inválido ou ja encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores) {
            media += valores[pos]/total
            soma += valores[pos]
            if(valores[pos] > maior){
            maior = valores[pos]
        } if ( valores[pos] < menor) {
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>O número de elementos adicionados é de ${total}</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores é de ${soma}</p>` 
        res.innerHTML += `<p>A média dos valores é de ${media}`
    }
}
}