const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const tel = document.querySelector("#telephone")
const surName = document.querySelector("#surName")
const loader = document.querySelector("#loader");
const button = document.querySelector("#button");

email.addEventListener('input', checkInput);
password.addEventListener('input', checkInput);
tel.addEventListener('input', checkInput);
surName.addEventListener('input', checkInput);

function checkInput(){
    const nameRegex = /^([A-Z][a-z]*\s){1}[A-Z][a-z]*$/;
    const emailRegex = /^\w+@\w+\.\w+$/;
    const telRegex = /^\+[\d\-\(\) ]{10,13}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(emailRegex.test(email.value) && passwordRegex.test(password.value) && telRegex.test(tel.value) && nameRegex.test(surName.value)) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);
    console.log(`Phone: ${tel.value}`);
    console.log(`Name: ${surName.value}`);

    loginForm.style.display = 'none';

    loader.style.display = 'block';

    setTimeout(function() {
        window.location.href = './pages/home.html';
    }, 2000);
});