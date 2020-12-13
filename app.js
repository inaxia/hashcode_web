//jshint esversion: 6

const express = require("express");
const bodyParser =require("body-parser");
const ejs = require("ejs")

const app= express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const { listData, videolinklist, hreftag } = require('./list.js')

let count = 0;


app.get("/", function(req ,res){
    
    res.render("index",{videoListData: listData, hrefTag: hreftag, videoList: videolinklist, Count: count});
});

app.get("/video",function(req, res){
    const { cppvideolink } = require('./list.js')
    // for( var i=0;i<listData.length;i++){    

    res.render("video",{listlink: videolinklist,Count: count })
        
    // }    
});

app.listen(process.env.PORT || 3000, function(){ //we write process.env.PORT so that heroku defines a port for us
    console.log("Server started on port 3000")
});