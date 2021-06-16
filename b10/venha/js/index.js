//diện tích tam giác
function triangle (a, b, c) {
    p = (a + b + c) / 2,
    d = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log("Diện tích hình tam giác là: " + d + " đơn vị diện tích.");
}

//chuyển đổi độ C sang độ F và ngược lại
function temperature (a) {
    b = (a * 1.8) + 32,
    c = (a - 32) / 1.8;
console.log(a + " độ C = " + b + " độ F.");
console.log(a + " độ F = " + c + " độ C.");
}

//chuyển đổi từ km  sang m, dm, mm
function length (a) {
    b = a * 1000,
    c = b * 10,
    d = c * 100;
console.log(a + "km = " + b + "m = " + c + "dm = " + d + "mm");
}

//kiểm tra
function test () {
    let a = Number(prompt("Nhập số cần kiểm tra!")),
    b = a >= 20 && a <= 40;
    console.log(b);
} 

