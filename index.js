import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let routeLength = document.querySelector('#routeLength')
let routeLengthLabel = document.querySelector('#routeLengthLabel')

let averageSpeed = document.querySelector('#averageSpeed')
let averageSpeedLabel = document.querySelector('#averageSpeedLabel')

let tramsInterval = document.querySelector('#tramsInterval')
let tramsIntervalLabel = document.querySelector('#tramsIntervalLabel')

let trams = document.querySelector('#trams')

/* function findTramsFormula() {
    return (routeLength / averageSpeed * 60) / tramsInterval
} */

update()

routeLength.addEventListener('input', () => {
    routeLengthLabel.innerHTML = `Route Length ${routeLength.value} km`
    update()
})

averageSpeed.addEventListener('input', () => {
    averageSpeedLabel.innerHTML = `Average Speed ${averageSpeed.value} km/h`
    update()
})

tramsInterval.addEventListener('input', () => {
    tramsIntervalLabel.innerHTML = `Trams Interval ${tramsInterval.value} min`
    update()
})

function update() {
    trams.innerHTML = `Trams: ${((routeLength.value / averageSpeed.value * 60) / tramsInterval.value).toFixed(2)}`
}