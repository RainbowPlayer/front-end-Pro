console.log(`Screen Width: ${window.innerWidth}`);
console.log(`Screen Height: ${window.innerHeight}`);

const button = document.querySelector("#button");

button.addEventListener('click', function(){
    window.history.back();
});

navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Ширина :", position.coords.latitude);
    console.log("Довгота :", position.coords.longitude);
});