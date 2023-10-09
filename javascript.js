function SmallFont(){
    const textContP = document.querySelectorAll('h1, h2, h3, span, p');
    textContP.forEach(item => {
    item.style.fontSize = "";
  });
};
function LargeFont(){
    const h1Text = document.querySelectorAll('h1');
    h1Text.forEach(h1 =>{
    h1.style.fontSize = "35px";});
    const h2Text = document.querySelectorAll('h2');
    h2Text.forEach(h2 =>{
    h2.style.fontSize = "30px";});
    const h3Text = document.querySelectorAll('h3');
    h3Text.forEach(h3 =>{
    h3.style.fontSize = "20px";});
    const h4Text = document.querySelectorAll('h4');
    h4Text.forEach(h4 =>{
    h4.style.fontSize = "30px";});
    const pText = document.querySelectorAll('p');
    pText.forEach(p =>{
    p.style.fontSize = "20px";});
    const menuItemText = document.querySelectorAll('.menu-item');
    menuItemText.forEach(menuItemText =>{
    menuItemText.style.fontSize = "30px";});
    const dropdownItemItemText = document.querySelectorAll('.dropdown-item');
    dropdownItemItemText.forEach(dropdownItemItemText =>{
    dropdownItemItemText.style.fontSize = "18px";});

};

let btnContainer = document.querySelector(".font");
let btns = btnContainer.querySelectorAll(".font-size");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
    });
  }

  



const apiKey = "e88d126d7f527e488942d763b977dfd9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=city";

async function checkWeather (id, city){
    var el = document.getElementById(id)
    var cityUrl = apiUrl.replace("city",city)
    const response = await fetch(cityUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    el.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    el.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
    el.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    el.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
    const weatherIcon = el.querySelector(".weather-icon");
    var imgSrcArrayOfStrings = String(weatherIcon.src).split('/');
    var last = "";

    if(data.weather[0].main == "Clouds"){

        last = "cloudy.png";
    }
    else if (data.weather[0].main == "Clear"){
        last = "sun.png";
    }
    else if (data.weather[0].main == "Rain"){
        last = "heavy-rain.png";
    }
    else if (data.weather[0].main == "Snow"){
        last = "snowy.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        last = "drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        last = "mist.png";
    }

    imgSrcArrayOfStrings[imgSrcArrayOfStrings.length-1] = last;  
    weatherIcon.src = imgSrcArrayOfStrings.join('/');
}
checkWeather(1,"Zakopane");
checkWeather(2,"Chamonix");
checkWeather(3,"Jasná");
checkWeather(4,"Saint Moritz");



let menuToggle = document.querySelector('.menu-toggle');
let container = document.querySelector('.container');
let logoToggle = document.querySelector('.logo-toggle');
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle('active');
    container.classList.toggle('active');
    logoToggle.classList.toggle('active');

});
document.querySelectorAll('.menu-item').forEach(n => n.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    container.classList.remove("active");
    logoToggle.classList.remove("active");
}))



var map = L.map('map').setView([52.230, 21.008], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([52.230, 21.008]).addTo(map);
