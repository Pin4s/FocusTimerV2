import * as el from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export let currentSound;
export let soundState;
export function registerControls(){
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
            
        if (typeof actions[action] != 'function'){   
            return
        } 
        actions[action]() //isso aqui é o puro suco da loucura
    })

    
    
    el.soundControls.addEventListener('click', (event => {
        const sound = event.target.dataset.sound;
        
        if(currentSound && currentSound !== sounds[sound]){
            currentSound.pause()
        }

        currentSound = sounds[sound]
        
        if(actions.isMute == false){
            currentSound.volume = 0
        }//else{
        
        sounds[sound].play()
        //}
    }))

   

}


