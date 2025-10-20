const express = require('express');
const app = express()
const port = process.env.PORT | 5000;

app.get('/' ,(req, res)=> {
  res.send('salom')
})



app.listen(port,()=> console.log(`${port} chi tinglanmoqda`))
