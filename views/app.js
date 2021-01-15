const express = require("express");
const bodyParser = require("body-parser")
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function (req, res){
  var today = new Date();
  res.render('list', {day: 'FOO'});
});


app.listen(3000, function(){
	console.log("server on 3000");
});
