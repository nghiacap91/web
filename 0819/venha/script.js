const inputBox = document.querySelector(".inputField .todo-input");
const addBtn = document.querySelector(".inputField .add-btn");
const cancelBtn = document.querySelector(".inputField .cancel-btn");
const undoList = document.querySelector(".undo-list");
const doneList = document.querySelector(".done-list");

console.log((inputBox.value));

function layThuNgay() {
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    let date = today.getDate();
    let month = today.getMonth();
    let monthlist = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let year = today.getFullYear();

    p1 = `${daylist[day]},`;
    p2 = `${String(date).padStart(2, "0")}, ${monthlist[month]}, ${year}`;

    return `<div class="col-12">
                <span class="day">${p1}</span>
            </div>
            <div class="col-12">
                <span class="date">${p2}</span>
            </div>`;
}

document.querySelector(".row.today").innerHTML = layThuNgay();


showUndoList();
showDoneList();

addBtn.addEventListener("click", function addTodo() {
    let newTodo = inputBox.value;
    let undoData = localStorage.getItem("Undo");

    if (undoData == null) { 
        undoArray = [];
    } else {
        undoArray = JSON.parse(undoData);
    }

    let doneData = localStorage.getItem("Done");
    if (doneData == null) {
        doneArray = [];
    } else {
        doneArray = JSON.parse(doneData);
    }

    undoArray.push(newTodo);
    localStorage.setItem("Undo", JSON.stringify(undoArray));
    localStorage.setItem("Done", JSON.stringify(doneArray));
    showDoneList();
    showUndoList();
});

cancelBtn.addEventListener("click", function() {
    inputBox.value = "";
})

function showUndoList() {
    let undoData = localStorage.getItem("Undo");
    if (undoData == null) {
        undoArray = [];
    } else {
        undoArray = JSON.parse(undoData);
    }
    document.querySelector(".undo-numb").textContent = undoArray.length;
    let newLiTag = "";
    undoArray.forEach((element, index) => {
        newLiTag += `<li>
                     <i onclick="moveTodo(${index})" class="bi bi-circle"></i>${element}<i onclick="deleteTodo(${index})" class="bi bi-trash"></i>
                     </li>`;
    })
    undoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function showDoneList() {
    let doneData = localStorage.getItem("Done");
    if (doneData == null) {
        doneArray = [];
    } else {
        doneArray = JSON.parse(doneData);
    }
    document.querySelector(".done-numb").textContent = doneArray.length;
    let newLiTag = "";
    doneArray.forEach((element) => {
        newLiTag += `<li>
                     <i class="bi bi-check-circle"></i>${element}
                     </li>`;
    })
    doneList.innerHTML = newLiTag;
}

function deleteTodo(index) {
    let undoData = localStorage.getItem("Undo");
    undoArray = JSON.parse(undoData);
    undoArray.splice(index, 1);
    localStorage.setItem("Undo", JSON.stringify(undoArray));
    showUndoList();
}

function moveTodo(index) {
    let undoData = localStorage.getItem("Undo");
    let doneData = localStorage.getItem("Done");
    undoArray = JSON.parse(undoData);
    doneArray = JSON.parse(doneData);

    let temp = undoArray.splice(index, 1);
    doneArray.push(temp);
    
    localStorage.setItem("Undo", JSON.stringify(undoArray));
    localStorage.setItem("Done", JSON.stringify(doneArray));
    showDoneList();
    showUndoList();
}

function deleteDoneList() {
    let doneData = localStorage.getItem("Done");
    doneArray = JSON.parse(doneData);

    doneArray = [];

    localStorage.setItem("Done", JSON.stringify(doneArray));
    showDoneList();
}