const main = document.querySelector('.main')

const gridSizing = (size)=>{
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            const newDiv = document.createElement('div')
            main.appendChild(newDiv)
        }
    }
}

gridSizing(16)