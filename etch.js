const container = document.getElementById("container");

const DEFAULT_BACKGROUND = "red";
const DEFAULT_GRIDS = 10;

const rainbow = document.getElementById('rainbow');

const progressiveBlack =document.getElementById('black-shade');

let bgroundColor = DEFAULT_BACKGROUND;

createGrid(DEFAULT_GRIDS);

function createGrid(n)
{
    for(let i=0; i<(n*n); i++)
    {
        const pixel = document.createElement("div");
        pixel.classList.add('pixel');
        container.appendChild(pixel);
        let cellDimension = (container.clientHeight - (2*n))/n;
        pixel.style.width = `${cellDimension}px`;
        pixel.style.height = `${cellDimension}px`;
        pixel.addEventListener("mouseover", changeBackgroundOnHover);

    }
}

function clearGrid()
{
    document.querySelectorAll('.pixel').forEach(e => e.remove());
}


const slide = document.getElementById('slide'),
    sliderDiv = document.getElementById("sliderAmount");


slide.onchange = function() {
    sliderDiv.innerHTML = this.value;
    clearGrid();
    createGrid(+this.value);
}

// const square = document.querySelectorAll('.pixel');
// console.log(square);
// Array.from.square.forEach(cell => cell.addEventListener("mouseover", changeBackgroundOnHover()));

// document.body.addEventListener( 'mouseover', function ( event ) {
//     if( event.target.classList == 'pixel' ) {
//       changeBackgroundOnHover();
//     };
//   } );

const colorPicker = document.getElementById("color-choice");
colorPicker.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor(e)
{
    bgroundColor = e.target.value;
    rainbow.classList.remove('selected');

}

rainbow.addEventListener('click', rainbowOnClick);

function rainbowOnClick(e)
{
    e.target.classList.toggle('selected');
    progressiveBlack.classList.remove('selected');
}

// to generate random HSL color
function generateRandomHsl() {
    return 'hsla(' + (Math.floor(Math.random()*360)) + ', 100%, 45%, 1)';
}

function changeBackgroundOnHover(e)
{
    if(rainbow.classList.contains('selected'))
    {
        rainbowColor = generateRandomHsl();
        e.target.style.backgroundColor = rainbowColor;
    }

    else if(progressiveBlack.classList.contains('selected'))
    {
        e.target.style.backgroundColor = 'white';
        blackBackgroundProgress(e);
    }

    else
    {
        e.target.style.backgroundColor = bgroundColor;
    }
}

// progressive black shade

progressiveBlack.addEventListener("click", moreBlackOnClick);

let blackClickCount = 100;

function moreBlackOnClick(e)
{
    e.target.classList.toggle('selected');
    rainbow.classList.remove('selected');
    if(e.target.classList.contains('selected'))
    {
        blackClickCount -= 10;
    }
}

function blackBackgroundProgress(e)
{   
    if(blackClickCount < 0)
    {
        blackClickCount = 100;
    }
    e.target.style.filter = `brightness(${blackClickCount}%)`;
    
}

// clearing the sketch

const clearButton = document.getElementById('clear-color');
clearButton.addEventListener('click', () => {
    clearGrid();
    createGrid(DEFAULT_GRIDS);
})