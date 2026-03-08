let key = document.getElementById('key')

document.addEventListener('keydown', function(event) {
    if (event.key === 'a'){
        key.style.backgroundColor = 'pink'
    }else if (event.key === 's'){
        key.style.backgroundColor = 'orange'
    }else if (event.key === 'd'){
        key.style.backgroundColor = 'lightblue'
    }else if (event.key === 'q'){
        let nuevoDiv = document.createElement('div')
        nuevoDiv.style.width = '200px'
        nuevoDiv.style.height = '200px'
        nuevoDiv.style.backgroundColor = 'purple'
        document.body.appendChild(nuevoDiv)
    } else if (event.key === 'w'){
        let nuevoDiv = document.createElement('div')
        nuevoDiv.style.width = '200px'
        nuevoDiv.style.height = '200px'
        nuevoDiv.style.backgroundColor = 'gray'
        document.body.appendChild(nuevoDiv)
    } else if (event.key === 'e'){
        let nuevoDiv = document.createElement('div')
        nuevoDiv.style.width = '200px'
        nuevoDiv.style.height = '200px'
        nuevoDiv.style.backgroundColor = 'brown'
        document.body.appendChild(nuevoDiv)
    }
})
