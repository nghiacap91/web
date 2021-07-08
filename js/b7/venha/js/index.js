
let arr = [1, 3, null, NaN, "siêu nhân", 10];

function removeFalsy(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == true) {
            array.push(arr[i]);
        } 
    } return array;
}
console.log(removeFalsy(arr));


function double(arr) {
    let array = [];
    let exp;
    for (let i = 0; i < arr.length; i++) {
        exp = arr[i] ** 2;
        array.push(exp);
    }
    return array;
}

console.log(double(arr));

function randItem(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

console.log(randItem(arr));

