const body = document.querySelector("body");

const IMG_NUMBER = 9;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = "https://images.unsplash.com/photo-1571832171852-c1fd14f0446d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80";
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
