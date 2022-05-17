
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
 


app.get("/", function(req, res) {
 res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){

  
});

app.get("/work", function(req,res){
 
});

app.get("/about", function(req, res){
  
});

app.listen(process.env.PORT, function() {
  console.log("Server started on port 3000");
});
