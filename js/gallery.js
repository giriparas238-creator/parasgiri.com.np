const images=[


{
name:"🌌 Galaxy",
img:"assets/images/galaxy.jpg"
},


{
name:"🤖 Robot",
img:"assets/images/robot.jpg"
},


{
name:"🧠 Artificial Intelligence",
img:"assets/images/ai.jpg"
},


{
name:"🚀 Space Mission",
img:"assets/images/space1.jpg"
}



];




function loadGallery(){


let output="";



images.forEach(item=>{


output +=


`

<div class="gallery-card">


<h2>
${item.name}
</h2>


<img 
src="${item.img}"
onclick="openImage('${item.img}')">


</div>


`;


});



document.getElementById(
"gallery"
)
.innerHTML=output;



}



function openImage(img){


window.open(img,"_blank");


}



loadGallery();
