
const newsData = {


space:[

"NASA discovers new space objects",

"New satellite mission launched",

"Scientists study distant planets"

],


science:[

"AI research reaches new milestone",

"New physics experiment announced",

"Scientists discover new materials"

],


cyber:[

"New cybersecurity threat detected",

"Security researchers find vulnerability",

"Global cyber defense update"

]


};




function loadNews(){


document.getElementById("spaceNews")
.innerHTML =
createNews(newsData.space);



document.getElementById("scienceNews")
.innerHTML =
createNews(newsData.science);



document.getElementById("cyberNews")
.innerHTML =
createNews(newsData.cyber);



}



function createNews(array){


let output="";


array.forEach(item=>{


output +=

`

<div class="news-item">

${item}

<br><br>


<button onclick="readNews('${item}')">

🔊 Listen

</button>


</div>


`;


});


output +=

`

<div class="news-item">

<h3>
${item}
</h3>


<button onclick="readNews('${item}')">
🔊 Listen
</button>


<button onclick="summarize('${item}')">
📄 Summary
</button>


<button onclick="translateNepali('${item}')">
🇳🇵 नेपाली
</button>


<button onclick="translateHindi('${item}')">
🇮🇳 हिन्दी
</button>


<div id="ai-result">

</div>


</div>

`;


}



function readNews(text){


let speech =
new SpeechSynthesisUtterance(text);


speech.lang="en-US";


speechSynthesis.speak(speech);


}



loadNews();


// Auto refresh every 5 minutes

setInterval(loadNews,300000);
