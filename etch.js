const CONTAINER = document.getElementById("container");


function createGrid(n)
{
    for(let i=0; i<(n*n); i++)
{
    const pixel = document.createElement("div");
    pixel.classList.add('pixel');
    CONTAINER.appendChild(pixel);
    let cellDimension = (CONTAINER.clientHeight - (2*n))/n;
    pixel.style.width = `${cellDimension}px`;
    pixel.style.height = `${cellDimension}px`;
}
}

createGrid(10);

const CELL = document.querySelectorAll('.pixel');
console.log(CELL);
CELL.forEach(cell => cell.addEventListener("mouseover", changeBackgroundOnHover));

function changeBackgroundOnHover(e)
{
    e.target.style.backgroundColor = "red";
}

