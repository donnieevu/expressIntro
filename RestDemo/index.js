const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'fooly',
        comment: 'FOOOLYY KIDDDD'
    },
    {
        username: 'Donny',
        comment: 'das donnnyyy'
    },
    {
        username: 'goatjames123',
        comment: 'lebron jamessss'
    },
    {
        username: 'mamba2424',
        comment: 'kobee in dis houseeeee'
    }
]
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.send("IT Worked!")
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`OKAY, here are your ${qty} ${meat} tacos`)
})

app.listen(8081, () => {
    console.log('On port 8081');
})