function layThuNgay() {
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    let date = today.getDate();
    let month = today.getMonth();
    let monthlist = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let year = today.getFullYear();

    h = `${daylist[day]},`;
    p = `${String(date).padStart(2, "0")}, ${monthlist[month]}, ${year}`;

    return `<div class="col-12">
                <span class="day">${h}</span>
            </div>
            <div class="col-12">
                <span class="date">${p}</span>
            </div>`;
}
document.querySelector(".hnay").innerHTML = layThuNgay();

const inputBox = document.querySelector(".todo-list");
const addBtn = document.querySelector(".btn-add");
const todoList = document.getElementById("list");

let todos = fetch("/todos").then((response) => response.json()).then((data) => {
    let list = data.map(({ title, completed }) => {
        if (completed == false) return `<li><input type="checkbox" class="checkbox">${title}</li>`;

        else if (completed == true) return `<li><input type="checkbox" class="checkbox" checked>${title}</li>`;

    }).join("");
    document.getElementById("list").innerHTML = list;
});

function clearInput() {
    window.location.reload()
}