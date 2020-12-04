//jshint esversion: 6

const express = require("express");
const bodyParser =require("body-parser");
const ejs = require("ejs")

const app= express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const { cpplist, videolinklist } = require('./list.js')

app.get("/", function(req ,res){
    // res.sendFile(__dirname + "/index.html");
    
    var linksData = [""];
            
        
    res.render("index",{videoListData: cpplist.listData, hrefTag: cpplist.hreftag});
});

app.get("/video",function(req, res){
    const { cppvideolink } = require('./list.js')
    res.render("video",{listlink: videolinklist})
   
});

app.listen(process.env.PORT || 3000, function(){ //we write process.env.PORT so that heroku defines a port for us
    console.log("Server started on port 3000")
});