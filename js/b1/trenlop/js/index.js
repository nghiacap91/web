//hien 1 thong bao tren trinh duyet
//alert("Hello JavaScript");

//alert("Welcome to Web");

// keyword variable_name = value;
var firstName = "Nghĩa";

let lastName = "Đặng";


// Hằng số (ko bao giờ thay đổi)
const BIRTH_DAY = "20-01-1991";


// Dot Notation - Sử dụng gọi trực tiếp 1 thuộc tính
// object.key;

// Bracket Notation - Sử dụng với biến - sử dụng truy cập vào thuộc tính mà có tên đặc biệt
// object[key];

let nghia = {
    firstName: "Nghĩa",
    lastName: "Đặng",
    age: 31,
    father: {
        firstName: "Vinh",
        lastName: "Đặng",
        age: 86,
    },
    mother: {
        firstName: "La",
        lastName: "Lê",
        age: 66, 
    }
};

// function function_name (parameters_list) { //code }
function hello(name) {
    let message = "Hello, " + name;
    alert(message);
}

// Gọi hàm
// function(argumentlist)
// hello("Nghĩa");
// hello("Vinh");
// hello("La");

let key = prompt ("Bạn muốn hiển thị thông tin gì?");

console.log(nghia[key]);