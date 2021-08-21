import request from './request.js';

request({
    method: "GET",
    uri: "https://reqres.in/api/users?page=1",
    onload: (users) => {
        let html = users.data.map((data) => {
            let div = document.createElement("div");

            div.innerHTML = `
                <div>
                <a href="page.html?postId=${data.id}">
                    <p><strong>${data.first_name}</strong></p>
                    <p>${data.email}</p>
                    <img src="${data.avatar}">
                </a>
                </div>
            `;

            return div;
        })
        document.querySelector(".user").append(...html);
    },
});