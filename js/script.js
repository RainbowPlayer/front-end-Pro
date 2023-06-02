const sliderChange = document.querySelector('#change');
const leftClick = document.querySelector('#left');
const rightClick = document.querySelector('#right');
const images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg"];
let countImages = 0;

rightClick.addEventListener("click", function(){
    countImages++;
    if (countImages < images.length){
        sliderChange.src = images[countImages];
    }

    if (countImages === images.length - 1){
        rightClick.style.display = 'none';
    }

    if (countImages !== 0){
        leftClick.style.display = 'block';
    }
});

leftClick.addEventListener("click", function(){
    countImages--;
    if (countImages >= 0){
        sliderChange.src = images[countImages];
    }

    if (countImages === 0){
        leftClick.style.display = 'none';
    }

    if (countImages !== images.length - 1){
        rightClick.style.display = 'block';
    }
});

leftClick.style.display = 'none';