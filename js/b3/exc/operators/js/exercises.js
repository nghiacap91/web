// Bài 1

// Tính chu vi hình tròn
// r là bán kính, PI = 3.14
function calcCircumferenceOfCircle(r) {
    // return value
    return 2 * r * 3.14;
}

// Tính diện tích
// r là bán kính, PI = 3.14
function calcAreaOfCircle(r) {
    // return value
    return (r ** 2 * 3.14);
}

// Bài 2

// Tính chu vi hình tam giác
// a, b, c là độ dài 3 cạnh
function calcCircumferenceOfTriangle(a, b, c) {
    // return value
    return a + b + c;
}

// Tính diện tích hình tam giác
// a, b, c là độ dài 3 cạnh
// Căn bậc 2 sử dụng Math.sqrt(value)
function calcAreaOfTriangle(a, b, c) {
    // return value
    return Math.sqrt(((a + b + c) / 2) * (((a + b + c) / 2) - a) * (((a + b + c) / 2) - b) * (((a + b + c) / 2) - c));
}

// Bài 3

// Chuyển đổi nhiệt độ từ Celcius sang Fahrenheit
// c là nhiệt độ Celcius
function convertCelciusToFahrenheit(c) {
    // return value
    return (c * 1.8) + 32;
}

// Chuyển đổi nhiệt độ từ Celcius sang Kevin
// c là nhiệt độ Celcius
function convertCelciusToKevin(c) {
    // return value
    return c + 273.15;
}

// Bài 4

// Kiểm tra số có chia hết cho cả 3 và 5, đồng thời không chia hết cho 2 hay không
// n là số cần kiểm tra
function isDivisible(n) {
    // return value (boolean)
    return (n % 3 == 0 && n % 5 == 0) != n % 2 == 0;
}

// Bài 5

// Kiểm tra một số có nằm trong khoảng 100 - 200 hoặc 400 - 500 không
// n là số cần kiểm tra
function isBetween(n) {
    // return value (boolean)
    // b = (n >= 100 && n <= 200) || (n >= 400 && n >= 500);
    return (n >= 100 && n <= 200) || (n >= 400 && n <= 500);
}

// Bài 6

// Kiểm tra một ký tự có thuộc bảng alphabet (a-zA-Z) không
// c là ký tự cần kiểm tra
function isAlphabet(c) {
    // return value (boolean)
    return ("a" <= c && c <= "z") || ("A" <= c && c <= "Z");
}
