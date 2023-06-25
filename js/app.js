console.log('działa!');
let a = 50
let b = 30
if (a > b) {
    console.log("a jest większe od b")
}

let weather = 'wind'
switch (weather) {
    case 'sun':
        console.log("It's sunny! 🌞");
        break;
    case 'rain':
        console.log("It's raining! 🌧️");
        break;
    case 'wind':
        console.log("It's windy! 🌬️")
}

for (let i = 0; i <= 5; i += 1) {
    console.log("Cześć! Miło nam Cię powitać na girls.js!");
}
for (let i = 10; i > 0; i -= 1) {
    console.log("Cześć! Miło nam Cię powitać na girls.js!");
}
for (let i = 0; i < 30; i += 1) {
    console.log(i);
}
for (let i = 1; i <= 30; i += 1) {
    console.log(i);
}

for (let i = 1; i <= 30; i += 1) {
    console.log("id-" + i);
}

for (let i = 1; i <= 50; i += 1) {
    console.log("id-" + i);
}
let counter = 0;
while (counter < 5) {
    console.log("Cześć! Miło nam Cię powitać na girls.js!");
    counter += 1;

}

let counter1 = 0;
while (counter1 < 10) {
    console.log("JavaScript jest super!");
    counter1 += 1;
}

let group = ["Asia", "Ania", "Anastazja"]
console.log(group[0]);

console.log(group.length);
console.log(group[2]);
group.push("Magda");
console.log(group);
group[3] = ("Marta");
console.log(group);
let work_friends = ["Asia", "Gosia", "Iza"]
let party_friends = ["Dominika", "Natalia", "Kamila"]
let all_friends = work_friends.concat(party_friends);
console.log(all_friends);
let part = group.slice(0, 2);
console.log(part);
group.splice(0, 1, "Krysia");
console.log(group);
if (group.indexOf("Magda") !== -1) {
    console.log("Magda jest w tej tablicy");
} else {
    console.log("Magdy nie ma w tej tablicy");
}
for (let i = 0; i < group.length; i += 1) {
    console.log("Cześć " + group[i] + "! Miło nam Cię powitać na girls.js!");
}
let zdanie = "Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki.”]"
for (let i = 0; i < zdanie.length; i++) {
    if (["a", "e", "i", "o", "u", "y"].indexOf(zdanie[i]) !== -1) {
        console.log(zdanie[i]);
    }
}
function helloGirlsJS(name){
    console.log("Cześć, "+name+"! Witaj na girls.js!")
}

helloGirlsJS("Magda")

function getRandomColor() {
    console.log('Wylosujmy kolor!')
}

getRandomColor();

var letters = '0123456789ABCDEF';
var color = '#';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
       var randomNumber = Math.floor(Math.random() * 16);
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];
    }
}
function getRandomColor() { 
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];
        console.log(randomLetter);
    }
}

getRandomColor();

function getRandomColor() {    
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];

        color += randomLetter;
    }
    console.log(color);
}

getRandomColor();
function getRandomColor() {       
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];

        color += randomLetter;
    }

    return color;
}

getRandomColor();

var title = document.getElementById('magic');
function changeColor() {
    title.style.color
}
console.log(title.style.color)
function changeColor() {
    title.style.color = nowy_kolor;
}
function changeColor() {
    title.style.color = getRandomColor();
}

console.log(changeColor)

function changeColor(text) {
}

function changeColor(text) {
    text.style.color = getRandomColor();
}
changeColor(title);

setInterval(function() { 
    changeColor(title); 
}, 2000);

