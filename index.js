function getNumbers() {
    var leftNumber = document.querySelector('.left').value
    var rightNumber = document.querySelector('.right').value
    return {
        leftValue: leftNumber, 
        rightValue: rightNumber,
    }
}

var plus = document.querySelector('.plus')
var minus = document.querySelector('.minus')
var multiply = document.querySelector('.multiply')
var divide = document.querySelector('.divide')

function addition() {
    var lijeviBroj = parseInt(getNumbers().leftValue, 10)
    var desniBroj = parseInt(getNumbers().rightValue, 10)
    console.log(lijeviBroj + desniBroj)
    return updateDisplay(lijeviBroj + desniBroj)
}

function subtraction() {
    var lijeviBroj = parseInt(getNumbers().leftValue, 10)
    var desniBroj = parseInt(getNumbers().rightValue, 10)
    console.log(lijeviBroj - desniBroj)
    return updateDisplay(lijeviBroj - desniBroj)
}

function updateDisplay(rezultat) {
    var display = document.querySelector('.display')
    display.innerText = rezultat
}
plus.onclick = addition
minus.onclick = subtraction