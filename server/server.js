let express = require('express')

// let flower = require('./datas/flower')
let yongshenghua = require('./datas/flower')
let app = new express()

app.get('/login',(req,res) => {})

// let flower = require('./datas/flower')
app.get('/flowerList',(req,res) => {

  res.send(flower)
})


app.get('/yongshenghua',(req,res) => {
  console.log(111)

  res.send(yongshenghua)
})



app.listen('3000',() => {
  console.log('成功')
})