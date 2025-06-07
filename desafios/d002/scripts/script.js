function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#iano')
    var res = document.querySelector('div#res')
    if (fano.value.length != 4 || Number(fano.value) > ano || fano.value == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 19) {
                //adolescente
                img.setAttribute('src', 'adolescente-m.png')
            } else if (idade < 30) {
                //jovem-adulto
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else if (idade >=60) {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
            } else if (idade < 19) {
                //adolescente
            } else if (idade < 30) {
                //jovem-adulto
            } else if (idade < 60) {
                //adulto
            } else {
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
}