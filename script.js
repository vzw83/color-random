const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event=>{
    console.log(event.code)
})

function generateRandomColor(){
    // RGB
    // #FF0000 red
    // #00FF00 blue
    // #0000FF green
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i<6; i++){
        color += hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#' + color
}

function setRandomColors (){
    cols.forEach(col=>{
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = generateRandomColor() //const color = chroma.random() (chroma библиотека)
        text.textContent = color
       col.style.background = color
       setTextColor(text, color)
       setTextColor(button, color)
    })

}
function setTextColor(text, color){
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()