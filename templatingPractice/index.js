const express = require('express')
const app = express();
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }

})

app.get('/anime', (req, res) => {
    const animes = [
        'MHA', 'Full-Metal-Alchemist', 'Jujutsu-Kaisen', 'DBZ', 'AOT'
    ];
    res.render('anime', { animes });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
})

app.listen(8081, () => {
    console.log("LISTENING ON PORT 8081");
})