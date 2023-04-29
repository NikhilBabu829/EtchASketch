const main = document.querySelector('.main')

const draw = document.querySelector('.draw')

const erase = document.querySelector('.erase')

const rainbow = document.querySelector('.rainbow')

const reset = document.querySelector('.reset')

const input = document.querySelector('.inputRange')

click = true

globalSize = 16

const gridSizing = (size)=>{
    console.log(parseInt(420/size))
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const newDiv = document.createElement('div')
            newDiv.setAttribute("style",`width : ${parseFloat(420/size)}px`,`height : ${parseFloat(420/size)}px`,"backgroundColor : 'white")
            newDiv.style.width = `${parseFloat(420/size)}px`
            newDiv.style.height = `${parseFloat(420/size)}px`
            newDiv.style.backgroundColor = 'white'
            main.appendChild(newDiv)
        }
    }
}

const clearingAllDivs = ()=>{
    const div = document.querySelectorAll('div')
    div.forEach((d)=>{
        d.remove()
    })
}

input.addEventListener('input',()=>{
    if(input.value !== globalSize){
        if(input.value > 64){
            return alert('Max Limit is 64')
        }
        globalSize = input.value
        clearingAllDivs()
        gridSizing(globalSize)
    }
})

gridSizing(globalSize)

const drawing = ()=>{
    const div = document.querySelectorAll('div')
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
    const div = document.querySelectorAll('div')
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
    const div = document.querySelectorAll('div')
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

const resetArt = ()=>{
    const div = document.querySelectorAll('div')
    for(let i =0; i < div.length; i++){
        div[i].style.backgroundColor = 'white'
    }
    click = true
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

reset.addEventListener('click',()=>{
    resetArt()
})



document.querySelector('body').addEventListener('click',()=>{
    click = !click
})
