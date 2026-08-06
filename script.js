
let voiceText =
"Welcome. JARVIS artificial intelligence system is online.";



function startAI(){


let speech =
new SpeechSynthesisUtterance(
voiceText
);


speech.lang="en-US";


speech.pitch=1;


speech.rate=1;



speechSynthesis.speak(speech);



document.getElementById("jarvis")
.innerHTML=
"JARVIS: Voice system activated";


}



window.onload=function(){


let sound =
document.getElementById("boot");


sound.volume=0.5;


sound.play();



}



let buttons =
document.querySelectorAll("button");


buttons.forEach(btn=>{


btn.onclick=function(){


document
.getElementById("click")
.play();


}


});
