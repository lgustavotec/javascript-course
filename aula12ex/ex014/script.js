function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#d7a873'

    } else if (hora >= 12 && hora < 18) {
        
        imagem.src = 'fototarde.png'
        
        document.body.style.background = '#8b9c27'
        // boa tarde!
        
    } else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#342936'
        // boa noite
    }
}
