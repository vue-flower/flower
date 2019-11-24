let express = require('express')

let flower = require('./datas/flower')
let app = new express()

app.get('/login',(req,res) => {})

// let flower = require('./datas/flower')
app.get('/flowerList',(req,res) => {
  res.send()
})


app.listen('3000',() => {
  console.log('成功')
})