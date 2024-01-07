function carregar() {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F2EC91'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = "#023859"
    }
}
