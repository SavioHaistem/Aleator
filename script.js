
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

    var butt = window.document.getElementById('ativo')
    butt.classList.remove('anim')

    var resposta = window.document.getElementById('output')
    var resultados = window.document.getElementById('here')

    var num = window.document.getElementById('luckyN')
    var anim = window.document.getElementById('agua')
    
    anim.classList.add('anim2')
    num = Number(num.value)

    res = Math.floor(Math.random() * (num - 1 + 1)) + 1
    

    resposta.innerHTML = `${res}`
    resultados.innerHTML += `<div id=ball${res} class="balls" onclick="removeball()">${res}</div>`
    
} 
function removeball(){
    console.log('ata')
    let balls = window.document.getElementsByClassName('balls')
    balls.innerHTML = "" 
}