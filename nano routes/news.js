const express = require("express");

const router = express.Router();


router.get("/", (req,res)=>{


res.json({

title:"JARVIS News System Online 🤖",

news:[
"NASA space update",
"AI research update",
"Cybersecurity alert"
]

});


});


module.exports = router;
