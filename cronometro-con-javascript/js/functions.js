let start = document.querySelector('button.start')
let pause = document.querySelector('button.pause')
let reset = document.querySelector('button.reset')

let minutes = document.querySelector('div.minutes')
let seconds = document.querySelector('div.seconds')

let segundosTranscurridos = 55
let minutosTranscurridos = 0

let enPausa = false

let iniciar = function () {
    if (!enPausa) {
        segundosTranscurridos++

        if (segundosTranscurridos == 60) {
            minutosTranscurridos++
            segundosTranscurridos = 0
        }

        mostrarTiempo(minutes, minutosTranscurridos)
        mostrarTiempo(seconds, segundosTranscurridos)
    }
}

let timer = null

start.addEventListener('click', function () {
    deshabilitar(start)
    habilitar(pause)
    habilitar(reset)

    timer = setInterval(iniciar, 1000)
})

pause.addEventListener('click', function () {
    enPausa = !enPausa
})

reset.addEventListener('click', function () {
    clearInterval(timer)

    segundosTranscurridos = 0
    minutosTranscurridos = 0
    
    mostrarTiempo(minutes, minutosTranscurridos)
    mostrarTiempo(seconds, segundosTranscurridos)

    habilitar(start)
    deshabilitar(pause)
    deshabilitar(reset)
})

function agregarCero(n) {
    if (n < 10) {
        return '0' + n
    }

    return n
}

function habilitar(el) {
    el.removeAttribute('disabled')
}

function deshabilitar(el) {
    el.setAttribute('disabled', '')
}

function mostrarTiempo(el, t) {
    el.innerHTML = agregarCero(t)
}
