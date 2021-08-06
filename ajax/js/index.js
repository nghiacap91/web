import request from './request.js';

request({
    method: "GET",
    uri: "https://reqres.in/api/users?page=1",
    onload: (users) => {
        let html = users.data.map(({ id, first_name, email, avatar }) => {
            let div = document.createElement("div");

            div.innerHTML = `
                <div>
                <a href="page.html?postId=${id}">
                    <p><strong>${first_name}</strong></p>
                    <p>${email}</p>
                    <img src="${avatar}">
                </a>
                </div>
            `;

            return div;
        })
        document.querySelector(".user").append(...html);
    },
});