let operation = prompt(`Type operation like 'div', 'add', 'sub', 'mult'.`)

const firsr = +prompt(`Type first number`);
const second = +prompt(`Type second number`);
let result

if (operation === 'add') {
  result = firsr + second;
  alert (result);
}else if (operation === 'mult') {
  result = firsr * second;
  alert (result);
}else if (operation === 'sub') {
  result = firsr - second;
  alert (result);
}else if (operation === 'div'){
  result = firsr / second;
  alert (result);
}else{
  alert ('Error')
}


console.log(result)