function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){
        //dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#c0d7e2'
    }else if(hora >= 12 && hora < 18){
        // tarde
        img.src = 'fototarde.png'
        document.body.style.background ='#e47f24'
    }else{
        //noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#2b4046'
    }

}
