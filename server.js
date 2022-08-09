var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/errors/404.html"); 
});
app.use(express.static(__dirname));

app.use((req, res) => {

  res.status(500).sendFile(__dirname + "/errors/500.html"); 

});
app.use(express.static(__dirname));

app.use((req, res) => {

  res.status(401).sendFile(__dirname + "/errors/401.html"); 

});

app.use(express.static(__dirname));

app.use((req, res) => {

  res.status(502).sendFile(__dirname + "/errors/502.html"); 
});
app.listen(8080);