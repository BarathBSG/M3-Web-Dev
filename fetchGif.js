function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    image.id = "EndHungerPhoto";
    return image;
}

function onStreamProcessed(text){ //callback function
    console.log("image loaded - " + text);
    const url = text; //const url is the line of text in image.txt
    const image = createImage(url); //load an image for each url
    const EndHungerImgContainer = document.querySelector('#EndHungerImgContainer');
    EndHungerImgContainer.appendChild(image);
}

function onResponse(response){ //if promise succeeded
    console.log(response);
    response.text().then(onStreamProcessed);
}

function onError(){ //if promise failed
    console.log("oof")
}

fetch('imageGif.txt')
.then(onResponse, onError); 