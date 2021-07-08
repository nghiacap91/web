// Bài 1
let l1 = document.forms.l1;
let { r } = l1.elements;
let l1Result = document.querySelector(".l1.result");

l1.onsubmit = (e) => {
    e.preventDefault();

    l1Result.innerHTML = `
        <p>Chu vi hình tròn: C = ${calcCircumferenceOfCircle(+r.value)}</p>
        <p>Diện tích hình tròn: S = ${calcAreaOfCircle(+r.value)}</p>
        `;
};

// Bài 2
let l2 = document.forms.l2;
let { a, b, c } = l2.elements;
let l2Result = document.querySelector(".l2.result");

l2.onsubmit = (e) => {
    e.preventDefault();

    l2Result.innerHTML = `
        <p>Chu vi hình tam giác: C = ${calcCircumferenceOfTriangle(
            +a.value,
            +b.value,
            +c.value
        )}</p>
        <p>Diện tích hình tam giác: S = ${calcAreaOfTriangle(
            +a.value,
            +b.value,
            +c.value
        )}</p>
        `;
};

// Bài 3
let l3 = document.forms.l3;
let { celcius } = l3.elements;
let l3Result = document.querySelector(".l3.result");

l3.onsubmit = (e) => {
    e.preventDefault();

    l3Result.innerHTML = `
        <p>Celcius = ${+celcius.value} °C</p>
        <p>Fahrenheit = ${convertCelciusToFahrenheit(+celcius.value)} °F</p>
        <p>Kevin = ${convertCelciusToKevin(+celcius.value)} °K</p>
        `;
};

// Bài 4
let l4 = document.forms.l4;
let { n } = l4.elements;
let l4Result = document.querySelector(".l4.result");

l4.onsubmit = (e) => {
    e.preventDefault();

    if (n.value.trim() == "" || isNaN(isDivisible(+n.value))) {
        return;
    }

    l4Result.innerHTML = `
        <p>${+n.value} ${
        isDivisible(+n.value) ? "có" : "không"
    } chia hết cho cả 3 và 5</p>
        `;
};

// Bài 5
let l5 = document.forms.l5;
let { n: n5 } = l5.elements;
let l5Result = document.querySelector(".l5.result");

l5.onsubmit = (e) => {
    e.preventDefault();

    if (n5.value.trim() == "" || isNaN(isBetween(+n5.value))) {
        return;
    }

    l5Result.innerHTML = `
        <p>${+n5.value} ${
        isBetween(+n5.value) ? "có" : "không"
    } nằm trong khoảng 100 - 200 hoặc 400 - 500</p>
        `;
};

// Bài 6
let l6 = document.forms.l6;
let { char } = l6.elements;
let l6Result = document.querySelector(".l6.result");

l6.onsubmit = (e) => {
    e.preventDefault();

    if (char.value.trim() == "" || isNaN(isAlphabet(char.value))) {
        return;
    }

    if (char.value.length > 1) {
        l6Result.innerHTML = "Chỉ nhập một ký tự";
        return;
    }

    l6Result.innerHTML = `
        <p>${char.value} ${
        isAlphabet(char.value) ? "có" : "không"
    } thuộc bảng alphabet</p>
        `;
};