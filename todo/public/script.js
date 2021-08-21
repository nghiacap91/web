// let todos = fetch("/todos").then((response) => response.json()).then((data) => {
//     let list = data.map(({ title, completed }) => {
//         if (completed == false) return `<li><input type="checkbox" class="checkbox">${title}</li>`;

//         else if (completed == true) return `<li><input type="checkbox" class="checkbox" checked>${title}</li>`;

//     }).join("");
//     document.querySelector(".list").innerHTML = list;
// }); //method = GET, ko can headers, body


function layThuNgay() {
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    let date = today.getDate();
    let month = today.getMonth();
    let monthlist = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let year = today.getFullYear();

    h1 = `${daylist[day]},`;
    p = `${String(date).padStart(2, "0")}, ${monthlist[month]}, ${year}`;

    return `<div class="col-12">
                <span class="day">${h1}</span>
            </div>
            <div class="col-12">
                <span class="date">${p}</span>
            </div>`;
}
document.querySelector(".hnay").innerHTML = layThuNgay();

// function addTodo() {
//     let newTodo = document.querySelector(".todo-input").value;

//     if (newTodo === "") {
//         return null;
//     } else {
//         let newTodos = {
//             title: newTodo,
//             completed: false,
//         };

//         fetch("/todos", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newTodos),
//         });
//     }  
// }

const inputBox = $(".todo-input");
const addBtn = $(".btn-add");
const todoList = $(".list");

// let todos = fetch("/todos").then((response) => response.json()).then((data) => todos = (data));

// console.log(todos);

function callTodoList() {
    fetch("/todos").then((response) => response.json()).then((data) => {
        let todos = data.map((data) => `<li class="todo-item todo-item-${data.id}">
        <input type="checkbox" class="checkbox check${data.completed}">${data.title}
        <i onclick="deleteTodo(${data.id})" class="bi bi-trash"></i>
        </li>`).join("");
        document.querySelector(".list").innerHTML = todos;
    });
}

callTodoList();




// function clearInput() {
//     window.location.reload()
// }



// let todos = fetch("/todos").then((response) => response.json()).then((data) => {
//     let list = data.map(({id, completed, title}) => {

//         if (completed == false) return `<li><input type="checkbox" class="checkbox check${completed}">${title}<i onclick="deleteTodo(${id})" class="bi bi-trash"></i></li>`;

//         else if (completed == true) return `<li><input type="checkbox" class="checkbox check${completed}" checked>${title}<i onclick="deleteTodo(${id})" class="bi bi-trash"></i></li>`;

//     }).join("");
//     document.querySelector(".list").innerHTML = list;
// });


