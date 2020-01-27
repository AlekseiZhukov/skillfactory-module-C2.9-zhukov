const cityName = document.querySelector('.city')
const resetCityName = document.querySelector('.reset')
let date = new Date(Date.now() + 86400e3);
const saveCheckbox = document.querySelector('.save')
let elem = document.querySelectorAll(".form-check-input")
//const stateHeck1 = document.querySelector('.heck1')
//const stateHeck2 = document.querySelector('.heck2')
//const stateHeck3 = document.querySelector('.heck3')
//const stateHeck4 = document.querySelector('.heck4')
//const stateHeck5 = document.querySelector('.heck5')
//const stateHeck6 = document.querySelector('.heck6')
//let cityValue = encodeURIComponent(cityName.value);

 //Первая часть ДЗ. Работа с cookie
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function setCookie(name, value, options = {}) {
  
  options = {
    path: '/',
    expires: date 
  };

  if (options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
  }
//console.log(options.expires);
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
      
    }
  }
//console.log(updatedCookie);
  document.cookie = updatedCookie;
}

function delete_cookie ( cookie_name ) {
  let cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

cityName.addEventListener('change', async _ => {
  setCookie("city", cityName.value);
});

resetCityName.addEventListener('click', async _ => {
  delete_cookie("city"); 
  
});

window.onload = function() {
   cityName.value = getCookie("city");
   loadCheckbox();
};

function loadCheckbox(){
  elem.forEach(function(el){
    if (localStorage.getItem(el.id) === "true") {
      el.checked = true;
    }
  })
};


saveCheckbox.addEventListener('click', async _ => {
  elem.forEach( function(el) {
   localStorage.setItem(el.id, el.checked)});
    
});
   
 
