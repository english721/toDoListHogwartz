const body = document.querySelector("body");

const IMG_NUMBER = 9;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = "https://images.unsplash.com/photo-1533462392871-5a6c02e7132d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}


init();
