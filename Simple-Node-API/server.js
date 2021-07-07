'use strict'; 

const express = require('express');

const PORT = 8080; 

const app = express()

app.get('/', (req, res) => {
    console.log('Hello World from Kaohsiung');
    res.send('Hello World from Kaohsiung');
});

app.listen(PORT, () => {
    console.log('Listen to port ', PORT); 
})