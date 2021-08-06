import request from './request.js';

let url = new URL(location.href);
let postId = url.searchParams.get("postId");

request({
    method: "GET",
    uri: "https://reqres.in/api/users/" + postId,
    onload: (user) => {
        let firstName = user.data.first_name;
        let lastName = user.data.last_name;
        let email = user.data.email;
        let avatar = user.data.avatar;
        let url = user.support.url;
        let text = user.support.text;

        let html = `
        <div>
            <img src="${avatar}">
        </div>
        <div class="name">
            <p><strong>${firstName} ${lastName}</strong></p>
            <p>${email}</p>
        </div>
        <div>
            <a href="#">${url}</a>
            <p>${text}</p>
        </div>
        `;

        document.querySelector(".user").innerHTML = html;
    },
});