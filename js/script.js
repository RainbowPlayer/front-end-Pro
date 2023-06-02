function sum (){
    let total = 0;

    return function(num){
        total += num;
        return total;
    }
}

let i = sum();

console.log(i(3));
console.log(i(5));
console.log(i(20));