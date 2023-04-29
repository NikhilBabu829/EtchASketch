const main = document.querySelector('.main')

const draw = document.querySelector('.draw')

const erase = document.querySelector('.erase')

const rainbow = document.querySelector('.rainbow')

click = true

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

const callBack = (i)=>{
    div[i].style.backgroundColor = 'black'
}

const drawing = ()=>{
    for(let i=0;i<div.length;i++){
        div[i].addEventListener('mouseover',()=>{
            if(click){
                div[i].style.backgroundColor = 'black'
            }
        })
        click = true
    }  
}

const erasing = ()=>{
    for(let i=0;i<div.length;i++){
        div[i].addEventListener('mouseover',()=>{
            if(click){
                div[i].style.backgroundColor = 'white'
            }
        })
        click = true
    }
}

const rainBowColor = ()=>{
    for(let i=0;i<div.length;i++){
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        div[i].addEventListener('mouseover',()=>{
            if(click){
                div[i].style.backgroundColor = `rgb(${r},${g},${b})`
            }
        })
        click = true
    }
}

draw.addEventListener('click',()=>{
    drawing()
})

erase.addEventListener('click',()=>{
    erasing()
})

rainbow.addEventListener('click',()=>{
    rainBowColor()
})

document.querySelector('body').addEventListener('click',()=>{
    click = !click
})
