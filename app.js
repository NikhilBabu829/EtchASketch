const main = document.querySelector('.main')

const draw = document.querySelector('.draw')

const erase = document.querySelector('.erase')

const rainbow = document.querySelector('.rainbow')

const reset = document.querySelector('.reset')

const input = document.querySelector('.inputRange')

click = true

globalSize = 16

const gridSizing = (size)=>{
    console.log(main.offsetWidth)
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const newDiv = document.createElement('div')
            newDiv.setAttribute("style",`width : ${parseFloat((420)/size)}px`,`height : ${parseFloat((420)/size)}px`,"backgroundColor : 'white")
            newDiv.style.width = `${parseFloat((420)/size)}px`
            newDiv.style.height = `${parseFloat((420)/size)}px`
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
const h2 = document.querySelector('h2')
h2.innerText = `${globalSize}X${globalSize}`

input.addEventListener('input',()=>{
    if(input.value !== globalSize){
        if(input.value > 64){
            return alert('Max Limit is 64')
        }
        globalSize = input.value
        h2.innerText = `${globalSize}X${globalSize}`
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

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

const drawingForScreen = ()=>{
    const divs = document.querySelectorAll('div')
    for(let i=0;i<divs.length;i++){
        divs.forEach(ele => {
            ele.addEventListener('touchmove', (e)=>{
                e.preventDefault()
                disableScroll()
                const xCoordinates = e.targetTouches[0].clientX
                const yCoordinates = e.targetTouches[0].clientY
                const theDiv = document.elementFromPoint(xCoordinates, yCoordinates)
                // if(ele.offsetTop < yCoordinates && ele.offsetLeft < xCoordinates && ((ele.offsetTop+ele.offsetHeight) > yCoordinates) &&  ((ele.offsetLeft+ele.offsetWidth) > xCoordinates)){
                theDiv.style.backgroundColor = 'black'
                // }                    
            })
        })
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

const erasingScreenSize = ()=>{
    const divs = document.querySelectorAll('div')
    for(let i=0;i<divs.length;i++){
        divs.forEach(ele => {
            ele.addEventListener('touchmove', (e)=>{
                e.preventDefault()
                disableScroll()
                const xCoordinates = e.targetTouches[0].clientX
                const yCoordinates = e.targetTouches[0].clientY
                const theDiv = document.elementFromPoint(xCoordinates, yCoordinates)
                // if(ele.offsetTop < yCoordinates && ele.offsetLeft < xCoordinates && ((ele.offsetTop+ele.offsetHeight) > yCoordinates) &&  ((ele.offsetLeft+ele.offsetWidth) > xCoordinates)){
                theDiv.style.backgroundColor = 'white'
                // }                    
            })
        })
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

const rainbowForScreenSize = ()=>{
    const divs = document.querySelectorAll('div')
    for(let i=0;i<divs.length;i++){
        divs.forEach(ele => {
            ele.addEventListener('touchmove', (e)=>{
                e.preventDefault()
                disableScroll()
                let r = Math.floor(Math.random() * 255)
                let g = Math.floor(Math.random() * 255)
                let b = Math.floor(Math.random() * 255)
                const xCoordinates = e.targetTouches[0].clientX
                const yCoordinates = e.targetTouches[0].clientY
                const theDiv = document.elementFromPoint(xCoordinates, yCoordinates)
                // if(ele.offsetTop < yCoordinates && ele.offsetLeft < xCoordinates && ((ele.offsetTop+ele.offsetHeight) > yCoordinates) &&  ((ele.offsetLeft+ele.offsetWidth) > xCoordinates)){
                theDiv.style.backgroundColor = `rgb(${r},${g},${b})`
                // }                    
            })
        })
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

draw.addEventListener('touchstart',()=>{
    drawingForScreen()
})

erase.addEventListener('click',()=>{
    erasing()
})

erase.addEventListener('touchstart', ()=>{
    erasingScreenSize()
})

rainbow.addEventListener('click',()=>{
    rainBowColor()
})

rainbow.addEventListener('touchstart',()=>{
    rainbowForScreenSize()
})

reset.addEventListener('click',()=>{
    resetArt()
})

document.querySelector('body').addEventListener('click',()=>{
    click = !click
})
