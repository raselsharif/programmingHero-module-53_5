const express = require('express');
const app = express();
const phones = require("./phones.json")
const port = 5000;

app.get('/', (req, res)=>{
    res.send("node server")
})
app.get("/phones", (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)
})
app.listen(port,()=>{
    console.log(`server running on port No: ${port}`);
})