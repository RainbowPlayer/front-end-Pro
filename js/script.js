const massiveLong = +prompt(`How long massive we need?`);
if (isNaN(massiveLong)){
    alert (`Not a number`);
}else   {

let array = [];

for(let i = 0; i < massiveLong; i++){
    array[i] = prompt(`enter item` + (i+1));
    console.log(array);
}

alert(`Початковий масив ${array}`);
console.log(`Початковий масив ${array}`);

array.sort(function(a, b){
    return a - b;
});

alert(`Відсортований масив ${array}`);
console.log(`Відсортований масив ${array}`);

array.splice(1, 3);

alert(`Видалив 2, 3, 4, елементи, лишилось ${array}`);
console.log(`Видалив 2, 3, 4, елементи, лишилось ${array}`);

};

