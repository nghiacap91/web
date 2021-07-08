// let  age = 17;

// if (age >= 18) {
//     console.log("Bạn đủ tuổi");
//     console.log("Danh sách phim")
// }

//kiểm tra số chia hết cho cả 3 và 5
// let n = 15;

// if (n % 3 == 0 && n % 5 == 0) {
//     console.log(n + " chia hết cho cả 3 và 5");
// } else {
//     console.log(n + " k chia hết cho cả 3 và 5");
// }

// let point = 10000;

//Nếu point = 10000 -> Diamond
//Nếu point = 7500 -> Gold
//    point = 5000 -> Sliver
//    point = 3000 -> Bronze
//                    Wood









// let n = 18;

// let age;

// if (n > 60) {
//     age = "Old";
// } else if (n > 25) {
//     age = "Adult";
// } else if (n > 15) {
//     age = "Teen";
// } else {
//     age = "Kid";
// }
// let n = 18;
// let age = n > 60 ? "Old" : n > 25 ? "Adult" :  n > 15 ? "Teen" : "Kid";

// let a = Number(prompt("Cạnh thứ nhất")),
//     b = Number(prompt("Cạnh thứ hai")),
//     c = Number(prompt("Cạnh thứ ba"));

// if ((a + b) > c && (a + c) > b && (b + c) > a) {
//     console.log("Đây là tam giác hợp lệ.");
// } else {
//     console.log("Đây là tam giác không hợp lệ.");
// }

// let a = Number(prompt("Số thứ nhất")),
//     b = Number(prompt("Số thứ hai")),
//     c = Number(prompt("Số thứ ba"));

// if (a < b && b < c) {
//     console.log("[" + a + " " + b + " " + c + "] là dãy số tăng dần.");
// } else if (a > b && b > c) {
//     console.log("[" + a + " " + b + " " + c + "] là dãy số giảm dần.");
// } else {
//     console.log("[" + a + " " + b + " " + c + "] không phải dãy số tăng, giảm dần.");
// }


// console.log("Before loop");

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("After loop");

//Tính tổng từ 1 -> 100
let s = 0

for (let i = 0; i <= 100; i++) {
    s = s + i
}

console.log(s);