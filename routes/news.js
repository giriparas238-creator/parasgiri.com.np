const express=require("express");

const router=express.Router();



router.get("/",(req,res)=>{


res.json({

news:
"Latest science news"


});


});



module.exports=router;
