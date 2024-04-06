require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('hello!');
});


app.get('/login', (req, res) => {
    res.send('login');
});

app.get('/chai',(req,res)=>{
    res.send('chai aur code');
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${port}`);
});