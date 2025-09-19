const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res)=>{
    res.send('Server is running ');
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})