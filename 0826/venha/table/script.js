let students = [
    {
        id: 1,
        name: "Ba Nguyễn",
        age: 29,
        email: "ba@techmaster.vn",
    },
    {
        id: 2,
        name: "Nam Trương",
        age: 21,
        email: "truongcongnam1207@gmail.com",
    },
    {
        id: 3,
        name: "Nghĩa Đặng",
        age: 30,
        email: "dtnghia20191@yahoo.com",
    },
    {
        id: 4,
        name: "Minh",
        age: 23,
        email: "minh@gmail.com",
    },
    {
        id: 5,
        name: "Vu Anh",
        age: 20,
        email: "jj@email.com",
    },
    {
        id: 6,
        name: "Le Linh",
        age: 23,
        email: "linhdr141020@gmail.com",
    },
];

let studentTable = document.querySelector(".student-table");
let studentList = document.querySelector(".student-list");
let age = studentTable.tHead.querySelector(".age");
let id = studentTable.tHead.querySelector(".id");

function createStudentElement(student) {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    id.textContent = student.id;

    let name = document.createElement("td");
    name.textContent = student.name;

    let age = document.createElement("td");
    age.textContent = student.age;

    let email = document.createElement("td");
    email.textContent = student.email;
    email.classList.add("d-flex");
    let span = document.createElement("span");
    span.innerHTML = '<i class="bi bi-trash"></i>';
    span.classList.add("close", "ms-auto");
    email.appendChild(span);

    tr.append(id, name, age, email);
    tr.data = student;

    return tr;
}

function renderStudents() {
    students.forEach(function (el) {
        studentList.append(el);
    });
}

students = students.map(createStudentElement);
renderStudents();

let asc = true;

age.addEventListener("click", function (ev) {
    students.sort(function (a, b) {
        if (asc) {
            return a.data.age - b.data.age;
        } else {
            return b.data.age - a.data.age;
        }
    });

    asc = !asc;

    renderStudents();
});

id.addEventListener("click", function (ev) {
    students.sort(function (a, b) {
        if (asc) {
            return a.data.id - b.data.id;
        } else {
            return b.data.id - a.data.id;
        }
    });

    asc = !asc;

    renderStudents();
});

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement.parentElement;
        div.style.display = "none";
    }
};

function getInputValue(selector) {
    let inputElement = document.querySelector(selector);
    return inputElement.value;
}

function onClickCreateStudent() {
    let idElement = getInputValue('.form-group .id');
    let nameElement = getInputValue('.form-group .name');
    let ageElement = getInputValue('.form-group .age');
    let emailElement = getInputValue('.form-group .email');

    // if (idElement != isFinite || nameElement.trim("") == "" || (ageElement < 1 && 100 < ageElement) || emailElement.trim("") == "" ) {
    //     return;
    // }

    addStudent({
        id: idElement,
        name: nameElement,
        age: ageElement,
        email: emailElement,
    });


    students = students.map(createStudentElement);
    renderStudents();

    console.log(students);
}

function addStudent(student) {
    students.push(student);
}