let express = require('express')

let flower = require('./datas/flower')
let floor = require('./datas/floor')
let limit = require('./datas/limit')
let app = new express()

app.use(express.urlencoded({extended:true}))
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
app.post('/login',(req,res) => {
  let obj = {username:'atguigu0620',pwd:'atguigu0620'}
  console.log(1111)
  let {username,pwd} = req.body 
  console.log( req.body)
  console.log(username,pwd)
  if (obj.username=== username && obj.pwd ===pwd) {
    res.send({status:0,data:{token:'jdsfghjikasdfghiadyfuisdafhjasdfgyuasdfg'}})
  }else{
    res.send({status:1,data:{msg:'error'}})
  }


})


app.listen('3000',() => {
  console.log('成功')
})