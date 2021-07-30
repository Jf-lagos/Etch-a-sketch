//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};



const button = document.querySelector('button');
button.addEventListener('click', clear)

function clear() {
  let select = document.querySelectorAll('#cell', '#gridRow');
  select.forEach(function(toChange) {
    toChange.style.color = "red";
  })
}


/*

- Select the classes "div", "cell"
- Loop through them
- Apply a new color

*/