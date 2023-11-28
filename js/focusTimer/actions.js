import state from "./state.js"
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function playCountdown(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}   

export function addMinutes(){
    let newMinutes = timer.addMinutes()
    timer.updateDisplay(newMinutes)
}

export function removeMinutes(){
    let newMinutes = timer.removeMinutes()
    timer.updateDisplay(newMinutes)
}

export function forestSound(){
    sounds.resetSounds()
    sounds.forest.play()
}
export function rainSound(){
    sounds.resetSounds()
    sounds.rain.play()
}
export function coffeeSound(){
    sounds.resetSounds()
    sounds.coffee.play()
}
export function fireSound(){
    sounds.resetSounds()
    sounds.fire.play()
}

