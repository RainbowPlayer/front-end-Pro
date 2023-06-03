const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loader = document.querySelector("#loader");
const button = document.querySelector("#button");

email.addEventListener('input', checkInput);
password.addEventListener('input', checkInput);

function checkInput(){

    if(email && password){
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);

    loginForm.style.display = 'none';

    loader.style.display = 'block';

    setTimeout(function() {
        window.location.href = './pages/home.html';
    }, 2000);
});