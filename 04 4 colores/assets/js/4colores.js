let blue = document.getElementById('blue')
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')

function pintar(div, color = 'black'){
    div.style.backgroundColor = color
}

blue.addEventListener('click', function(){
    pintar(blue)
})

red.addEventListener('click', function(){
    pintar(red)
})

yellow.addEventListener('click', function(){
    pintar(yellow)
})

green.addEventListener('click', function(){
    pintar(green)
})