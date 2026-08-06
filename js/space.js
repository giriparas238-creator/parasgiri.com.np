const nasaKey =
"DEMO_KEY";



let explanation = "";



fetch(

`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`

)


.then(response=>response.json())


.then(data=>{


document.getElementById(
"spaceImage"
)
.src=data.url;



document.getElementById(
"spaceTitle"
)
.innerHTML=data.title;



document.getElementById(
"spaceDescription"
)
.innerHTML=data.explanation;



explanation=data.explanation;



});






function spaceVoice(){


let speech =

new SpeechSynthesisUtterance(
explanation.substring(0,300)
);



speech.lang="en-US";


speech.rate=1;


speechSynthesis.speak(
speech
);


}
