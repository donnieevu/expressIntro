const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let tweets = [
    {
        id: uuid(),
        username: 'da1andonly',
        tweet: 'i am da one who knocks'
    },
    {
        id: uuid(),
        username: 'lilaznman123',
        tweet: 'im smol but have a big heart'
    },
    {
        id: uuid(),
        username: 'elves123j',
        tweet: 'i help santa do all things'
    },
    {
        id: uuid(),
        username: 'santac223',
        tweet: 'elves are lazy i do all the work'
    },
    {
        id: uuid(),
        username: 'msclauz11',
        tweet: 'santa so fat ugh'
    },
];

app.get('/tweets', (req, res) => {
    res.render('tweets/index', { tweets });
})

app.get('/tweets/new', (req, res) => {
    res.render('tweets/new')
})
app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;
    tweets.push({ username, tweet, id: uuid() });
    res.redirect('/tweets')
})
app.get('/tweets/:id', (req, res) => {
    const { id } = req.params;
    const tweet = tweets.find(t => t.id === id);
    res.render('tweets/show', { tweet });
})
app.listen(8081, () => {
    console.log('On port 8081');
})