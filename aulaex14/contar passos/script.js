function Verificar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let tamanho = window.document.getElementById('txtt')
    let res = window.document.getElementById('resultado')
    if(ini.value.length == 0 || fim.value.length == 0 || tamanho.value.length == 0){
        window.alert('erro falta de dados')
    }
    else{
        res.innerHTML= 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let t = Number(tamanho.value)
        if(t <= 0){
            window.alert('Passo invalido!!! Considerando passo 1')
            t = 1
        }
        if( i < f ){
            for(var c = i; c < f; c += t){
                res.innerHTML += `${c} \u{1f449}`
        }
        } else{
            for(let c = i ; c > f; c-=t){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        
        res.innerHTML += `\u{1f3c1} chegou no fim `
    }
}