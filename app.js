//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.use(express.static("public"));

// app.set('view engine', 'ejs');

// var noOfButtons = document.querySelector













app.get("/", function(req ,res){
    res.sendFile(__dirname + "/index.html");
    // res.render("index", {videoList: })
});
  



app.listen(process.env.PORT || 3000, function(){ //we write process.env.PORT so that heroku defines a port for us
    console.log("Server started on port 3000")
});