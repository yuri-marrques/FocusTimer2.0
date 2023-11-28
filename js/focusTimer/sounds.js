export const coffee = new Audio ('./assets/Cafeteria.wav')
export const rain = new Audio ('./assets/Chuva.wav')
export const forest = new Audio ('./assets/Floresta.wav')
export const fire = new Audio ('./assets/Lareira.wav')

coffee.loop = true
rain.loop = true
forest.loop = true
fire.loop = true

export function resetSounds(){
    coffee.pause()
    rain.pause()
    forest.pause()
    fire.pause()
}