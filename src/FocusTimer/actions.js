import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as events from './events.js'


export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset(){
    timer.updateDisplay()
    state.isRunning = document.documentElement.classList.remove('running')
}

export function increase(){    
    let minutes = Number(el.minutes.textContent)
    if(minutes == 60){
        alert('tempo maximo atingido!')
    } else{
        minutes++
        timer.updateDisplay(minutes)
    }
}

export function decrease(){
    let minutes = Number(el.minutes.textContent)
    if(minutes == 1){
        alert('Defina um tempo minimo maior que 0!')
    }else{
        minutes--
        timer.updateDisplay(minutes)
    }
}


//essa porra dessa parte do caralho aqui é pra mutar a porra da musica (deu um trabalho desgraçado até eu descobrir oq fazer)
//

export let isMute = document.documentElement.classList.contains('soundOn')
export const buttonPauseSound = document.getElementById('pause-sound');
buttonPauseSound.addEventListener('click', () => {
    document.documentElement.classList.toggle('soundOn')
    isMute =! isMute
    
    //events.currentSound.pause()
    if(events.currentSound == undefined){
        return
    }
    if(isMute == false){
        events.currentSound.volume = 0;
    }else{
        events.currentSound.volume = 1;
    }
    
})

