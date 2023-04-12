const todayInfo = document.querySelector("h1#todyaDate");

function getTodayDate(){
   const weekday = new Array(7);
   weekday[0] = "SUN";
   weekday[1] = "MON";
   weekday[2] = "TUE";
   weekday[3] = "WED";
   weekday[4] = "THU";
   weekday[5] = "FRI";
   weekday[6] = "SAT";

   const date = new Date();
   const year = String(date.getFullYear());
   const month = String(date.getMonth()+1).padStart(2,'0');
   const day = String(date.getDate()).padStart(2,'0');
   const week = weekday[date.getDay()];

   todayInfo.innerText = `${year}/${month}/${day}(${week})`;
}

getTodayDate();
setInterval(getTodayDate, 1000);