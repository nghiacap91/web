// let x = 1;

// let myComputer = {
//     brand: "apple",
//     type: "macbook",

//     start: function() {
//         console.log("Starting");
//     },
//     demo: function(a, b) {
//         return "xyz";
//     },
// };

// console.log(myComputer.brand); //apple

// myComputer.start;

// if ("start" in myComputer && typeof (myComputer.start) == "function") {
//     myComputer.start()
// }

// for (let k in myComputer) {
//     console.log(k + ":" + myComputer[k]);
// }

// function demo(primitive, reference) {
//     primitive = 10;

//     reference.brand = "fake";
// }

// demo (x, myComputer);

// copy = {};

// for (let k in myComputer) {
//     copy[k] = myComputer[k];
// }

// myComputer.start();
// console.log(myComputer["demo"](1, 2));

// let ba = {
//     name: "Ba",
//     email: "ba@mastertech.vn",

//     hi: function() {
//         console.log("Xin chào, mình là " + this.name);
//     },
// };

// let copy = ba;
// ba.hi();

// copy.hi();

// function hi() {
//     console.log("Hello, mình là " + this.name + "!");
// }

// let ba = {
//     name: "Ba",
//     hi: hi,
// };

// let bon = {
//     name: "Bon",
//     hi: hi,
// };

// ba.hi();
// bon.hi();

// let product = {
//     name: "iPhone 12",
//     __price: 999,
//     get price() {
//         // quy ước thuộc tính ẩn
//         return this.__price;
//     },
//     set price(value) {
//         if (typeof (value) == "number" && value >= 1) {
//             this.__price = value;
//         }
//     }
// }

//Tạo 1 đối tượng calc
//Thuộc tính là a, b
//get (a, b)
//add
//sub
//dic
//mul
//rem
//exp

// let calculator = {
//   get: function () {
//     this.a = Number(prompt("Nhập a"));
//     this.b = Number(prompt("Nhập b"));
//   },
//   add: function () {
//     return this.a + this.b;
//   },
//   sub: function () {
//     return this.a - this.b;
//   },
//   div: function () {
//     return this.a / this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
//   rem: function () {
//     return this.a % this.b;
//   },
//   exp: function () {
//     return this.a ** this.b;
//   },
// };

// let user = {
//   firstName: "Tuấn Nghĩa",
//   lastName: "Đặng",
//   birthDay: "1991 - 01 - 20",
//   hi: function () {
//     return (
//       "Xin chào! Tôi tên là " + this.lastName + " " + this.firstName + "!"
//     );
//   },
//   getAge: function () {
//     let now = Date.now();
//     let birth = new Date(this.birthDay);
//     return now.getFullYear() - birth.getFullYear();
//   },
// };


// Tạo một hàm khởi tạo Character

// Tạo một hàm khởi tạo Weapon