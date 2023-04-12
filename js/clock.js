const clock = document.querySelector("h1#clock");

const spanHours = document.createElement("span");
const colone = document.createElement("span");
const spanMinutes = document.createElement("span");

clock.appendChild(spanHours);
clock.appendChild(colone);
clock.appendChild(spanMinutes);

function getClock(){
   const date = new Date();
   const hours = String(date.getHours()).padStart(2,"0");
   const min = String(date.getMinutes()).padStart(2,'0');
   const sec = String(date.getSeconds()).padStart(2,'0');

   spanHours.innerText = hours;
   colone.innerText =' : ';
   spanMinutes.innerText = min;

   colone.classList.toggle('clockOpacity');
   
}

getClock();
setInterval(getClock,1000);