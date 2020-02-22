const grid = document.querySelector("#grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = 16;

const scale = 400


function drawGrid() {
    document.getElementById('grid').style.height =  `${scale}px`
    document.getElementById('grid').style.width =  `${scale}px`

    clearGrid();
    makeRows(size);
    makeColumns(size);
    addListen();
};

function makeRows(rowNumber) {
    for (r = 0; r < rowNumber; r++) {
        let row = document.createElement("div");
        grid.appendChild(row).className = "gridRow";
    };
};

function makeColumns(colNumber) {
    for (c = 0; c < rows.length; c++) {
        for (i = 0; i < colNumber; i++) {
            let colCell = document.createElement("div");
            colCell.style.height = (scale / size) + 'px' 
            colCell.style.width = (scale / size) + 'px'
            rows[i].appendChild(colCell).className = "cell";
        };
    };
};




function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function promptMe(){
    size = prompt("How many squares? (Between 2-66)","");
    if (size >= 2 && size <= 66) {
        drawGrid(); 
    } else {
        alert("Try again");
        promptMe()
    }
          
};

drawGrid()

function addListen() {
const square = document.querySelectorAll('.cell');
  square.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = "black";
      opacity = square.style.opacity;
      if(opacity < 1) {
          square.style.opacity = Number(opacity) + 0.1;
      }
    });
  });
};


