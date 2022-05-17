function carregar(){
    var msg =  window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        //boa noite
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}