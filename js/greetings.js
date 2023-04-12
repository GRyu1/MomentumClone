const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const withoutLogin = document.querySelectorAll("#withoutLogin")

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "userName";




function onLoginSubmit (event) { //stopTriger : first Event from js.
   event.preventDefault();
   const userName = loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(userName);
   withoutLogin.forEach(E => E.classList.remove(HIDDEN_CLASSNAME));
   localStorage.setItem(USERNAME_KEY, userName);
}
function paintGreetings(userName){
   greeting.classList.remove(HIDDEN_CLASSNAME);
   const time = new Date();
   let hours;
   let now;
   hours = time.getHours();
   if(6<hours&&hours<=12){
      now = 'Morning'
   }else if(12<hours&&hours<=18){
      now = 'Afternoon'
   }else if(18<hours&&hours<=22){
      now = 'Evening'
   }else {
      now = 'Night'
   }
   greeting.innerText = `Good ${now} ${userName}`;
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName===null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
   paintGreetings(savedUserName);
   withoutLogin.forEach(E => E.classList.remove(HIDDEN_CLASSNAME));
}