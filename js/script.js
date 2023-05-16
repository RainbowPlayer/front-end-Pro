const massiveLong = +prompt(`How long massive we need?`);
if (isNaN(massiveLong)){
    alert (`Not a number`);
    break;
}

const array = [];

for(let i = 0; i < massiveLong; i++){
    array[i] = prompt(`enter item` + (i+1));
}

array.sort(function(a, b){
    return a - b;
});

alert(array)

array.splice(1, 3)

alert(array)

console.log(array)