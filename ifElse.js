// if....else

let temperature = 36.5
let higtTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(higtTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}