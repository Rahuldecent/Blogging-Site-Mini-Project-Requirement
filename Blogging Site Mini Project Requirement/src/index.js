const express = require('express');
const bodyParser = require('body-Parser')
const mongoose = require("mongoose")
const route = require("./routes/route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://rahul-kumar-53:YjPaE0jXlnyOnjNS@cluster0.pchlfj0.mongodb.net/blogProject1")
.then(()=> console.log("MongoDb is connected"))
.catch((err)=> console.log(err));

app.use("/",route);

app.listen(process.env.PORT||3000, function(){
    console.log("Express app running on port " + (process.env.Port||3000))
});