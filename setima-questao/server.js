const express = require('express')
const app = express()
const data = require('./data/info.json') 

app.get('/categories', (req, res) => {
  res.send(data)
})
 
app.listen(process.env.PORT || 5000,()=>{ 
  console.log('SERVIDOR ON')
});