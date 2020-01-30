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
    size = prompt("How many squares?","");
    drawGrid();       
};

drawGrid()
