const express = require("express");

const router = express.Router();


router.post("/", (req,res)=>{


const userMessage =
req.body.message;



let reply =
"";


if(userMessage.toLowerCase().includes("hello")){

reply =
"Hello. I am JARVIS AI system. How can I assist you?";

}


else if(userMessage.toLowerCase().includes("space")){

reply =
"Space monitoring system active. NASA data module ready.";

}


else if(userMessage.toLowerCase().includes("cyber")){

reply =
"Cybersecurity lab is online. Ethical research mode activated.";

}


else{

reply =
"I am analyzing your request. My knowledge module is active.";

}




res.json({

answer:reply

});


});



module.exports = router;
