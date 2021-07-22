let a = Number(prompt("Nhap a"));
let check = (a) => {
    if (a <= 1 ) {
        return a + " ko phai so nguyen to";
    }
    if (a == 2) {
        return a + " la so nguyen to";
    }
    if (a > 2) {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return a + " ko phai so nguyen to";
            } 
            
        }
        return a + " la so nguyen to";
    }
}

console.log(check(a));