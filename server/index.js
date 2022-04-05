const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello irene")
})

app.listen(3001, () => {
    console.log('running')
})