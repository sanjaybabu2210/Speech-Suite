var express = require("express");
var app =  express();
var unirest = require("unirest");
const request = require('request');
// var req = unirest("GET", "https://aylien-text.p.rapidapi.com/concepts");

// req.query({
// 	"text": "Barack Hussein Obama II (born August 4%2C 1961) is the 44th and current President of the United States%2C and the first African American to hold the office.",
// 	"url": "http%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fbusiness-25821345",
// 	"language": "en"
// });


// req.headers({
// 	"x-rapidapi-host": "aylien-text.p.rapidapi.com",
// 	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });



app.use(express.static('public'));
app.set("view engine","ejs");

app.get("/",function(req,res){
	
	res.render("home.ejs");
});

app.get("/project",function(req,res){
	
	res.render("project.ejs");
});


app.listen(process.env.PORT || 7200)