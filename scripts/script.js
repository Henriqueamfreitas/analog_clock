const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");


function executarRelógio(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milSeconds = date.getMilliseconds()

    let posicaoSeg = seconds*6
    let posicaoMilSeconds = milSeconds*6/1000 + posicaoSeg
    let posicaoMin = minutes*6+posicaoSeg/60
    let posicaoHr = hours*30+posicaoMin/60
    const fullHour = document.querySelector(".fullHour")
    if(seconds.toString().length === 1){
        seconds=`0${seconds}`
    }

    if(minutes.toString().length === 1){
        minutes=`0${minutes}`
    }

    if(hours.toString().length === 1){
        hours=`0${hours}`
    }
    fullHour.innerHTML=`${hours}h ${minutes}min ${seconds}s`
    
    PONTEIROHORA.style.transform = "rotate("+ posicaoHr + "deg)"
    PONTEIROMINUTO.style.transform = "rotate("+ posicaoMin + "deg)"
    // Se quiser deixar num fluxo constante, deixe esse
    PONTEIROSEGUNDO.style.transform = "rotate("+ posicaoMilSeconds + "deg)"
    // Se o segundo for "quebrando" de segundo em segundo, deixe esse
    // PONTEIROSEGUNDO.style.transform = "rotate("+ posicaoSeg + "deg)"
}

setInterval(executarRelógio, 10)
