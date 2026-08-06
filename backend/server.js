const express = require("express");

const cors = require("cors");

require("dotenv").config();


const app = express();


app.use(cors());

app.use(express.json());



app.get("/",(req,res)=>{


res.json({

message:
"JARVIS Backend Online 🤖"

});


});




app.listen(5000,()=>{


console.log(
"JARVIS Server Running Port 5000"
);


});

const newsRoute =
require("./routes/news");


app.use("/api/news",newsRoute);

const aiRoute = require("./routes/ai");

app.use("/api/ai", aiRoute);

const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json());


const newsRoute =
require("./routes/news");


const aiRoute =
require("./routes/ai");



app.use("/api/news", newsRoute);

app.use("/api/ai", aiRoute);



app.listen(5000,()=>{

console.log(
"JARVIS Server Running Port 5000"
);

});
