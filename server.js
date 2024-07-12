const express = require("express");
const bodyParser = require("body-parser");
const middleware = require("middleware");
const port = 3001;
var path = require('path')
const app = express();

app.use(path,bodyParser);


app.use("/public",express.static(__dirname+'/public'));

app.listen(port,()=>{
console.log("app running on Port "+port);
 console.log(__dirname)});

app.get('/',function(req,res) {
  res.sendFile(__dirname+"/index.html");
});
