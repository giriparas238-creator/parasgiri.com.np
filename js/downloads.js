const files=[


{
title:"🤖 Artificial Intelligence Research",
category:"AI",
file:"assets/files/ai.pdf"
},


{
title:"🛡 Cybersecurity Fundamentals",
category:"Cyber",
file:"assets/files/cyber.pdf"
},


{
title:"🚀 Space Exploration Paper",
category:"Space",
file:"assets/files/space.pdf"
},


{
title:"⚛ Physics Research Document",
category:"Physics",
file:"assets/files/physics.pdf"
}


];





function displayFiles(data){


let output="";



data.forEach(item=>{


output +=


`

<div class="card">


<h2>
${item.title}
</h2>


<p>
Category:
${item.category}
</p>



<button onclick="downloadFile('${item.file}')">

⬇ Download PDF

</button>



<button onclick="readFile('${item.title}')">

🔊 JARVIS

</button>


</div>


`;



});



document.getElementById(
"downloadContainer"
)
.innerHTML=output;


}






function downloadFile(file){


window.open(file,"_blank");


}






function filterData(category){


let result = files.filter(item=>

item.category==category

);


displayFiles(result);


}






function showAll(){


displayFiles(files);


}






function readFile(text){


let speech =

new SpeechSynthesisUtterance(

"JARVIS research file. "
+
text

);


speech.lang="en-US";


speechSynthesis.speak(speech);


}




showAll();
