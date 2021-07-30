let findMaxLength = (str) =>
    str.split(" ").sort((a, b) => b.length - a.length)[0];


let isPrime = (a) => {
    if (a < 2 ) {
        return a + " ko phai so nguyen to";
    }
    
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                return a + " ko phai so nguyen to";
            } 
            
        }
        return a + " la so nguyen to";
    
}

let sortAlphabet = (str) => str.split("").sort().join("");

console.log(sortAlphabet("khgjdkkbgkdj"))