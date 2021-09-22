'use strict';
var express = require('express');
const app = express();

const path = require('path');


app.set('view engine', 'ejs');
app.set('views',__dirname + '/views'); // specify the views directory

app.use(express.static(__dirname + "/public"));


//rutas
app.get('/home',(req , res) => {
    res.render("index", {titulo: "mi titulo dinamico"});
});

app.get('/elements',(req , res) => {
   res.render("elements", {titulo: "mi titulo dinamico"});
});

app.get('/generic',(req , res) => {
    res.render("generic", {titulo: "mi titulo dinamico"});
});




//Levantamos la web en el servidor 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`el puerto esta corriendo en ${ PORT }`);
});

module.exports = app;
