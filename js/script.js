const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

function generateKey (length, elements){
    let result = ``;
    for (let i = 1; i <= length; i++){
        result += elements.charAt(Math.floor(Math.random() * elements.length));
    }
    return result;
}

console.log(key);
