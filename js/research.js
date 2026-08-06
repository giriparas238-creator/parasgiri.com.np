const labs=[


{
name:"🤖 Artificial Intelligence",
info:"Machine Learning, Deep Learning, Neural Networks"
},


{
name:"🛡 Cybersecurity",
info:"Ethical Hacking, Digital Forensics, Security Research"
},


{
name:"🚀 Robotics",
info:"Robots, Automation, Sensors and Control Systems"
},


{
name:"⚛ Quantum Computing",
info:"Quantum Algorithms and Future Computing"
},


{
name:"🌌 Physics",
info:"Space Physics, Energy and Matter"
},


{
name:"🧪 Chemistry",
info:"Materials, Reactions and Molecular Science"
},


{
name:"🧬 Biology",
info:"Genetics, Biotechnology and Life Science"
}


];



function loadLab(data= labs){


let output="";


data.forEach(item=>{


output +=

`

<div class="card">


<h2>
${item.name}
</h2>


<p>
${item.info}
</p>


<button onclick="labVoice('${item.info}')">

🔊 Explain

</button>


</div>


`;


});



document.getElementById(
"labContainer"
)
.innerHTML=output;


}



function searchLab(){


let value =
document
.getElementById("search")
.value
.toLowerCase();



let result =
labs.filter(x=>

x.name.toLowerCase()
.includes(value)

);



loadLab(result);


}




function labVoice(text){


let speech =
new SpeechSynthesisUtterance(text);


speech.lang="en-US";


speechSynthesis.speak(speech);


}



loadLab();
