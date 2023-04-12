
const images = ["0.jpeg","1.jpeg","2.jpeg","4.jpg","5.jpg","6.jpg","7.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img")

bgImage.src= `img/${chosenImage}`;
//document.body.appendChild(bgImage);

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundImage = `url(img/${chosenImage})`;
bodyElement.style.backgroundSize = "cover";
