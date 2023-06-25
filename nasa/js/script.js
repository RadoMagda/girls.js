function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}
let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=Rt074r0k7jrwauIlPoOrvkQjpV96JY77BqLk8Grg';
function getPicture() {
    fetch(dataURL)
    .then((resp) => {
        console.log(resp);
    })
}
function getPicture() {
    fetch(dataURL)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.hdurl);
        });
}
console.log (getPicture())

function getPicture() {
    fetch(dataURL)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            changeBackground(data.hdurl);
        });
}
console.log (getPicture())

let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Rt074r0k7jrwauIlPoOrvkQjpV96JY77BqLk8Grg";

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
        });
}
console.log(getMarsPicture())

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.photos);
        });
}

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.photos.length);
        });
}

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data.photos[0]);
        });
}
let gallery = document.getElementById('content');

function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        gallery.appendChild(img);
    }
}

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
        });
}

console.log(createGallery(getMarsPicture))

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
            createGallery(pictureList);
        });
}
function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        gallery.appendChild(img);
        console.log(dataList);
    }
}
function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        gallery.appendChild(img);
        console.log(dataList[i]);
    }
}
function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        gallery.appendChild(img);
        console.log(dataList[i].img_src);
    }
}
function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        gallery.appendChild(img);
    }
}
function createGallery(dataList) {
    for(let i=0; i < 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);
    }
}
getMarsPicture()

