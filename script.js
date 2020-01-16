const grid = document.querySelector("#grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = 16;

function drawGrid() {
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




    
