const cols = document.querySelectorAll('.col')

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
        console.log(col)
    })
}
setRandomColors()