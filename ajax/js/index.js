let xhr = new XMLHttpRequest();

xhr.open("GET", "https://reqres.in/api/users?page=1");

xhr.send();

xhr.onload = () => {
    let abc = JSON.parse(xhr.response);

    let html = abc.data.map(({ first_name, email, avatar }) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <div>
            <p><strong>${first_name}</strong></p>
            <p>${email}</p>
            <img src="${avatar}">
            </div>
        `;

        return div;
    });
    document.querySelector(".user").append(...html);
};