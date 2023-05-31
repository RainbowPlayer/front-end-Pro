const targetIn = document.querySelector(`#target`);

targetIn.addEventListener("mouseover" , function(event){
    let ghost = document.createElement(`img`);
    ghost.src = './real.gif';
    ghost.id = `ghostGif`;
    targetIn.appendChild(ghost);
});

targetIn.addEventListener("mouseout" , function(event){
    let ghost = document.querySelector(`#ghostGif`);
    if (ghost) {
        ghost.remove();
    }
});