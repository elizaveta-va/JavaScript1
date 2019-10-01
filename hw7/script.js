const doc = document
const canvas = doc.querySelector ('#canv')
const ctx = canvas.getContext ('2d')
const xCordBlock = doc.querySelector ('#x-coord')
const yCordBlock = doc.querySelector ('#y-coord')

const system = {
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('heigth'),
    currentTool: '',
    currentColor: 'black',
    brushSize: 5
}

function renderSystem(sysObj, elem, action) {
sysObj[elem] = action
}

function getCoordinates(evt) {
    //координаты курсора
    xCordBlock.innerText = evt.offsetX
    yCordBlock.innerText = evt.offsetY
}

function clicker(evt) {
    //для инстр
    if(evt.target.classList.contains('tool-button')){
        renderSystem (system,'currentTool', evt.target.dataset['name'])
    }
}

function inputer(evt) {
    //для селектов
   if(evt.target.id==='select-size'){
        renderSystem (system,'brushsize', evt.target.value)
    }
    if(evt.target.id==='select-color'){
        renderSystem (system,'currentColor', evt.target.value)
    }
}

//drawing funct

function startDraw(evt) {
if (system.currentTool){
    if (system.currentTool==='brush'){
        drawLine(evt)
    }
} else{
    alert ('choose tool')
}
}


function endDraw() {
canvas.onmousemove = null
}

function drawLine (evt){ 
canvas.onmousemove = function (evt){
    ctx.fillStyle = system.currentColor
    ctr.fillRect (+xCoorBlock.innerText, +yCoorBlock.innerText, system.brushSize, system.brushSize) 
}
}
//listeners

doc.addEventListener('input', inputer)
doc.addEventListener('click', clicker)

canvas.addEventListener('mousemoove', getCoordinates)
canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mouseup', endDraw)
