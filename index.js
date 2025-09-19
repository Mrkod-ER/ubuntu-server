const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello this is from server');
})

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})