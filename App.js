const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    res.json('Welcome')
})
app.get('/one',(req,res)=>{
    res.json('one')
})
app.listen(5000)