let images = [
"IMG_1130.jpeg",
"combo2.jpg",
"combo3.jpg"
];

let current = 0;

function changeImage(){

let hero = document.getElementById("comboSlider");

if(hero){

current++;

if(current >= images.length){

current = 0;

}

hero.src = images[current];

}

}

setInterval(changeImage,2500);
