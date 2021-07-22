function layThuNgay() {
    let h1 = document.createElement("h1");
    h1.classList.add("thu", "h1");
    let p = document.createElement("p");
    p.classList.add("ngay");

    let today = new Date();
    let day = today.getDay();
    let daylist = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    let date = today.getDate();
    let month = today.getMonth();
    let monthlist = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    let year = today.getFullYear();

    h1 = daylist[day] + ", ";
    p = date + ", " + monthlist[month] + ", " + year + ".";

    return h1 + p;
}
document.getElementById("hnay").prepend(layThuNgay());

    // let undoList = [];
    // let doneList = [];
    // document.getElementById("undoNumber").innerHTML = undoList.length;
    // document.getElementById("doneNumber").innerHTML = doneList.length;
   
function addTodo(event) {
    event.preventDefault();
    let li = document.createElement("li");
    let newTodo = document.getElementById("new-todo").value;
    let t = document.createTextNode(newTodo);
    li.appendChild(t);

    if (newTodo === '') {
        return null;
    } else {
        document.getElementById("incomplete-todos").appendChild(li);
    }
    document.getElementById("new-todo").value = "";

    let span = document.createElement("span");
    span.innerHTML = '<i class="bi bi-trash"></i>';
    span.classList.add("close");
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
    
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}