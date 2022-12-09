const container = document.getElementById("container");

let bgroundColor;


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
    }

    const square = document.querySelectorAll('.pixel');
    console.log(square);
    square.forEach(cell => cell.addEventListener("mouseover", changeBackgroundOnHover()));
}

function clearGrid()
{
    while(container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
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

function changeBackgroundOnHover(e)
{
    e.target.style.backgroundColor = "red";
}
