//Dependencies 
const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

//View Engine
app.set('view engine', 'ejs');

//Router function
app.use('/articles', articleRouter);

//Index Route 
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    }]
    res.render('articles/index', { articles: articles });
})




app.listen(process.env.PORT || 3000);

//PICK BACK UP AT 15:30 JAKE