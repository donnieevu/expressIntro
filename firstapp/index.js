const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!");
//     // res.send('HELLLOO, WE GOT YOUR REQUEST! THIS IS YOUR RESPONSE!')
//     // res.send({ color: 'red' })
//     res.send('<h1> THIS IS MY WEBPAGE </h1>')
// }) //matches any type of request

app.get('/', (req, res) => {
    res.send('Welcome to the home page!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing Post Id: ${postId} on the ${subreddit} subreddit`)
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats, THIS IS DIFFERENT THAN A GET REQUEST!!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1> Search results for: ${q} </h>`)
})

app.get('*', (req, res) => {
    res.send("i don't know that route to that path")
})




app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
})