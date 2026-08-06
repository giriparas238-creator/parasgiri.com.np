const resources=[


{
title:"🛡 TryHackMe",
type:"Cybersecurity Training",
link:"https://tryhackme.com"
},



{
title:"⚔ Hack The Box",
type:"Ethical Hacking Practice",
link:"https://hackthebox.com"
},



{
title:"🌐 PortSwigger Academy",
type:"Web Security Learning",
link:"https://portswigger.net/web-security"
},



{
title:"🐧 OverTheWire",
type:"Linux Security Challenges",
link:"https://overthewire.org"
},



{
title:"🤖 Google AI Studio",
type:"Artificial Intelligence Tools",
link:"https://aistudio.google.com"
},



{
title:"🚀 NASA Learning",
type:"Space Science Education",
link:"https://www.nasa.gov"
},



{
title:"⚛ CERN",
type:"Particle Physics Research",
link:"https://home.cern"
},



{
title:"🎓 MIT OpenCourseWare",
type:"Free University Courses",
link:"https://ocw.mit.edu"
}


];





function loadResources(){


let output="";


resources.forEach(item=>{


output +=


`

<div class="card">


<h2>
${item.title}
</h2>


<p>

${item.type}

</p>



<button onclick="openResource('${item.link}')">

🌐 Open

</button>



<button onclick="resourceVoice('${item.type}')">

🔊 JARVIS

</button>



</div>


`;


});



document.getElementById(
"resourceContainer"
)
.innerHTML=output;



}







function openResource(url){


window.open(url,"_blank");


}






function resourceVoice(text){


let speech=

new SpeechSynthesisUtterance(

"JARVIS recommendation. "
+
text

);


speech.lang="en-US";


speechSynthesis.speak(speech);


}




loadResources();
