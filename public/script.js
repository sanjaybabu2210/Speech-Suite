/*var express = require("express");
var app =  express();
var unirest = require("unirest");
const request = require('request');
var p = null;
p = 'dog';
request('https://pixabay.com/api/?key=15151126-aa0947b85bd5378813fb2324f&q='+p+'&image_type=photo&pretty=true', function (error, response, body) {

  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	if(!error && response.statusCode == 200){
	var Data =  JSON.parse(body);
  console.log(Data["hits"][0]["largeImageURL"] );}
	// Print the HTML for the Google homepage.
});   
*/

