const surName = document.querySelector('#surname');
const city = document.querySelector('#city');
const post = document.querySelector('#post');
const pay = document.querySelector('#pay');
const number = document.querySelector('#amount');
const button = document.querySelector('#submit');
const resalt = document.querySelector('#resalt');


function validateInput(input) {
    return input.value;
}

button.addEventListener('click', function(event) {
    event.preventDefault();

    if (!validateInput(surName) || !validateInput(post) || !validateInput(number) || city.value === "1" || pay.value === "1") {
        alert('Будь ласка, заповніть всі поля');
        return;
    }

    let orderDetails = [
        `ПІБ: ${surName.value}`,
        `Місто: ${city.options[city.selectedIndex].text}`,
        `Склад Нової Пошти: ${post.value}`,
        `Тип оплати: ${pay.options[pay.selectedIndex].text}`,
        `Кількість: ${number.value}`
    ];

    for(let i = 0; i < orderDetails.length; i++) {
        let newResalt = document.createElement('p');
        newResalt.innerHTML = orderDetails[i];
        resalt.append(newResalt);
    }
});

