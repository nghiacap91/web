// let clock = document.getElementById("MyClock");

// let timer = setInterval(() => {
//     let date = new Date();
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();

//     clock.textContent = `${hour}:${min}:${sec}`;
// });

// function capitalize(param, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof param === "string" || param instanceof String) {
//                 let result = param.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
//                 resolve(result);
//             } else {
//                 reject(new Error(`'${param}' is not a string`)}
//         }, ms);
//     });
// }

// let process = (name) => console.log("Thực hiện công việc:", name);

// let promise = new Promise((resolve, reject) => {
//     process("Khách vào");

//     setTimeout(() => {
//         resolve();
//     }, 4000);
// });

// promise
//     .then(() => {
//         process("Order đồ uống");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Thanh toán");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Đợi làm đồ uống");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Giao đồ uống");

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 4000);
//         });
//     })
//     .then(() => {
//         process("Đuổi khách");
//     });
let process = (name) => console.log("Thực hiện công việc:", name);

async function order(name) {
    process(name);
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
}

await order("khach vao");