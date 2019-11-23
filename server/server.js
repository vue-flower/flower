let express = require('express')

let flower = require('./datas/flower')
let floor = require('./datas/floor')
let limit = require('./datas/limit')
let app = new express()

app.get('/login',(req,res) => {})

// let flower = require('./datas/flower')
app.get('/flowerList',(req,res) => {
  res.send(flower)
})
// let floor = require('./datas/floor')
app.get('/floor',(req,res) => {
  res.send(floor)
})
app.get('/limit',(req,res) => {
  console.log(111)
  res.send(limit)
})


app.listen('3000',() => {
  console.log('成功')
})