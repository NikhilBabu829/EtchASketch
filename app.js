const main = document.querySelector('.main')

const draw = document.querySelector('.draw')

const erase = document.querySelector('.erase')

const gridSizing = (size)=>{
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const newDiv = document.createElement('div')
            main.appendChild(newDiv)
        }
    }
}

gridSizing(16)

const div = document.querySelectorAll('div')

const drawing = ()=>{
    for(let i=0;i<div.length;i++){
        div[i].addEventListener('mousedown',()=>{
            div[i].style.backgroundColor = 'black'
        })
    }
}

const erasing = ()=>{
    for(let i=0;i<div.length;i++){
        div[i].addEventListener('mousedown',()=>{
            div[i].style.backgroundColor = 'white'
        })
    }
}


draw.addEventListener('click',()=>{
    drawing()
})

erase.addEventListener('click',()=>{
    erasing()
})
