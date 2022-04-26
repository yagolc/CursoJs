function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro data invalida confira os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebe-m.png')

            }else if(idade == 21){
                //yago
                img.setAttribute('src', 'yago.png')
                
            }else if (idade == 22){
                img.setAttribute('src', 'jaime.png')

            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebe-f.png')

            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}