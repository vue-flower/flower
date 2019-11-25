let express = require('express')

let details = require('./datas/details.json')
let app = new express()



// let flower = require('./datas/flower')

app.get('/details',(req,res) => {
  res.send(details)
})


app.listen('3000',() => {
  console.log('成功')
})