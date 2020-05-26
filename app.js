var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

var player01 = {
    name: "Magnus Carlsen" ,
    country: "Norway",
    title: "Grandmaster",
    rank: "1" ,
    rating: "2863",
    
};

var player02 = {
    name: "Fabiano Caruana" ,
    country: "United States",
    title: "Grandmaster",
    rank: "2" ,
    rating: "2835"
    
};

var player03 = {
    name: "Ding Liren" ,
    country: "China",
    title: "Grandmaster",
    rank: "3" ,
    rating: "2791"
    
};

var player04 = {
    name: "Ian Nepomniachtchi" ,
    country: "Russia",
    title: "Grandmaster",
    rank: "4" ,
    rating: "2784"
    
};

var player05 = {
    name: "Maxime Vachier-Lagrave" ,
    country: "France",
    title: "Grandmaster",
    rank: "5" ,
    rating: "2778"
    
};

var player06 = {
    name: "Alexander Grischuk" ,
    country: "Russia",
    title: "Grandmaster",
    rank: "6" ,
    rating: "2777"
    
};

var player07 = {
    name: "Levon Aronian" ,
    country: "Armenia",
    title: "Grandmaster",
    rank: "7" ,
    rating: "2773"
    
};

var player08 = {
    name: "Wesley So" ,
    country: "United States",
    title: "Grandmaster",
    rank: "8" ,
    rating: "2770"
    
};

var player09 = {
    name: "Teimour Radjabov" ,
    country: "Azerbaijan",
    title: "Grandmaster",
    rank: "9" ,
    rating: "2765"
    
};

var player10 = {
    name: "Anish Giri" ,
    country: "Netherlands",
    title: "Grandmaster",
    rank: "10" ,
    rating: "2764"
    
};

 var arr = [player01, player02, player03, player04, player05,
 player06, player07, player08, player09, player10];

app.get('/', function (req, res) {
  res.send(arr);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});