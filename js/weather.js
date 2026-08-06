const apiKey =
"YOUR_WEATHER_API_KEY";



function getWeather(){


let city =
document.getElementById("city").value;



fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

)


.then(response=>response.json())


.then(data=>{


let result =


`

<h3>

${data.name}

</h3>


Temperature:

${data.main.temp} °C


<br>


Humidity:

${data.main.humidity}%


<br>


Wind:

${data.wind.speed} m/s



<button onclick="weatherVoice('${data.main.temp}')">

🔊 JARVIS Report

</button>


`;



document.getElementById(
"weatherData"
).innerHTML=result;



})



}




function weatherVoice(temp){


let text =

"Current temperature is "
+
temp
+
" degree Celsius.";


let speech =
new SpeechSynthesisUtterance(text);


speech.lang="en-US";


speechSynthesis.speak(speech);


}function earthquakeMonitor(){


fetch(

"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

)



.then(res=>res.json())

.then(data=>{


let quake =
data.features[0];


let place =
quake.properties.place;


let mag =
quake.properties.mag;



document.getElementById(
"earthquake"
)

.innerHTML=


`

⚠ Latest Earthquake

<br><br>

Location:

${place}


<br>

Magnitude:

${mag}


`;



});



}



earthquakeMonitor();}

