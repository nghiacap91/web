let player = "X";
let turn = document.createTextNode("Player: " + player);
let playing = true;

function checkHorizal(row, cell, cellIndex) {
    let count = 1;
    let cells = row.cells;

    for (let i = cellIndex - 1; i >= 0; i--) {
        if (cells[i].textContent === cell.textContent) {
            count++;
        } else break;
    }

    for (let i = cellIndex + 1; i < cells.length; i++) {
        if (cells[i].textContent === cell.textContent) {
            count++;
        } else break;
    }

    return count >= 5;
}

function checkVertical(col, row, cell, cellIndex) {
    let count = 1;
    let cells = col[row.cells];

    for (let i = cellIndex; i >= 0; i--) {
        for (let j = col[cellIndex] - 1; j >= 0; j--) {
            if (cells[j][i].textContent === cell.textContent) {
                count++;
            } else break;
        }
        for (let j = col[cellIndex] + 1; j < col.length; j++) {
            if (cells[j][i].textContent === cell.textContent) {
                count++;
            } else break;
        }
    }

    for (let i = cellIndex; i < cells.length; i++) {
        for (let j = col[cellIndex] - 1; j >= 0; j--) {
            if (cells[j][i].textContent === cell.textContent) {
                count++;
            } else break;
        }
        for (let j = col[cellIndex] + 1; j < col.length; j++) {
            if (cells[j][i].textContent === cell.textContent) {
                count++;
            } else break;
        }
    }

    return count >= 5;
}




function createCell() {
    let td = document.createElement("td");

    td.addEventListener(
        "click",
        function () {
            if (!playing) return;

            this.textContent = player;

            if (checkHorizal(this.parentElement, this, this.cellIndex)) {
                playing = false;
                console.log(player + " win!!!");
                return;
            }

            player = player === "X" ? "O" : "X";
            turn.textContent = "Player: " + player;
        },
        { once: true }
    );

    return td;
}

function createRow(numberCells) {
    let tr = document.createElement("tr");

    for (let i = 0; i < numberCells; i++) {
        tr.appendChild(createCell());
    }

    return tr;
}

function createBoard(numberRows, numberCells) {
    let table = document.createElement("table");

    let tbody = document.createElement("tbody");

    for (let i = 0; i < numberRows; i++) {
        tbody.appendChild(createRow(numberCells));
    }

    table.appendChild(tbody);

    return table;
}

let board = document.getElementById("board");
board.appendChild(createBoard(10, 10));

function createInfo() {
    let div = document.createElement("div");
    div.classList.add("info");

    let p = document.createElement("p");
    p.id = "turn";

    p.appendChild(turn);
    div.appendChild(p);

    return div;
}

document.body.appendChild(createInfo());
