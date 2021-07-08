// let arr = [-10, -20, -30, -40, -50];

// //Thao tác với chỉ mục
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Ít dùng
// for (let value of arr) {
//     console.log((value));
// }

// for (let key in arr) {
//     console.log(key, arr[key]);
// }

// function sumAvg(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return "Trung bình cộng của mảng là " + sum / arr.length;
// }

// console.log(sumAvg(arr));

// function findMax(arr) {
//   let max = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (max <= arr[i]) {
//       max = arr[i];
//     }
//   }
//   return "Giá trị lớn nhất trong mảng là " + max;
// }

// console.log(findMax(arr));

// function fibonacci(n) {
//     let arr = [0, 1]
//     if (n <= 2) return null;
//     if (n > 2) {
//         let a = arr[0];
//         let b = arr[1];
//         let c;
//         for (i = 3; i <= n; i++) {
//             c = a + b;
//             a = b;
//             b = c;
//             arr.push(c);
//         }
//     }
//     return arr;
// }

// function fibonacci(n) {
//   let arr = [0, 1];
//   if (n < 3) {
//     return null;
//   } else {
//     for (let i = 3; i <= n; i++) {
//       let len = arr.length;
//       arr.push(arr[len - 1] + arr[len - 2]);
//     }
//     return arr;
//   }
// }

// console.log(fibonacci(10));
// console.log(fibonacci(8));


let arr = [10, "Hai mươi", true, null, 2, 50];

// let onlyNumbers = arr.filter(Boolean);
arr.map(function (value, index) {
    if (typeof value === "number") return value * value;
    else if (typeof value === "string") return value.toUpperCase();
    else if (typeof value === "boolean") return !value;
    else if (typeof value === "undefined") return 
})