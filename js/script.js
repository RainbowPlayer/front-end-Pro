let str = '';

for (let i = 20; i <= 30; i += 0.5) {
  str += i + ' ';
  
}

console.log(str);

//1

const oneDollar = 27;
let convert = '';

for (let o = 10; o <= 100; o += 10){
  let grivnya = o * oneDollar;
  convert += `${o} dollars ${grivnya} grivnays;\n `;
}

console.log(convert)

//2

let N = prompt(`Please tape number`);
let twoLine = '';

for (let j = 0; j <= 100; j++){
 if (j * j <= N) {
  twoLine += j + ` `;
 }
}

console.log(twoLine);

//3

let m = prompt("Type a number");

function isPrime(m) {
    if (m <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(m); i++) {
        if (m % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(m));

//4

const f = +prompt(`type a number`);
let found = false;

for(let i = 1; i <= f; i++){
   if (Math.pow(3, i) === f){
    found = true;
    break;
   }
}

if (found){
    alert(true);
} else{
    alert(false);
}

console.log(found);

//5

