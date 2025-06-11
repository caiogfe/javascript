function contar() {
    let ini = document.querySelector('input#itxtini')
    let fim = document.querySelector('input#itxtfim')
    let pas = document.querySelector('input#itxtpas')
    let res = document.querySelector('p#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0)  {
        window.alert('[ERRO] Estão faltando dados!')
    } else {
        res.innerHTML = 'Contando: '    
        let i = Number(ini.value)    
        let f = Number(fim.value)
        let p = Number(pas.value)

        for(let cont = i; cont <= f; cont += p) {
            res.innerHTML += `${cont} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}