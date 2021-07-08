let now = new Date();

console.log(
    now.toLocaleString("vi-VN", {
        day: "numeric",
        month : "long",
        year: "numeric",
        weekday: "long",
        hourCycle: "h12",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
    })
)

let today = new Date();

let yesterday = new Date(),
yesterday = today - 1