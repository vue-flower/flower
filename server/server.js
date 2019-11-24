let express = require('express')

let flower = require('./datas/flower')
let cities = require('./datas/cities')
let cake = require('./datas/cake')

let app = new express()
app.use(express.urlencoded({extended:true}))

app.get('/login',(req,res) => {})

app.get('/flowerList',(req,res) => {
  res.send(flower)
})

app.get('/cakeList',(req,res) => {
  res.send(cake)
})

//返回所有省份信息
app.get('/get_all_province',(req,res) => {
      // let result =  await citiesModel.find({level:1},{name:1,province:1,_id:0})
  let result = cities.filter((item) => {
    return item.level === 1
  })
  res.send({state:1,data:result})
})

//根据省份的编码，返回该省下的所有市的信息
app.post('/get_cities_by_province',(req,res)=>{
  let {province} = req.body
  if(province){
    let result = cities.filter((item) => {
      return item.level === 2 && item.province === province
    })
    res.send({state:1,data:result})
  }else{
    res.send({state:0,err:'请求出错了'})
  }
})

//根据省份、市编码，返回某省下某市下的所有区县信息
app.post('/get_counties_by_pro_and_city',async(req,res)=>{
  let {province,city} = req.body
  console.log(province,city)
  if(province && city){
    let result = cities.filter((item) => {
      return item.level === 3 && item.province === province && item.city === city
    })
    res.send({state:1,data:result})
  }else{
    res.send({state:0,err:'请求出错了'})
  }
})



app.listen('3000',() => {
  console.log('成功')
})