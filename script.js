
var butt = window.document.getElementById('sort')

butt.addEventListener('click', sorter)
butt.addEventListener('mouseenter', entra)
butt.addEventListener('mouseout',sair)

function entra() {
 
    var butt = window.document.getElementById('sort')
    butt.setAttribute('id','ativo')
    butt.classList.add('anim')
    //butt.style.background = 'whitesmoke'
}
function sair() {
    var butt = window.document.getElementById('ativo')
    butt.setAttribute('id','sort')
}



function sorter() {

    var resposta = window.document.getElementById('resultado')
    var resultados = window.document.getElementById('Banner')

    var num = window.document.getElementById('luckyN')
    
    num = Number(num.value)

    res = Math.floor(Math.random() * (num - 1 + 1)) + 1
    

    resposta.innerHTML = `${res}`
    resultados.innerHTML += `<div id=dado${res} class="dados" onclick="removeball()">${res}</div>`
    
} 
function removeball(){
    console.log('ata')
    let balls = window.document.getElementsByClassName('balls')
    balls.innerHTML = "" 
}