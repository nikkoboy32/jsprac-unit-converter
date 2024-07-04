/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberInput = document.querySelector('.app_header_input')
const button = document.querySelector('.button')
const meterSection = document.querySelector('.meter_section')
const literSection = document.querySelector('.liter_section')
const kilogramSection = document.querySelector('.kilogram_section')

button.addEventListener('click', function() {
   
    meterSection.innerHTML = convertMeter()
    literSection.innerHTML = convertLiter()
    kilogramSection.innerHTML = convertKilogram()

})


function convertMeter() {
    const inputValue = numberInput.value;
    let meterResult = inputValue * 3.281
    let feetResult = inputValue * 0.3048

    return `<p>${inputValue} meters = ${meterResult.toFixed(3)} feet | ${inputValue} feet = ${feetResult.toFixed(3)} meters</p>`
}

function convertLiter() {
    const inputValue = numberInput.value;
    let litersResult = inputValue * 0.264
    let gallonsResult = inputValue * 3.78541

    return `<p>${inputValue} liters = ${litersResult.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsResult.toFixed(3)} liters</p>`
}

function convertKilogram() {
    const inputValue = numberInput.value;
    let massResult = inputValue * 2.204
    let kiloResult = inputValue * 0.453592

     return `<p>${inputValue} kilos = ${massResult.toFixed(3)} pounds | ${inputValue} pounds = ${kiloResult.toFixed(3)} kilos</p>`
}

