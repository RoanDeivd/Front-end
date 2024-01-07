function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#ano')
    var res = document.querySelector('.res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        //Para criar/carregar uma imagem utilizando js fazemos desta forma:
        //Primeiro criamos as variaveis e damos a ela um id
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/criancas.jpg')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescentes.jpg')
            } else if (idade <65) {
                // Adulto
                img.setAttribute('src', 'imagens/adultos.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosos.jpg')
            }
        } else if (sex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/criancas.jpg')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescentes.jpg')
            } else if (idade <65) {
                // Adulto
                img.setAttribute('src', 'imagens/adultos.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosos.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.</br>`
        res.style.textAlign = "center"
        res.appendChild(img)
        img.style.width = '250px'
        img.style.borderRadius = '10px'
    }
}