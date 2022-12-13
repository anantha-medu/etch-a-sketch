const container = document.getElementById("container");

const DEFAULT_BACKGROUND = "red";
const DEFAULT_GRIDS = 10;

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
    // while(container.hasChildNodes())
    // {
    //     container.removeChild(container.firstChild);
    // }

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
}

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', rainbowOnClick);

function rainbowOnClick(e)
{
    e.target.classList.toggle('selected');
}



function randomHsl() {
    return 'hsla(' + (Math.floor(Math.random()*360)) + ', 100%, 50%, 1)';
}

function changeBackgroundOnHover(e)
{
    if(rainbow.classList.contains('selected'))
    {
        rainbowColor = randomHsl();
        e.target.style.backgroundColor = rainbowColor;
    }

    else
    {
        e.target.style.backgroundColor = bgroundColor;
    }
}
