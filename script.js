const cols = document.querySelectorAll(".col");

document.addEventListener("keydown", (event) => {
    event.preventDefault()
  if (event.code.toLowerCase() === "space") {
    setRandomColors();
  }
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;
  if (type === "lock") {
    const node = event.target.tagName.toLowerCase()==='i' 
    ? event.target
    : event.target.children[0]
    node.classList.toggle('fa-unlock-alt')
    node.classList.toggle('fa-lock')
  } else if (type==='copy'){
    copyToClickBoard(event.target.textContent)
  }
});

function generateRandomColor() {
  // RGB
  // #FF0000 red
  // #00FF00 blue
  // #0000FF green
  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

function copyToClickBoard(text){
   return navigator.clipboard.writeText(text)
}

function setRandomColors() {
  cols.forEach((col) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock')
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = generateRandomColor(); //const color = chroma.random() (chroma библиотека)

    if(isLocked){
        return
    }

    text.textContent = color;
    col.style.background = color;
    setTextColor(text, color);
    setTextColor(button, color);
  });
}
function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

setRandomColors();
