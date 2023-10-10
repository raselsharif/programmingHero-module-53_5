const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send("node server")
})
app.listen(port,()=>{
    console.log(`server running ${port}`);
})