const videos=[


{
title:"🚀 Space Documentary",
url:"https://www.youtube.com/embed/21X5lGlDOfg"
},


{
title:"🤖 Artificial Intelligence",
url:"https://www.youtube.com/embed/ad79nYk2keg"
}



];




let output="";


videos.forEach(video=>{


output +=


`

<div class="card">


<h2>
${video.title}
</h2>


<iframe

width="100%"

height="250"

src="${video.url}">

</iframe>



</div>


`;



});



document.getElementById(
"videos"
)
.innerHTML=output;
