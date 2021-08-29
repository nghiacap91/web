$(document).ready(function () {
    let btn = $("button");
    let div = $("div");
    let body = $("body");

    function randomHex() {
        let hex = "#";

        for (let i = 0; i < 6; i++) {
            let x = Math.floor(Math.random() * 16).toString(16);

            hex += x;
        }

        return hex;
    }

    function changeColor() {
        let c1 = randomHex();
        let c2 = randomHex();

        div.html(`
        background-image: linear-gradient(to right,
            <span style="color: ${c1}">${c1}</span>,
            <span style="color: ${c2}">${c2}</span>)`);

        body.css({
            backgroundImage: `linear-gradient(to right, ${c1}, ${c2})`,
        });
    }

    changeColor();

    btn.on("click", changeColor);

})