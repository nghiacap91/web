// let table = document.body.firstElementChild;

// let tbody = table.tBodies[0];

// let tbody = document.querySelector("tbody")

// let tr = Array.from(tbody.children);

let tr = document.querySelectorAll("tr")

tr.forEach(function (row) {
    let index = row.rowIndex;

    let td = row.children[index];
    td.style.backgroundColor = "red";
})

tr.forEach(function (row) {
    let index = row.rowIndex;
    let td = row.children[row.children.length - index - 1];

    td.style.backgroundColor = "red";
})


let img = document.createElement("img");
img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvnexpress.net%2Fmeo-chup-anh-dep-khi-di-bien-4157078.html&psig=AOvVaw1-RAFpK3NsdEy3WkbTDAgr&ust=1625026297804000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJCHv-v8u_ECFQAAAAAdAAAAABAD"
img.alt = "Anh girl xinh";
img.width = "500";
img.style.verticalAlign = "middle";

let otherImg = ""