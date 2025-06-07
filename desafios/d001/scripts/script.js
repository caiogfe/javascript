function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#paisagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.png"
        document.body.style.background = '#ebe9b9'
        document.getElementById('rodape').style.backgroundColor = '#747358'
    } else if (hora >= 12 && hora < 19) {
        img.src = "imagens/tarde.png"
        document.body.style.background = '#f0845d'
        document.getElementById('rodape').style.backgroundColor = '#703b28'
    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = '#03173d'
        document.getElementById('rodape').style.backgroundColor = '#010a1b'
    }
}