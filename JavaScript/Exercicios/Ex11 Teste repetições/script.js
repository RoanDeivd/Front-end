function contar() {
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let cont = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || cont.value.length == 0) {
        alert('Faltam Dados!')
    } else {
        res.innerHTML = 'Contando:  '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(cont.value)
        if ( p <= 0) {
            alert('Passo inválido! Considerando Passo = 1')
            p = 1
        }
        if ( i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} - `
        }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c-=p)
            res.innerHTML += `${c} - `
        }
        res.innerHTML += "."
    }
}