//Dependencies 
const express = require('express');
const app = express();

//View Engine
app.set('view engine', 'ejs')

//Index Route (lol)
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(5000)